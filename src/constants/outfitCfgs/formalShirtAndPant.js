import base         from '/src/assets/img/outfits/formal-shirt-and-pant/base.jpg'
import enhancedBase from '/src/assets/img/outfits/formal-shirt-and-pant/enhanced-base.jpg'

import texture1 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/1-texture.jpg"
import texture2 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/2-texture.jpg"
import texture3 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/3-texture.jpg"
import texture4 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/4-texture.jpg"
import texture5 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/5-texture.jpg"
import texture6 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/6-texture.jpg"
import texture7 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/7-texture.jpg"
import texture8 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/8-texture.jpg"
import texture9 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/9-texture.jpg"

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
				one: {
					name: 'One',
					srcPath: texture1
				},
				two: {
					name: 'Two',
					srcPath: texture2
				},
				three: {
					name: 'Three',
					srcPath: texture3
				},
				four: {
					name: 'Four',
					srcPath: texture4
				},
				five: {
					name: 'Five',
					srcPath: texture5
				},
				six: {
					name: 'Six',
					srcPath: texture6
				},
				seven: {
					name: 'Seven',
					srcPath: texture7
				},
				eight: {
					name: 'Eight',
					srcPath: texture8
				},
				nine: {
					name: 'Nine',
					srcPath: texture9
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