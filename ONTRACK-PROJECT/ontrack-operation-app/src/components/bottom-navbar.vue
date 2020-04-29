<template>
    <div>
        <div class="footer d-inline-flex justify-content-between  mt-1">
            <div class="col-3 p-0">
                <img src="../assets/homepage-1.svg" alt="" width="30px" class="my-1 m-0 p-1">
                <p class="m-0 p-0">HOME</p>
            </div>
            <div class="col-3 p-0 active">
                <img src="../assets/serve-color.svg" alt="" width="30px" class="my-1 m-0 p-1">
                <p class="m-0 p-0">SERVICE</p>
            </div>
            <div class="col-3 p-0">
                <img src="../assets/newbookings.svg" alt="" width="30px" class="my-1 m-0 p-1">
                <p class="m-0 p-0">BOOKING</p>
            </div>
            <div class="col-3 p-0">
                <img src="../assets/profile.svg" alt="" width="30px" class="my-1 m-0 p-1">
                <p class="m-0 p-0">PROFILE</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.footer {
    position: fixed;
    margin: 0 auto;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgb(128, 128, 128, 0.3);
    background-color: white;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.14), 1px 3px 1px -2px rgba(0, 0, 0, 0.2), 1px 1px 5px 0 rgba(0, 0, 0, 0.12);
    color: #808080b3;
    text-align: center;
}
.active{
    color: black
}
</style>