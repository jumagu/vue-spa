<template>
  <div class="flex flex-col h-screen">
    <header
      class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8 py-4"
    >
      <div class="w-10 mr-2">
        <RouterLink :to="{ name: 'home' }">
          <img src="@/assets/logo.svg" alt="Vue logo" />
        </RouterLink>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6 overflow-auto">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="features">Features</RouterLink>
        <RouterLink to="pricing">Pricing</RouterLink>
        <RouterLink to="contact">Contact</RouterLink>
        <RouterLink
          :to="{ name: 'login' }"
          class="text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 transition-colors duration-300 whitespace-nowrap"
        >
          Log in
        </RouterLink>
      </nav>
    </header>

    <main class="flex flex-1 items-center justify-center">
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </main>

    <footer
      class="relative flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8 py-4"
    >
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} XYZ Corporation. All rights reserved
      </p>
      <RouterLink
        class="pokeball md:absolute right-4 md:right-6"
        :to="{ name: 'pokemon', params: { id: 1 } }"
      />
    </footer>
  </div>
</template>
