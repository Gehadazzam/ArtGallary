<script setup lang="ts">
import { useForm } from "@formwerk/core";

const authMode = ref("login");
const openPopup = ref(false);

const loginErrorMessage = ref("");
const {
  values: loginValues,
  handleSubmit: handleLoginSubmit,
  isSubmitting: isLoginSubmitting,
} = useForm({
  schema: loginSchema,
});

const registerErrorMessage = ref("");
const {
  values: registerValues,
  handleSubmit: handleRegisterSubmit,
  isSubmitting: isRegisterSubmitting,
} = useForm({
  schema: userSchema,
});

// Login form submission
const submitLoginForm = handleLoginSubmit(async (data) => {
  try {
    const response = await apiClient.post("/auth/login", data);
    sessionStorage.setItem("accessToken", response.data.accessToken);
    sessionStorage.setItem("refreshToken", response.data.refreshToken);
    window.location.href = "/";
    console.log(response);
  } catch (error) {
    if (
      error.response &&
      error.response.data &&
      error.response.data.error &&
      error.response.data.error.message
    ) {
      if (error.response.data.error.message === "Invalid credentials") {
        loginErrorMessage.value =
          "Invalid username or password, please try again.";
      } else {
        loginErrorMessage.value = error.response.data.error.message;
      }
    } else {
      console.error(error);
    }
  }
});

// Register form submission
const submitRegisterForm = handleRegisterSubmit(async (data) => {
  console.log("data");
  try {
    const response = await apiClient.post("/auth/register", data);
    openPopup.value = true;
    console.log(openPopup.value);
  } catch (error) {
    if (
      error.response &&
      error.response.data &&
      error.response.data.error &&
      error.response.data.error.message
    ) {
      registerErrorMessage.value = error.response.data.error.message;
    } else {
      console.error(error);
      registerErrorMessage.value = "An error occurred during registration";
    }
  }
});

const toggleAuthMode = () => {
  authMode.value = authMode.value === "login" ? "register" : "login";
  loginErrorMessage.value = "";
  registerErrorMessage.value = "";
};

const closePopUP = () => {
  openPopup.value = false;
};
const forgetPassowrd = () => {
  window.location.href = "/forget_password";
};
</script>

<template>
  <!-- Logo -->
  <NuxtLink to="/">
    <NuxtImg src="/images/logo.png" alt="logo" class="w-40 mx-auto mb-6" />
  </NuxtLink>
  <div class="w-2/3 sm:w-1/2 pb-4 mx-auto">
    <!-- Tab Buttons -->
    <div
      class="w-full flex bg-background mb-6 rounded-full border border-text p-1"
    >
      <button
        @click="authMode = 'register'"
        :class="[
          'flex-1 py-2 text-center rounded-full',
          authMode === 'register' ? 'bg-button text-white' : 'text-text',
        ]"
      >
        Sign Up
      </button>
      <button
        @click="authMode = 'login'"
        :class="[
          'flex-1 py-2 text-center rounded-full',
          authMode === 'login' ? 'bg-button text-white' : 'text-text',
        ]"
      >
        Sign In
      </button>
    </div>

    <!-- Login Form -->
    <form
      v-if="authMode === 'login'"
      @submit.prevent="submitLoginForm"
      class="w-full flex pb-16 flex-col gap-2 relative"
    >
      <TextField name="identifier" label="Email or Username" required />
      <TextField name="password" label="Password" type="password" required />
      <p
        class="underline text-text text-right absolute top-18 right-0 cursor-pointer"
        @click="forgetPassowrd"
      >
        Forget Password?
      </p>
      <p
        v-show="loginErrorMessage"
        class="mt-4 border border-cranberry-400 rounded p-2 bg-cranberry-100 text-center text-sm text-cranberry-400"
      >
        {{ loginErrorMessage }}
      </p>
      <TheButton :disabled="isLoginSubmitting" type="submit" class="w-full">
        {{ isLoginSubmitting ? "Logging in..." : "Login" }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nM3TUUqCURAF4J+MelFXILmKENTA1Si1CteQuQJRtxDtxUpsEb59MXTJ+Pv/bqAPnrfLmTn3cGamKE4N3GGJLfb4wBrDXGMDc7zhAV1coYMxXhN/WSfwhBe0a/gmnkOkiuxhE0UZl63kcJBJ4gBMS+8JVsV/4QvfIriJYKuKchil2uuYzjEOutgdk8F97Em56DbNOTeFNt7RryJnaQ9afzQHP6tTv8BjaRMjsEg9bMfP8Un1Jv4QGmCRGuIWduk2fts+C3wCojcuU/AEC20AAAAASUVORK5CYII="
          alt="login-rounded-right"
        />
      </TheButton>
    </form>

    <!-- Register Form -->
    <form
      v-else
      @submit.prevent="submitRegisterForm"
      class="w-full flex flex-col gap-2"
    >
      <TextField name="email" label="Email" required />
      <TextField name="username" label="Name" required />
      <TextField name="password" label="Password" type="password" required />
      <TextField
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        required
      />
      <p
        v-show="registerErrorMessage"
        class="mt-4 border border-cranberry-400 rounded p-2 bg-cranberry-100 text-center text-sm text-cranberry-400"
      >
        {{ registerErrorMessage }}
      </p>
      <TheButton :disabled="isRegisterSubmitting" type="submit" class="w-full">
        {{ isRegisterSubmitting ? "Creating account..." : "Create account" }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nM3TUUqCURAF4J+MelFXILmKENTA1Si1CteQuQJRtxDtxUpsEb59MXTJ+Pv/bqAPnrfLmTn3cGamKE4N3GGJLfb4wBrDXGMDc7zhAV1coYMxXhN/WSfwhBe0a/gmnkOkiuxhE0UZl63kcJBJ4gBMS+8JVsV/4QvfIriJYKuKchil2uuYzjEOutgdk8F97Em56DbNOTeFNt7RryJnaQ9afzQHP6tTv8BjaRMjsEg9bMfP8Un1Jv4QGmCRGuIWduk2fts+C3wCojcuU/AEC20AAAAASUVORK5CYII="
          alt="login-rounded-right"
        />
      </TheButton>
    </form>
    <RegisterationPopUp @close="closePopUP" v-if="openPopup" />
  </div>
</template>
