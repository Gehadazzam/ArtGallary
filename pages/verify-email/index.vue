<script setup lang="ts">
const route = useRoute();

const token = route.query.token;
const error = ref("");

const verify = async () => {
  try {
    if (!token) {
      error.value = "No verification token found.";
      return;
    }
    const response = await apiClient.get("auth/verify-email?token=" + token);
    sessionStorage.setItem(
      "refreshToken",
      response.data.data.tokens.refreshToken,
    );
    sessionStorage.setItem(
      "accessToken",
      response.data.data.tokens.accessToken,
    );
    window.location.href = "/";
  } catch (err) {
    console.error(err);
    error.value = "Invalid or expired verification link.";
  }
};

const redirect = () => {
  window.location.href = "/";
};
onMounted(() => {
  verify();
});
</script>

<template>
  <div class="bg-background m-4 md:m-8 lg:mx-24 lg:mt-12 rounded-4xl">
    <div class="bg-[url('~/public/images/mainbg.svg')] bg-cover h-full px-4">
      <div v-if="error" class="text-center">
        <p class="text-lg text-red-600 font-bold mb-4">
          {{ error }}
        </p>
        <TheButton @click="redirect"> Go to Home</TheButton>
      </div>
      <div v-else>
        <NuxtImg src="~/public/images/verify.svg" alt="Verify Email" />
        <h1 class="text-3xl text-text text-center font-bold">
          Congratulations!
        </h1>
        <p class="text-lg text-text text-center">
          Your email has been verified successfully. Please wait while we
          redirect you to the main page.
        </p>
      </div>
    </div>
  </div>
</template>
