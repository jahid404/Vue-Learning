<template>
  <h2>{{ counter }}</h2>

  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        counter: 0
      };
    },
    methods: {
      increment() {
        this.counter++;
      },
      decrement() {
        if (this.counter > 0) {
          this.counter--;
        }
      },
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
