//------------------------------------------------------------------------------
//-----------------------------------<  Utils  >--------------------------------
//------------------------------------------------------------------------------

function loadImg(srcPath) {
	return new Promise(resolve => {
		const img = new Image()
		img.addEventListener('load', () => {
			resolve(img)
		})
		img.src = srcPath
	})
}

async function loadMaskImg(srcPath) {
	const img = await loadImg(srcPath)
	return createMaskImgFromGrayscaleImg(img)
}

function createMaskImgFromGrayscaleImg(img) {
	const { width, height } = img
	const { canvas, ctx } = createCanvasInMemory(width, height)
	ctx.drawImage(img,0,0);
	let maskImgData = ctx.getImageData(0,0, width, height);
	let i = 0;
	while(i < maskImgData.data.length) {
		let rgb = maskImgData.data[i++] + maskImgData.data[i++] + maskImgData.data[i++];
		maskImgData.data[i++]  = rgb / 3;
	}
	ctx.putImageData(maskImgData,0,0);
	return canvas
}

function createCanvasInMemory(w = 0, h = 0) {
	const canvas = new OffscreenCanvas(w, h)
	const ctx = canvas.getContext('2d')
	return { canvas, ctx }
}

function createCanvas(w = 0, h = 0) {
	const canvas = document.createElement('canvas')
	canvas.width = w
	canvas.height = h
	const ctx = canvas.getContext('2d')
	return { canvas, ctx }
}

function maximiseWithinBounds(sourceW, sourceH, maxW, maxH) {
	const scale = Math.min(maxW/sourceW, maxH/sourceH)
	const w = sourceW * scale
	const h = sourceH * scale
	return { w, h }
}

function getGroupCfg(outfitCfg, groupName) {
	const groupCfg = outfitCfg.groups[groupName]
	if (!groupCfg) throw new Error(
		`The group "${groupName}" was not found in the config of outfit "${outfitCfg.name}"`
	)
	return groupCfg
}

function getLayerCfg(groupCfg, layerName) {
	const layerCfg = groupCfg.textureReplacementLayers[layerName]
	if (!layerCfg) throw new Error(
		`The layer "${layerName}" was not found in the config of group "${groupCfg.name}"`
	)
	return layerCfg
}

function getTextureCfg(groupCfg, textureName) {
	const textureCfg = groupCfg.availableTextures[textureName]
	if (!textureCfg) throw new Error(
		`The texture "${textureName}" was not found in the config of group "${groupCfg.name}"`
	)
	return textureCfg
}

//------------------------------------------------------------------------------
//---------------------------------<  Main class  >-----------------------------
//------------------------------------------------------------------------------

class CanvasRenderer {
	#rootEl
	#canvas
	#ctx
	#baseW
	#baseH
	#renderQueue
	canvasDimensions

	constructor(baseW, baseH, rootEl) {
		this.#rootEl = rootEl
		this.#baseW = baseW
		this.#baseH = baseH

		// Set up the canvas
		const { w, h } = this.#computeCanvasDimensions()
		const { canvas, ctx } = createCanvas(w, h)
		this.#rootEl.append(canvas)

		window.addEventListener('resize', () => {
			const { w, h } = this.#computeCanvasDimensions()
			this.canvasDimensions = { w, h }
		})

		this.#canvas = canvas
		this.#ctx = ctx
		this.canvasDimensions = { w, h }

		// Initialize an empty render queue
		this.#renderQueue = []

		// Start the loop
		this.#initLoop()
	}

	#computeCanvasDimensions() {
		const { clientWidth, clientHeight } = this.#rootEl
		return maximiseWithinBounds(this.#baseW, this.#baseH, clientWidth, clientHeight)
	}

	#initLoop() {
		window.requestAnimationFrame(() => this.#loop())
	}

	#loop() {
		// Loop again
		this.#initLoop()

