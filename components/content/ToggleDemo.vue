<script setup lang="ts">
import { useToggleEvents } from '@/composables/useToggleEvents'
import { ref } from 'vue'
const el = ref(null)
const [onDarkMode, onLightMode, toggleDarkMode, isDark] = useToggleEvents()



onLightMode(() => {
  document.documentElement.classList.remove('dark')
})

onDarkMode(() => {
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <main class="min-h-[500px] flex items-center justify-center">
    <button ref="el"
      class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      @click="toggleDarkMode">
      Toggle {{ isDark ? 'Light' : 'Dark' }} Mode
    </button>
  </main>
</template>
