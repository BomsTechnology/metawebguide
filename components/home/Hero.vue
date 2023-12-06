<template>
    <div id="title" class="max-h-screen relative overflow-hidden w-full text-center">
        <div class="bg-gradient-to-b from-pridark/50  to-[#2D2D2D] w-full h-full absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col px-6">
            <h1 class="text-white 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl max-w-6xl text-center font-medium ">
                NOUS SOMMES LA MEILLEURE SOLUTION POUR GUIDER VOTRE ENTREPRISE SUR LE WEB
            </h1>
            <p ref="paragraph" class="text-white italic font-light 2xl:text-3xl xl:text-2xl lg:text-xl text-lg mt-5 md:text-animate overflow-hidden  md:border-r-4 border-r-blue-500"></p>
        </div>
        <video src="~/assets/videos/Hero_video.mp4" class="w-full object-cover md:h-auto h-[80vh]" autoplay loop muted playsinline poster="~/assets/images/poster_video.png"></video>
    </div>
</template>

<script setup lang="ts">
const paragraph = ref<HTMLElement | null>(null)
const typingWord = "Définissez vos indicateurs clés, créez et exécutez une stratégie de croissance";

const writeText = () => {
  if (typingWord.length > 0) {
    const chars = typingWord.split(""); 
  const interval: NodeJS.Timeout = setInterval(()=>{
    if ( !chars.length ){ 
        clearInterval(interval);
        eraseText();
        return;
    }
    paragraph.value ? paragraph.value.textContent += chars.shift()! : null; 
  }, 100 );
  }
};

const eraseText = () => {
  let text = paragraph.value!.innerText!;
  const interval: NodeJS.Timeout = setInterval(() => {
    if (text.length === 0) {
      clearInterval(interval);
      writeText();
      return;
    }
    text =text.slice(0, -1);
    paragraph.value!.innerText = text;
  }, 50);
};


 writeText();
</script>

<style scoped>
.text-animate {
    animation: animated-cursor 600ms steps(29,end) infinite;
}

@keyframes animated-cursor{
  from{border-right-color: rgba(59, 130, 246,.75) !important;}
  to{border-right-color: transparent;}
}
</style>