<template>
  <div id="app" class="" v-bind:class="{'greyscale':!connectionStatus}">
    <div class="footer" v-if="!connectionStatus">
      <p>No Internet Connection</p>
    </div>
    <div class="wrapper col-12 col-md-8 p-0" style="margin:0 auto">
        <router-view></router-view>
    </div>
    <bottomNavbar/>
  </div>
</template>

<script>
import bottomNavbar from './components/bottom-navbar.vue'

export default {
  name: 'App',
  components: {
      bottomNavbar
  },
  beforeCreate(){
    this.connectionStatus
  },
  methods:{
    connectionStatus(){
      return window.navigator.onLine
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css?family=Baloo+Thambi+2&display=swap');

#app {
  /* font-family: 'Source Sans Pro', sans-serif; */
  font-family: 'Baloo Thambi 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper{
  margin-bottom: 5rem!important;
}
.greyscale{
  -moz-filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  filter: gray; /* IE6-9 */
  filter: grayscale(100%);
}
.footer {
  width: 100%;
  background-color: gray;
  color: white;
  text-align: center;
}
.connectionStatus{
  background-color: rgb(155, 152, 152);
  color:white
}
</style>
