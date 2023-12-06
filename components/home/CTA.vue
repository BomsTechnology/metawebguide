<template>
    <div class="px-7 w-full relative">
        <div class=" md:py-40 py-20 h-full flex-shrink flex-grow flex items-center justify-centern relative">
            <div class=" mx-auto max-w-7xl w-full bg-transparent bg-cta overflow-hidden z-10 relative md:rounded-[60px] rounded-xl">
                <div class=" flex items-center justify-center w-full md:pt-20 md:pb-28 pt-10 pb-8 flex-shrink flex-grow relative">
                    <div class=" absolute left-0 top-[10%] md:block hidden">
                        <img src="~/assets/images/hand_left.png" alt="">
                    </div>
                    <div class=" absolute right-0 top-[10%] md:block hidden">
                        <img src="~/assets/images/hand_right.png" alt="">
                    </div>
                    <div class=" md:w-[56%] flex flex-col justify-center items-center text-center text-white md:px-0 px-2">
                        <h2 class=" tracking-wide md:text-4xl text-2xl font-bold ">Es-tu prêt pour 95 % de surface d'attaque en moins et plus de satisfaction ?</h2>
                        <p class=" md:mt-3 mt-2 mb-9">Optimiser vos processus et gagner du temps, vous permettant de libérer plus de capacité pour d'autres projets importants.</p>
                        <a href="#" class=" md:text-xl text-base block mt-2 font-normal rounded-xl py-3 px-12 transition-all border border-transparent duration-300 bg-white text-blue-500 hover:scale-110 hover:text-white hover:border-white bg-cta-btn">
                            <span>Conseils gratuits</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class=" absolute left-0 top-[8%] md:flex hidden items-center justify-center z-0">
                <img src="~/assets/images/center_shape.svg" alt="">
            </div>
            <div class=" absolute left-0 top-[-30%] md:flex hidden items-center justify-center z-0">
                <img src="~/assets/images/center_shape.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bg-cta {
    background-image: linear-gradient(101deg, #0ea5e9 16%, #F89341 96%) !important;    
}

.bg-cta-btn {
    background: #fff;
}
.bg-cta-btn:hover {
    background: linear-gradient(264.34deg, #0ea5e9 6.15%, #F57055 100%) !important;
}
.bg-cta::before {
    background-image: url("~/assets/images/center_circle.svg");
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  content: '';
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 60px;
  opacity: .5;
  display: block;
  position: absolute;
}
</style>