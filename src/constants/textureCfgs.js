// import t1 from "/src/assets/img/textures/1.jpg"
// import t2 from "/src/assets/img/textures/2.jpg"
// import t3 from "/src/assets/img/textures/3.jpg"
// import t4 from "/src/assets/img/textures/4.jpg"
// import t5 from "/src/assets/img/textures/5.jpg"
// import t6 from "/src/assets/img/textures/6.jpg"
// import t7 from "/src/assets/img/textures/7.jpg"
// import t8 from "/src/assets/img/textures/8.jpg"
// import t9 from "/src/assets/img/textures/9.jpg"
// import t10 from "/src/assets/img/textures/10.jpg"
// import t11 from "/src/assets/img/textures/11.jpg"
// import t12 from "/src/assets/img/textures/12.jpg"
// import t13 from "/src/assets/img/textures/13.jpg"
// import t14 from "/src/assets/img/textures/14.jpg"
// import t15 from "/src/assets/img/textures/15.jpg"
// import t16 from "/src/assets/img/textures/16.jpg"
// import t17 from "/src/assets/img/textures/17.jpg"
// import t18 from "/src/assets/img/textures/18.jpg"
// import t19 from "/src/assets/img/textures/19.jpg"
// import t20 from "/src/assets/img/textures/20.jpg"
// import t21 from "/src/assets/img/textures/21.jpg"
// import t22 from "/src/assets/img/textures/22.jpg"
// import t23 from "/src/assets/img/textures/23.webp"
// import t24 from "/src/assets/img/textures/24.jpg"
// import t25 from "/src/assets/img/textures/25.jpg"
// import t26 from "/src/assets/img/textures/26.jpg"
// import t27 from "/src/assets/img/textures/27.jpg"
// import t28 from "/src/assets/img/textures/28.jpg"
// import t29 from "/src/assets/img/textures/29.jpg"
// import t30 from "/src/assets/img/textures/30.jpg"
// import t31 from "/src/assets/img/textures/31.jpg"
// import t32 from "/src/assets/img/textures/32.jpg"
import t33 from "/src/assets/img/textures/33.jpg"
import t34 from "/src/assets/img/textures/34.jpg"
import t35 from "/src/assets/img/textures/35.jpg"
import t36 from "/src/assets/img/textures/36.jpg"
import t37 from "/src/assets/img/textures/37.jpg"
import t38 from "/src/assets/img/textures/38.jpg"
import t39 from "/src/assets/img/textures/39.jpg"
import t40 from "/src/assets/img/textures/40.jpg"
import t41 from "/src/assets/img/textures/41.jpg"
import t42 from "/src/assets/img/textures/42.jpg"
import t43 from "/src/assets/img/textures/43.jpg"
import t44 from "/src/assets/img/textures/44.jpg"
import t45 from "/src/assets/img/textures/45.jpg"
import t46 from "/src/assets/img/textures/46.jpg"
import t47 from "/src/assets/img/textures/47.jpg"
import t48 from "/src/assets/img/textures/48.jpg"
import t49 from "/src/assets/img/textures/49.jpg"
import t50 from "/src/assets/img/textures/50.jpg"
import t51 from "/src/assets/img/textures/51.jpg"
import t52 from "/src/assets/img/textures/52.jpg"
import t53 from "/src/assets/img/textures/53.jpg"
import t54 from "/src/assets/img/textures/54.jpg"
import t55 from "/src/assets/img/textures/55.jpg"
import t56 from "/src/assets/img/textures/56.jpg"
import t57 from "/src/assets/img/textures/57.jpg"
import t58 from "/src/assets/img/textures/58.jpg"

function createTextureCfgs(srcs) {
	return Object.fromEntries(srcs.map((srcPath, i) => [
		`t${i+1}`,
		{
			name: `t${i+1}`,
			srcPath
		}
	]))
}

// export const textureCfgs = createTextureCfgs(
// 	[
		// t1,
		// t2,
		// t3,
		// t4,
		// t5,
		// t6,
		// t7,
		// t8,
		// t9,
		// t10,
		// t11,
		// t12,
		// t13,
		// t14,
		// t15,
		// t16,
		// t17,
		// t18,
		// t19,
		// t20,
		// t21,
		// t22,
		// t23,
		// t24,
		// t25,
		// t26,
		// t27,
		// t28,
		// t29,
		// t30,
		// t31,
		// t32,
		// t33,
		// t33,
		// t34,
		// t35,
		// t36,
		// t37,
		// t38,
		// t39,
		// t40,
		// t41,
		// t42,
		// t43,
		// t44,
		// t45,
		// t46,
		// t47,
		// t48,
		// t49,
		// t50,
		// t51,
		// t52,
		// t53,
		// t54,
		// t55,
		// t56,
		// t57,
		// t58,
	// ]
// )

export const textureCfgsSetA = createTextureCfgs([
	t33,
	t34,
	t35,
	t36,
	t37,
	t38,
	t39,
	t40,
])

export const textureCfgsSetB = createTextureCfgs([
	t41,
	t42,
	t43,
	t44,
	t45,
	t46,
	t47,
	t48,
	t49,
])

export const textureCfgsSetC = createTextureCfgs([
	t50,
	t51,
	t52,
	t53,
	t54,
	t55,
	t56,
	t57,
	t58,
])
