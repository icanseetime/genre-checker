<template>
	<section id="artistBox"></section>
</template>

<script>
export default {
	name: 'ArtistGenres'
}
</script>

<style>
/* Artist w/ genres-box */
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
}
</style>
