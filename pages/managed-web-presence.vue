<script setup lang="ts">
useHead({
  title: "Managed Web Presence | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        "Managed web presence for small businesses that need ongoing page updates, positioning support, uptime, and steady monthly improvements.",
    },
  ],
  link: [{ rel: "canonical", href: "https://headlessflower.dev/managed-web-presence" }],
});

const stats = [
  {
    label: "Best for",
    value: "Service businesses that need a polished web presence without managing it alone.",
  },
  {
    label: "Primary outcome",
    value: "More trust, cleaner messaging, and a site that stays current month after month.",
  },
  {
    label: "Engagement model",
    value: "$200/month with a 6-month minimum contract.",
  },
];

const sections = [
  {
    eyebrow: "Meaning",
    title: "A website treated like a managed business asset.",
    body:
      "This is not just a site sitting online. It is ongoing care for the pages customers see, the positioning they read, and the trust signals that influence whether they contact you.",
  },
  {
    eyebrow: "Included",
    title: "The visible parts stay aligned with the business.",
    items: [
      "Homepage and key service-page updates as your offer evolves.",
      "Messaging refinement so the site speaks clearly to the right customer.",
      "Basic uptime monitoring and routine maintenance.",
      "Content edits, page swaps, and small monthly improvements.",
      "Analytics visibility so you are not guessing what is working.",
    ],
  },
  {
    eyebrow: "Use cases",
    title: "For teams that need steadier visibility with less overhead.",
    cards: [
      {
        title: "Local service businesses",
        body: "Keep service pages, calls to action, and credibility signals fresh without chasing a developer every time.",
      },
      {
        title: "Growing operators",
        body: "Maintain a stronger online presence while staying focused on delivery, sales, and client work.",
      },
      {
        title: "Offer changes",
        body: "Keep pricing, service details, and positioning from drifting out of date.",
      },
      {
        title: "Conversion cleanup",
        body: "Make small, measured improvements instead of waiting for another full redesign.",
      },
    ],
  },
];
</script>

<template>
  <ServiceDetailPage
    eyebrow="Managed presence"
    title="Steady visibility for businesses that cannot let the site sit still."
    intro="We handle updates, positioning, uptime, content edits, and ongoing improvements so your web presence keeps supporting the business after launch."
    :stats="stats"
    :sections="sections"
    cta-title="Start with a managed web presence review."
    cta-text="Clear positioning, lighter upkeep, and a site that keeps working after launch."
  />
</template>
