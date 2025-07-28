<script setup></script>

<template>
    <section id="hero">
        <div class="hero-grid grid mt-24 md:mt-16 md:grid-rows-2 h-3/4">
            <div class="grid md:grid-cols-2 place-items-center">
                <div class="w-1/2">
                    <h1 class="text-4xl">
                        We transform visions into masterpieces
                        <strong class="italic">for pioneering brands</strong>
                    </h1>
                    <div></div>
                </div>
                <div class="grid grid-cols-1 place-items-center p-16">
                    <p class="w-3/4 text-2xl">
                        Trusted by brands for exceptional design solutions
                    </p>
                    <div
                        class="tech-stack text-4xl my-8 space-x-8 w-3/4 flex justify-center"
                    >
                        <NuxtLink to="/">
                            <Icon name="ri:blender-line" />
                        </NuxtLink>
                        <NuxtLink to="/">
                            <Icon name="ri:javascript-line" />
                        </NuxtLink>
                        <Icon
                            name="ri:tailwind-css-line"
                            class="rounded-xl border-2 border-gray-300 shadow-sm p-4"
                        />
                        <Icon
                            name="ri:vuejs-line"
                            class="rounded-xl border-2 border-gray-300 shadow-sm p-4"
                        />
                    </div>
                    <div class="hero-btns">
                        <NuxtLink
                            to="/#contact"
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Get a Proposal
                        </NuxtLink>
                        <NuxtLink
                            to="/agency"
                            type="button"
                            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Meet the Team
                        </NuxtLink>
                    </div>
                </div>
            </div>


        </div>
    </section>
</template>
