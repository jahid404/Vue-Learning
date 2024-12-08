<template>
  <h2>{{ counter }}</h2>

  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <hr>

  <h1>{{ name }}</h1>
  <button @click="changeName">Change</button>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        counter: 0,
        name: 'Jahid'
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
      changeName() {
        if (this.name != this.name) {
          this.name = 'Umu Pakhi';
        }
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
