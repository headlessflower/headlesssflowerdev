<script setup lang="ts">
useHead({
  title: "Brand-Aligned Design | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        "Brand-aligned digital design systems that keep websites, landing pages, and interface components consistent across every screen.",
    },
  ],
  link: [{ rel: "canonical", href: "https://headlessflower.dev/brand-aligned-design" }],
});

const stats = [
  {
    label: "Best for",
    value: "Teams that need a more consistent digital presence across pages, campaigns, and tools.",
  },
  {
    label: "Primary outcome",
    value: "A clearer visual system that makes the brand feel credible, memorable, and easier to extend.",
  },
  {
    label: "Engagement model",
    value: "Scoped design-system work or ongoing support after launch.",
  },
];

const sections = [
  {
    eyebrow: "Why",
    title: "A brand is also how the interface behaves.",
    body:
      "A strong brand is not only a logo. It is the rhythm, hierarchy, interaction, and consistency people experience every time they meet the business online.",
  },
  {
    eyebrow: "Approach",
    title: "We translate identity into reusable digital building blocks.",
    items: [
      "Type, spacing, and color decisions that hold together across breakpoints.",
      "Reusable components for buttons, cards, headers, forms, and repeated layouts.",
      "Responsive rules so the design feels intentional on mobile and desktop.",
      "Motion and interaction choices that add personality without getting noisy.",
      "Accessibility and contrast checks baked into the design decisions.",
    ],
  },
  {
    eyebrow: "In practice",
    title: "A sharper system makes future work easier to ship.",
    cards: [
      {
        title: "Consistent pages",
        body: "Marketing pages, service pages, and landing pages feel related instead of patched together.",
      },
      {
        title: "Reusable parts",
        body: "Design once, then reuse the right patterns without re-solving every interface choice.",
      },
      {
        title: "Faster campaigns",
        body: "New campaigns and content can move faster while still feeling like the same brand.",
      },
      {
        title: "Cleaner handoff",
        body: "The system becomes easier for owners, collaborators, and future builders to understand.",
      },
    ],
  },
];
</script>

<template>
  <ServiceDetailPage
    eyebrow="Brand-aligned design"
    title="Digital systems that make your brand feel consistent everywhere."
    intro="We shape the visual language, components, and responsive rules that help your website and tools feel calm, recognizable, and trustworthy."
    :stats="stats"
    :sections="sections"
    cta-title="Align the brand online."
    cta-text="We will evaluate your current design, map the gaps, and create a system that brings your identity to life consistently."
    cta-label="Get a design review"
  />
</template>
