<template>
	<div>
		{{ route.params.name }}
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: '{{route.params.name}} || Genre checker',
		}
	},
}
</script>

<style></style>
