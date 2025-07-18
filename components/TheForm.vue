<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
  agree: false,
})

const services = [
  'Website Design',
  'UI/UX Design',
  'Frontend Development',
  'Backend Development',
  'E-commerce Development',
  'Brand Identity',
  'SEO Optimization',
  'Maintenance & Support',
]

function handleSubmit() {
  console.log('Form submitted:', { ...form })
}
</script>

<template>
  <form
      class="bg-yellow-400 text-black  p-6 md:p-12"
      @submit.prevent="handleSubmit"
      id="contact"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <input
            type="text"
            v-model="form.name"
            placeholder="Name*"
            class="w-full px-4 py-3 bg-white placeholder-black text-black"
            required
        />
        <input
            type="tel"
            v-model="form.phone"
            placeholder="Phone number"
            class="w-full px-4 py-3 bg-white placeholder-black text-black"
        />
        <input
            type="email"
            v-model="form.email"
            placeholder="Email*"
            class="w-full px-4 py-3 bg-white placeholder-black text-black"
            required
        />
        <select
            v-model="form.service"
            class="w-full px-4 py-3 bg-white text-black"
        >
          <option disabled value="">Select a service</option>
          <option v-for="option in services" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="flex flex-col justify-between">
        <textarea
            v-model="form.message"
            placeholder="Message*"
            class="w-full h-48 px-4 py-3 bg-white placeholder-black text-black resize-none"
            required
        ></textarea>

        <div class="mt-6 md:self-end">
          <button
              type="submit"
              class="px-6 py-3 border-4 border-black font-bold hover:bg-black hover:text-yellow-400 transition-colors"
          >
            HEADLESS FLOWER
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center mt-6 text-sm">
      <input
          type="checkbox"
          v-model="form.agree"
          id="terms"
          class="mr-2"
          required
      />
      <label for="terms">
        I agree to the Headless Flower
        <span class="font-bold">Terms of Service</span> and
        <span class="font-bold">Privacy Policy</span>
      </label>
    </div>
  </form>
</template>

<style scoped>

</style>