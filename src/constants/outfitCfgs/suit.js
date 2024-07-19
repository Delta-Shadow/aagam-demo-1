import base         from '/src/assets/img/outfits/suit/base.png'
import enhancedBase from '/src/assets/img/outfits/suit/enhanced-base.png'

import shirtMask from '/src/assets/img/outfits/suit/shirt/masks/Shirt mask.png'
import armsMask from '/src/assets/img/outfits/suit/vest/masks/Suit Arms Mask.png'
import mainMask from '/src/assets/img/outfits/suit/vest/masks/SUIT Vest Mask .png'
import fullPantMask from '/src/assets/img/outfits/suit/pant/masks/pant-mask.png'
import { textureCfgs } from '/src/constants/textureCfgs.js'

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
			availableTextures: textureCfgs,
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
			availableTextures: textureCfgs,
			textureReplacementLayers: {
				main: {
					name: 'Main',
					maskSrcPath: shirtMask
				},
			}
		},
		pant: {
			name: 'Pant',
			availableTextures: textureCfgs,
			textureReplacementLayers: {
				full: {
					name: 'Full',
					maskSrcPath: fullPantMask
				}
			}
		}
	},
}