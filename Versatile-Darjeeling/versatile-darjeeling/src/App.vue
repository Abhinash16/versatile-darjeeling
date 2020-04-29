<template>
  <div id="app">
    <div class="top-nav ol-12 col-md-12 m-0 p-0">
         <NavBar />
    </div>
    <div class="col-md-12 m-0 p-0">
      <router-view></router-view>
    </div>
    <div class="col-md-12 m-0 p-0">
      <footers/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import footers from './components/vs-footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    footers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.top-nav{
    z-index: 9999999;
}
</style>
