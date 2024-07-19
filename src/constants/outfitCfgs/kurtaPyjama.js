import base         from '/src/assets/img/outfits/kurta-pyjama/base.png'
import enhancedBase from '/src/assets/img/outfits/kurta-pyjama/enhanced-base.png'

import centerPattiMask from '/src/assets/img/outfits/kurta-pyjama/kurta/masks/kurta collar and center patti mask.png'
import leftArmMask from '/src/assets/img/outfits/kurta-pyjama/kurta/masks/kurta pyajama arm mask.png'
import cuffsMask from '/src/assets/img/outfits/kurta-pyjama/kurta/masks/kurta pyajama cuffs mask.png'
import rightArmMask from '/src/assets/img/outfits/kurta-pyjama/kurta/masks/kurta pyajama right arm mask.png'
import vestMask from '/src/assets/img/outfits/kurta-pyjama/kurta/masks/Kurta vest mask.png'
import fullPyjamaMask from '/src/assets/img/outfits/kurta-pyjama/pyjama/masks/full-mask.png'
import { textureCfgs } from '/src/constants/textureCfgs.js'

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
			availableTextures: textureCfgs,
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
			availableTextures: textureCfgs,
			textureReplacementLayers: {
				full: {
					name: 'Full',
					maskSrcPath: fullPyjamaMask
				}
			}
		}
	},
}