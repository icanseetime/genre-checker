export default {
	css: [
		'~/assets/css/normalize',
		'~/assets/css/skeleton',
		'~/assets/css/style',
	],
	head: {
		title: 'Genre checker',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Check the genres of your favorite artists on Spotify',
			},
			{
				hid: 'author',
				name: 'author',
				content: 'Ida M. R. Gjeitsund',
			},
			{
				hid: 'theme-color',
				name: 'theme-color',
				content: '#735bc1',
			},
		],
		link: [
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: '//fonts.googleapis.com/css?family=Raleway:400,300,600',
			},
			{
				rel: 'icon',
				href:
					'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎶</text></svg>',
			},
		],
	},
	modules: ['@nuxtjs/axios'],
}
