<template>
    <div class="topnav navbar col-12 m-0" id="myTopnav"
     v-bind:style="{'background-color': navColor,'padding':xpixel + 'px', 'padding-top': ypixel + 'px', 'padding-bottom': ypixel + 'px'}">
            <div class="header pt-1">
                <p @click="homepage" class="pt-1" style="cursor:pointer">
                    <img src="../assets/earphones.svg" width="35px" alt="">
                    Versatile Darjeeling</p>
            </div>
            <div class="toggler">
                <img @click="showNav = !showNav" src="../assets/hamburger.svg" width="35px" alt="">
            </div>
            <div class="navigations" v-bind:class="{'show':showNav}">
                <span @click="showNav = false"><router-link to="/">Home</router-link></span>
                <span @click="showNav = false"><router-link to="/about">About us</router-link></span>
                <span @click="showNav = false"><router-link to="/videos">Videos</router-link></span>
                <span @click="showNav = false"><router-link to="/contact">Contact</router-link></span>
            </div>
            <div class="navigations" v-bind:class="{'show':showNav}">
                <a href="https://www.facebook.com/Versatile-Darjeeling-101650194846729" target="_blank" class="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#news" class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#contact" class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/channel/UCRtWTS-OuDkOJ32-VWVdktg" target="_blank" class="youtube"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            xpixel:20,
            ypixel:50,
            navColor:'rgb(0, 0, 0, 0.2)',
            showNav:false
        }
    },
      created () {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        homepage(){
            this.$router.push('/')
        },
        handleScroll () {
            if(window.scrollY > 100){
                this.ypixel = 10
                this.navColor = "black"
                // this.xpixel = 20
            }else{
                this.ypixel = 50
                this.navColor = "rgb(0, 0, 0, 0.5)"
                // this.xpixel = 20
            }
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Raleway:wght@500&display=swap');
.navbar{
    /* background-color: rgb(0, 0, 0, 0.2); */
    position: fixed;
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 3em;
    transition: padding 0.5s;
    /* transition: background-color 0.5s; */
    /* padding: 50px 20px; */
}
.header{
    font-family: 'Lobster', cursive;
    font-size: 0.8em;
}
.topnav {
  overflow: hidden;
  /* background-color: rgb(0, 0, 0, 0.2); */
  display: flex;
  justify-content: space-between
}
.toggler{
    display: none
}
.topnav a {
  float: left;
  display: block;  
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 15px;
}

.topnav a:hover {
  background-color: rgb(0, 0, 0, 0);
  color: #4CAF50;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
    .navbar{
        padding: 0px 10px !important
    }
    .toggler{
        display: block !important
    }
    .header p{
        font-family: 'Lobster', cursive;
        font-size: 18px !important;
        margin: 0 !important;
        padding: 0 !important
    }
    .navigations{
        text-align: center;
        widows: 100%;
    }
    .navigations{
        display: none !important
    }
    .show{
        display: block !important
    }
}
.topnav .facebook:hover{
    color: rgb(59,87,157) !important
}
.topnav .twitter:hover{
    color: rgb(44,170,225) !important
}
.topnav .instagram:hover{
    color: rgb(64,93,230) !important
}
.topnav .youtube:hover{
    color: rgb(255,0,0) !important
}
</style>