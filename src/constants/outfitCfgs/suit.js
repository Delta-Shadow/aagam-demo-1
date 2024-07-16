import base         from '/src/assets/img/outfits/suit/base.png'
import enhancedBase from '/src/assets/img/outfits/suit/enhanced-base.png'

import texture1 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/1-texture.jpg"
import texture2 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/2-texture.jpg"
import texture3 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/3-texture.jpg"
import texture4 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/4-texture.jpg"
import texture5 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/5-texture.jpg"
import texture6 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/6-texture.jpg"
import texture7 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/7-texture.jpg"
import texture8 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/8-texture.jpg"
import texture9 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/9-texture.jpg"
import texture10 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/10-texture.jpg"
import texture10_1 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/10-1-texture.jpg"
import texture11 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/11-texture.jpg"
import texture12 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/12-texture.jpg"
import texture13 from "/src/assets/img/outfits/formal-shirt-and-pant/shirt/textures/13-texture.jpg"

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
				ten: {
					name: 'Ten',
					srcPath: texture10
				},
				ten_one: {
					name: 'Ten One',
					srcPath: texture10_1
				},
				eleven: {
					name: 'Eleven',
					srcPath: texture11
				},
				twelve: {
					name: 'Twelve',
					srcPath: texture12
				},
				thirteen: {
					name: 'Thirteen',
					srcPath: texture13
				}
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