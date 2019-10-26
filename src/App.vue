<template>
  <v-app id="app">
    <router-view
    id="main"
    />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    /* eslint-env jquery */
  },
  data() {
    return {
      // showSideNav: true,
    };
  },
  methods: {
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*night mode*/
  color: white;
  background-color: black;
}
#main {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  /*night mode*/
  background: black;
}
::-webkit-scrollbar-thumb {
  /*night mode*/
  background: #303030;
  height: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #C8C8C8;
}
@media only screen and (min-width: 991px) {
}
@media only screen and (min-width: 584px) and (max-width: 991px) {
}
@media only screen and (min-width: 204px) and (max-width: 584px) {
}
@media only screen and (max-width: 204px) {
}
</style>
