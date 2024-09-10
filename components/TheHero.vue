<script setup></script>

<template>
    <div>
        <div class="hero-grid grid grid-rows-2 h-3/4">
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
                    <div class="hero-btns">
                        <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Get a Proposal
                        </button>
                        <button
                            type="button"
                            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Meet the Team
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="hero-image isolate bg-[url(/webdeveloper_2.webp)] rounded-md mx-6 h-[60rem] grid grid-cols-2"
            >
                <div
                    class="tracker-box h-60 w-96 z-10 mt-[40rem] ml-24 rounded-lg bg-white pt-32 shadow-lg"
                >
                    <div
                        class="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mx-6"
                    >
                        <div
                            class="bg-blue-600 h-2.5 rounded-full"
                            style="width: 75%"
                        ></div>
                    </div>
                    <div class="week">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div
                    class="developer-box h-60 w-96 z-10 ml-[25rem] mt-16 bg-no-repeat rounded-lg bg-white shadow-lg p-8"
                >
                    <p class="text-2xl">Gerardo Garcia</p>
                    <p class="role pt-2">Lead Developer</p>
                    <p class="description pt-8 uppercase">
                        He is always ready to turn complex ideas into
                        user-friendly digital experiences.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
