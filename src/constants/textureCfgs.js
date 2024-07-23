import t1 from "/src/assets/img/textures/1.jpg"
import t2 from "/src/assets/img/textures/2.jpg"
import t3 from "/src/assets/img/textures/3.jpg"
import t4 from "/src/assets/img/textures/4.jpg"
import t5 from "/src/assets/img/textures/5.jpg"
import t6 from "/src/assets/img/textures/6.jpg"
import t7 from "/src/assets/img/textures/7.jpg"
import t8 from "/src/assets/img/textures/8.jpg"
import t9 from "/src/assets/img/textures/9.jpg"
import t10 from "/src/assets/img/textures/10.jpg"
import t11 from "/src/assets/img/textures/11.jpg"
import t12 from "/src/assets/img/textures/12.jpg"
import t13 from "/src/assets/img/textures/13.jpg"
import t14 from "/src/assets/img/textures/14.jpg"
import t15 from "/src/assets/img/textures/15.jpg"
import t16 from "/src/assets/img/textures/16.jpg"
import t17 from "/src/assets/img/textures/17.jpg"
import t18 from "/src/assets/img/textures/18.jpg"
import t19 from "/src/assets/img/textures/19.jpg"
import t20 from "/src/assets/img/textures/20.jpg"
import t21 from "/src/assets/img/textures/21.jpg"
import t22 from "/src/assets/img/textures/22.jpg"
import t23 from "/src/assets/img/textures/23.webp"
import t24 from "/src/assets/img/textures/24.jpg"
import t25 from "/src/assets/img/textures/25.jpg"
import t26 from "/src/assets/img/textures/26.jpg"
import t27 from "/src/assets/img/textures/27.jpg"
import t28 from "/src/assets/img/textures/28.jpg"
import t29 from "/src/assets/img/textures/29.jpg"
import t30 from "/src/assets/img/textures/30.jpg"
import t31 from "/src/assets/img/textures/31.jpg"
import t32 from "/src/assets/img/textures/32.jpg"
import t33 from "/src/assets/img/textures/33.jpg"

export const textureCfgs = Object.fromEntries(
	[
		t1,
		// t2,
		// t3,
		// t4,
		// t5,
		t6,
		// t7,
		// t8,
		// t9,
		// t10,
		// t11,
		// t12,
		// t13,
		// t14,
		// t15,
		t16,
		t17,
		t18,
		t19,
		t20,
		t21,
		t22,
		// t23,
		// t24,
		// t25,
		// t26,
		t27,
		t28,
		t29,
		t30,
		t31,
		t32,
		t33,
	].map((srcPath, i) => [
		`t${i+1}`,
		{
			name: `t${i+1}`,
			srcPath
		}
	])
)

console.log(textureCfgs)
