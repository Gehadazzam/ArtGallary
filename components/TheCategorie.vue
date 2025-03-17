<script setup lang="ts">
const categories = [
  {
    imgSrc: "/images/firstimg.jpeg",
    altText: "Artists",
    title: "Artists",
    count: "234 artist",
  },
  {
    imgSrc: "/images/secImg.jpeg",
    altText: "Art Movements",
    title: "Art Movements",
    count: "34 Art Movements",
  },
  {
    imgSrc: "/images/thirdImg.jpeg",
    altText: "Historical Figures",
    title: "Historical Figures",
    count: "55 Historical Figures",
  },
];
</script>

<template>
  <div
    class="flex flex-col text-text-gray mx-auto max-w-4xl gap-7 justify-center items-center"
  >
    <h3 class="text-3xl">Categories</h3>
    <div
      class="flex flex-wrap w-full items-center justify-center text-center gap-6"
    >
      <div v-for="(category, index) in categories" :key="index">
        <NuxtImg
          class="rounded-md w-68 h-36 object-cover"
          :src="category.imgSrc"
          :alt="category.altText"
        />
        <h6 class="my-1">{{ category.title }}</h6>
        <span>{{ category.count }}</span>
      </div>
    </div>
    <p class="font-extralight pb-8 w-2/4 text-2xl text-text-pink text-center">
      "Discover a world of colors where every art tells a story"
    </p>
  </div>
</template>
