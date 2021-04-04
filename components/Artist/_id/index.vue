<template>
	<section id="artistBox">
		{{ $route.params.id }}
		<img
			:src="artist.images[0].url || 'assets/images/no-image.png'"
			:alt="artist.name"
		/>
		<a :href="artist.external_urls.spotify">
			<h2>{{ artist.name }}</h2>
		</a>
		<ul>
			<li v-for="genre in artist.genres[0]" :key="genre"></li>
		</ul>
		<p>
			{{
				artist.genres[0]
					? ''
					: 'This artist does not have any genres connected to them. You can click their name to listen to their music.'
			}}
		</p>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: '{{artist.name}} || Genre checker'
		}
	},
	data() {
		return {
			artist: {}
		}
	},

	// Fetch
	async created() {
		try {
			// Authorize for request
			// TODO: check if this can be put into separate method, for reuse in other components
			const auth = await $axios.get(
				'https://accounts.spotify.com/api/token',
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Authorization:
							'Basic ' +
							btoa(
								`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
							)
					},
					body: 'grant_type=client_credentials'
				}
			)
			console.log(auth)

			this.artist = await $axios.get(
				`https://api.spotify.com/v1/artists/${this.$route.params.id}`,
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + auth.access_token
					}
				}
			)
			console.log(artist)
		} catch (err) {
			console.log(err)
		}
	}
}
</script>

<style>
#artistBox {
	display: none;
	/* After display */
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

#artistBox a {
	color: #b4a0ff;
	text-decoration: none;
	padding: 15px;
}

#artistBox a:hover {
	text-decoration: underline;
}

#artistBox img {
	width: 200px;
	height: 200px;
	-o-object-fit: cover;
	object-fit: cover;
}

#artistBox ul li {
	font-size: 1.2em;
	text-transform: uppercase;
}
</style>