		// If there are items in the render queue
		if (this.#renderQueue.length > 0) {
			const renderItem = this.#renderQueue[0]

			// If a transition is not needed for this item
			if (!renderItem.transition) {
				// Draw it
				const { w, h } = this.canvasDimensions
				this.#ctx.drawImage(renderItem.img, 0, 0, w, h)
				// Remove it from the queue
				this.#renderQueue.shift()

				return
			}

			// If transition is complete, remove this item from queue
			if (renderItem.transitionCounter >= 1) this.#renderQueue.shift()
			else {
				// Otherwise, step through its animation
				renderItem.transitionCounter += 0.008

				// Compute properties from transitionCounter
				const { w, h } = this.canvasDimensions
				const opacity = renderItem.transitionCounter
				const intercept = 2 * h * renderItem.transitionCounter * 2

				// Then, draw the item
				this.#ctx.save()
				this.#ctx.beginPath()
				this.#ctx.moveTo(0, 0)
				this.#ctx.lineTo(0, intercept)
				this.#ctx.lineTo(intercept, 0)
				this.#ctx.lineTo(0, 0)
				this.#ctx.clip()
				this.#ctx.globalAlpha = opacity
				this.#ctx.drawImage(renderItem.img, 0, 0, w, h)
				this.#ctx.restore()
			}
		}
	}

	blockTillRenderComplete() {
		return new Promise(resolve => {
			const id = setInterval(() => {
				if (this.#renderQueue.length === 0) {
					clearInterval(id)
					resolve()
				}
			}, 10)
		})
	}

	addToRenderQueue(img, transition = true) {
		const renderItem = {
			img,
			transition,
			transitionCounter: 0
		}
		this.#renderQueue.push(renderItem)
	}
}

class OutfitCanvasRenderer extends CanvasRenderer {
	ready = false
	#outfitCfg
	#assets

	DEFAULT_TILING_OPTIONS = {
		scale: 0.2,
		angle: 0,
		overhang: 0.25,
	}

	constructor(outfitCfg, rootEl) {
		super(outfitCfg.baseImg.w, outfitCfg.baseImg.h, rootEl)
		this.#outfitCfg = outfitCfg
	}

	async init() {
		this.ready = false
		await this.#loadAssets()
		await this.#drawOutfitBaseImg()
		this.ready = true
	}

