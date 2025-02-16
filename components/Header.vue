<script setup lang="ts"></script>

<template>
  <header
    class="bg-cranberry-400 text-white py-2 px-4 sm:opx-8 md:px-12 lg:px-24 flex justify-between items-center"
  >
    <NuxtLink to="/">
      <img src="/public/images/logo.png" alt="Logo" class="h-12 w-12" />
    </NuxtLink>
    <nav>
      <ul class="flex space-x-4">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
