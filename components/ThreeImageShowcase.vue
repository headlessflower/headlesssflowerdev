<template>
  <section class="showcase" :aria-label="ariaLabel">
    <div class="showcase__grid">
      <article
          v-for="(item, idx) in items"
          :key="idx"
          class="showcase__item"
      >
        <figure class="showcase__figure" :style="figureStyle">
          <img
              class="showcase__img"
              :src="item.src"
              :alt="item.alt ?? defaultAlt(idx)"
              loading="lazy"
          />
        </figure>

        <p class="showcase__desc">
          {{ item.description }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  ariaLabel: { type: String, default: "Feature screenshots" },

  // expected shape: [{ src: string, description: string, alt?: string }]
  items: {
    type: Array,
    required: true,
    validator(value) {
      if (!Array.isArray(value)) return false
      if (value.length !== 3) return false
      return value.every((v) =>
          v &&
          typeof v.src === "string" &&
          v.src.length > 0 &&
          typeof v.description === "string" &&
          v.description.length > 0 &&
          (v.alt === undefined || typeof v.alt === "string")
      )
    },
  },

  // Fixed height for image area (px)
  imageHeight: { type: Number, default: 220 },
})

const figureStyle = computed(() => ({
  height: `${props.imageHeight}px`,
}))

function defaultAlt(idx) {
  return `Fetchr screenshot ${idx + 1}`
}
</script>

<style scoped>
.showcase__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 920px) {
  .showcase__grid {
    grid-template-columns: 1fr;
  }
}

.showcase__item {
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  overflow: hidden;

  /* ensures descriptions align nicely when different lengths happen */
  display: grid;
  grid-template-rows: auto 1fr;
}

.showcase__figure {
  margin: 0;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(15, 23, 42, 0.02);
  overflow: hidden; /* crops image cleanly */
}

.showcase__img {
  width: 100%;
  height: 100%;
  display: block;

  /* key: consistent sizing without distortion */
  object-fit: cover;
  object-position: center;
}

.showcase__desc {
  margin: 0;
  padding: 0.95rem 1rem;
  color: rgba(15, 23, 42, 0.74);
  line-height: 1.55;
  font-size: 0.95rem;
}
</style>
