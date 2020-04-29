<template>
    <div class="artistbio col-md-12">
        <h2 class="header">HIGHLIGHTS</h2>
        <p>Versatile Darjeeling recent videos.</p>
        <div class="col-md-12 m-0 p-0 row atrist-bio-container">
            <div class="card mb-3 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/bRqKwB5x3zs">
                </iframe>
            </div>
            <div class="card mb-3 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/Pj3sBT5pEao">
                </iframe>
            </div>
            <div class="card mb-3 col-md-4 col-12 m-0 p-3">
                <iframe width="100%" height="300"
                    src="https://www.youtube.com/embed/X0Ls6s0G5z0">
                </iframe>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Raleway:wght@900&display=swap');

.artistbio{
    background-color: white;
    font-family: 'Raleway', sans-serif;
    color:black;
    padding-top: 50px;
    padding-bottom: 50px;
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
.card{
    border: none
}
iframe {
    border: 2px solid rgb(255,0,0,0.5);
}
@media screen and (max-width: 600px) {
    .card{padding: 0 !important
    }
}
</style>