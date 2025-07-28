<script setup lang="ts">
const packages = [
  {
    name: 'Starter',
    description: '1-page scrollable website (Hero, About, Services, Contact)',
    hours: '15–20 hrs',
    price: '$1,400'
  },
  {
    name: 'Standard',
    description: '3–5 page responsive site with navigation, forms',
    hours: '25–35 hrs',
    price: '$2,200'
  },
  {
    name: 'Premium',
    description: 'Custom design system, animations, blog, form integration',
    hours: '45–55 hrs',
    price: '$4,000'
  }
]
</script>

<template>
  <section class="bg-gray-100 py-14 border-2 border-black  ">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Web Dev Pricing Packages</h2>

      <div class="grid md:grid-cols-3 gap-6 py-14 place-items-center  ">
        <div
            v-for="(packageItem, index) in packages"
            :key="index"
            class="bg-white  shadow-md p-6  hover:shadow-lg transition space-y-3 border-2 border-black"
        >
          <h3 class="text-2xl font-semibold mb-2">{{ packageItem.name }}</h3>
          <p class="text-gray-600 mb-4">{{ packageItem.description }}</p>

          <div class="text-lg font-bold text-gray-800"> Starting at
            {{ packageItem.price }}
          </div>

  <button class="cursor-pointer border-2 p-2 border-black hover:bg-yellow-200 duration-150 ">Learn More</button>


        </div>
      </div>
    </div>
    <WebDevAddoOnList/>
  </section>
</template>

<style scoped>

</style>