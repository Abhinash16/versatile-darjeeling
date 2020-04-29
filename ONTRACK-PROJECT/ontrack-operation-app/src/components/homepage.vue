<template>
  <div id="app">
    <div class="col-md-12 col-12 p-0" style="margin:0 auto;">
        <homepagecontent/>
        <newbooking/>
    </div>
  </div>
</template>

<script>
import homepagecontent from '../components/homepage-content.vue'
import newbooking from '../components/newBookings.vue'
export default {
  name: 'App',
  data(){
     return{
     }
  },
  components: {
    homepagecontent,
    newbooking,
  },
  created(){
    window.scrollTo(0,0);
    },
  methods: {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
#app {
  /* font-family: 'Source Sans Pro', sans-serif; */
  font-family: 'Baloo Thambi 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
