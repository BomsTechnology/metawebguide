<template>
    <div class="w-full h-full">
        <BreadCrumb title="Nos Services" :links="[{ label: 'Services', route: '' }]" />
        <div class=" w-full relative service-bg md:pt-20 pt-16 pb-40 md:pb-96 ">
        <div class="container mx-auto px-7">
            <div class="grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-7 w-full justify-start flex-shrink flex-grow ">
                <CardProduct v-for="(item, index) in data" :key="item.id" :data="item" />
            </div>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import data from '~/data/products.json';
useHead({
        title: `MetaWebGuide | Services`,
        meta: [
            { name: 'og:title', content: `MetaWebGuide | Services` },
            { name: 'twitter:title', content: `MetaWebGuide | Services` },
        ],
    });
</script>

<style scoped>
.service-bg::after {  
    bottom: -10%;
}
</style>