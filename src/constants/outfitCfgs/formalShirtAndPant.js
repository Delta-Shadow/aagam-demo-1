export const formalShirtAndPant = {
	name: 'Formal Shirt and Pant',
	baseImg: {
		w: 3264,
		h: 5463,
		srcPath: '/img/outfits/formal-shirt-and-pant/base.jpg',
		enhancedSrcPath: '/img/outfits/formal-shirt-and-pant/base-levels-adjusted.jpg',
	},
	groups: {
		shirt: {
			name: 'Shirt',
			availableTextures: {
				stars: {
					name: 'Stars',
					srcPath: '/img/outfits/formal-shirt-and-pant/shirt/textures/stars-texture.jpg',
				},
				red: {
					name: 'Red',
					srcPath: '/img/outfits/formal-shirt-and-pant/shirt/textures/red-texture.jpg',
				},
				floral: {
					name: 'Floral',
					srcPath: '/img/outfits/formal-shirt-and-pant/shirt/textures/floral-texture.jpg',
				},
				darkGreen: {
					name: 'Dark Green',
					srcPath: '/img/outfits/formal-shirt-and-pant/shirt/textures/dark-green-texture.jpg',
				},
				blue: {
					name: 'Blue',
					srcPath: '/img/outfits/formal-shirt-and-pant/shirt/textures/blue-texture.jpg',
				},
				blueCrossed: {
					name: 'Blue Crossed',
					srcPath: '/img/outfits/formal-shirt-and-pant/shirt/textures/blue-crossed-texture.jpg',
				},
			},
			textureReplacementLayers: {
				// full: {
				// 	name: 'Full',
				// 	maskSrcPath: '/img/outfits/formal-shirt-and-pant/shirt/masks/full-mask.jpg'
				// },
				cuffs: {
					name: 'Cuffs',
					maskSrcPath: '/img/outfits/formal-shirt-and-pant/shirt/masks/cuff-mask.jpg'
				},
				sleeves: {
					name: 'Sleeves',
					maskSrcPath: '/img/outfits/formal-shirt-and-pant/shirt/masks/sleeves-mask.jpg',
					// tilingOptions: {
					// 	angle: 30
					// }
				},
				collars: {
					name: 'Collars',
					maskSrcPath: '/img/outfits/formal-shirt-and-pant/shirt/masks/collars-mask.jpg'
				},
				centerPatti: {
					name: 'Center patti',
					maskSrcPath: '/img/outfits/formal-shirt-and-pant/shirt/masks/center-patti-mask.jpg'
				},
				pocket: {
					name: 'Pocket',
					maskSrcPath: '/img/outfits/formal-shirt-and-pant/shirt/masks/pocket-mask.jpg'
				},
				mainBody: {
					name: 'Main body',
					maskSrcPath: '/img/outfits/formal-shirt-and-pant/shirt/masks/main-body-mask.jpg',
					// // this is optional
					// tilingOptions: {
					// 	scale: 0.5, // between 0-1. Default is 1
					// 	// angle: 45,  // in degrees. Default 0 degrees
					// 	// overhang: 0.5 // between 0-1. Default is 0.25
					// }
				},
			}
		},
		pant: {
			name: 'Pant',
			availableTextures: {
				darkBlue: {
					name: 'Dark Blue',
					srcPath: '/img/outfits/formal-shirt-and-pant/pant/textures/dark-blue-texture.webp',
				},
				darkGray: {
					name: 'Dark Gray',
					srcPath: '/img/outfits/formal-shirt-and-pant/pant/textures/dark-gray-texture.jpg',
				},
				lightBlue: {
					name: 'Light Blue',
					srcPath: '/img/outfits/formal-shirt-and-pant/pant/textures/light-blue-texture.jpg',
				},
				lightGray: {
					name: 'Light Gray',
					srcPath: '/img/outfits/formal-shirt-and-pant/pant/textures/light-gray-texture.jpg',
				},
			},
			textureReplacementLayers: {
				full: {
					name: 'Full',
					maskSrcPath: '/img/outfits/formal-shirt-and-pant/pant/masks/full-mask.jpg'
				}
			}
		}
	},
}