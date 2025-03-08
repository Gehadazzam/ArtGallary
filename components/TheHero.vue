<script setup lang="ts"></script>

<template>
  <section class="flex flex-col items-center justify-center h-screen space-y-5">
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
      <NuxtImg class="h-12" src="/images/arrowHEro.svg" alt="arrow" />
    </div>
    <div class="flex items-center relative">
      <div
        class="-rotate-12 transform transition-transform hover:scale-105 hover:z-50"
      >
        <NuxtImg
          class="rounded-xl w-48 h-auto"
          src="/images/firstImg.jpeg"
          alt="first painting"
        />
      </div>
      <div class="z-10 -mt-10 transition-transform hover:scale-105">
        <NuxtImg
          class="rounded-xl w-48 h-auto"
          src="/images/secImg.jpeg"
          alt="second painting"
        />
      </div>
      <div
        class="rotate-12 transform transition-transform hover:scale-105 hover:z-50"
      >
        <NuxtImg
          class="rounded-xl w-48 h-auto"
          src="/images/thirdImg.jpeg"
          alt="third painting"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
