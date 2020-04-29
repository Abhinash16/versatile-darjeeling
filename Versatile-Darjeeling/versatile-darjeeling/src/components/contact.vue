<template>
    <div class="contact col-md-12">
        <h2 class="header">REACH US</h2>
        <p>You can choose one from below</p>
        <div class="card-deck atrist-bio-container">
            <div class="card p-3 text-left">
               <h2>TO TYPE:</h2>
               <p>connect@versatiledarjeeling.com</p>
               <p>info@versatiledarjeeling.com</p>
            </div>
            <div class="card p-3 text-left">
               <h2>TO DIAL</h2>
               
                <div class="social d-flex justify-content-between py-3">
                <p class="mr-3">+91 785544579</p>
               <p>+91 866554785</p>
               </div>
            </div>
            <div class="card p-3 text-left">
               <h2>TO STALK</h2>
               <div class="social d-flex py-3">
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <i class="fa fa-instagram ml-4 " aria-hidden="true"></i>
                <i class="fa fa-facebook-square ml-4" aria-hidden="true"></i>
               </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Raleway:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
i{
    font-size: 25px
}
h2{
     font-size: 20px
}
.contact{
    background-color: black;
    /* font-family: 'Raleway', sans-serif; */
    font-family: 'Open Sans', sans-serif;
    color:white;
    padding-top: 200px;
    padding-bottom: 50px;
    background-image: url("../assets/bgs4.jpg");
    background-repeat: no-repeat
}
.header{
    font-family: 'Poppins', sans-serif !important;
    font-weight: 900;
    font-size: 48px
}
.atrist-bio-container{
    padding-top:50px
}
.artistName{
    font-size: 25px;
}
.contact-detail{
    text-align: justify
}
.card{
    background-color: rgb(0, 0, 0, 0.5);
    border: 1px solid #f4c2c2;
}
iframe {
    border: 2px solid rgb(255,0,0,0.5);
}
@media screen and (max-width: 600px) {

    .contact{
        padding-top: 100px !important;
    }
}
</style>