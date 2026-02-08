<template>
  <section id="contact" class="relative overflow-hidden bg-neutral-950 text-white">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      <div class="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.85)]" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <div class="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p class="text-[12px] font-semibold tracking-[0.18em] text-white/70">
            CONTACT
          </p>

          <h2 class="mt-6 font-serif text-[clamp(2.4rem,4.8vw,4.2rem)] leading-[0.92] tracking-tight">
            Book a <span class="text-red-600">consultation</span>.
          </h2>

          <p class="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            Tell us what you’re building. We’ll reply with a clear next step, timeline, and a realistic plan.
          </p>

          <div class="mt-10 space-y-3 text-sm text-white/70">
            <p><span class="text-white/85 font-semibold">Email:</span> headlessflowerdev@gmail.com</p>
            <p><span class="text-white/85 font-semibold">Phone:</span> (323) 709-5357</p>
          </div>
        </div>

        <div
            class="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                 backdrop-blur-md sm:p-8"
        >
          <TheForm :schema="contactFormSchema" @submit="handleSubmit" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TheForm from "~/components/TheForm.vue";
import { contactFormSchema } from "~/data/contactForm.schema";

function handleSubmit(payload: any) {
  // Later: insert into Supabase.
  // For now: you can POST to a server route or just log.
  console.log("contact submit payload:", payload);
}
</script>
