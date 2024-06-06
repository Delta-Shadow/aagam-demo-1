import base from '/src/assets/img/outfits/formal-shirt-and-pant/base.jpg'
import enhancedBase from '/src/assets/img/outfits/formal-shirt-and-pant/base-levels-adjusted.jpg'

import starsShirtTexture from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/stars-texture.jpg"
import redShirtTexture from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/red-texture.jpg'
import floral from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/floral-texture.jpg'
import darkGreen from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/dark-green-texture.jpg'
import blue from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/blue-texture.jpg'
import blueCrosssed from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/blue-crossed-texture.jpg'

import darkBluePantTexture from '/src/assets/img/outfits/formal-shirt-and-pant/pant/textures/dark-blue-texture.webp'
import darkGrayPantTexture from '/src/assets/img/outfits/formal-shirt-and-pant/pant/textures/dark-gray-texture.jpg'
import lightBluePantTexture from '/src/assets/img/outfits/formal-shirt-and-pant/pant/textures/light-blue-texture.jpg'
import lightGrayPantTexture from '/src/assets/img/outfits/formal-shirt-and-pant/pant/textures/light-gray-texture.jpg'

import fullMask from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/masks/full-mask.jpg'
import cuffMask from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/masks/cuff-mask.jpg'
import sleeveMask from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/masks/sleeves-mask.jpg'
import collarMask from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/masks/collars-mask.jpg'
import centerPattiMask from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/masks/center-patti-mask.jpg'
import pocketMask from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/masks/pocket-mask.jpg'
import mainBodyMask from '/src/assets/img/outfits/formal-shirt-and-pant/shirt/masks/main-body-mask.jpg'
import fullPantMask from '/src/assets/img/outfits/formal-shirt-and-pant/pant/masks/full-mask.jpg'


export const formalShirtAndPant = {
	name: 'Formal Shirt and Pant',
	baseImg: {
		w: 3264,
		h: 5463,
		srcPath: base,
		enhancedSrcPath: enhancedBase
	},
	groups: {
		shirt: {
			name: 'Shirt',
			availableTextures: {
				stars: {
					name: 'Stars',
					srcPath: starsShirtTexture
				},
				red: {
					name: 'Red',
					srcPath: redShirtTexture
				},
				floral: {
					name: 'Floral',
					srcPath: floral
				},
				darkGreen: {
					name: 'Dark Green',
					srcPath: darkGreen
				},
				blue: {
					name: 'Blue',
					srcPath: blue
				},
				blueCrossed: {
					name: 'Blue Crossed',
					srcPath: blueCrosssed
				},
			},
			textureReplacementLayers: {
				// full: {
				// 	name: 'Full',
				// 	maskSrcPath: fullMask,
				// },
				cuffs: {
					name: 'Cuffs',
					maskSrcPath: cuffMask
				},
				sleeves: {
					name: 'Sleeves',
					maskSrcPath: sleeveMask,
					tilingOptions: {
						angle: 30
					}
				},
				collars: {
					name: 'Collars',
					maskSrcPath: collarMask
				},
				centerPatti: {
					name: 'Center patti',
					maskSrcPath: centerPattiMask
				},
				pocket: {
					name: 'Pocket',
					maskSrcPath: pocketMask
				},
				mainBody: {
					name: 'Main body',
					maskSrcPath: mainBodyMask
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