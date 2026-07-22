<script setup lang="ts">
useHead({
  title: "Business Systems | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        "White-label business systems for small teams that need dashboards, customer records, and internal workflows in one branded tool.",
    },
  ],
  link: [{ rel: "canonical", href: "https://headlessflower.dev/white-label-business-apps" }],
});

const stats = [
  {
    label: "Best for",
    value: "Small businesses that have outgrown spreadsheets, inboxes, and disconnected tools.",
  },
  {
    label: "Primary outcome",
    value: "A branded internal system for customer information, workflows, and admin tasks.",
  },
  {
    label: "Engagement model",
    value: "$475/month with a 6-month minimum contract.",
  },
];

const sections = [
  {
    eyebrow: "Covers",
    title: "One place to run the essentials.",
    body:
      "When forms, customer records, booking details, and internal workflows are scattered everywhere, simple work gets harder.",
    items: [
      "Admin dashboards for inquiries, appointments, or customer activity.",
      "Customer records stored in one place instead of scattered across notes.",
      "Custom intake workflows that match how your business already operates.",
      "Internal tools that reduce repetitive admin work.",
      "Branded interfaces that feel like part of your business.",
    ],
  },
  {
    eyebrow: "Examples",
    title: "Useful software without the enterprise drag.",
    cards: [
      {
        title: "Booking admin",
        body: "Review requests, assign statuses, and keep scheduling details organized.",
      },
      {
        title: "Customer records hub",
        body: "Store notes, contact details, and intake history in a searchable place.",
      },
      {
        title: "Operations dashboard",
        body: "Give the team one view for pending work, customer activity, and reporting.",
      },
      {
        title: "Role-based tools",
        body: "Different views and permissions for owners, staff, and admins.",
      },
    ],
  },
  {
    eyebrow: "Difference",
    title: "This is about operational usefulness, not only marketing.",
    body:
      "The public site can still be part of the system, but the real value is having customer-facing and internal tools working together instead of living in separate silos.",
  },
];
</script>

<template>
  <ServiceDetailPage
    eyebrow="Business systems"
    title="Branded tools that make daily operations easier to run."
    intro="We create dashboards, customer records, internal workflows, and lightweight business apps that help small teams work with less scatter."
    :stats="stats"
    :sections="sections"
    cta-title="Talk through your workflow."
    cta-text="We can map the manual steps in your business and turn them into a simpler branded system."
  />
</template>
