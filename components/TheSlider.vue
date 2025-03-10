<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h2 class="text-text text-4xl text-center">Our Masterpieces</h2>
    <div class="h-[1px] w-full bg-gradient-to-r mt-1 from-text to-white"></div>

    <div class="relative h-72 flex items-center justify-center overflow-hidden">
      <button
        class="absolute top-1/2 -translate-y-1/2 z-20 left-4 flex items-center justify-center cursor-pointer transition-all"
        @click="prevSlide"
        aria-label="Previous slide"
      >
        <img src="~/public/images/Polygon3.svg" alt="forward--v1" />
      </button>

      <div
        class="relative w-full h-full flex items-center justify-center"
        ref="sliderRef"
      >
        <div
          v-for="(masterpiece, index) in masterpieces"
          :key="index"
          class="absolute w-3/5 h-4/5 transition-all duration-500 ease-in-out rounded-lg overflow-hidden shadow-lg"
          :class="{ 'z-10': currentIndex === index }"
          :style="getMasterpieceStyle(index)"
        >
          <img
            :src="masterpiece.image"
            :alt="masterpiece.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <button
        class="absolute top-1/2 -translate-y-1/2 z-20 right-4 flex items-center justify-center cursor-pointer transition-all"
        @click="nextSlide"
        aria-label="Next slide"
      >
        <img src="~/public/images/Polygon1.png" alt="forward--v1" />
      </button>
    </div>
    <div class="flex justify-center">
      <button
        class="text-text text-xl border border-text rounded-full uppercase cursor-pointer px-7 py-2"
      >
        Explore More!
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// Sample data - replace with your actual masterpieces
const masterpieces = ref([
  {
    title: "Abstract Landscape 1",
    image: "/images/firstImg.jpeg",
  },
  {
    title: "Mountain View",
    image: "/images/firstImg.jpeg",
  },
  {
    title: "Golden Fields",
    image: "/images/firstImg.jpeg",
  },
  {
    title: "Sunset Valley",
    image: "/images/firstImg.jpeg",
  },
  {
    title: "Coastal Dreams",
    image: "/images/firstImg.jpeg",
  },
]);

const currentIndex = ref(2);
const sliderRef = ref(null);

// Calculate the offset for each masterpiece based on its index
const getMasterpieceStyle = (index) => {
  const offset = index - currentIndex.value;
  const zIndex = masterpieces.value.length - Math.abs(offset);

  return {
    transform: `translateX(${offset * 25}%) scale(${1 - Math.abs(offset) * 0.1})`,
    zIndex: zIndex,
    opacity: 1 - Math.abs(offset) * 0.2,
  };
};

const nextSlide = () => {
  if (currentIndex.value < masterpieces.value.length - 1) {
    currentIndex.value++;
  } else {
    // Optional: loop back to the first slide
    currentIndex.value = 0;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    // Optional: loop to the last slide
    currentIndex.value = masterpieces.value.length - 1;
  }
};

// Optional: Add keyboard navigation
onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  });
});
</script>
