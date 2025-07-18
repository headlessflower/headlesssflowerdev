<script setup lang="ts">
import { ref } from 'vue'

const isHovered = ref(false)
</script>

<template>
  <footer
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      :class="[
      'transition-colors duration-300 ease-in-out w-full px-6 py-16 flex flex-col md:flex-row justify-between items-start md:items-center ',
      isHovered ? 'bg-yellow-400' : 'bg-white'
    ]"
  >
    <div class="flex flex-col space-y-2 text-sm font-bold text-black uppercase">
      <NuxtLink to="/terms" class="hover:text-white duration-150">Terms&Conditions</NuxtLink>
      <NuxtLink to="/services" class="hover:text-white duration-150">Services</NuxtLink>
      <NuxtLink to="/#work" class="hover:text-white duration-150">Work</NuxtLink>
    </div>
    <div class="space-y-2 text-sm font-bold text-black text-right mt-10 md:mt-0">
      <NuxtLink to="#hero" class="uppercase hover:text-white duration-150">back to top</NuxtLink>
      <p class="uppercase hover:text-white duration-150">headlessflowerdev@gmail.com</p>
      <p class="uppercase hover:text-white duration-150">headlessflower © 2025</p>
    </div>
  </footer>
</template>

<style scoped>

</style>