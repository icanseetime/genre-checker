<template>
	<main>
		<SearchBar />
		<Results />
	</main>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import Results from '../components/Results'
export default {
	components: { SearchBar, Results },
	// SEO
	head() {
		return {
			title: 'Home || Genre checker',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'Check the genres of your favorite artists on Spotify'
				}
			]
		}
	}
}
</script>
