<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const localTime = ref("");
let timer;

function updateLocalTime() {
    const now = new Date();
    localTime.value = now.toLocaleTimeString();
}

onMounted(() => {
    // Update time immediately
    updateLocalTime();

    // Update time every second
    timer = setInterval(updateLocalTime, 1000);
});

onUnmounted(() => {
    // Clear the interval when the component is unmounted
    if (timer) {
        clearInterval(timer);
    }
});
</script>
<template>
    <header class="flex justify-between w-full font-bold px-4">
        <strong>headlessflower</strong>
        <nav class="w-1/3 px-4 flex justify-evenly">
            <NuxtLink to="/">Work</NuxtLink>
            <NuxtLink to="/">Services </NuxtLink>
            <NuxtLink to="/">Agency</NuxtLink>
            <NuxtLink to="/">Contact</NuxtLink>
        </nav>
          <p>localtime-{{ localTime }}</p>
        <NuxtLink class="border-black border-b-2">Get a proposal</NuxtLink>
    </header>
</template>
