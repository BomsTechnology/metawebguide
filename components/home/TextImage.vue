<template>
    <div class=" md:pt-28  pt-16 w-full relative mt-5 ti-bg">
        <div class="mx-auto max-w-7xl w-full relative py-3 px-5 flex md:flex-row flex-col">
            <div class="p-3 w-full flex-shrink flex-grow h-full flex items-center justify-center">
                <div class="animate-bounce-slow">
                    <img src="~/assets/images/our_solution.webp" class="w-full" />
                </div>
                <div class=" -z-20 absolute max-w-full">
                    <img src="~/assets/images/stars.svg" class="w-[70%]" />
                </div>
            </div>
            <div class=" p-3 w-full text-white">
                <h2 class=" font-normal md:text-6xl text-[28px] md:text-left text-center ">Nos <span class=" font-bold text-[28px] md:text-[65px] ">Services</span></h2>
                <p class=" mt-5 mb-4 md:text-lg text-sm font-normal md:text-left text-center">En tant qu'experts en matière de sécurité informatique, nous offrons des solutions spécialisées pour relever efficacement vos défis. Nous utilisons les dernières technologies et tendances de sécurité pour protéger votre entreprise de manière holistique contre les menaces et assurer une intégration robuste des pratiques de sécurité dans vos processus d'entreprise.</p>
                <h3 class=" md:text-3xl text-xl">Nos compétences en un coup d'oeil:</h3>
                <ul class=" list-disc text-sm md:text-lg mt-5 pl-10">
                    <li>Examen global de la sécurité informatique</li>
                    <li>Développement d'une stratégie de sécurité informatique pour votre entreprise</li>
                    <li>Obtenir vos processus d'entreprise et reprendre des processus informatiques spécifiques</li>
                    <li>Mise à disposition d'équipes d'experts</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
.ti-bg::after {
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
.ti-bg::before {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: left !important;
    z-index: 0;
    top: -5%;
    background-size: 80% !important;
    background-repeat: no-repeat !important;
    content: '';
    background: url('~/assets/images/sec2_left_bg_shape.svg');
}
@media only screen and (max-width: 768px) { 
    .ti-bg::before {
        background-size: 90rem !important;
        left: -5%;
    } .ti-bg::after {
        right: -5%;
        background-size: 60rem !important;
    }

}
</style>