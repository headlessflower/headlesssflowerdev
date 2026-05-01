<template>
  <main class="bg-[#f2f2f0] text-neutral-950">


    <!-- HERO (inspired by screenshot: big serif + red accents + label) -->
    <section class="relative">
      <div class="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-20">
        <!-- Hero top row (brand + toggle + CTA) -->
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2">
            <span class="text-sm font-semibold tracking-[0.18em] uppercase">Headless Flower</span>
          </NuxtLink>

          <div class="flex items-center gap-3">
            <!-- Locale toggle (moved here) -->
            <div class="rounded-full border border-neutral-900/15 bg-white/60 p-1">
              <button
                  type="button"
                  class="rounded-full px-3 py-1 text-xs font-semibold transition"
                  :class="locale === 'en' ? 'bg-neutral-950 text-white' : 'text-neutral-700 hover:text-neutral-950'"
                  @click="setLocale('en')"
              >
                EN
              </button>
              <button
                  type="button"
                  class="rounded-full px-3 py-1 text-xs font-semibold transition"
                  :class="locale === 'es' ? 'bg-neutral-950 text-white' : 'text-neutral-700 hover:text-neutral-950'"
                  @click="setLocale('es')"
              >
                ES
              </button>
            </div>

            <a
                href="#contact"
                class="inline-flex items-center justify-center rounded-full border border-neutral-950 bg-neutral-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:-translate-y-[1px] hover:shadow-sm"
            >
              {{ t("cta.book") }}
            </a>
          </div>
        </div>

        <div class="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <!-- Left: label + headline -->
          <div class="lg:col-span-7">
            <div class="flex items-center gap-3">
          <span class="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-700">
            {{ t("hero.kicker") }}
          </span>
              <span class="h-px flex-1 bg-neutral-900/15" />
            </div>

            <h1 class="mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {{ t("hero.h1a") }}
              <span class="text-[#d11b1b]">{{ t("hero.h1Accent1") }}</span>
              {{ t("hero.h1b") }}
              <span class="text-[#d11b1b]">{{ t("hero.h1Accent2") }}</span>.
            </h1>

            <p class="mt-6 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              {{ t("hero.sub") }}
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                  href="#contact"
                  class="inline-flex items-center justify-center rounded-full border border-neutral-950 bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:shadow"
              >
                {{ t("cta.primary") }}
              </a>

              <a
                  href="#services"
                  class="inline-flex items-center justify-center rounded-full border border-neutral-950/20 bg-white/60 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-[1px]"
              >
                {{ t("cta.secondary") }}
              </a>
            </div>

            <!-- Trust strip -->
            <dl class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div class="rounded-2xl border border-neutral-900/10 bg-white/50 p-4">
                <dt class="text-xs font-semibold tracking-[0.16em] uppercase text-neutral-600">
                  {{ t("trust.a.k") }}
                </dt>
                <dd class="mt-1 text-sm font-semibold">{{ t("trust.a.v") }}</dd>
              </div>
              <div class="rounded-2xl border border-neutral-900/10 bg-white/50 p-4">
                <dt class="text-xs font-semibold tracking-[0.16em] uppercase text-neutral-600">
                  {{ t("trust.b.k") }}
                </dt>
                <dd class="mt-1 text-sm font-semibold">{{ t("trust.b.v") }}</dd>
              </div>
              <div class="rounded-2xl border border-neutral-900/10 bg-white/50 p-4">
                <dt class="text-xs font-semibold tracking-[0.16em] uppercase text-neutral-600">
                  {{ t("trust.c.k") }}
                </dt>
                <dd class="mt-1 text-sm font-semibold">{{ t("trust.c.v") }}</dd>
              </div>
              <div class="rounded-2xl border border-neutral-900/10 bg-white/50 p-4">
                <dt class="text-xs font-semibold tracking-[0.16em] uppercase text-neutral-600">
                  {{ t("trust.d.k") }}
                </dt>
                <dd class="mt-1 text-sm font-semibold">{{ t("trust.d.v") }}</dd>
              </div>
            </dl>
          </div>

          <!-- Right: image + editorial copy -->
          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-neutral-900/10 bg-white/40 p-3">
              <div class="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-900/10 bg-neutral-950/5">
                <img
                    src="/san-miguel/san-miguel-streets-1.png"
                    :alt="t('hero.imageAlt')"
                    class="h-full w-full object-cover"
                    @error="onImgError"
                />
              </div>

              <div class="mt-5 grid gap-6 px-1 pb-2 sm:grid-cols-1">
                <p class="text-lg font-serif leading-snug text-neutral-900 sm:text-xl">
                  {{ t("hero.sideA") }}
                </p>
                <p class="text-sm leading-relaxed text-neutral-700">
                  {{ t("hero.sideB") }}
                </p>
                <p class="text-sm leading-relaxed text-neutral-700">
                  {{ t("hero.sideC") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-14 border-t border-neutral-900/10" />
      </div>
    </section>

    <!-- WHAT WE DO (dark section like screenshot #2) -->
    <section id="services" class="bg-neutral-950 text-white">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-8">
            <div class="flex items-center gap-3">
              <span class="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                {{ t("services.kicker") }}
              </span>
              <span class="h-px flex-1 bg-white/15" />
            </div>

            <h2 class="mt-6 font-serif text-3xl leading-[1.1] sm:text-5xl">
              {{ t("services.h2a") }}
              <span class="text-[#d11b1b]">{{ t("services.h2Accent") }}</span>
              {{ t("services.h2b") }}
            </h2>

            <p class="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
              {{ t("services.sub") }}
            </p>
          </div>

          <div class="lg:col-span-4 lg:flex lg:items-start lg:justify-end">
            <a
                href="#contact"
                class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/15"
            >
              {{ t("cta.book") }} →
            </a>
          </div>
        </div>

        <!-- Cards -->
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article
              v-for="card in serviceCards"
              :key="card.key"
              class="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <h3 class="text-sm font-semibold tracking-tight">{{ t(card.title) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/70">{{ t(card.desc) }}</p>
          </article>
        </div>

        <!-- Faux UI / device area -->
        <div class="mt-12 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6">
          <div class="flex flex-wrap items-center gap-2">
            <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
              {{ t("ui.pill1") }}
            </span>
            <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
              {{ t("ui.pill2") }}
            </span>
            <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
              {{ t("ui.pill3") }}
            </span>
            <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
              {{ t("ui.pill4") }}
            </span>
          </div>

          <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
              <div class="text-xs font-semibold text-white/70">{{ t("ui.blockA.k") }}</div>
              <div class="mt-2 text-sm">{{ t("ui.blockA.v") }}</div>
            </div>
            <div class="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
              <div class="text-xs font-semibold text-white/70">{{ t("ui.blockB.k") }}</div>
              <div class="mt-2 text-sm">{{ t("ui.blockB.v") }}</div>
            </div>
            <div class="rounded-2xl border border-white/10 bg-neutral-950/40 p-4 sm:col-span-2 lg:col-span-1">
              <div class="text-xs font-semibold text-white/70">{{ t("ui.blockC.k") }}</div>
              <div class="mt-2 text-sm">{{ t("ui.blockC.v") }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- “RESEARCH”-style 3-column editorial section (inspired by screenshot #3) -->
    <section id="process" class="bg-[#f2f2f0]">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-9">
            <div class="flex items-center gap-3">
              <span class="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-700">
                {{ t("process.kicker") }}
              </span>
              <span class="h-px flex-1 bg-neutral-900/15" />
            </div>

            <h2 class="mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              {{ t("process.h2a") }}
              <span class="text-[#d11b1b]">{{ t("process.h2Accent") }}</span>
              {{ t("process.h2b") }}
            </h2>
          </div>

          <div class="lg:col-span-3">
            <div class="rounded-3xl border border-neutral-900/10 bg-white/50 p-6">
              <p class="text-sm leading-relaxed text-neutral-700">
                {{ t("process.aside") }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <!-- 3 columns text -->
          <div>
            <div class="grid gap-8 md:grid-cols-3">
              <div v-for="p in processPoints" :key="p.key">
                <h3 class="text-sm font-semibold tracking-tight">{{ t(p.title) }}</h3>
                <p class="mt-3 text-sm leading-relaxed text-neutral-700">{{ t(p.body) }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-14 border-t border-neutral-900/10" />
      </div>
    </section>

    <!-- WORK (simple gallery placeholders) -->
    <section id="work" class="bg-[#f2f2f0]">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-8">
            <div class="flex items-center gap-3">
              <span class="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-700">
                {{ t("work.kicker") }}
              </span>
              <span class="h-px flex-1 bg-neutral-900/15" />
            </div>

            <h2 class="mt-6 font-serif text-3xl leading-[1.1] sm:text-5xl">
              {{ t("work.h2a") }}
              <span class="text-[#d11b1b]">{{ t("work.h2Accent") }}</span>
              {{ t("work.h2b") }}
            </h2>

            <p class="mt-6 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              {{ t("work.sub") }}
            </p>
          </div>

          <div class="lg:col-span-4 lg:flex lg:items-end lg:justify-end">
            <a
                href="#contact"
                class="inline-flex items-center justify-center rounded-full border border-neutral-950/20 bg-white/60 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-[1px]"
            >
              {{ t("work.cta") }}
            </a>
          </div>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <component
              :is="isExternal(project.link) ? 'a' : NuxtLink"
              v-for="project in exampleProjects"
              :key="project.id"
              :href="isExternal(project.link) ? project.link : undefined"
              :to="!isExternal(project.link) ? project.link : undefined"
              :target="isExternal(project.link) ? '_blank' : undefined"
              :rel="isExternal(project.link) ? 'noreferrer' : undefined"
              class="group overflow-hidden rounded-3xl border border-neutral-900/10 bg-white/50 transition hover:-translate-y-[1px]"
          >
            <div class="aspect-[4/3] bg-neutral-950/5">
              <img
                  :src="project.img"
                  :alt="`${project.name} preview`"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  @error="onImgError"
              />
            </div>
            <div class="p-5">
              <div class="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-600">
                {{ project.tags?.join(" · ") }}
              </div>
              <div class="mt-2 font-serif text-xl">{{ project.name }}</div>
              <p class="mt-2 text-sm leading-relaxed text-neutral-700">
                {{ t(`work.examples.${project.id}`) }}
              </p>
            </div>
          </component>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="bg-neutral-950 text-white">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-7">
            <div class="flex items-center gap-3">
              <span class="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                {{ t("contact.kicker") }}
              </span>
              <span class="h-px flex-1 bg-white/15" />
            </div>

            <h2 class="mt-6 font-serif text-3xl leading-[1.1] sm:text-5xl">
              {{ t("contact.h2a") }}
              <span class="text-[#d11b1b]">{{ t("contact.h2Accent") }}</span>.
            </h2>

            <p class="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {{ t("contact.sub") }}
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                  :href="mailtoHref"
                  class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                {{ t("contact.emailBtn") }}
              </a>
              <a
                  :href="whatsHref"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                {{ t("contact.whatsBtn") }}
              </a>
            </div>

            <dl class="mt-10 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                <dt class="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">{{ t("contact.phoneK") }}</dt>
                <dd class="mt-2 text-sm font-semibold">{{ phone }}</dd>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                <dt class="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">{{ t("contact.emailK") }}</dt>
                <dd class="mt-2 text-sm font-semibold">{{ email }}</dd>
              </div>
            </dl>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 class="font-serif text-2xl">{{ t("contact.formTitle") }}</h3>
              <p class="mt-2 text-sm text-white/70">{{ t("contact.formSub") }}</p>

              <!-- Simple form (works without backend; wire to your API later) -->
              <form class="mt-6 grid gap-4" @submit.prevent="onSubmit">
                <label class="grid gap-2">
                  <span class="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">{{ t("form.name") }}</span>
                  <input
                      v-model="form.name"
                      type="text"
                      class="h-11 rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                      :placeholder="t('form.namePh')"
                  />
                </label>

                <label class="grid gap-2">
                  <span class="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">{{ t("form.business") }}</span>
                  <input
                      v-model="form.business"
                      type="text"
                      class="h-11 rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                      :placeholder="t('form.businessPh')"
                  />
                </label>

                <label class="grid gap-2">
                  <span class="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">{{ t("form.email") }}</span>
                  <input
                      v-model="form.replyTo"
                      type="email"
                      class="h-11 rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                      :placeholder="t('form.emailPh')"
                  />
                </label>

                <label class="grid gap-2">
                  <span class="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">{{ t("form.message") }}</span>
                  <textarea
                      v-model="form.message"
                      rows="4"
                      class="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                      :placeholder="t('form.messagePh')"
                  />
                </label>
                <div class="sr-only" aria-hidden="true">
                  <label for="company_website">Company website</label>
                  <input
                      id="company_website"
                      v-model="hp"
                      type="text"
                      name="company_website"
                      autocomplete="off"
                      tabindex="-1"
                  />
                </div>

                <button
                    type="submit"
                    :disabled="submitting"
                    class="mt-2 inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer" >
                  <span v-if="submitting">Sending…</span>
                  <span v-else>{{ t("form.submit") }}</span>
                </button>

                <p v-if="submitError" class="text-sm text-white/80">
                  {{ submitError }}
                </p>

                <p v-if="submitted" class="text-sm text-white/70">
                  {{ t("form.thanks") }}
                </p>
              </form>
            </div>
          </div>
        </div>

        <footer class="mt-14 border-t border-white/10 pt-8 text-sm text-white/60">
          <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>© {{ new Date().getFullYear() }} Headless Flower</span>
            <span>{{ t("footer.note") }}</span>
          </div>
        </footer>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, unref } from "vue";
import { projects } from "~/data/projects.js";
import { NuxtLink } from "#components";

definePageMeta({
  layout: 'no-contact',
})
const submitted = ref(false);
const submitting = ref(false)
const submitError = ref<string | null>(null)
const phone = "(323) 709-5357";
const email = "headlessflowerdev@gmail.com"; // swap to your agency email if desired

const localePath = useLocalePath?.() ?? ((p: string) => p);
const { t, locale, setLocale } = useI18n();
const supabase = useSupabaseClient();

useHead(() => ({
  title:
    locale.value === "es"
      ? "Servicios Web en San Miguel de Allende | Headless Flower"
      : "Web Development Services in San Miguel de Allende | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        locale.value === "es"
          ? "Sitios web administrados, formularios de contacto, rutas de reserva, mantenimiento continuo y sistemas web para negocios en San Miguel de Allende."
          : "Managed websites, lead capture, booking flows, ongoing upkeep, and white-label business systems for businesses in San Miguel de Allende.",
    },
    {
      property: "og:title",
      content:
        locale.value === "es"
          ? "Servicios Web en San Miguel de Allende"
          : "Web Development Services in San Miguel de Allende",
    },
    {
      property: "og:description",
      content:
        locale.value === "es"
          ? "Sitios web administrados, generación de consultas, mantenimiento y sistemas internos para negocios en San Miguel de Allende."
          : "Managed websites, inquiry generation, upkeep, and internal business systems for San Miguel de Allende businesses.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.headlessflower.dev/san-miguel-de-allende-web-services",
    },
  ],
}));

const hp = ref("") // bots often fill hidden fields
const mountedAt = ref(0)

onMounted(() => {
  mountedAt.value = Date.now()
})




const mailtoHref = computed(() => {
  const subject = encodeURIComponent(t("contact.mailSubject"));
  const body = encodeURIComponent(t("contact.mailBody"));
  return `mailto:${email}?subject=${subject}&body=${body}`;
});

const whatsHref = computed(() => {
  // WhatsApp prefers international E.164 (no spaces or symbols)
  const number = "13237095357";
  const text = encodeURIComponent(t("contact.whatsText"));
  return `https://wa.me/${number}?text=${text}`;
});

const serviceCards = [
  { key: "design", title: "services.cards.design.title", desc: "services.cards.design.desc" },
  { key: "flows", title: "services.cards.flows.title", desc: "services.cards.flows.desc" },
  { key: "seo", title: "services.cards.seo.title", desc: "services.cards.seo.desc" },
  { key: "support", title: "services.cards.support.title", desc: "services.cards.support.desc" },
];

const processPoints = [
  { key: "clarity", title: "process.points.clarity.title", body: "process.points.clarity.body" },
  { key: "craft", title: "process.points.craft.title", body: "process.points.craft.body" },
  { key: "launch", title: "process.points.launch.title", body: "process.points.launch.body" },
];

const exampleProjectNames = [
  "Amatl Handmade Paper Studio",
  "Lanzayoso",
  "ClearFlow Gutter Cleaning",
  "The San Miguel Wedding Collective",
];

const exampleProjects = computed(() => {
  const all = Array.isArray(unref(projects)) ? unref(projects) : [];
  return exampleProjectNames
    .map((name) => all.find((project: any) => project.name === name))
    .filter(Boolean);
});


const form = reactive({
  name: "",
  business: "",
  replyTo: "",
  message: "",
})

function resetForm() {
  form.name = ""
  form.business = ""
  form.replyTo = ""
  form.message = ""
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

async function onSubmit() {
  // clear state
  submitted.value = false
  submitError.value = null

  // prevent double submit
  if (submitting.value) return

  // Honeypot: if filled, silently "succeed" (don’t give bots signal)
  if (hp.value.trim().length > 0) {
    submitted.value = true
    return
  }

  // Time gate: bots submit instantly
  const elapsed = Date.now() - mountedAt.value
  if (elapsed < 800) {
    submitError.value = "Please try again."
    return
  }

  // validation
  if (!form.name.trim()) {
    submitError.value = "Please enter your name."
    return
  }
  if (!form.replyTo.trim() || !isValidEmail(form.replyTo)) {
    submitError.value = "Please enter a valid email."
    return
  }
  if (!form.message.trim()) {
    submitError.value = "Please add a short message."
    return
  }

  submitting.value = true

  try {
    const payload = {
      page: "san-miguel-de-allende-web-services",
      locale: String(locale.value || "en"),
      name: form.name.trim(),
      business: form.business.trim() || null,
      email: form.replyTo.trim().toLowerCase(),
      message: form.message.trim(),
      referrer: import.meta.client ? document.referrer || null : null,
      user_agent: import.meta.client ? navigator.userAgent || null : null,
    }

    const { error } = await supabase.from("web_inquiries").insert(payload)

    if (error) {
      // nicer error messages for common cases
      if (error.code === "42501") {
        throw new Error("Database permissions blocked this request (RLS).")
      }
      throw error
    }

    submitted.value = true
    resetForm()
  } catch (err: any) {
    // Supabase errors usually have message; fall back to generic
    submitError.value =
        err?.message ||
        "Something went wrong. Please try again, or email us directly."
  } finally {
    submitting.value = false
  }
}

function onImgError(e: Event) {
  // graceful fallback if placeholder images aren't added yet
  const img = e.target as HTMLImageElement;
  img.style.display = "none";
}

function isExternal(link: string) {
  return /^https?:\/\//i.test(link);
}
</script>

<i18n lang="json">
{
  "en": {
    "nav": { "services": "Services", "process": "Process", "work": "Work", "contact": "Contact" },
    "cta": { "primary": "Book a consult", "secondary": "See services", "book": "Book a consult" },

    "hero": {
      "kicker": "San Miguel de Allende · Managed Web Services",
      "h1a": "Managed web services for",
      "h1Accent1": "San Miguel",
      "h1b": " businesses that want more",
      "h1Accent2": "customers",
      "sub": "We build and manage websites, lead capture flows, booking paths, and white-label business systems for businesses in San Miguel de Allende that want a stronger online presence and smoother operations.",
      "imageAlt": "San Miguel de Allende street scene",
      "sideA": "Your website should help people understand what you offer, trust your business quickly, and take the next step without confusion.",
      "sideB": "We keep the system practical: clear positioning, lead capture, booking support, and ongoing upkeep that keeps the site useful over time.",
      "sideC": "For businesses in San Miguel, that can mean a stronger digital presence, better inquiries, and simpler day-to-day management after launch."
    },

    "trust": {
      "a": { "k": "Offer", "v": "Managed web services" },
      "b": { "k": "Focus", "v": "More inquiries" },
      "c": { "k": "Systems", "v": "Booking + admin tools" },
      "d": { "k": "Support", "v": "Ongoing upkeep" }
    },

    "services": {
      "kicker": "What we do",
      "h2a": "The same managed services,",
      "h2Accent": "tailored",
      "h2b": " for businesses in San Miguel.",
      "sub": "We help businesses in San Miguel de Allende strengthen their web presence, capture more inquiries, support bookings, and maintain the systems customers interact with.",
      "cards": {
        "design": { "title": "Managed Web Presence", "desc": "A business website treated like an active asset, with stronger positioning, page updates, uptime, and ongoing improvements." },
        "flows": { "title": "Lead Capture + Booking", "desc": "Forms, intake flows, and booking paths designed to reduce friction and turn more visitors into qualified inquiries." },
        "seo": { "title": "Maintenance + Upkeep", "desc": "Security updates, content edits, performance checks, and reporting that keep your system healthy after launch." },
        "support": { "title": "White-Label Business Apps", "desc": "Admin dashboards, customer records, and internal tools that give small businesses one place to run the essentials." }
      }
    },

    "ui": {
      "pill1": "Managed websites",
      "pill2": "Lead capture",
      "pill3": "Booking support",
      "pill4": "Admin systems",
      "blockA": { "k": "Primary goal", "v": "More qualified inquiries" },
      "blockB": { "k": "Secondary", "v": "Clearer operations" },
      "blockC": { "k": "Outcome", "v": "A system that looks better and works harder." }
    },

    "process": {
      "kicker": "Process",
      "h2a": "Build the right",
      "h2Accent": "system",
      "h2b": " and keep it useful",
      "aside": "The goal is not to overbuild. We shape the simplest version of the website or system that helps the business attract customers and run more smoothly.",
      "points": {
        "clarity": {
          "title": "1) Clarify the offer",
          "body": "We define what the business needs the website or system to do, who it serves, and where customers are dropping off today."
        },
        "craft": {
          "title": "2) Build the conversion flow",
          "body": "We shape the pages, forms, booking steps, or admin tools so the experience feels clear, useful, and easier to act on."
        },
        "launch": {
          "title": "3) Maintain and improve",
          "body": "After launch, we support updates, upkeep, and practical improvements so the system does not go stale."
        }
      }
    },

    "graphic": {
      "kicker": "Managed service stack",
      "note": "concept",
      "caption": "A practical mix of web presence, lead capture, maintenance, and internal tooling shaped around the business instead of scattered tools."
    },

    "work": {
      "kicker": "Who it fits",
      "h2a": "Built for businesses that need",
      "h2Accent": "better systems",
      "h2b": " and stronger conversion",
      "sub": "This works well for businesses in San Miguel that want a clearer online presence, stronger inquiry flow, and less friction between marketing, contact, and follow-up.",
      "cta": "Start a project",
      "examples": {
        "13": "A studio website example focused on visual storytelling, clearer services, and a stronger inquiry path for a craft-driven business.",
        "14": "An artist website example designed to showcase portfolio work cleanly while making commissions, exhibitions, or contact requests easier to manage.",
        "15": "A home-service example centered on lead capture, service clarity, and a more direct path from visit to quote request.",
        "16": "A wedding directory example built to organize vendors, improve discovery, and support inquiries across a multi-business platform."
      }
    },




    "contact": {
      "kicker": "Contact",
      "h2a": "Ready for a stronger",
      "h2Accent": "web presence",
      "sub": "Tell us about your business and what you need help with. We’ll recommend the simplest version of a managed website or system that helps you look better and convert more inquiries.",
      "emailBtn": "Email us",
      "whatsBtn": "WhatsApp",
      "phoneK": "Phone",
      "emailK": "Email",
      "formTitle": "Quick inquiry",
      "formSub": "No pressure, just enough context for us to recommend the right setup for your business.",
      "mailSubject": "San Miguel Web Services Inquiry",
      "mailBody": "Hi Headless Flower,\n\nI’m interested in web development services for my business in San Miguel de Allende.\n\nBusiness name:\nCurrent website (if any):\nWhat do you need help with (website, inquiries, booking flow, admin system, upkeep, etc.)?:\nTimeline:\n\nThanks!",
      "whatsText": "Hi! I’m interested in web development services for my business in San Miguel de Allende. Can we talk?"
    },

    "form": {
      "name": "Name",
      "namePh": "Your name",
      "business": "Business",
      "businessPh": "Business name + type",
      "email": "Email",
      "emailPh": "you.com",
      "message": "Message",
      "messagePh": "What should the page help with? (Inquiries, bookings, visibility, portfolio, etc.)",
      "submit": "Send inquiry",
      "thanks": "Thanks — we’ll reply soon."
    },

    "footer": { "note": "San Miguel de Allende · Managed web services · Built with care" }
  },

  "es": {
    "nav": { "services": "Servicios", "process": "Proceso", "work": "Trabajos", "contact": "Contacto" },
    "cta": { "primary": "Agenda una consulta", "secondary": "Ver servicios", "book": "Agendar consulta" },

    "hero": {
      "kicker": "San Miguel de Allende · Servicios Web Administrados",
      "h1a": "Servicios web administrados para negocios de",
      "h1Accent1": "San Miguel",
      "h1b": " que quieren más",
      "h1Accent2": "clientes",
      "sub": "Diseñamos y administramos sitios web, formularios de contacto, rutas de reserva y sistemas web para negocios en San Miguel de Allende que quieren una mejor presencia digital y operaciones más claras.",
      "imageAlt": "Calle en San Miguel de Allende",
      "sideA": "Tu sitio debe ayudar a las personas a entender tu oferta, confiar en tu negocio rápido y dar el siguiente paso sin confusión.",
      "sideB": "Mantenemos el sistema práctico: buen posicionamiento, captación de consultas, apoyo para reservas y mantenimiento continuo que lo mantiene útil con el tiempo.",
      "sideC": "Para negocios en San Miguel, eso puede significar una presencia digital más fuerte, mejores consultas y una gestión más sencilla después del lanzamiento."
    },

    "trust": {
      "a": { "k": "Oferta", "v": "Servicios web administrados" },
      "b": { "k": "Enfoque", "v": "Más consultas" },
      "c": { "k": "Sistemas", "v": "Reservas + admin" },
      "d": { "k": "Soporte", "v": "Mantenimiento continuo" }
    },

    "services": {
      "kicker": "Qué hacemos",
      "h2a": "Los mismos servicios administrados,",
      "h2Accent": "adaptados",
      "h2b": " para negocios en San Miguel.",
      "sub": "Ayudamos a negocios en San Miguel de Allende a fortalecer su presencia web, generar más consultas, apoyar reservas y mantener los sistemas que usan sus clientes.",
      "cards": {
        "design": { "title": "Presencia web administrada", "desc": "Un sitio tratado como un activo del negocio, con mejor posicionamiento, actualizaciones, uptime y mejoras continuas." },
        "flows": { "title": "Captación de consultas + reservas", "desc": "Formularios, flujos de contacto y rutas de reserva diseñados para reducir fricción y generar consultas más calificadas." },
        "seo": { "title": "Mantenimiento + seguimiento", "desc": "Actualizaciones de seguridad, cambios de contenido, revisiones de rendimiento y reportes para mantener sano el sistema." },
        "support": { "title": "Apps empresariales white-label", "desc": "Dashboards, registros de clientes y herramientas internas para que el negocio tenga lo esencial en un solo lugar." }
      }
    },

    "ui": {
      "pill1": "Sitios administrados",
      "pill2": "Captación de consultas",
      "pill3": "Apoyo para reservas",
      "pill4": "Sistemas internos",
      "blockA": { "k": "Objetivo", "v": "Más consultas calificadas" },
      "blockB": { "k": "Secundario", "v": "Operación más clara" },
      "blockC": { "k": "Resultado", "v": "Un sistema que se ve mejor y trabaja más." }
    },

    "process": {
      "kicker": "Proceso",
      "h2a": "Construye el",
      "h2Accent": "sistema",
      "h2b": " correcto y mantenlo útil",
      "aside": "La meta no es sobrecomplicar. Diseñamos la versión más simple del sitio o sistema que ayude al negocio a atraer clientes y operar mejor.",
      "points": {
        "clarity": {
          "title": "1) Aclarar la oferta",
          "body": "Definimos qué necesita lograr el sitio o sistema, a quién sirve y dónde se está perdiendo hoy la atención o las consultas."
        },
        "craft": {
          "title": "2) Construir el flujo de conversión",
          "body": "Organizamos páginas, formularios, pasos de reserva o herramientas internas para que la experiencia se sienta clara, útil y más fácil de usar."
        },
        "launch": {
          "title": "3) Lanzar y mantener",
          "body": "Después del lanzamiento damos soporte, mantenimiento y mejoras prácticas para que el sistema no se quede estancado."
        }
      }
    },

    "graphic": {
      "kicker": "Stack de servicio administrado",
      "note": "concepto",
      "caption": "Una mezcla práctica de presencia web, captación de consultas, mantenimiento y herramientas internas pensada alrededor del negocio."
    },

    "work": {
      "kicker": "Para quién funciona",
      "h2a": "Hecho para negocios que necesitan",
      "h2Accent": "mejores sistemas",
      "h2b": " y mejor conversión",
      "sub": "Esto funciona bien para negocios en San Miguel que quieren una presencia web más clara, un mejor flujo de consultas y menos fricción entre marketing, contacto y seguimiento.",
      "cta": "Empezar un proyecto",
      "examples": {
        "13": "Un ejemplo de sitio para estudio creativo enfocado en narrativa visual, servicios más claros y una mejor ruta de consulta para un negocio artesanal.",
        "14": "Un ejemplo de sitio para artista pensado para mostrar portafolio con claridad y facilitar comisiones, exposiciones o solicitudes de contacto.",
        "15": "Un ejemplo de servicio para hogar centrado en captación de clientes, claridad de oferta y una ruta más directa hacia la solicitud de cotización.",
        "16": "Un ejemplo de directorio de bodas diseñado para organizar proveedores, mejorar el descubrimiento y apoyar consultas dentro de una plataforma multi-negocio."
      }
    },





    "contact": {
      "kicker": "Contacto",
      "h2a": "¿Listo para una",
      "h2Accent": "mejor presencia web",
      "sub": "Cuéntanos sobre tu negocio y qué necesitas resolver. Te recomendaremos la versión más simple de un sitio o sistema administrado que te ayude a verte mejor y generar más consultas.",
      "emailBtn": "Escríbenos",
      "whatsBtn": "WhatsApp",
      "phoneK": "Teléfono",
      "emailK": "Correo",
      "formTitle": "Mensaje rápido",
      "formSub": "Sin presión, solo el contexto suficiente para recomendarte la mejor configuración para tu negocio.",
      "mailSubject": "Consulta de Servicios Web en San Miguel",
      "mailBody": "Hola Headless Flower,\n\nMe interesan servicios web para mi negocio en San Miguel de Allende.\n\nNombre del negocio:\nSitio actual (si existe):\n¿Con qué necesitas ayuda (sitio web, consultas, flujo de reservas, sistema admin, mantenimiento, etc.)?:\nTiempo estimado:\n\nGracias!",
      "whatsText": "¡Hola! Me interesan servicios web para mi negocio en San Miguel de Allende. ¿Podemos platicar?"
    },

    "form": {
      "name": "Nombre",
      "namePh": "Tu nombre",
      "business": "Negocio",
      "businessPh": "Nombre + tipo",
      "email": "Correo",
      "emailPh": "tucorreo.com",
      "message": "Mensaje",
      "messagePh": "¿Para qué debe servir la página? (Consultas, reservas, visibilidad, portafolio, etc.)",
      "submit": "Enviar",
      "thanks": "Gracias — te respondemos pronto."
    },

    "footer": { "note": "San Miguel de Allende · Servicios web administrados · Hecho con cuidado" }
  }
}
</i18n>
