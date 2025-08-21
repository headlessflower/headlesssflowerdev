<script setup lang="ts">
const packages = [
  {
    name: 'Starter',
    description: '1-page scrollable website (Hero, About, Services, Contact)',
    hours: '15–20 hrs',
    price: '$1,400',
    link: "starter-package"
  },
  {
    name: 'Standard',
    description: '3–5 page responsive site with navigation, forms',
    hours: '25–35 hrs',
    price: '$2,200',
    link: "standard-package",
  },
  {
    name: 'Premium',
    description: 'Custom design system, animations, blog, form integration',
    hours: '45–55 hrs',
    price: '$4,000',
    link: "premium-package",
  }
]
</script>

<template>
  <section class="bg-gray-100 py-12  ">
    <div class="max-w-6xl mx-auto px-4 ">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Web Dev Pricing Packages</h2>

      <div class="grid md:grid-cols-3 gap-6 py-16 place-items-center  ">
        <div
            v-for="(packageItem, index) in packages"
            :key="index"
            class="bg-white flex flex-col md:space-y-8  shadow-md p-6  hover:shadow-lg transition space-y-3 border-2 border-black rounded-md"
        >
          <h3 class="text-2xl font-semibold mb-2">{{ packageItem.name }}</h3>
          <p class="text-gray-600 mb-4">{{ packageItem.description }}</p>

          <div class="text-lg font-bold text-gray-800 "> Starting at
            {{ packageItem.price }}
          </div>

  <NuxtLink :to="packageItem.link" class="cursor-pointer border-2 p-2 md:w-1/2 text-center border-black hover:bg-yellow-200 duration-150 mt-8 rounded-md">Learn More</NuxtLink>


        </div>
      </div>
    </div>
    <WebDevAddoOnList/>
  </section>
</template>

<style scoped>

</style>