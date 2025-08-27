<template>
  <section class="px-6 md:px-12 lg:px-20 py-16 bg-gray-50 text-gray-800">
    <div class="max-w-5xl mx-auto">
      <!-- Page Header -->
      <header class="mb-12 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Competitor Analysis Workflow</h1>
        <p class="text-lg text-gray-600">
          Our step-by-step process for analyzing your business, benchmarking against competitors,
          and creating actionable SEO recommendations.
        </p>
      </header>

      <!-- Workflow Steps -->
      <div class="space-y-12">
        <div v-for="(step, index) in steps" :key="index" class="bg-white p-6 md:p-8 rounded-2xl shadow">
          <h2 class="text-xl font-semibold mb-4">
            <span class="text-blue-600 font-bold">Step {{ index + 1 }}:</span> {{ step.title }}
          </h2>
          <p class="mb-4 text-gray-700">{{ step.description }}</p>

          <div v-if="step.points" class="mb-4">
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li v-for="(point, i) in step.points" :key="i">{{ point }}</li>
            </ul>
          </div>

          <div v-if="step.tools" class="mt-4">
            <h3 class="font-semibold text-gray-800 mb-2">Tools:</h3>
            <ul class="list-disc pl-6 text-gray-700 space-y-1">
              <li v-for="(tool, i) in step.tools" :key="i">{{ tool }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Matrix Example -->
     

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <h2 class="text-2xl font-semibold mb-4">Ready to uncover opportunities?</h2>
        <p class="text-gray-700 mb-6">
          Let us analyze your competitors and position your business for success.
        </p>
        <NuxtLink
          to="/#contact"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-blue-700 transition"
        >
          Get Your Analysis
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: "Identify Competitors",
    description: "We determine both direct and indirect competitors in your niche.",
    points: [
      "Direct competitors: same products/services",
      "Indirect competitors: adjacent audience solutions",
    ],
    tools: ["Google search", "SEMrush/Ahrefs", "Google Search Console"],
  },
  {
    title: "Gather Benchmark Data",
    description: "Collect essential metrics to compare visibility and authority.",
    points: [
      "Domain authority / rating",
      "Traffic estimates",
      "Top pages and keyword distribution",
      "Backlink profile quality",
    ],
    tools: ["Ahrefs", "Moz Link Explorer", "SimilarWeb"],
  },
  {
    title: "Keyword Gap Analysis",
    description:
      "We compare keyword overlap and opportunities where competitors outrank you.",
    points: [
      "Keywords they rank for that you don’t",
      "Overlapping keywords",
      "Ranking strengths/weaknesses",
    ],
    tools: ["Ahrefs Content Gap", "SEMrush Keyword Gap", "Ubersuggest"],
  },
  {
    title: "Content Audit of Competitors",
    description:
      "Review competitor content depth, structure, and keyword usage.",
    points: [
      "Titles, headings, keyword placement",
      "Long-tail keyword use",
      "Content depth and multimedia",
      "Internal linking and CTAs",
    ],
    tools: ["Screaming Frog", "SEO Minion"],
  },
  {
    title: "Backlink Profile Review",
    description: "Analyze competitor backlinks for authority sources.",
    points: [
      "Guest posts, directories, publications",
      "Anchor text distribution",
      "Replication opportunities",
    ],
    tools: ["Ahrefs Backlink Checker", "Moz Link Explorer"],
  },
  {
    title: "SERP Feature Tracking",
    description:
      "Track competitor appearances in snippets, FAQs, and other SERP features.",
    tools: ["SEMrush SERP Overview", "Ahrefs SERP Checker", "Google search"],
  },
  {
    title: "Technical & UX Comparison",
    description: "Compare site performance and user experience factors.",
    points: [
      "Site speed & Core Web Vitals",
      "Mobile optimization",
      "Schema markup usage",
    ],
    tools: [
      "Google PageSpeed Insights",
      "GTMetrix",
      "Mobile-Friendly Test",
    ],
  },
  {
    title: "Synthesize Insights",
    description: "Build a competitor matrix to compare strengths and gaps.",
  },
  {
    title: "Action Plan",
    description: "Prioritize strategies to close keyword and content gaps.",
    points: [
      "Target low-competition keywords",
      "Strengthen outranked content",
      "Pursue competitor backlinks",
      "Create SERP-featured content",
    ],
  },
  {
    title: "Monitor & Iterate",
    description:
      "We continuously track and adapt based on ranking changes and new opportunities.",
  },
];
</script>

