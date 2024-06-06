<script>

import { formalShirtAndPant }         from './constants/outfitCfgs/formalShirtAndPant.js'
import { createOutfitCanvasRenderer } from './vendor/canvas-outfit-renderer/index.js'

export default {
	name: 'App',

	created() {
		this.outfitCfg = formalShirtAndPant
		this.outfitCanvasRenderer = null
	},

	data: () => ({
		ready: false,
		loading: false,
		selectedGroupKey: 'shirt',
		groupTextureMap: {
			shirt: {
				textureName: '',
				textureProperties: {
					scale: 1
				}
			},
			pant: {
				textureName: '',
				textureProperties: {
					scale: 1
				}
			}
		},
	}),

	computed: {
		groupsTexturesEnum() {
			return Object.entries(this.outfitCfg.groups).map(([key, groupCfg]) => ({
				label: groupCfg.name,
				value: key,
				textures: Object.entries(groupCfg.availableTextures).map(([key, textureCfg]) => ({
					label: textureCfg.name,
					value: key,
					thumbnailSrcPath: textureCfg.srcPath
				}))
			}))
		}
	},

	mounted() {
		// this.ready = true
		setTimeout(async () => {
			const rootEl = this.$refs.rootEl.$el
			this.ready = false
			this.outfitCanvasRenderer = await createOutfitCanvasRenderer(
				this.outfitCfg,
				rootEl
			)
			this.ready = true
		}, 1000)
	},

	watch: {
		groupTextureMap: {
			async handler(newGroupTextureMap) {
				if (!this.outfitCanvasRenderer) return
				this.loading = true
				await this.outfitCanvasRenderer.draw(newGroupTextureMap)
				this.loading = false
			},
			deep: true
		},
	},

	methods: {
		isTextureItemSelected(groupKey, textureKey) {
			return this.groupTextureMap[groupKey].textureName === textureKey
		},

		isBaseTextureSelected(groupKey) {
			return this.groupTextureMap[groupKey].textureName === ''
		},

		handleTextureSelect(groupKey, textureKey) {
			this.groupTextureMap[groupKey].textureName = textureKey
		},

		handleBaseTextureSelect(groupKey) {
			this.groupTextureMap[groupKey].textureName = ''
		},

		handleSliderMoved(value, groupKey) {
			this.groupTextureMap[groupKey].textureProperties.scale = value
		}
	}
}

</script>

<template>
	<v-layout>
		<v-overlay
			:model-value="!ready"
			persistent
			opacity="1"
			class="align-center justify-center"
		>
			<v-progress-circular
				indeterminate
				color="primary"
				size="64"
			></v-progress-circular>
		</v-overlay>

		<v-navigation-drawer
			elevation="7"
			class="pr-4"
			width="320"
		>
			<div class="text-h5 pa-4">Customize</div>
			<v-row
				no-gutters
			>
				<v-col cols="3">
					<v-tabs
						height="80"
						v-model="selectedGroupKey"
						direction="vertical"
						stacked
					>
						<v-tab
							v-for="groupItem in groupsTexturesEnum"
							:key="groupItem.value"
							:value="groupItem.value"
							:text="groupItem.label"
							prepend-icon="mdi-tshirt-crew"
						>
						</v-tab>
					</v-tabs>
				</v-col>
				<v-col>
					<v-tabs-window
						v-model="selectedGroupKey"
						direction="vertical"
						class="px-4"
					>
						<v-tabs-window-item
							v-for="groupItem in groupsTexturesEnum"
							:key="groupItem.value"
							:value="groupItem.value"
						>
							<v-row>
								<v-col
									v-for="textureItem in groupItem.textures"
									:key="textureItem.value"
									cols="6"
									class="d-flex justify-center align-center"
								>
									<v-btn
										:disabled="loading"
										icon
										:color="isTextureItemSelected(groupItem.value, textureItem.value) ? 'primary' : null"
										@click="handleTextureSelect(groupItem.value, textureItem.value)"
									>
										<v-avatar
											:image="textureItem.thumbnailSrcPath"
										></v-avatar>
									</v-btn>
								</v-col>

								<v-col
									cols="12"
								>
									<v-slider
										:model-value="groupTextureMap[groupItem.value].textureProperties.scale"
										@end="handleSliderMoved($event, groupItem.value)"
										:disabled="loading"
										min="0.05"
										max="2"
										thumb-label
										messages="Scale the texture"
									>
									</v-slider>
								</v-col>

								<v-col
									cols="12"
								>
									<v-btn
										block
										:disabled="loading"
										:color="isBaseTextureSelected(groupItem.value) ? 'primary' : null"
										@click="handleBaseTextureSelect(groupItem.value)"
									>
										Base
									</v-btn>
								</v-col>
							</v-row>
						</v-tabs-window-item>
					</v-tabs-window>
				</v-col>
			</v-row>
		</v-navigation-drawer>

		<v-main>
			<v-progress-linear
				indeterminate
				color="primary"
				:active="loading"
			>
			</v-progress-linear>
			<v-container>
				<v-row
					class="h-screen"
					justify="center"
					align="center"
				>
					<v-sheet
						width="419"
						height="702"
						elevation="7"
						class="d-flex align-center justify-center"
						ref="rootEl"
					>
					</v-sheet>
				</v-row>
			</v-container>
		</v-main>
	</v-layout>
</template>

<style scoped>
</style>
