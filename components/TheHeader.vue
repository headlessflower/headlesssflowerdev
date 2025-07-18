<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const localTime = ref("");
let intervalId;

const updateTime = () => {
    const options = {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    localTime.value = new Intl.DateTimeFormat("en-US", options).format(
        new Date(),
    );
};

onMounted(() => {
    updateTime();
    intervalId = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    clearInterval(intervalId);
});

const isMenuOpen = ref(false)
</script>

<template>
    <header class="flex justify-between w-full font-bold px-4 pt-4 py-6 drop-shadow-sm fixed top-0 bg-white z-10">

      <div class=" hidden md:flex justify-between items-center w-full">


        <NuxtLink to="/">headlessflower</NuxtLink>
        <nav class="w-1/3 px-4 flex justify-evenly">
            <NuxtLink to="/#work" class="hover:text-blue-600 duration-150">Work</NuxtLink>
            <NuxtLink to="/services" class="hover:text-blue-600 duration-150">Services </NuxtLink>
            <NuxtLink to="/agency" class="hover:text-blue-600 duration-150">About</NuxtLink>
        </nav>
        <p>Los Angeles-{{ localTime }}</p>
        <NuxtLink to="/#footer" class="border-black border-b-2 hover:border-blue-600 hover:text-blue-600 duration-150 ">Get a proposal</NuxtLink>
      </div>
      <!-- Mobile Hamburger Icon -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>


      <!-- Mobile Menu -->
      <transition name="fade">
        <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md">
          <div class="flex flex-col px-6 py-4 gap-4">
            <NuxtLink @click.native="isMenuOpen = false" to="/">Home</NuxtLink>
            <NuxtLink @click.native="isMenuOpen = false" to="/services">Services</NuxtLink>
            <NuxtLink @click.native="isMenuOpen = false" to="/agency">Agency</NuxtLink>
            <NuxtLink @click.native="isMenuOpen = false" to="/work">Work</NuxtLink>
            <NuxtLink @click.native="isMenuOpen = false" to="/contact" class="bg-black text-white px-4 py-2 rounded-full text-center">Contact</NuxtLink>
          </div>
        </div>
      </transition>
    </header>
</template>
<style>


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>