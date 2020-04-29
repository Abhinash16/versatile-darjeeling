<template>
    <div class="booking-details col-md-12 mb-5">
        <div class="col-md-6 col-7 d-flex justify-content-between pl-0 margin">
            <button class="button button5" v-on:click="$router.go(-1)">
                 <img src="../assets/left-arrow-black.svg" width="15px" alt="">
            </button>
            <!-- <img src="../assets/left-arrow-black.svg" width="24px" alt="" class="back-button"> -->
            <p class="pl-3 pt-3">{{paramID}}</p>
        </div>
        <hr class="m-0 p-0">
        <div class="row" v-for="(data, index) in bookingDetails" :key="index">
        <div class="bookingDetail col-12 col-md-6 text-left pt-3">
            <div class="row pt-2">
                <div class="col-md-12 col-12">
                    <p class="m-0 p-0 labels">Model</p>
                    <select class="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-md-12 col-12">
                   <p class="m-0 p-0 labels">Vehicle</p>
                    <select class="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-md-12 col-12">
                    <p class="m-0 p-0 labels">KM Reading</p>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-md-6 col-6">
                    <p class="m-0 p-0 labels">Start Date</p>
                    <input type="date" class="form-control">
                </div>
                <div class="col-md-6 col-6">
                    <p class="m-0 p-0 labels">End Date</p>
                    <input type="date" class="form-control">
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-md-12 col-12">
                    <p class="m-0 p-0 labels">Comment</p>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-md-6 col-6">
                    <p class="m-0 p-0 labels">Front</p>
                    <input type="file" class="form-control">
                </div>
                <div class="col-md-6 col-6">
                    <p class="m-0 p-0 labels">Back</p>
                    <input type="file" class="form-control">
                </div>
            </div>
        </div>
        </div>
        <div class="button-container mt-3 col-12 col-md-6 p-0 pt-3" style="margin: 0 auto">
            <button class="ontrack-button">ASSIGN VEHICLE</button>
        </div>

        <div id="myModal" class="modal p-0" v-if="seeImage">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="col-md-12 col-12 text-left">
                    <!-- <button class="button button5" v-on:click="closeImage"> -->
                        <div class="back pt-3">
                            <img src="../assets/left-arrow-black.svg" v-on:click="closeImage" width="25px" alt="">
                        </div>
                    <!-- </button> -->
                    <div class="image-container col-md-4" style="margin:0 auto">
                        <img :src="image" v-bind:class="{'zoomed': zoomed}" :width="width+'%'" @dblclick="zoom" alt="" class="imagedisplay">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            paramID:'',
            seeImage:false,
            image:'',
            width:100,
            zoomed:false
        }
    },
    created(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
            });
        this.$store.dispatch('get_new_bookings')
        this.paramID = this.$route.params.id
    },
    methods:{
        openImage(url){
            this.seeImage = true
            this.image = url
        },
        closeImage(){
            this.seeImage = false;
            this.width = 100;
            this.zoomed = false
        },
        zoom(){
            if(this.width==100){
                this.width = 200
                this.zoomed = true
            }else{
                this.width = 100
                this.zoomed = false
            }
        }
    },
    computed:{
        bookingDetails(){
            return this.$store.getters.bookingDetali(this.paramID)
        },
        loading(){
            return this.$store.state.loading_api
        }
    }
}
</script>
<style scoped>

.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 0px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
}
.modal-content {
  background-color: #ffffff;
  margin: auto;
  padding: 0px;
  border: none;
  width: 100%;
  height:100%;
}
.imagedisplay{
    padding-top:20px;
    overflow: scroll;
    transition: transform .2s
}
.zoomed{
    padding-top:20px !important

}
.image-container{
    overflow: scroll
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffffff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
}

@media only screen and (max-width: 600px) {
.imagedisplay{
    padding-top: 40%;
    overflow: scroll;
    transition: transform .2s
}
::-webkit-scrollbar {
  display: none;
}
.zoomed{
    padding-top:20% !important

}
.image-container{
    overflow: scroll
}
}
.button{
    background-color: rgb(240, 240, 240, 0.2);
    border: none;
    color: white;
    padding: 0px 14px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 8px 0px;
    outline: none
}
.button:hover{
      background-color: #F0F0F0;
      outline: none
}
.margin{
        margin-left: -13px;
}
.back-button{
    background-color: red;
    border-radius: 50%;
    cursor: pointer
}
.button5 {border-radius: 50%;}
.label{
    color:#3F35CF
}
.labels{
    font-size: 14px;
    color: gray
}
.ontrack-button{
    color: white;
    text-transform: uppercase;
    border: none;
    background-color: #3F35CF;
    padding: 10px 10px;
    width: 100%;
    opacity: 1;
    outline: none
}
.ontrack-button:hover{
    color: white;
    text-transform: uppercase;
    border: none;
    background-color: #3F35CF;
    padding: 10px 10px;
    width: 100%;
    opacity: 0.87;
    outline: none
}
</style>