<template>
    <div :style="{'margin-top': `${135 - (index * 45)}px`, 'margin-bottom': `${(index * 45)}px`}" class=" serv z-10 bg-pridark flex justify-center items-center flex-col bg-dark border-[0.5px] border-pridark2 rounded-xl md:px-6 px-4 py-9 flex-shrink flex-grow h-full">
        <div class="animate-bounce-slow md:-mt-32 -mt-28 px-2 flex justify-center">
            <img :src="data.image" class="md:w-full w-10/12 hover:scale-110 transition-all" >
        </div>
        <div class=" mt-10 text-center text-white">
            <h3 class="font-bold md:text-lg text-base">{{ data.title }}</h3>
            <p class="mt-2 md:text-lg text-sm">
                {{ data.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type ServiceProps from '~/types/ServiceProps';

    const props = defineProps<({
        index: number,
        data: ServiceProps
    })>();
</script>

<style scoped>
    @media only screen and (max-width: 768px) {
        .serv {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }
    }
</style>