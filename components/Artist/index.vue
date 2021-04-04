<template>
	<nuxt-link :to="`artist/${id}`">
		<h2>{{ name }}</h2>
		<img :src="img" :alt="name" />
	</nuxt-link>
</template>

<script>
export default {
	name: 'Artist',
	props: ['name', 'img', 'id']
}
</script>

<style></style>
