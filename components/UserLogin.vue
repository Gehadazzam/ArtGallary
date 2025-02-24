<script setup lang="ts">
import { useForm } from "@formwerk/core";
import { loginSchema } from "~/utils/userSchema";
const schema = loginSchema;
const { values, handleSubmit, isSubmitting } = useForm({ schema });
const submitForm = handleSubmit(async (data) => {
  console.log(JSON.stringify(data.toObject()));
  try {
    const response = await apiClient.post("/auth/login", data);
    sessionStorage.setItem("accessToken", response.data.accessToken);
    sessionStorage.setItem("refreshToken", response.data.refreshToken);
    window.location.href = "/";
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <form @submit.prevent="submitForm">
    <TextField name="identifier" label="Username or Email" required />
    <TextField name="password" label="Password" type="password" required />
    <TheButton :disabled="isSubmitting" type="submit">
      {{ isSubmitting ? "logging in..." : "Login" }}
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nM3TUUqCURAF4J+MelFXILmKENTA1Si1CteQuQJRtxDtxUpsEb59MXTJ+Pv/bqAPnrfLmTn3cGamKE4N3GGJLfb4wBrDXGMDc7zhAV1coYMxXhN/WSfwhBe0a/gmnkOkiuxhE0UZl63kcJBJ4gBMS+8JVsV/4QvfIriJYKuKchil2uuYzjEOutgdk8F97Em56DbNOTeFNt7RryJnaQ9afzQHP6tTv8BjaRMjsEg9bMfP8Un1Jv4QGmCRGuIWduk2fts+C3wCojcuU/AEC20AAAAASUVORK5CYII="
        alt="login-rounded-right"
      />
    </TheButton>
  </form>
  <p class="text-sm text-cranberry-400">
    Don't have an account?
    <NuxtLink to="/register" class="text-cranberry-400">Sign Up</NuxtLink>
  </p>
</template>
