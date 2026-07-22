<script setup lang="ts">
useHead({
  title: "Lead Capture and Booking | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        "Forms, intake flows, and booking systems designed to reduce friction and turn more visitors into qualified inquiries.",
    },
  ],
  link: [{ rel: "canonical", href: "https://headlessflower.dev/lead-capture-booking" }],
});

const stats = [
  {
    label: "Best for",
    value: "Businesses with traffic that needs a better path to inquiries, calls, or bookings.",
  },
  {
    label: "Primary outcome",
    value: "A smoother intake experience that helps more visitors complete the next step.",
  },
  {
    label: "Engagement model",
    value: "$350/month with a 6-month minimum contract.",
  },
];

const sections = [
  {
    eyebrow: "Covers",
    title: "The conversion layer, rebuilt with less friction.",
    body:
      "Traffic is not enough if visitors hit a clunky form, a confusing intake path, or booking choices that feel bolted on.",
    items: [
      "Contact forms that are easier to complete and easier for you to process.",
      "Intake questions that qualify leads before they waste your time.",
      "Booking paths for consultations, appointments, or quote requests.",
      "Clearer calls to action around the moments where visitors decide.",
      "Reporting on where people stall and what to improve next.",
    ],
  },
  {
    eyebrow: "Use cases",
    title: "Built for the messy middle between interest and action.",
    cards: [
      {
        title: "Shorter, smarter forms",
        body: "Capture what you actually need while removing avoidable friction.",
      },
      {
        title: "Clear booking choices",
        body: "Help visitors understand whether to book, request a quote, or ask a question.",
      },
      {
        title: "Follow-up readiness",
        body: "Structure the data so your team can respond quickly and consistently.",
      },
      {
        title: "Conversion visibility",
        body: "Track where users stall so the system can keep getting better.",
      },
    ],
  },
  {
    eyebrow: "Fit",
    title: "A good fit when your existing attention is leaking.",
    items: [
      "Low form completion rates.",
      "Visitors asking basic questions the site should answer.",
      "Messy intake spread across email, texts, and DMs.",
      "Booking tools that do not feel connected to the customer journey.",
    ],
  },
];
</script>

<template>
  <ServiceDetailPage
    eyebrow="Lead capture"
    title="Inquiry systems that turn attention into qualified action."
    intro="We design forms, intake paths, booking flows, and follow-up systems so interested visitors have a clearer way to become real conversations."
    :stats="stats"
    :sections="sections"
    cta-title="Improve your inquiry flow."
    cta-text="Turn more of your existing traffic into useful conversations, qualified leads, and cleaner handoffs."
  />
</template>
