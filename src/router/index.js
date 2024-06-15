import { createWebHistory, createRouter } from 'vue-router'

import CustomizeOutfitPage from '/src/pages/CustomizeOutfitPage.vue'

const routes = [
	{
		path: '/',
		redirect: {
			name: 'customizeOutfitRoute',
			params: {
				outfitKey: 'formalShirtAndPant'
			}
		}
	},
	{
		path: '/outfits/:outfitKey/customize',
		name: 'customizeOutfitRoute',
		component: CustomizeOutfitPage
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router