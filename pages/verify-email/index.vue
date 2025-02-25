<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import apiClient from "../../utils/apiClient.ts";
import TheButton from "../../components/TheButton.vue";
const route = useRoute();

const token = route.query.token;
const isVerified = ref(false);
const error = ref("");

const verify = async () => {
  try {
    if (!token) {
      error.value = "No verification token found.";
      return;
    }
    const response = await apiClient.get("auth/verify-email?token=" + token);
    console.log(response);
    sessionStorage.setItem("refreshToken", response.tokens.refreshToken);
    sessionStorage.setItem("accessToken", response.tokens.accessToken);
    isVerified.value = true;
  } catch (err) {
    console.error(err);
    error.value = "Invalid or expired verification link.";
  }
};

const redirect = () => {
  window.location.href = "/";
};

onMounted(() => {
  setTimeout(() => {
    verify();
  }, 3000);
});
</script>

<template>
  <div
    class="h-screen bg-white w-full flex flex-col px-8 md:px-12 lg:px-24 items-center justify-center gap-8 md:gap-24"
  >
    <h1 class="text-3xl text-cranberry-700 text-center font-bold">
      Welcome to Marwa Gallery
    </h1>
    <div v-if="isVerified" class="text-center">
      <p class="text-lg text-cranberry-700 font-bold mb-4">
        Your email has been verified 🎉
      </p>
      <TheButton @click="redirect" label="Continue to Gallery" />
    </div>

    <div v-else-if="error" class="text-center">
      <p class="text-lg text-red-600 font-bold mb-4">
        {{ error }}
      </p>
      <TheButton @click="redirect" label="Return to Homepage" />
    </div>

    <div v-else class="text-center">
      <p class="text-lg text-gray-600 font-bold">
        Verifying your email address...
      </p>
    </div>
  </div>
</template>
