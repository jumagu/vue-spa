<script src="./HomePage.ts" lang="ts"></script>

<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">Welcome to our web site</h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p class="mt-1">Counter: {{ counter }}</p>
    <button
      class="mt-1 text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 transition-colors duration-300"
      @click="counter++"
    >
      +1
    </button>
  </div>
</template>
