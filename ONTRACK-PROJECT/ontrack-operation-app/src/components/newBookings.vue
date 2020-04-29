<template>
    <div class="col-md-12 col-12 mt-3 mb-5">
        <div class="col-12 col-md-6 text-left p-0 d-flex justify-content-between button-container">
           <button class="py-1 text-left ontrack-button-left" v-on:click="changeTab(0)" v-bind:class="{'active':currentTab == 0}">Self Pickup ({{selfPickup.length}})</button>
           <button class="py-1 text-left ontrack-button-right" v-on:click="changeTab(1)" v-bind:class="{'active':currentTab == 1}">Delivery ({{delivery.length}})</button>
            <button class="button button5" v-on:click="refresh">
                 <img src="../assets/refresh.svg" width="15px" alt="">
            </button>
        </div>
        <div class="col-md-12 mt-3 m-0 p-0">
            <div class="card mb-3" v-on:click="bookingDetail(data.bookingId)" v-for="(data, index) in datas" :key="index">
                <div class="d-flex justify-content-between m-0 p-0">
                    <div class="p-2 text-left">
                        <p class="labels"><strong>BOOKING ID</strong></p>
                        <p>{{data.bookingId}}</p>
                    </div>
                    <div class="p-2 text-left">
                        <p class="labels"><strong>CUSTOMER NAME</strong></p>
                        <p>{{data.customerName}}</p>
                    </div>
                    <img src="../assets/arrow.svg" width="20px" alt="" class="mr-2">
                </div>
            </div>
            <div class="loading-dots mt-5" v-if="loading">
            <h1 class="d">Loading</h1>
            <h1 class="dot one">.</h1><h1 class="dot two">.</h1><h1 class="dot three">.</h1>
            </div>
            <!-- <div class="card mb-3" v-on:click="bookingDetail">
                <div class="d-flex justify-content-between m-0 p-0">
                    <div class="p-2 text-left">
                        <p class="labels"><strong>BOOKING ID</strong></p>
                        <p>BOOK1789</p>
                    </div>
                    <div class="p-2 text-left">
                        <p class="labels"><strong>CUSTOMER NAME</strong></p>
                        <p>Ramesh Kulkarni</p>
                    </div>
                    <img src="../assets/arrow.svg" width="20px" alt="" class="mr-2">
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            currentTab : 0
        }
    },
    created(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
            });
        this.$store.dispatch('get_new_bookings')
    },
    methods:{
        refresh(){
        this.$store.dispatch('get_new_bookings')
        },
        changeTab(tab){
            this.currentTab = tab
        },
        bookingDetail(id){
            this.$router.push('/bookingdetails/'+ id)
        }
    },
    computed:{
        message(){
            return this.$store.state.message
        },
        loading(){
            return this.$store.state.loading_api
        },
        newBookings(){
            return this.$store.state.new_bookings
        },
        status(){
            return this.currentTab
        },
        datas(){
             return this.newBookings.filter(x=>{
                return x.deliveryType == this.status
            })
        },
        selfPickup(){
           return this.newBookings.filter(x=>{
                return x.deliveryType == 0
            })
        },
        delivery(){
            return this.newBookings.filter(x=>{
                return x.deliveryType == 1
            })
        }
    }
}
</script>
<style scoped>
.button{
    background-color: rgb(240, 240, 240, 0.4);
    border: none;
    color: white;
    padding: 0px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 0px 0px;
    outline: none
}
.button5 {border-radius: 50%;}

.button:hover{
      background-color: #F0F0F0;
      outline: none
}
.ontrack-button-right{
    /* border-radius: 0px 5px 5px 0px; */
    width: 50%;
    border: 1px solid #5545CA;
    background-color: transparent;
    outline: none;
    border:none
    }
    .ontrack-button-left{
    /* border-radius: 5px 0px 0px 5px; */
    width: 50%;
    border: 1px solid #5545CA;
    background-color: transparent;
    outline: none;
        border:none

    }
.active{
    /* background-color: #5545CA; */
    /* border-bottom: 3px solid rgb(196, 45, 45); */
    /* color: white */
}
.active:after {
    display:block;
    clear:both;
    content : "";
    position: relative;
    left    : 0;
    bottom  : 0;
    max-width:250px;
    height  : 5px;
    width   : 50%;  /* or 100px */
    border-bottom:3px solid rgb(196, 45, 45);;
    padding:1px 0px;
    justify-content: left
}

.labels{
    color: gray;
    font-size: 13px;
}
.card{
    cursor:pointer;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.loading-dots {
  text-align: left;
  z-index: 5;
  color: rgb(196, 45, 45)
}
.loading-dots .d {
    display: inline;
    margin-left: 0.2em;
    margin-right: 0.2em;
    top: -1em;
    font-size: 1.5em;
}
.loading-dots .dot {
    display: inline;
    margin-left: 0.2em;
    margin-right: 0.2em;
    top: -1em;
    font-size: 1.5em;
    opacity: 0;
    animation: showHideDot 2.5s ease-in-out infinite;
}
    .loading-dots .dot.one { animation-delay: 0.2s; }
    .loading-dots .dot.two { animation-delay: 0.4s; }
    .loading-dots .dot.three { animation-delay: 0.6s; }


@keyframes showHideDot {
  0% { opacity: 0; }
  50% { opacity: 1; }
  60% { opacity: 1; }
  100% { opacity: 0; }
}
</style>