/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "../landig-page/public/8f39bbf3-c463-431a-94f0-9e64a2b19e15 1dj.png",
				'footer-texture': "../landig-page/public/8f39bbf3-c463-431a-94f0-9e64a2b19e15 1dj.png",
			  },
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [require("daisyui")],
}
