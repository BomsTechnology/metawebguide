<template>
    <div class="w-full relative tv-bg h-full pt-10">
        <div class=" w-full relative h-full">
            <div class="mx-auto max-w-7xl w-full relative py-3 h-full flex md:flex-row flex-col-reverse flex-shrink flex-grow items-center">
                <div class="p-3 w-full">
                    <h2 class=" tmd:ext-right text-center text-white md:text-6xl text-4xl font-bold">
                        Fertigkeiten zur<br> Unterstützung<br>Ihrer IT-Sicherheit
                    </h2>
                </div>
                <div class="p-3 flex w-full justify-center md:items-start items-center flex-shrink flex-grow h-full">
                    <div class=" xl:w-[700px] xl:h-[700px] md:-scale-x-100 flex justify-center ">
                        <video class=" md:w-full w-2/3" preload="metadata" autoplay loop muted playsinline>
                            <source src="~/assets/videos/hands.webm" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div class=" absolute md:block hidden left-0 top-[15%] w-full">
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

<style>
.tv-bg::after {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: right !important;
    z-index: 0;
    background-repeat: no-repeat !important;
    background-size: 70% !important;
    content: '';
    background: url('~/assets/images/sec1_right_bg_shape.svg');  
    top: -1%; 
}
.tv-bg::before {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: left !important;
    z-index: 0;
    top: -5%;
    background-size: 70% !important;
    background-repeat: no-repeat !important;
    content: '';
    background: url('~/assets/images/sec1_left_bg_shape.svg');
}
@media only screen and (max-width: 768px) {
    .tv-bg::after {
        top: -35%;
    background-size: 40rem !important;
    }
    .tv-bg::before {
    background-size: 40rem !important;
    }
}
</style>