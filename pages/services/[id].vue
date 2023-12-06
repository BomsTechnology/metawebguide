<template>
    <div class="w-full h-full">
        <BreadCrumb :title="item?.title" :links="[{ label: 'Services', route: '/services' }, { label: item?.title , route: '' }]" />

    <div class="flex lg:flex-row flex-col-reverse container mx-auto lg:pt-10 md:pb-60 pb-10">
        <div class="flex items-center justify-center w-full px-6 py-8  lg:w-1/2">
            <div class="max-w-xl">
                <h2 class="text-3xl font-semibold text-white lg:text-4xl">{{ item?.title }}</h2>

                <p class=" text-white mt-2 md:text-2xl text-xl">{{ item?.price }}</p>

                <p class="mt-4 md:text-lg text-sm text-gray-200 lg:text-base">
                    {{ item?.description }}
                </p>

                <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <a :href="item?.link" class="block px-5 py-2 md:text-lg text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-gray-700">Payer maintenant</a>
                </div>
            </div>
        </div>

        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
            <div class="w-full h-full bg-cover" :style="{ backgroundImage: `url(${item?.image})`}">
                <div class="w-full h-full bg-black opacity-25"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import data from '~/data/products.json';

const { id } = useRoute().params
const item = data.find(item => item.slug === id)

if(!item) {
    throw createError({ statusCode: 404, message: 'Product not found' })
} 

useHead({
        title: `${item?.title}`,
        meta: [
            { name: 'description', content: item?.description },
            { name: 'og:description', content: item?.description },
            { name: 'twitter:description', content: item?.description },
            { name: 'og:title', content: item?.title },
            { name: 'twitter:title', content: item?.title },
            { name: 'og:image', content: item?.image },
            { name: 'twitter:image', content: item?.image },
        ],
    });
</script>

<style scoped>

</style>