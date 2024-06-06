<script>
import { createOutfitCanvasRenderer} from 'src/vendor/canvas-outfit-renderer/index.js'

export default {
	name: 'Outfit',
	data: () => ({
		ready: false,
		rootEl: null,
		outfitCanvasRenderer: null
	}),
	props: {
		outfitCfg: {
			type: Object,
			required: true
		},
		groupTextureMap: {
			type: Object,
			required: true
		}
	},
	async mounted() {
		this.ready = false
		this.outfitCanvasRenderer = await createOutfitCanvasRenderer(
			this.outfitCfg,
			this.rootEl
		)
		this.ready = true
	},
	watch: {
		async groupTextureMap(newGroupTextureMap) {
			console.log(newGroupTextureMap)
			if (!this.outfitCanvasRenderer) return
			await this.outfitCanvasRenderer.draw(newGroupTextureMap)
		}
	}
}
</script>

<template>
	<v-sheet
		rounded
		elevation="4"
	>
	</v-sheet>

	<p v-if="!ready">Loading</p>

	<div id="container" ref="rootEl"></div>
</template>

<style scoped>
#container {
	width: 100%;
	height: 100%;
}
</style>