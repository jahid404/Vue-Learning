<template>
  <!-- array of string -->
  <h2 v-for="(name, index) in names" :key="index">{{ name + ' ' + index }}</h2>

  <!-- array of object -->
  <ul>
    <li v-for="(name, index) in fullNames" :key="index">
      {{ name.first + ' ' + name.last + ' ' + name.nickname }}
    </li>
  </ul>

  <!-- array of array -->
  <ul>
    <li v-for="(name, index) in bioData" :key="index">
      {{ name.first + ' ' + name.last + ' ' + name.nickname }}
      <ol>
        <li v-for="(color, index) in name.favColor" :key="index">
          Fav: {{ color }}
        </li>
      </ol>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        names: ['john', 'doe', 'michel'],
        fullNames: [
          { first: 'Jahidul', last: 'Islam', nickname: 'Jahid' },
          { first: 'Lutfun', last: 'Naher', nickname: 'Umama' },
          { first: 'Jaowata', last: 'Afnan', nickname: 'Shuvra' },
        ],
        bioData: [
          {
            first: 'Jahidul',
            last: 'Islam',
            favColor: ['white', 'black'],
          },
          {
            first: 'Lutfun',
            last: 'Naher',
            favColor: ['blue', 'black'],
          },
          {
            first: 'Jaowata',
            last: 'Afnan',
            favColor: ['blue', 'white'],
          },
        ],
      };
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
