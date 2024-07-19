<script>
// import textureImg from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/floral-texture.jpg'
import textureImg from '/src/assets/img/outfits/kurta-pyjama/base.png'
import { loadImg } from '/src/vendor/canvas-outfit-renderer/utils'

export default {
	name: 'WrappingPage',
	data: () => ({
		w: 640,
		h: 480,
		// w: 4000,
		// h: 6000,
	}),
	mounted() {
		const canvas = this.$refs.canvas
		const ctx = canvas.getContext("2d")

		this.createBaseImg().then((baseImg) => {
			ctx.drawImage(baseImg, 0, 0, this.w, this.h)

			this.applyEffects(ctx, this.w, this.h, [
				{
					name: 'Warp',
					type: 'warp',
					options: {
						intensity: 200,
						axes: [
							// Vertical axis
							// [this.w/2, 0],
							// [this.w/2, this.h]

							// Horizontal axis
							// [0, this.h/2],
							// [this.w, this.h/2]

							// Inclined axis
							[0, 0],
							[this.w, this.h],
						]
					}
				}
			])
			// ctx.drawImage(baseImg, 0, 0, this.w, this.h)
		})
	},

	methods: {
		async createBaseImg() {
			const { w, h } = this
			const canvas = new OffscreenCanvas(this.w, this.h)
			const ctx = canvas.getContext("2d")

			// const img = await loadImg(textureImg)
			// ctx.drawImage(img, 0, 0, w, h)

			ctx.beginPath()
			ctx.moveTo(this.w, 0)
			ctx.lineTo(0, this.h)
			ctx.closePath()
			ctx.strokeStyle = "#c0f"
			ctx.lineWidth = 100
			ctx.stroke()

			return canvas
		},
		applyEffects(ctx, w, h, effectsCfg) {
			let modifiedImgData = ctx.getImageData(0, 0, w, h)
			for (const effectCfg of effectsCfg) {
				switch (effectCfg.type) {
					case 'warp':
						modifiedImgData = this.applyWarpEffectToImageData(modifiedImgData, effectCfg)
						break;

					default:
						throw new
							Error(`Could not find effect with type "${effectCfg.type}" while applying effect with name "${effectCfg.name}"`)
				}
			}
			ctx.putImageData(modifiedImgData, 0, 0)

			ctx.beginPath()
			const a = effectsCfg[0].options.axes[0]
			const b = effectsCfg[0].options.axes[1]
			ctx.moveTo(a[0], a[1])
			ctx.lineTo(b[0], b[1])
			ctx.closePath()
			ctx.strokeStyle = "#0f0"
			ctx.strokeWidth = 50
			ctx.stroke()
		},
		applyWarpEffectToImageData(imgData, effectCfg) {
			const w = imgData.width
			const h = imgData.height
			const newImgData = new ImageData(w, h)

			const { intensity, axes } = effectCfg.options
			const x1 = axes[0][0]
			const y1 = axes[0][1]
			const x2 = axes[1][0]
			const y2 = axes[1][1]
			const dx = x2 - x1
			const dy = y2 - y1

			let m, A, B, C, W, theta
			if (dx === 0) {
				// Vertical axis
				A = 1
				B = 0
				C = -x1
				W = w
			} else if (dy === 0) {
				// Horizontal axis
				m = 0
				A = 0
				B = 1
				C = -y1
				W = h
			} else {
				// Inclined axis
				m = -dy / dx
				theta = Math.atan(m)
				A = m
				B = -1
				C = y1 - (m * x1)
				W = w * Math.sqrt( 1 + Math.pow(m, 2) )
			}
			const D = Math.sqrt( Math.pow(A,2) + Math.pow(B, 2) )

			for (let x = 0; x < w; x++) {
				for (let y = 0; y < h; y++) {
					let pixelValue
					try {
						pixelValue = this.getPixelValueInImageData(imgData, x, y)
					} catch (err) { throw err }

					const pixelIsEmpty = pixelValue[0] === 0 && pixelValue[1] === 0 && pixelValue[2] === 0
					if (pixelIsEmpty) continue

					const distFromAxis = (A*x + B*y + C) / D
					// const displacement = Math.floor(Math.cos( (Math.PI/2) * distFromAxis/W ) * intensity)
					// const counterDisplacement = displacement === 0 ? 0 : -Math.floor( m / displacement )
					const displacement = Math.cos( (Math.PI/2) * distFromAxis/W ) * intensity

					let newX = x
					let newY = y

					if (dx === 0) {
						// Vertical axis
						newY += Math.floor(displacement)
					} else if (dy === 0) {
						// Horizontal axis
						newX += Math.floor(displacement)
					} else {
						// Inclined axis
						// newX -= counterDisplacement
						// newY += displacement

						newX += Math.floor( displacement * Math.cos(theta) )
						newY += Math.floor( displacement * Math.sin(theta) )
					}

					// if (newX > w) {
					// 	console.log(`newX out of bounds: ${newX}`)
					// }
					//
					// if (newY > h) {
					// 	console.log(`newY out of bounds: ${newY}`)
					// }

					// const newX = x
					// const newY = y + Math.floor(Math.cos( (Math.PI/2) * (1 - 2*x/w) ) * effectCfg.options.intensity)

					try {
						const pixelValue = this.getPixelValueInImageData(imgData, x, y)
						// 	console.log(newX, newY)
						this.setPixelValueInImageData(
							newImgData,
							newX,
							newY,
							pixelValue
						)
					} catch (err) { }
				}
			}

			return newImgData
		},
		getPixelValueInImageData(imgData, x, y) {
			const w = imgData.width
			let i = (y * 4 * w) + (x * 4)
			if (i < 0 || i > imgData.data.length-1) throw new Error(`Can not set pixel value at location: ${x}, ${y}`)
			return {
				r: imgData.data[i],
				g: imgData.data[i+1],
				b: imgData.data[i+2],
				a: imgData.data[i+3]
			}
		},
		setPixelValueInImageData(imgData, x, y, pixelValue) {
			const w = imgData.width
			let i = (y * 4 * w) + (x * 4)
			if (i < 0 || i > imgData.data.length-1) throw new Error(`Can not get pixel value at location: ${x}, ${y}`)
			imgData.data[i] = pixelValue.r
			imgData.data[i+1] = pixelValue.g
			imgData.data[i+2] = pixelValue.b
			imgData.data[i+3] = pixelValue.a
		}
	}
}
</script>

<template>
	<canvas
		:width="w"
		:height="h"
		ref="canvas"
	>
	</canvas>
</template>

<style scoped>
canvas {
	width: 600px;
	height: 900px;
}
</style>