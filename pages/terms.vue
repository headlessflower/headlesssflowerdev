<script setup>
const terms = [
  {
    title: '1. Scope of Services',
    content: [
      'We provide a range of digital services, including but not limited to:',
      '• Web design and development',
      '• UX/UI design',
      '• Web application development',
      '• Hosting and maintenance',
      '• SEO',
      '• Branding and content creation',
      'All services will be detailed in a project proposal or contract.'
    ]
  },
  {
    title: '2. Payment Terms',
    content: [
      'A deposit is required before work begins (typically 30–50%).',
      'The remaining balance is due upon completion or per the agreed schedule.',
      'Late payments may incur a 1.5% monthly fee.',
      'Work may be paused for overdue accounts.'
    ]
  },
  {
    title: '3. Client Responsibilities',
    content: [
      'Provide all content, feedback, and approvals on time.',
      'Ensure all submitted assets are properly licensed.',
      'Respond promptly to communication.',
      'Delays from the client may affect timeline and pricing.'
    ]
  },
  {
    title: '4. Revisions and Changes',
    content: [
      'Each phase includes up to 1–3 rounds of revisions.',
      'Additional revisions or out-of-scope work will be billed separately.',
      'Major changes after approval may require a new agreement.'
    ]
  },
  {
    title: '5. Intellectual Property',
    content: [
      'Client owns the final deliverables upon full payment.',
      'Agency may showcase work in portfolios unless otherwise stated.',
      'Third-party assets are bound by their respective licenses.'
    ]
  },
  {
    title: '6. Confidentiality',
    content: [
      'Both parties agree to keep proprietary information confidential unless disclosure is required by law.'
    ]
  },
  {
    title: '7. Warranties and Limitations',
    content: [
      'We will provide services to professional standards.',
      'We do not guarantee specific results such as SEO rankings.',
      'Bugs reported within 30 days of launch will be fixed at no charge.',
      'Changes after that period are billable.'
    ]
  },
  {
    title: '8. Termination',
    content: [
      'Either party may terminate with written notice.',
      'Client is responsible for payment for work completed up to that point.',
      'Final deliverables will be handed over upon payment.'
    ]
  },
  {
    title: '9. Liability',
    content: [
      'We are not liable for indirect or consequential damages.',
      'Maximum liability is limited to the amount paid by the client.'
    ]
  },
  {
    title: '10. Third-Party Services',
    content: [
      'We may use third-party platforms or services.',
      'We are not liable for issues caused by third-party changes or outages.'
    ]
  },
  {
    title: '11. Force Majeure',
    content: [
      'We are not liable for delays due to events beyond our control, such as natural disasters or system failures.'
    ]
  },
  {
    title: '12. Governing Law',
    content: [
      'These terms are governed by the laws of the State of California.'
    ]
  },
  {
    title: '13. Changes to Terms',
    content: [
      'We reserve the right to update these terms at any time.',
      'Updated terms will be posted to our website.'
    ]
  }
]
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 py-12 text-gray-800">
    <SubPageHero title="Terms & Conditions" />
    <h1 class="text-4xl font-bold mb-8">Terms and Conditions</h1>
    <p class="text-sm text-gray-500 mb-8">Last Updated: July 16, 2025</p>

    <div class="space-y-10">
      <div v-for="(section, index) in terms" :key="index">
        <h2 class="text-2xl font-semibold mb-4">{{ section.title }}</h2>
        <div class="space-y-4">
          <p v-for="(para, idx) in section.content" :key="idx" class="text-base leading-relaxed">
            {{ para }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-16 text-sm text-gray-500">
      <p>
        If you have any questions about these Terms, please contact us at:
      </p>
      <p class="mt-2">
        📧 headlessflowerdev@gmail.com<br />
        🌐 www.headlessflower.dev
      </p>
    </div>
  </section>
</template>



<style scoped>
ul {
  list-style: disc;
  margin-left: 1.5rem;
}
</style>
