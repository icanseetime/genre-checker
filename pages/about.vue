<template>
	<div>
		<AppHeader />
		<h2>About</h2>
	</div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
export default {
	components: { AppHeader },
	// SEO
	head() {
		return {
			title: 'About || Genre checker ',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'Find out more about the genre checker application',
				},
			],
		}
	},
}
</script>
