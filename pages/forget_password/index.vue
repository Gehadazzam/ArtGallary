<template>
  <div>
    <div class="flex items-center space-x-6">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiklEQVR4nO3WsQ0CMQxA0b+BMwKrMwMlVEdDQFQMwChck+soERdb/0np82UrCkiSJEl/FMAJOJI8ogMf4EHiiNuIeAMHEooqEd2ICbQKk2hVIu5GTKBVmcRzROx5rlVCll9NJf1qlXp2N8bMKiqtWVT4vm+MmVVUW7M+Yl4kF8AZuOx9EUmSJIlvVlJ6fkh04wrSAAAAAElFTkSuQmCC"
        alt="left--v1"
      />
      <h2 class="text-text-gray font-bold">Reset Password</h2>
    </div>

    <form v-if="!isEmailSent" @submit.prevent="handleForgetPass">
      <h4>We will send a link to you to reset your password</h4>
      <textField name="email" label="Email" required />
      <TheButton type="submit">Send Link</TheButton>
    </form>
    <div v-else></div>
  </div>
</template>
<script setup lang="ts">
import { useForm } from "@formwerk/core";

const schema = emailSchema;
const isEmailSent = ref(false);
const { values, handleSubmit, isSubmitting } = useForm({ schema });

const handleForgetPass = handleSubmit(async (data) => {
  try {
    await apiClient.post("auth/forgot-password", data);
    isEmailSent.value = true;
  } catch (error) {
    alert("An error occurred. Please try again");
  }
});
</script>
