<template>
	<a onclick="{{id}}">
		<h2>{{ name }}</h2>
		<img src="{{img || '/assets/images/no-image.png'}}" alt="{{name}}" />
	</a>
</template>

<script>
export default {
	name: 'Artist',
	props: ['name', 'img', 'id'],
}
</script>

<style></style>
