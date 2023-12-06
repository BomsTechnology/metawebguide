<template>
    <div class=" relative w-full h-full lvt-bg">
        <div class=" flex justify-center items-center relative px-3">
            <div class="mx-auto max-w-7xl w-full relative">
                <div class=" relative w-full h-full p-4 flex items-center justify-center">
                    <div class="relative w-full h-full md:w-[70%]">
                        <div class="absolute text-center left-1/2 top-1/2 flex-col md:gap-10 gap-5 -translate-x-1/2 text-white -translate-y-1/2 flex justify-center items-center">
                            <h2 class=" font-normal md:text-[58px] text-2xl  ">Notre </h2>
                            <h2 class=" font-bold md:text-[60px] text-2xl ">Equipes</h2>
                        </div>
                        <video width="100%" height="100%" preload="metadata" src="~/assets/videos/love_team.webm" loop autoplay muted playsinline class="md:ml-5 ml-2 mt-5 w-full h-full">
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div class=" absolute left-0 top-[15%] w-full md:block hidden">
            <div class=" z-0 absolute left-0 top-[3.7rem]">
                <img src="~/assets/images/stars_left.svg" alt="">
            </div>
            <div class=" z-0 absolute right-[0.1rem] top-[3.7rem]">
                <img src="~/assets/images/stars_right.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.lvt-bg::after {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: right !important;
    z-index: 0;
    background-repeat: no-repeat !important;
    background-size: 70% !important;
    content: '';
    background: url('~/assets/images/sec2_right_bg_shape.svg');  
    top: -1%; 
}
.lvt-bg::before {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: left !important;
    z-index: 0;
    top: -5%;
    background-size: 70% !important;
    background-repeat: no-repeat !important;
    content: '';
    background: url('~/assets/images/sec2_left_bg_shape.svg');
}
@media only screen and (max-width: 768px) { 
    .lvt-bg::before {
        height: 150%;
        top: -30%;
        background-size: 46rem !important;
    }
    .lvt-bg::after {
        height: 150%;
        top: -45%;
        background-size: 41rem !important;
    }
}
</style>