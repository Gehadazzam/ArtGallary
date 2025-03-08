<template>
  <header
    class="bg-header text-white py-4 px-4 sm:opx-8 md:px-12 lg:px-24 flex justify-between items-center"
  >
    <NuxtLink to="/">
      <h2 class="text-2xl text-text-pink font-bold">Maroba</h2>
    </NuxtLink>
    <nav>
      <ul class="flex items-center space-x-4 lg:space-x-12">
        <li :class="{ active: activeLink === '/' }">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li :class="{ active: activeLink === '/story' }">
          <nuxt-link to="/story">Story</nuxt-link>
        </li>
        <li :class="{ active: activeLink === '/categories' }">
          <nuxt-link to="/categories">Categories</nuxt-link>
        </li>
        <li :class="{ active: activeLink === '/all_art' }">
          <nuxt-link to="/all_art">All Art</nuxt-link>
        </li>
      </ul>
    </nav>
    <NuxtLink to="/join_us">
      <TheButton>Login</TheButton>
    </NuxtLink>
  </header>
</template>
<script setup lang="ts">
import apiClient from "~/utils/apiClient";

const route = useRoute();
const activeLink = computed(() => route.path);

const logOut = async () => {
  try {
    const token = sessionStorage.getItem("refreshToken");
    await apiClient.post(
      "/auth/logout",
      JSON.stringify({ refreshToken: token }),
    );
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    console.log("Session Cleared");
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  }
};
</script>
<style scoped>
ul li {
  color: var(--color-text);
  cursor: pointer;
}

ul li.active {
  font-weight: bold;
}
</style>
