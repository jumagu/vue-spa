<script setup lang="ts">
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue';
</script>

<template>
  <main class="w-full h-screen flex flex-col items-center justify-center">
    <img class="w-1/2 md:1/3 lg:w-1/4" src="../assets/not-found.svg" alt="Page Not Found" />
    <div class="flex flex-col items-center justify-center">
      <p class="text-center text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">Page Not Found</p>
      <p class="text-center md:text-lg lg:text-xl text-gray-600 mt-8">
        Sorry, the page you are looking for could not be found.
      </p>
      <RouterLink
        replace
        :to="{ name: 'home' }"
        class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
        title="Return Home"
      >
        <ArrowLeftIcon class="h-5 w-5" />
        <span>Return Home</span>
      </RouterLink>
    </div>
  </main>
</template>
