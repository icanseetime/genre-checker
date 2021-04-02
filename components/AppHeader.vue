<template>
	<header>
		<!-- <h1 onclick="window.location.reload()">🎶 Genre Checker</h1> -->
		<h1><nuxt-link to="/">🎶 Genre Checker</nuxt-link></h1>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
}
</script>

<style>
header {
	width: 80vw;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}

a {
	text-decoration: none;
	color: var(--text-color);
}

a:hover {
	color: var(--darker-text);
}
</style>
