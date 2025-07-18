<script setup>
import projects from "/data/projects.js";
</script>
<template>
    <section class="py-16 grid place-items-center" id="work">
        <h2 class="text-4xl font-bold mb-8">Our Work speaks for itself</h2>
        <div
            class="container rounded-lg grid md:grid-cols-3 gap-4 bg-gray-100 place-items-center py-6"
        >
            <div
                class="workcard shadow-md  max-w-96 p-4 hover:shadow-2xl space-y-4 duration-150"
                v-for="project in projects"
                :key="project.id"
            >
                <img
                    :src="project.img"
                    alt="project thumbnail"
                    width="400px"
                    class="rounded-lg mb-4"
                />
                <NuxtLink :to="project.link" class="font-semibold text-2xl">{{
                    project.name
                }}</NuxtLink>
                <div class="tech-icons text-2xl">
                    <Icon name="ri:vuejs-line" /><Icon
                        name="ri:tailwind-css-line"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
