// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"nuxt-swiper",
		"@nuxtjs/seo",
		"@nuxt/icon",
	],
	css: [
		// Thêm file CSS tùy chỉnh của bạn
		"@/assets/styles.css",
	],
	//

	runtimeConfig: {
		public: {
			apiBase: "http://127.0.0.1:8000/api/v1",
		},
	},
});
