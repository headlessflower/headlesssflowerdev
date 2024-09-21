<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const localTime = ref("");
let intervalId;

const updateTime = () => {
    const options = {
        timeZone: "America/Los_Angeles", // Set your desired time zone here
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    localTime.value = new Intl.DateTimeFormat("en-US", options).format(
        new Date(),
    );
};

onMounted(() => {
    updateTime(); // Initial update
    intervalId = setInterval(updateTime, 1000); // Update every second
});

onUnmounted(() => {
    clearInterval(intervalId); // Clean up the interval when component is unmounted
});
</script>

<template>
    <header class="flex justify-between w-full font-bold px-4 pt-4">
        <strong>headlessflower</strong>
        <nav class="w-1/3 px-4 flex justify-evenly">
            <NuxtLink to="/#work">Work</NuxtLink>
            <NuxtLink to="/">Services </NuxtLink>
            <NuxtLink to="/">Agency</NuxtLink>
            <NuxtLink to="/">Contact</NuxtLink>
        </nav>
        <p>Los Angeles-{{ localTime }}</p>
        <NuxtLink class="border-black border-b-2">Get a proposal</NuxtLink>
    </header>
</template>
