<template>
	<!-- binding text -->
	<div>Hello {{ name }}</div>
	<div v-text="para"></div>

	<!-- binding html -->
	<div>{{ htmlText }}</div>
	<data v-html="htmlText"></data>

	<!-- binding attribute -->
	<h2 v-bind:id="headingID">This is h2</h2>
	<button v-bind:disabled="isDisabled_1" onclick="alert('Clicked')">Click me</button>
	<button v-bind:disabled="isDisabled_2" onclick="alert('Clicked')">Click me</button>

	<!-- binding class -->
	<h2 :class="red">This is red</h2>
	<h3 :class="promoted && 'promoted'">{{ para }}</h3>
	<h3 :class="isSoldOut ? 'sold-out' : 'not-sold'">
		{{ isSoldOut ? 'Sold Out' : 'Not Sold' }}
	</h3>
	<h3 :class="[promoted && 'promoted', isSoldOut ? 'sold-out' : 'not-sold']">
		Sold Item
	</h3>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				/* binding text */
				name: 'Vue',
				para: 'This is a sample text',

				/* binding html */
				htmlText: '<b>This is bold text</b>',

				/* binding attribute */
				headingID: 'heading',
				isDisabled_1: true,
				isDisabled_2: false,

				/* binding class */
				red: 'red',
				promoted: true,
				isSoldOut: true,
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

	.red {
		color: red;
	}

	.promoted {
		font-style: italic;
	}

	.sold-out {
		color: red;
		font-style: italic;
	}

	.not-sold {
		color: green;
		font-style: normal;
	}
</style>
