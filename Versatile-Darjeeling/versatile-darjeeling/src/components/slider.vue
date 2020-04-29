<template>
    <div id="demo" class="col-12 col-md-12 m-0 p-0 carousel slide" data-ride="carousel">
        <!-- <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
        </ul> -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/ban.jpg" alt="Los Angeles" width="1100" height="500">
                <div class="carousel-caption">
                    <h3>Freedom of music</h3>
                    <p>We are open to all music lovers!</p>
                </div>   
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Slider',
  components: {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Raleway:wght@900&display=swap');

.homepage{
    position: relative;
}
.carousel{
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1
}
.top-nav{
    z-index: 9999999;
}
.carousel{
    position: inherit !important;
}
.carousel-inner img {
    width: 100%;
    height: auto;
}

.carousel-caption{
    font-size: 35px !important;
    font-family: 'Lobster', cursive;
}
.carousel-caption h3{
    font-size: 85px !important;
        font-family: 'Poppins', sans-serif !important;
}
@media screen and (max-width: 600px) { 
    .carousel-caption{
        font-size: 15px !important;
        font-family: 'Lobster', cursive;
    }
    .carousel-caption h3{
        font-size: 25px !important;
        font-family: 'Poppins', sans-serif !important;
    }
    .carousel-inner img {
        width: 200%;
        height: auto;
    }
}
</style>