<template>
    <a href="#title" class="fixed bottom-5 shadow-lg right-5 z-50 h-12 w-12 items-center justify-center rounded-full bg-blue-500" :class="[ isScroll ? 'flex' : 'hidden']">
        <Icon name="tabler:chevron-up" size="30" />
    </a>
  <header class="fixed z-50 w-full top-0 left-0 px-6 py-4 md:py-10" :class="{ 'bg-pridark shadow md:py-6': isScroll }">
    <nav class="relativew-full">
      <div
        class="container  mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <NuxtLink to="/"
            >
            <img class="w-auto " :class="[ isScroll ? 'md:h-20 h-14' : 'md:h-24 h-14']" src="~/assets/images/logos/webguide_t.png" alt="">
          </NuxtLink>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="text-white  hover:text-blue-500  focus:outline-none focus:text-blue-500 "
              :class="{ 'text-blue-500': isScroll }"
              aria-label="toggle menu"
            >
            <Icon v-if="!isOpen" name="ion:menu" size="28" />
            <Icon v-else name="tabler:x" size="28" />
              
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          :class="[
            isOpen
              ? 'translate-x-0 opacity-100 '
              : 'opacity-0 -translate-x-full',
          ]"
          class=" md:shadow-none shadow absolute inset-x-0 top-full z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-pridark  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
        >
          <div class="flex flex-col md:flex-row md:mx-6 text-white" @click="isOpen = !isOpen" :class="[isScroll ? 'md:text-lg' : ' md:text-xl']">
            <NuxtLink to="/"
              class="my-2  font-semibold transition-colors  duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
              >Accueil</NuxtLink
            >
            <NuxtLink to="/services"
              class="my-2  font-semibold transition-colors  duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
              >Nos Services</NuxtLink
            >
            <NuxtLink to="/contact"
              class="my-2  font-semibold transition-colors  duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
              >Contact</NuxtLink
            >
          </div>

          <div class="block">
            <NuxtLink
              class="relative transition-colors duration-300 "
              to="https://www.facebook.com/"
              target="_blank"
            >
            <Icon name="logos:facebook" size="30" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref<boolean>(false);
    const isScroll = ref<boolean>(false);
    onMounted(() => {
        window.addEventListener("scroll", async function () {
                isScroll.value = window.scrollY > 200;
        });     
    })
</script>
