<template>
  <form @submit.prevent="submitForm">
    <TextField name="username" label="Name" required />
    <TextField name="email" label="Email" required />
    <TextField name="password" label="Password" type="password" required />
    <!--    <TextField name="confirmPassword" label="Confirm Password" required />-->
    <TheButton :disabled="isSubmitting" type="submit">
      {{ isSubmitting ? "signing up..." : "Sign Up" }}
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nM3TUUqCURAF4J+MelFXILmKENTA1Si1CteQuQJRtxDtxUpsEb59MXTJ+Pv/bqAPnrfLmTn3cGamKE4N3GGJLfb4wBrDXGMDc7zhAV1coYMxXhN/WSfwhBe0a/gmnkOkiuxhE0UZl63kcJBJ4gBMS+8JVsV/4QvfIriJYKuKchil2uuYzjEOutgdk8F97Em56DbNOTeFNt7RryJnaQ9afzQHP6tTv8BjaRMjsEg9bMfP8Un1Jv4QGmCRGuIWduk2fts+C3wCojcuU/AEC20AAAAASUVORK5CYII="
        alt="login-rounded-right"
      />
    </TheButton>
  </form>
  <p class="text-sm text-cranberry-400">
    Already have an account?
    <NuxtLink to="/login" class="text-cranberry-400">Login</NuxtLink>
  </p>
</template>

<script setup lang="ts">
import { useForm } from "@formwerk/core";
import { userSchema } from "~/utils/userSchema";
import apiClient from "../utils/apiClient";
const schema = userSchema;
const { values, handleSubmit, isSubmitting } = useForm({ schema });
const submitForm = handleSubmit(async (data) => {
  console.log(JSON.stringify(data.toObject()));
  try {
    const response = await apiClient.post("/auth/register", data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
</script>
