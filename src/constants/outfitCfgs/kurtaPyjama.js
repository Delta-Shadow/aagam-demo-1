import base         from '/src/assets/img/outfits/kurta-pyjama/base.png'
import enhancedBase from '/src/assets/img/outfits/kurta-pyjama/enhanced-base.png'

import starsKurtaTexture from "/src/assets/img/outfits/kurta-pyjama/kurta/textures/stars-texture.jpg"
import redKurtaTexture from '/src/assets/img/outfits/kurta-pyjama/kurta/textures/red-texture.jpg'
import floral from '/src/assets/img/outfits/kurta-pyjama/kurta/textures/floral-texture.jpg'
import darkGreen from '/src/assets/img/outfits/kurta-pyjama/kurta/textures/dark-green-texture.jpg'
import blue from '/src/assets/img/outfits/kurta-pyjama/kurta/textures/blue-texture.jpg'
import blueCrosssed from '/src/assets/img/outfits/kurta-pyjama/kurta/textures/blue-crossed-texture.jpg'

import darkBluePyjamaTexture from '/src/assets/img/outfits/kurta-pyjama/pyjama/textures/dark-blue-texture.webp'
import darkGrayPyjamaTexture from '/src/assets/img/outfits/kurta-pyjama/pyjama/textures/dark-gray-texture.jpg'
import lightBluePyjamaTexture from '/src/assets/img/outfits/kurta-pyjama/pyjama/textures/light-blue-texture.jpg'
import lightGrayPyjamaTexture from '/src/assets/img/outfits/kurta-pyjama/pyjama/textures/light-gray-texture.jpg'

import centerPattiMask from '/src/assets/img/outfits/kurta-pyjama/kurta/masks/kurta collar and center patti mask.png'
import leftArmMask from '/src/assets/img/outfits/kurta-pyjama/kurta/masks/kurta pyajama arm mask.png'
import cuffsMask from '/src/assets/img/outfits/kurta-pyjama/kurta/masks/kurta pyajama cuffs mask.png'
import rightArmMask from '/src/assets/img/outfits/kurta-pyjama/kurta/masks/kurta pyajama right arm mask.png'
import vestMask from '/src/assets/img/outfits/kurta-pyjama/kurta/masks/Kurta vest mask.png'
import fullPyjamaMask from '/src/assets/img/outfits/kurta-pyjama/pyjama/masks/full-mask.png'


export const kurtaPyjama = {
	name: 'Kurta',
	baseImg: {
		w: 4000,
		h: 6000,
		srcPath: base,
		enhancedSrcPath: enhancedBase
	},
	groups: {
		kurta: {
			name: 'Kurta',
			availableTextures: {
				stars: {
					name: 'Stars',
					srcPath: starsKurtaTexture
				},
				red: {
					name: 'Red',
					srcPath: redKurtaTexture
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
				cuffs: {
					name: 'Cuffs',
					maskSrcPath: cuffsMask
				},
				leftArm: {
					name: 'Left Arm',
					maskSrcPath: leftArmMask,
					tilingOptions: {
						angle: 30
					}
				},
				rightArm: {
					name: 'Right Arm',
					maskSrcPath: rightArmMask,
					tilingOptions: {
						angle: 150
					}
				},
				centerPatti: {
					name: 'Center patti',
					maskSrcPath: centerPattiMask
				},
				mainBody: {
					name: 'Mask',
					maskSrcPath: vestMask
				},
			}
		},
		pyjama: {
			name: 'Pyjama',
			availableTextures: {
				darkBlue: {
					name: 'Dark Blue',
					srcPath: darkBluePyjamaTexture
				},
				darkGray: {
					name: 'Dark Gray',
					srcPath: darkGrayPyjamaTexture
				},
				lightBlue: {
					name: 'Light Blue',
					srcPath: lightBluePyjamaTexture
				},
				lightGray: {
					name: 'Light Gray',
					srcPath: lightGrayPyjamaTexture
				},
			},
			textureReplacementLayers: {
				full: {
					name: 'Full',
					maskSrcPath: fullPyjamaMask
				}
			}
		}
	},
}