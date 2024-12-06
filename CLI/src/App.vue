<template>
	<h2 v-for="(name, index) in names" :key="index">{{ name + ' ' + index }}</h2>
</template>


<script>
	export default {
		name: 'App',
		data() {
			return {
				names: ['john', 'doe', 'michel']
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
