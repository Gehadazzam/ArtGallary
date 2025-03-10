<script setup lang="ts">
const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};
onMounted(() => {
  console.log("mounted");
});
</script>

<template>
  <template>
    <div
      class="bg-background m-4 md:m-8 lg:mx-24 lg:mt-12 rounded-4xl p-6 relative"
    >
      <button @click="close" class="absolute top-2 right-2">
        <NuxtImg src="/images/Vector.svg" alt="close Pop Up" />
      </button>
      <h2>
        A link has been sent to verify your identity. Please check your email to
        complete the registration process.
      </h2>
      <TheButton @click="close" class="mt-4"> Thanks!</TheButton>
    </div>
  </template>
</template>
