<template>
	<div>
		<AppHeader />
		<!-- <main> -->
		<SearchBar />
		<!-- </main> -->
	</div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
	components: { AppHeader, SearchBar },
	// SEO
	head() {
		return {
			title: 'Home || Genre checker ',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'Check the genres of your favorite artists on Spotify',
				},
			],
		}
	},
}
</script>
