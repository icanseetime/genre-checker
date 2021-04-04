<template>
	<section id="resultBox">
		<p></p>
		<Artist v-for="artist in artists" v-bind:key="artist.id" />
	</section>
</template>

<script>
import Artist from './Artist'

export default {
	name: 'Results',
	components: {
		Artist
	},
	data() {
		return {
			artists: []
		}
	}
}
</script>

<style>
p {
	text-align: center;
}

#resultBox {
	display: -ms-grid;
	display: grid;
	-ms-grid-columns: 1fr 15px 1fr 15px 1fr 15px 1fr 15px 1fr 15px 1fr;
	grid-template-columns: repeat(6, 1fr);
	row-gap: 10px;
	-webkit-column-gap: 15px;
	-moz-column-gap: 15px;
	column-gap: 15px;
}

#resultBox a {
	text-align: center;
	text-decoration: none;
	color: var(--text-color);
	padding: 5px;
}

#resultBox a:hover {
	text-decoration: underline;
}

#resultBox a h2 {
	font-size: 1.5em;
}

#resultBox img {
	width: 200px;
	height: 200px;
	-o-object-fit: cover;
	object-fit: cover;
}

@media screen and (max-width: 1680px) {
	#resultBox {
		grid-template-columns: repeat(5, 1fr);
	}
}

@media screen and (max-width: 1390px) {
	#resultBox {
		grid-template-columns: repeat(4, 1fr);
	}
}

@media screen and (max-width: 1150px) {
	#resultBox {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media screen and (max-width: 850px) {
	#resultBox {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen and (max-width: 550px) {
	#resultBox {
		grid-template-columns: 1fr;
	}

	#resultBox img {
		width: 80vw;
		height: 80vw;
		-o-object-fit: cover;
		object-fit: cover;
	}
}
</style>
