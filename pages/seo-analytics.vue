<script setup lang="ts">
useHead({
  title: "SEO and Analytics | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        "SEO audits and analytics strategy using technical review, competitor analysis, search visibility research, and authority-building recommendations.",
    },
  ],
  link: [{ rel: "canonical", href: "https://headlessflower.dev/seo-analytics" }],
});

const stats = [
  {
    label: "What it includes",
    value: "Technical review, search visibility analysis, competitor research, and an action plan.",
  },
  {
    label: "Best for",
    value: "Businesses that need clarity before spending time on random SEO tasks.",
  },
  {
    label: "Approach",
    value: "Tailored strategy based on your goals, market, content, and growth opportunities.",
  },
];

const sections = [
  {
    eyebrow: "Audit",
    title: "A clearer read on where growth is being blocked.",
    body:
      "We combine professional tools with manual review so you are not left with a generic export. The work is to understand what is limiting visibility and what decisions should come next.",
    items: [
      "Search performance and indexing review.",
      "Keyword landscape and content gap analysis.",
      "Competitor visibility benchmarking.",
      "On-page structure, metadata, and internal linking review.",
      "Technical checks for speed, crawl issues, schema, and site health.",
      "Authority signals, backlink opportunities, and brand discoverability.",
    ],
  },
  {
    eyebrow: "Signals",
    title: "SEO goes beyond fancy keywords.",
    cards: [
      {
        title: "Search visibility",
        body: "Keyword targeting matters when it connects to the actual pages, questions, and services your audience searches for.",
      },
      {
        title: "Authority building",
        body: "Stronger content, better signals, and a dependable presence help the business become easier to trust.",
      },
      {
        title: "Organic reach",
        body: "Social, brand mentions, useful content, and repeat visibility all reinforce discoverability.",
      },
      {
        title: "Analytics clarity",
        body: "Useful measurement helps you see what is working without drowning in dashboards.",
      },
    ],
  },
  {
    eyebrow: "Deliverable",
    title: "A prioritized plan instead of generic recommendations.",
    items: [
      "A clear picture of where your SEO stands right now.",
      "Specific opportunities for pages, content, and authority growth.",
      "A roadmap for technical fixes and conversion-supporting improvements.",
      "A strategy that connects search, content, and brand authority.",
    ],
  },
];
</script>

<template>
  <ServiceDetailPage
    eyebrow="SEO and analytics"
    title="Search strategy built around evidence, clarity, and authority."
    intro="We analyze where your business stands today, identify what is blocking growth, and shape a practical plan for better visibility and qualified traffic."
    :stats="stats"
    :sections="sections"
    cta-title="Start with an audit that leads somewhere useful."
    cta-text="We will analyze the current state, identify what matters, and map out a strategy you can act on."
    cta-label="Book an audit"
  />
</template>
