<template>
    <div class=" w-full relative service-bg  mt-14 md:py-20 ">
        <div class="mx-auto max-w-7xl px-7">
            <div class=" text-center md:mb-24 mb-28">
                <h2 class=" font-normal md:text-6xl text-[34px] text-[#C1C1C1]">Nos <span class=" font-bold text-[28px] md:text-[65px] text-white">Prestations</span></h2>
            </div>
            <div class="flex md:gap-7 gap-28 w-full justify-start flex-shrink flex-grow items-stretch md:flex-row flex-col">
                <CardService v-for="(item, index) in data" :key="item.id" :index="index" :data="item" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import data from '~/data/services.json';
</script>

<style>
.service-bg::after {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: right !important;
    z-index: 0;
    background-repeat: no-repeat !important;
    background-size: 100% !important;
    content: '';
    background: url('~/assets/images/right_bg_shape.svg');   
    bottom: -20%;
}
.service-bg::before {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: left !important;
    z-index: 0;
    top: -26%;
    background-size: 80% !important;
    background-repeat: no-repeat !important;
    content: '';
    background: url('~/assets/images/left_bg_shape.svg');
}

@media only screen and (max-width: 768px) {
    .service-bg::before,
    .service-bg::after {
        background-size: 80rem !important;
    }
}
</style>