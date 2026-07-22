<script setup lang="ts">
useHead({
  title: "Maintenance and Upkeep | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        "Monthly maintenance and upkeep for websites and customer systems, including updates, content edits, performance checks, and reporting.",
    },
  ],
  link: [{ rel: "canonical", href: "https://headlessflower.dev/maintenance-upkeep" }],
});

const stats = [
  {
    label: "Best for",
    value: "Businesses that want dependable upkeep without adding another operational burden.",
  },
  {
    label: "Primary outcome",
    value: "A site and customer system that stays current, safe, and less likely to break.",
  },
  {
    label: "Engagement model",
    value: "Starting at $150/month with a 6-month minimum contract.",
  },
];

const sections = [
  {
    eyebrow: "Includes",
    title: "The quiet work that keeps the system healthy.",
    items: [
      "Security updates and routine software maintenance.",
      "Content edits and small change requests.",
      "Performance checks and issue prevention.",
      "Form testing, uptime checks, and monitoring.",
      "Simple reporting so you know what is happening without digging into tools.",
    ],
  },
  {
    eyebrow: "Why",
    title: "Small issues compound when nobody owns them.",
    body:
      "Launch is only the start. Ongoing upkeep keeps your site secure, current, fast, and reliable so you are not losing opportunities to broken forms, stale copy, or preventable issues.",
  },
  {
    eyebrow: "Support",
    title: "Useful help for the parts that quietly matter.",
    cards: [
      {
        title: "Keeping offers current",
        body: "Update service details, testimonials, contact paths, and calls to action as the business changes.",
      },
      {
        title: "Preventing silent failures",
        body: "Catch broken forms, poor mobile rendering, or performance regressions before they hurt sales.",
      },
      {
        title: "Reducing technical debt",
        body: "Keep the site supportable instead of letting fixes pile up until a redesign feels unavoidable.",
      },
      {
        title: "Staying informed",
        body: "Get plain-language updates on what changed, what needs attention, and what to do next.",
      },
    ],
  },
];
</script>

<template>
  <ServiceDetailPage
    eyebrow="Maintenance"
    title="Upkeep that keeps your customer-facing system reliable."
    intro="We handle updates, edits, monitoring, testing, and practical improvements so the site stays healthy after launch."
    :stats="stats"
    :sections="sections"
    cta-title="Keep the system healthy."
    cta-text="Security, edits, monitoring, and practical upkeep under one roof."
    cta-label="Start maintenance"
  />
</template>
