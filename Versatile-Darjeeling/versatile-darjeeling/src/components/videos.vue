<template>
    <div class="videos col-md-12">
        <h2 class="header">ALL VIDEOS</h2>
        <p>Versatile Darjeeling collections.</p>
        <div class="col-md-12 mt-4 m-0 p-0 row atrist-bio-container">
            <div class="card mb-4 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/bRqKwB5x3zs">
                </iframe>
            </div>
            <div class="card mb-4 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/Pj3sBT5pEao">
                </iframe>
            </div>
            <div class="card mb-4 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/X0Ls6s0G5z0">
                </iframe>
            </div>
            <div class="card mb-4 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/fWTj1Q9qs5k">
                </iframe>
            </div>
            <div class="card mb-4 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/WuxadZJDH3M">
                </iframe>
            </div>
            <div class="card mb-4 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/A3kbeQvuwsQ">
                </iframe>
            </div>
             <div class="card mb-4 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/Bd9bqKIs7t8">
                </iframe>
            </div>
            <div class="card mb-4 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/bJJ5kAbL1GY">
                </iframe>
            </div>
            <div class="card mb-4 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/NpGahXh7rXA">
                </iframe>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Raleway:wght@900&display=swap');

.videos{
    background-color: black;
    font-family: 'Raleway', sans-serif;
    color:white;
    padding-top: 200px;
    padding-bottom: 50px;
    background-image: url("../assets/bgs2.jpg");
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
.videos-detail{
    text-align: justify
}
.card{
    border: none;
    background-color: black
}
iframe {
    border: 2px solid rgb(255,0,0,0.5);
}
@media screen and (max-width: 600px) {
    .card{padding: 0 !important
    }
    .videos{
        padding-top: 100px !important;
    }
}
</style>