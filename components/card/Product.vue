<template>
    <div class=" z-10 bg-pridark flex justify-center items-center flex-col bg-dark border-[0.5px] border-pridark2 rounded-xl overflow-hidden flex-shrink flex-grow h-full">
        <div class="items-center flex justify-center w-full md:h-60 h-48">
            <img :src="data.image" class="w-full h-full object-cover" >
        </div>
        <div class=" md:px-6 px-4 py-9 text-center text-white w-full">
            <h3 class="font-bold md:text-lg text-base">{{ data.title }}</h3>
            <p lass="md:text-lg text-base mt-2">{{ data.price }}</p>
            <NuxtLink :to="`/services/${data.slug}`" class="mt-7 block w-full md:text-lg text-sm bg-blue-500 text-white py-2 rounded-xl">En savoir plus</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import type ProductProps from '~/types/ProductProps';

const props = defineProps<({
    data: ProductProps
})>();
</script>

<style scoped>
    
</style>