<template>
	<form>
		<label for="searchField">Search for an artist</label>
		<input
			type="text"
			id="searchField"
			name="searchField"
			class="u-full-width"
		/>
		<button type="submit" class="button-primary">Check genre</button>
		<p id="numResults"></p>
	</form>
</template>

<script>
export default {
	name: 'SearchBar'
}
</script>

<style>
form {
	width: 100%;
	display: -ms-grid;
	display: grid;
}

form input {
	color: black;
}
</style>
