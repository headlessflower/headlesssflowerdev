<script setup lang="ts">
const addons = [
  {
    name: 'SEO Audit + Metadata Optimization',
    price: '$300–$600',
  },
  {
    name: 'Copywriting (per page)',
    price: '$150–$300',
  },
  {
    name: 'Branding Package (logo, color, type system)',
    price: '$800–$1,200',
  },
  {
    name: 'CMS Integration (e.g., Sanity, Contentful)',
    price: '$500–$1,000',
  },
]
</script>

<template>
  <section class="bg-white py-12">
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Additional Services</h2>

      <ul class="grid md:grid-cols-2 gap-6">
        <li
            v-for="(addon, index) in addons"
            :key="index"
            class="bg-gray-50  shadow-sm p-6 border hover:shadow-md transition"
        >
          <h3 class="text-xl font-semibold mb-1">{{ addon.name }}</h3>
          <p class="text-gray-700 font-medium">{{ addon.price }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

</style>