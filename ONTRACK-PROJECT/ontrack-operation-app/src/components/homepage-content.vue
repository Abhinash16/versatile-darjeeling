<template>
<div class="homepage-content">
    <div class="col-md-12 d-flex justify-content-between" >
        <div class="d-flex">
            <img v-on:click="toggle =! toggle" src="../assets/open-menu.svg" width="20px" alt="">
            <p class="pt-3 pl-3">Dashboard</p>
        </div>
        <div class="notification d-flex">
            <img src="../assets/bell3.svg" width="20px" alt="">
            <p class="notify-count pt-3 pl-0">1</p>
        </div>
    </div>
    <div class="col-12 m-0 p-0" v-bind:class="{'overlay-wrapper':!toggle,'overlay-wrapper-open': toggle}" v-on:click="toggle =! toggle">
    <div id="myNav" class="col-9 col-md-2 m-0 p-0" v-bind:class="{'overlay':!toggle,'overlay-open': toggle}" v-on:click="toggle = !toggle">
        <div class="col-md-12 m-0 p-0 pt-3 top-panel">
            <!-- <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> -->
            <div class="top d-flex justify-content-between py-4 px-2">
               <div class="d-flex m-0 p-0">
                    <img class="m-0 p-0 pr-1" src="../assets/profiles.svg" width="55px" alt="">
                    <div class="m-0 p-0 pl-2 text-left">
                        <p class="m-0 p-0 name">{{username || 'Abhinash Sharma'}}</p>
                        <p class="m-0 p-0 email">{{identity}}</p>
                    </div>
               </div>
                <!-- <img v-on:click="toggle = !toggle" src="../assets/cancelw.svg" width="15px" alt=""> -->
            </div>
        </div>
        <div class="overlay-content mt-0 pt-0" v-on:click="toggle = toggle">
            <a href="#" v-on:click="navigate('demo')">
              <img src="../assets/bookings-color.svg" width="27px" class="m-0 py-2 p-0 mr-2">
              Bookings</a>
              <hr class="m-0 p-0">
            <a href="#" v-on:click="navigate('demo')">
              <img src="../assets/serve-color.svg" width="26px" class="m-0 py-2 p-0 mr-2">             
              Services</a>
              <hr class="m-0 p-0">
            <a href="#" v-on:click="navigate('demo')">
              <img src="../assets/vehicle.svg" width="27px" class="m-0 py-2 p-0 mr-2">             
              Vehicles</a>
              <hr class="m-0 p-0">
            <!-- <a href="#" v-on:click="navigate('demo')">Stats</a> -->
            <a href="#" v-on:click="logout">
              <img src="../assets/logout1.svg" width="26px" class="m-0 py-2 p-0 mr-2">             
              Logout</a>
              <hr class="m-0 p-0">
        </div>
      <div class="col-md-12 text-left">
         <p class="py-4 p-0">{{ timestamp }}</p>
      </div>
    </div>
    </div>
  <div class="row col-12 col-md-12 mt-1 m-0 px-3 p-0 d-flex justify-content-between">
            <div class="card col-ot-6 mb-3">
              <label class="count m-0 p-0 mt-3" for="">{{totalVehicle}}</label>
              <p class="labels m-0 p-0">Total</p>
            </div>
           <div class="card col-ot-6 mb-3">
            <label class="count m-0 p-0 mt-3" for="">{{available}}</label>
            <p class="labels m-0 p-0 mb-3">Available</p>
           </div>
           <div class="card col-ot-6">
            <label class="count m-0 p-0 mt-3" for="">{{booked}}</label>
            <p class="labels m-0 p-0 mb-3">Booked Bikes</p>
           </div>
           <div class="card col-ot-6">
            <label class="count m-0 p-0 mt-3" for="">{{underService}}</label>
            <p class="labels m-0 p-0 mb-3">Under Service</p>
           </div>
  </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            toggle:false,
            timestamp: "",
        }
    },
    created(){
        setInterval(this.getNow, 1000);
        this.$store.dispatch('get_vehicle_count')
    },
    methods:{
        navigate(route){
            this.toggle = false
            alert(route)
        },
        logout(){
            this.$router.push('/login')
        },
        getNow: function() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date +' '+ time;
        this.timestamp = dateTime;
        },
    },
    computed:{
    vehicle_count(){
       return this.$store.state.vehicle_count
    },
    totalVehicle(){
      var count = 0
      for(var i in this.vehicle_count){
        count += this.vehicle_count[i].total
      }
      return count
    },
    available(){
      // var count = 0
      // for(var i in this.vehicle_count){
      //   count += this.vehicle_count[i].available
      // }
      return this.availablilty + this.newBooking
    },
    availablilty(){
      var count = 0
      for(var i in this.vehicle_count){
        count += this.vehicle_count[i].available
      }
      return count
    },
    newBooking(){
    var count = 0
      for(var i in this.vehicle_count){
        count += this.vehicle_count[i].newBooking
      }
      return count
    },
    booked(){
      var count = 0
      for(var i in this.vehicle_count){
        count += this.vehicle_count[i].booked  
      }
      return count
    },
    underService(){
      var count = 0
      for(var i in this.vehicle_count){
        count += this.vehicle_count[i].underService
      }
      return count + this.ongoingUnderservice
    },
    ongoingUnderservice(){
      var count = 0
      for(var i in this.vehicle_count){
        count += this.vehicle_count[i].ongoingUnderservice
      }
      return count
    },
    connectionStatus(){
      return window.navigator.onLine
    },
    username(){
        return this.$store.state.username
    },
    identity(){
         return this.$store.state.id       
    }
  }
}
</script>
<style scoped>

/* @import url('../assets/css/loader.css'); */
.col-ot-6{
    flex: 0 0 50%;
    max-width: 45%;
}
::-webkit-scrollbar {
  display: none;
}
.wrap{
    background-image: linear-gradient(#ffffff,rgb(223, 230, 241,1));
    overflow: scroll
}
.bottom {
    bottom: 0px;
    top: 500px;
}
.labels{
    font-size: 13px
}
.name{
    color:black;
    font-size: 15px;
}
.email{
    color:black;
    font-size: 13px;
}
.sa-color{
    color:#5545CA
}
.top-panel{
     background-color:#F5F7FA
   
}
.notify-count{
    color:gray;
    font-size:12px;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  background-color: rgba(255,255,255);
  overflow-x: hidden;
  transition: 0.1s;
}
.overlay-open {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  background-color: rgba(255,255,255);
  overflow-x: hidden;
  transition: 0.3s;
}
.overlay-wrapper {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0,0,0, 0.7);
  overflow-x: hidden;
}
.overlay-wrapper-open{
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0,0,0, 0.7);
  overflow-x: hidden;
}
.overlay-content {
  position: relative;
  top: 0%;
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
.overlay a, .overlay-open a{
    text-align: left;
    padding: 8px;
  text-decoration: none;
  font-size: 17px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.overlay a:hover, .overlay a:focus,.overlay-open a:hover, .overlay-open a:focus {
  color: #5545CA;
}
.overlay .closebtn,.overlay-open .closebtn {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 40px
}
@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}
</style>