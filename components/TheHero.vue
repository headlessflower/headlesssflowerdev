<script setup></script>

<template>
    <div>
        <TheHeader />
        <div class="hero-grid grid grid-rows-2">
            <div class="grid grid-cols-2 place-items-center">
                <div class="w-1/2">
                    <h1 class="text-4xl">
                        We transform visions into masterpieces
                        <strong class="italic">for pioneering brands</strong>
                    </h1>
                    <div></div>
                </div>
                <div class="grid grid-cols-1 place-items-center p-16">
                    <p class="w-3/4 text-2xl">
                        trusted by brands for exceptional design solutions
                    </p>
                    <div class="tech-stack text-4xl my-8 space-x-8">
                        <NuxtLink to="/">
                            <Icon name="ri:blender-line p-0" />
                        </NuxtLink>
                        <Icon
                            name="ri:settings-2-line"
                            class="rounded-xl border-2 border-gray-300 shadow-sm"
                        />
                        <Icon
                            name="ri:inbox-fill"
                            class="rounded-xl border-2 border-gray-300 shadow-sm p-4"
                        />
                        <Icon
                            name="ri:blender-line"
                            class="rounded-xl border-2 border-gray-300 shadow-sm p-4"
                        />
                    </div>
                </div>
            </div>
            <div class="hero-image">
                <img
                    src="/webdeveloper_2.webp"
                    alt="Fullstack developer working at his desk"
                />
            </div>
        </div>
    </div>
</template>
