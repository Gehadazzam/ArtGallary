<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  const tl = gsap.timeline();
  tl.to("#firstImg", {
    x: 50,
    duration: 2,
    repeat: 1,
    yoyo: true,
    ease: "bounce.out",
  });
  tl.to(
    "#secImg",
    {
      y: -30,
      rotate: 180,
      duration: 2,
      repeat: 1,
      yoyo: true,
      ease: "steps(20)",
    },
    "<",
  );
  tl.to(
    "#thirdImg",
    {
      x: -50,
      duration: 2,
      repeat: 1,
      yoyo: true,
      ease: "bounce.out",
    },
    "<",
  );
  tl.to("#firstImg", {
    z: 16,
    rotate: -16,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "bounce.out",
  });
  tl.to(
    "#thirdImg",
    {
      z: -16,
      rotate: 16,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "bounce.out",
    },
    "<",
  );
});
</script>

<template>
  <section class="flex flex-col items-center justify-center pt-16 space-y-5">
    <h1 class="text-text-pink font-bold text-7xl">Maroba Gallery</h1>
    <h4 class="text-text-gray text-3xl font-light">
      Made especially for your eyes!
    </h4>
    <div class="flex space-x-3">
      <button
        class="text-text border border-text rounded-full uppercase cursor-pointer px-7 py-2"
      >
        Explore More!
      </button>
      <NuxtLink to="/join_us">
        <TheButton>JOIN US!</TheButton>
      </NuxtLink>
    </div>
    <div class="flex w-2/4 justify-end">
      <NuxtImg
        id="arrow"
        class="h-12"
        src="/images/arrowHero.svg"
        alt="arrow"
      />
    </div>
    <div class="flex items-center relative -gap-2">
      <div
        id="firstImg"
        class="-rotate-16 transform transition-transform hover:scale-105 hover:z-50"
      >
        <NuxtImg
          class="rounded-xl w-60 h-auto shadow-lg"
          src="/images/firstImg.jpeg"
          alt="first painting"
        />
      </div>
      <div id="secImg" class="z-10 -mt-10 transition-transform hover:scale-105">
        <NuxtImg
          class="rounded-xl w-60 h-auto"
          src="/images/secImg.jpeg"
          alt="second painting"
        />
      </div>
      <div
        id="thirdImg"
        class="rotate-16 transition-transform hover:scale-105 hover:z-50"
      >
        <NuxtImg
          class="rounded-xl w-60 h-auto shadow-lg"
          src="/images/thirdImg.jpeg"
          alt="third painting"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
#firstImg,
#thirdImg,
#secImg {
  will-change: transform;
  backface-visibility: hidden;
}
</style>
