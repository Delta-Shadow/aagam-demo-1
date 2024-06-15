<script>

export default {
	name: 'App',
	data: () => ({
		outfitsEnum: [
			{
				key: 'formalShirtAndPant',
				label: 'Formal'
			},
			{
				key: 'kurtaPyjama',
				label: 'Kurta'
			},
			{
				key: 'suit',
				label: 'Suit'
			}
		]
	}),
	methods: {
		createOutfitRoute(key) {
			return {
				name: 'customizeOutfitRoute',
				params: {
					outfitKey: key
				}
			}
		},
		isNavBtnActive(outfitKey) {
			return this.$route.params.outfitKey === outfitKey
		},
		handleNavBtnClicked(outfitKey) {
			this.$router.push({
				name: 'customizeOutfitRoute',
				params: {
					outfitKey
				}
			})
		}
	}
}

</script>

<template>
	<v-layout>
		<v-app-bar>
			<v-app-bar-title>Customize outfits</v-app-bar-title>

			<template #append>
				<v-btn
					v-for="outfitItem in outfitsEnum"
					:key="outfitItem.key"
					:text="outfitItem.label"
					:color="isNavBtnActive(outfitItem.key) ? 'primary' : null"
					@click="handleNavBtnClicked(outfitItem.key)"
				>
				</v-btn>
			</template>
		</v-app-bar>

		<v-main>
			<RouterView :key="$route.fullPath"></RouterView>
		</v-main>
	</v-layout>
</template>

<style scoped>
</style>