	async #loadAssets() {
		// Load base images
		const { baseImg } = this.#outfitCfg
		this.#assets = {
			baseImg: await loadImg(baseImg.srcPath),
			enhancedBaseImg: await loadImg(baseImg.enhancedSrcPath)
		}

		// Load assets for each group
		const groupCfgs = this.#outfitCfg.groups
		for (const groupName in groupCfgs) {
			const groupCfg = groupCfgs[groupName]
			this.#assets[groupName] = {}

			const { availableTextures, textureReplacementLayers } = groupCfg

			// Load assets for each texture
			this.#assets[groupName].textures = {}
			for (const textureName in availableTextures) {
				const textureCfg = availableTextures[textureName]
				this.#assets[groupName].textures[textureName] =
					await loadImg(textureCfg.srcPath)
			}

			// Load assets for each layer
			this.#assets[groupName].layers = {}
			for (const layerName in textureReplacementLayers) {
				const layerCfg = textureReplacementLayers[layerName]
				this.#assets[groupName].layers[layerName] = {}

				// Load layer mask
				this.#assets[groupName].layers[layerName].mask =
					await loadMaskImg(layerCfg.maskSrcPath)
			}
		}
	}

	async #drawOutfitBaseImg() {
		this.addToRenderQueue(this.#assets.baseImg)
	}

	async #drawGroupWithReplacedTexture(groupName, textureName, textureProperties) {
		const groupImg = await this.#createGroupImg(groupName, textureName, textureProperties)
		this.addToRenderQueue(groupImg)
	}

	async #eraseGroup(groupName) {
		const groupImg = await this.#createGroupImgWithBaseImg(groupName)
		this.addToRenderQueue(groupImg)
	}

	async #createGroupImg(groupName, textureName, textureProperties) {
		// Get the group config
		const groupCfg = getGroupCfg(this.#outfitCfg, groupName)

		// Create each layer
		const layerImgs = await Promise.all(
			Object.keys(groupCfg.textureReplacementLayers).map(
				layerName => this.#createLayerImg(groupName, layerName, textureName, textureProperties)
			)
		)

		// Create a temporary off-screen canvas for the group
		const { w, h } = this.canvasDimensions
		const { canvas, ctx } = createCanvasInMemory(w, h)

		// Compose all layers
		layerImgs.forEach(layerImg => {
			ctx.drawImage(layerImg, 0, 0, w, h)
		})

		return canvas
	}

	async #createGroupImgWithBaseImg(groupName) {
		// Get the group config
		const groupCfg = getGroupCfg(this.#outfitCfg, groupName)

		// Create each layer
		const layerImgs = await Promise.all(
			Object.keys(groupCfg.textureReplacementLayers).map(
				layerName => this.#createLayerImgWithBaseImg(groupName, layerName)
			)
		)

		// Create a temporary off-screen canvas for the group
		const { w, h } = this.canvasDimensions
		const { canvas, ctx } = createCanvasInMemory(w, h)

		// Compose all layers
		layerImgs.forEach(layerImg => {
			ctx.drawImage(layerImg, 0, 0, w, h)
		})

		return canvas
	}

	async #createLayerImg(groupName, layerName, textureName, textureProperties) {
		const groupCfg = getGroupCfg(this.#outfitCfg, groupName)
		const layerCfg = getLayerCfg(groupCfg, layerName)

		// Create a temporary off-screen canvas for this layer
		const { w, h } = this.canvasDimensions
		const { canvas, ctx } = createCanvasInMemory(w, h)

		// Draw the enhanced base image
		const { enhancedBaseImg } = this.#assets
		ctx.drawImage(enhancedBaseImg, 0, 0, w, h)
		ctx.globalCompositeOperation = 'multiply'

		// Tiling the texture
		const tilingOptions = {
			...this.DEFAULT_TILING_OPTIONS,
			...layerCfg.tilingOptions
		}
		const textureImg = this.#assets[groupName]['textures'][textureName]
		this.#tileTexture(ctx, w, h, textureImg, tilingOptions, textureProperties)

		// Applying a mask
		const maskImg = this.#assets[groupName]['layers'][layerName].mask
		await this.#applyMask(ctx, maskImg, 0, 0, w, h)

		return canvas
	}

	async #createLayerImgWithBaseImg(groupName, layerName) {
		// Create a temporary off-screen canvas for this layer
		const { w, h } = this.canvasDimensions
		const { canvas, ctx } = createCanvasInMemory(w, h)

		// Draw the base image
		const { baseImg } = this.#assets
		ctx.drawImage(baseImg, 0, 0, w, h)
		ctx.globalCompositeOperation = 'multiply'

		// Applying a mask
		const maskImg = this.#assets[groupName]['layers'][layerName].mask
		await this.#applyMask(ctx, maskImg, 0, 0, w, h)

		return canvas
	}

	async #applyMask(ctx, maskImg, x, y, w, h) {
		ctx.save()
		ctx.globalCompositeOperation = 'destination-atop'
		ctx.drawImage(maskImg, x, y, w, h)
		ctx.restore()
	}

	#tileTexture(ctx, w, h, textureImg, tilingOptions, textureProperties) {
		const tW = textureImg.naturalWidth
		const tH = textureImg.naturalHeight

		let tS = tilingOptions.scale
		if (textureProperties.scale) tS *= textureProperties.scale

		const tA = Math.PI * tilingOptions.angle / 180

		const tStartX = -(w / tS) * tilingOptions.overhang
		const tEndX = (w / tS) * (1 + tilingOptions.overhang)
		const tStartY = -(h / tS) * tilingOptions.overhang
		const tEndY = (h / tS) * (1 + tilingOptions.overhang)

		ctx.save()
		ctx.scale(tS, tS)
		ctx.translate(w/(2*tS), h/(2*tS))
		ctx.rotate(tA)
		ctx.translate(-w/(2*tS), -h/(2*tS))
		for (let y = tStartY; y < tEndY; y += tH) {
			for (let x = tStartX; x < tEndX; x += tW) {
				ctx.drawImage(textureImg, x, y, tW, tH)
			}
		}
		ctx.restore()
	}

	async draw(groupTextureMap) {
		const groupNames = Object.keys(groupTextureMap)
		for await (const groupName of groupNames) {
			const { textureName, textureProperties } = groupTextureMap[groupName]
			try {
				if (textureName.trim() === '')
					await this.#eraseGroup(groupName)
				else
					await this.#drawGroupWithReplacedTexture(groupName, textureName, textureProperties)
				await this.blockTillRenderComplete()
			} catch (e) {
				console.error(e)
			}
		}
	}
}

export  async function createOutfitCanvasRenderer(outfitCfg, rootElSelector) {
	const outfitCanvasRenderer = new OutfitCanvasRenderer(outfitCfg, rootElSelector)
	await outfitCanvasRenderer.init()
	return outfitCanvasRenderer
}