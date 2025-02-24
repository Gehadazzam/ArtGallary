<template>
  <header
    class="bg-cranberry-400 text-white py-2 px-4 sm:opx-8 md:px-12 lg:px-24 flex justify-between items-center"
  >
    <NuxtLink to="/">
      <img src="/public/images/logo.png" alt="Logo" class="h-12 w-12" />
    </NuxtLink>
    <nav>
      <ul class="flex items-center space-x-4">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
        <li>
          <img
            width="48"
            height="48"
            @click="logOut"
            src="https://img.icons8.com/sci-fi/48/user-male-circle.png"
            alt="user-male-circle"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import apiClient from "~/utils/apiClient";

const logOut = async () => {
  try {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MWUyYzgxZi1mNWIwLTRjY2EtOWM2OC05OGUzYTVlZjE0NzciLCJyb2xlIjoiVVNFUiIsImp0aSI6IjU0NDkzNDRiLWY1OGYtNDY5OS04YjM4LTRmMTM2NGVlNzYyMiIsImlhdCI6MTc0MDM0NzE0OSwiZXhwIjoyMzQ1MTQ3MTQ5fQ.DMHkNeM5JKY1DCmEdehwsU3QLBbrAnHla4YgZm6SvfM";

    await apiClient.post("/auth/logout", {
      refreshToken: token,
    });
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    console.log("Session Cleared");
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  }
};
</script>
