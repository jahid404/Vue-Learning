<template>
	<h2 v-if="num === 0">Zero</h2>
	<h2 v-else>Non Zero</h2>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				num: 1
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
