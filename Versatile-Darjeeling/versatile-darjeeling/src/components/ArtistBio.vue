<template>
    <div class="artistbio col-md-12 m-0 p-0 py-5">
        <h2 class="header">ARTIST BIO</h2>
        <p class="mb-5">Versatile Darjeeling has a varies artist.</p>
        <div class="col-md-12 row atrist-bio-container m-0 p-0">
            <div class="col-md-6 col-12 mb-4">
                <img src="../assets/sdd.jpg" class="artist-image" alt="">
            </div>
            <div class="col-md-6 col-12 text-left artistbio-detail">
                <p class="artistName">Hello, its Siddhant Pradhan</p>
                <p>
                    Being the founder of the channel, dedicated entire life in music. Not only passionate with singing but also passionate in writing, compositing and video making. With hard time in very begining now we are about to reach 1k family in youtube.
                    Irrespective of anything the support is what makes us strong.
                </p>
                <p><span class="italic">Entire support from others is what makes me work more harder tomorrow.</span></p>
                <p>- siddhanth says.</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Raleway:wght@900&display=swap');
.italic{
    font-style: italic
}
.artistbio{
    background-color: black;
    font-family: 'Raleway', sans-serif;
    color:white;
    padding-top: 100px;
    /* background-image: url("https://barbarashdwallpapers.com/wp-content/uploads/2011/07/Black-red-abstract-wallpaper-1.jpg"); */
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
    width: 50%
}
@media screen and (max-width: 600px) { 
    .artist-image{
    width: 100% !important
}
}
</style>