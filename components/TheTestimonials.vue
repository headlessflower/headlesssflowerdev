
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const testimonials = [
  {
    name: 'Alex Rivera',
    company: 'ELA Compost',
    quote:
        'Headless Flower completely revamped our online presence. Their design instincts are top-tier.',
  },
  {
    name: 'Tina Luo',
    company: 'SnapStudio!!',
    quote:
        'They understood our brand immediately and created something even better than we imagined.',
  },
  {
    name: 'Jordan Malik',
    company: 'VerifiedTransport',
    quote:
        'Incredible attention to detail, quick turnaround, and stunning results. Highly recommend!',
  },
  {
    name: 'Sasha Kim',
    company: 'Kim Digital',
    quote:
        'Working with Headless Flower was a seamless experience from start to finish.',
  },
]

const currentSlide = ref(0)
const slideWidth = 400 // matches min-w of slides
let autoScrollInterval = null

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

function prevSlide() {
  currentSlide.value =
      (currentSlide.value - 1 + testimonials.length) % testimonials.length
}

function startAutoScroll() {
  stopAutoScroll() // clear any existing
  autoScrollInterval = setInterval(() => {
    nextSlide()
  }, 4000)
}

function pauseAutoScroll() {
  stopAutoScroll()
}

function stopAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
    autoScrollInterval = null
  }
}

onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  stopAutoScroll()
})
</script>
<template>
  <section
      class="bg-white  px-6 py-12 rounded-t-2xl relative"
      @mouseenter="pauseAutoScroll"
      @mouseleave="startAutoScroll"
  >
    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
      What Our Clients Say
    </h2>

    <!-- Carousel Wrapper -->
    <div class="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 m-auto w-3/4 self-center">
      <!-- Slide Track -->
      <div
          ref="carousel"
          class="flex gap-6 transition-transform duration-500 ease-in-out whitespace-nowrap"
          :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }"
      >
        <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="min-w-[300px] md:min-w-[400px] mx-w-[30rem] bg-white text-black p-6  shadow-lg shrink-0 py-16"
        >
          <p class="italic mb-4">"{{ testimonial.quote }}"</p>
          <div class="font-bold">{{ testimonial.name }}</div>
          <div class="text-sm">{{ testimonial.company }}</div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
          class="absolute top-1/2 -translate-y-1/2 left-2 bg-black text-yellow-400 p-2  z-8"
          @click="prevSlide"
          aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
          class="absolute top-1/2 -translate-y-1/2 right-2 bg-black text-yellow-400 p-2  z-8"
          @click="nextSlide"
          aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  </section>
</template>


