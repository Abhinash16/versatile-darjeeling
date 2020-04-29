<template>
    <div class="artistbio col-md-12 m-0 px-0 pb-5">
        <h2 class="header mb-5">ABOUT US</h2>
        <p>WHAT THE HECK ARE WE?</p>
        <div class="col-md-12 row m-0 p-0 atrist-bio-container m-0 mb-5">
            <div class="col-md-6 col-12 mb-4">
                <img src="../assets/container-bg.jpg" class="artist-image" alt="">
            </div>
            <div class="col-md-6 col-12 text-left artistbio-detail">
                <p class="artistName">We- Versatile Darjeeling</p>
                <p>
                    Versatile Dajeeling is a musical band cum open source musical inhabitate to the entire Darjeeling who wants to move forward taking music as their passion. We believe that every individual has ability to sing their heart out. We are a collection of more than 10 members who highly dedicated towards music.
                    Any individual who wants to take music as a carrier option, we provide our best to support them.
                </p>
            </div>
        </div>
        <p>WHAT DO WE DO?</p>
         <div class="col-md-12 row atrist-bio-container m-0">
            <div class="col-md-6 col-12 mb-4">
                <img src="../assets/banner-happiness.jpg" class="artist-image" alt="">
            </div>
            <div class="col-md-6 col-12 text-left artistbio-detail">
                <p class="artistName">We- create happiness</p>
                <p>
                    Versatile Dajeeling tends to provide opportunity to those who wants music to be their spouse :), well since we people from darjeeling have inadequate knowledge on the power of music. So here we are to educate one, that happieness can be created through music.
                </p>
            </div>
        </div>
        <p>WE HAVE A STORY TO TEll</p>
         <div class="col-md-12 row atrist-bio-container m-0">
            <div class="col-md-6 col-12 mb-4">
                <img src="../assets/story.jpg" class="artist-image" alt="">
            </div>
            <div class="col-md-6 col-12 text-left artistbio-detail">
                <p class="artistName">Why- Versatile?</p>
                <p>
                    Belonging to rural area and come up with music is hard for an individual. Early college life is no so easy as where to focus, on your story or on your passion. The problem with every individual is the finance. Belive us we also have started recording audios from our cell phones and we still do, but eventually the passion of collecting every bricks to build your passion have taught us a lot of lessons of life. We are hereby open to those who has devoted their feelings in music and has the ability to express it.
                    We are versatile just give a spin :)
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Raleway:wght@900&display=swap');

.artistbio{
    background-color: black;
    font-family: 'Raleway', sans-serif;
    color:white;
    padding-top: 200px;
    background-image: url("../assets/bgs.jpg");
    background-repeat: no-repeat
}
.artistbio{
    position: inherit !important;
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
.artistbio-detail{
    text-align: justify
}
.artist-image{
    width: 100%
}
@media screen and (max-width: 600px) { 
    .artist-image{
    width: 100% !important
    }
    .artistbio{
        padding-top: 100px !important;
    }
}
</style>