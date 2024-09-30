<script setup lang="ts">
interface Props {
  id: number;
}

defineProps<Props>();
</script>

<template>
  <section class="flex flex-col">
    <h1 class="text-3xl text-center font-bold">
      Pokemon <small class="text-blue-500">{{ id }}</small>
    </h1>

    <img
      class="size-[200px] mt-5"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      :alt="`Pokemon ${id}`"
    />

    <RouterLink
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="text-white text-center bg-blue-500 px-3 py-1 mt-5 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >Next</RouterLink
    >
  </section>
</template>
