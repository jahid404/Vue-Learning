<template>
  <h2>{{ add() }}</h2>
  <h2>{{ multiply(4369851) }}</h2>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        baseMultiplier: 3.1416,
      };
    },
    methods: {
      add() {
        return 2 + 3 + 5;
      },
      multiply(num){
        return num * this.baseMultiplier;
      }
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
