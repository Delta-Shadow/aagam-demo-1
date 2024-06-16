import { createCanvas, maximiseWithinBounds } from './utils.js'

export class CanvasRenderer {
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
