<script setup lang="ts">

import type BreadCrumbProps from "@/types/BreadCrumbProps";
const props = defineProps({
  title: { required: true, type: String },
  links: {
    type: Array<BreadCrumbProps>,
    required: true,
  },
});
</script>

<template>
  <div
  id="title"
    class="w-full lg:h-96 h-72 relative"
  >
  <video src="~/assets/videos/Hero_video.mp4" class="w-full object-cover h-full" autoplay loop muted playsinline poster="~/assets/images/poster_video.png"></video>
    <div
      class="w-full h-full bg-pridark/80 absolute left-0 top-0 z-20 flex flex-col justify-center items-center py-10 lg:space-y-6 space-y-4  px-4 text-white"
    >
      <h1
        class="lg:text-[40px] text-xl sm:text-3xl text-center mt-16 font-semibold flex items-center space-x-2"
      >
        
          <svg
            class="lg:h-8 lg:w-8 w-6 h-6"
            width="32"
            height="17"
            viewBox="0 0 32 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9.28757H8.87673L12.8884 1L19.6818 16L23.5387 9.28757H31"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        
        <span class="">{{ props.title  }}</span>
        
          <svg
            class="lg:h-8 lg:w-8 w-6 h-6"
            width="32"
            height="17"
            viewBox="0 0 32 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9.28757H8.87673L12.8884 1L19.6818 16L23.5387 9.28757H31"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        
      </h1>
      <div class="flex items-center">
        <NuxtLink to="/" class="hover:underline">
            <Icon name="ic:baseline-home" size="20" />
        </NuxtLink>
        <span>
            <Icon name="fluent:chevron-right-16-filled" size="18" />
        </span>
         <span
          v-for="(link, index) in links"
          :key="index"
          class="text-xs lg:text-sm flex items-center"
        >
          <NuxtLink
            v-if="link.route"
            :to="link.route"
            class="hover:underline"
            >{{ link.label }}</NuxtLink
          >
          <span v-else>{{ link.label }}</span>
          <span :class="links.length == index + 1 ? 'hidden' : ''"
            >
            <Icon name="fluent:chevron-right-16-filled" size="18" />
          </span>
        </span>
      </div>
    </div>
  </div>
</template>