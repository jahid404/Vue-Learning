<template>
	<h2 v-if="num === 0">Zero</h2>
	<h2 v-else-if="num > 0">Positive</h2>
	<h2 v-else-if="num < 0">Negative</h2>
	<h2 v-else>NaN</h2>

	<div v-if="display">
		<h2>Jahid</h2>
		<h2>Umama</h2>
		<h2>Shuvra</h2>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				num: 8,
				display: true
			};
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
