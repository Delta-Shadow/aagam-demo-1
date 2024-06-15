import base         from '/src/assets/img/outfits/suit/base.png'
import enhancedBase from '/src/assets/img/outfits/suit/enhanced-base.png'

import darkGreen from '/src/assets/img/outfits/suit/vest/textures/dark-green-texture.jpg'
import blue from '/src/assets/img/outfits/suit/vest/textures/blue-texture.jpg'
import redShirtTexture from '/src/assets/img/outfits/suit/vest/textures/red-texture.jpg'

import starsShirtTexture from "/src/assets/img/outfits/suit/shirt/textures/stars-texture.jpg"
import blueCrosssed from '/src/assets/img/outfits/suit/shirt/textures/blue-crossed-texture.jpg'
import floral from '/src/assets/img/outfits/suit/shirt/textures/floral-texture.jpg'

import darkBluePantTexture from '/src/assets/img/outfits/suit/pant/textures/dark-blue-texture.webp'
import darkGrayPantTexture from '/src/assets/img/outfits/suit/pant/textures/dark-gray-texture.jpg'
import lightBluePantTexture from '/src/assets/img/outfits/suit/pant/textures/light-blue-texture.jpg'
import lightGrayPantTexture from '/src/assets/img/outfits/suit/pant/textures/light-gray-texture.jpg'

import shirtMask from '/src/assets/img/outfits/suit/shirt/masks/Shirt mask.png'
import armsMask from '/src/assets/img/outfits/suit/vest/masks/Suit Arms Mask.png'
import mainMask from '/src/assets/img/outfits/suit/vest/masks/SUIT Vest Mask .png'
import fullPantMask from '/src/assets/img/outfits/suit/pant/masks/pant-mask.png'

export const suit = {
	name: 'Suit',
	baseImg: {
		w: 4000,
		h: 6000,
		srcPath: base,
		enhancedSrcPath: enhancedBase
	},
	groups: {
		vest: {
			name: 'Vest',
			availableTextures: {
				red: {
					name: 'Red',
					srcPath: redShirtTexture
				},
				darkGreen: {
					name: 'Dark Green',
					srcPath: darkGreen
				},
				blue: {
					name: 'Blue',
					srcPath: blue
				},
			},
			textureReplacementLayers: {
				arms: {
					name: 'Arms',
					maskSrcPath: armsMask
				},
				main: {
					name: 'Main',
					maskSrcPath: mainMask,
				},
			}
		},
		shirt: {
			name: 'Shirt',
			availableTextures: {
				stars: {
					name: 'Stars',
					srcPath: starsShirtTexture
				},
				floral: {
					name: 'Floral',
					srcPath: floral
				},
				blueCrossed: {
					name: 'Blue Crossed',
					srcPath: blueCrosssed
				},
			},
			textureReplacementLayers: {
				main: {
					name: 'Main',
					maskSrcPath: shirtMask
				},
			}
		},
		pant: {
			name: 'Pant',
			availableTextures: {
				darkBlue: {
					name: 'Dark Blue',
					srcPath: darkBluePantTexture
				},
				darkGray: {
					name: 'Dark Gray',
					srcPath: darkGrayPantTexture
				},
				lightBlue: {
					name: 'Light Blue',
					srcPath: lightBluePantTexture
				},
				lightGray: {
					name: 'Light Gray',
					srcPath: lightGrayPantTexture
				},
			},
			textureReplacementLayers: {
				full: {
					name: 'Full',
					maskSrcPath: fullPantMask
				}
			}
		}
	},
}