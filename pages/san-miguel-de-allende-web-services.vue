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

        <div class="mt-12 grid gap-8 lg:grid-cols-12">
          <!-- 3 columns text -->
          <div class="lg:col-span-8">
            <div class="grid gap-8 md:grid-cols-3">
              <div v-for="p in processPoints" :key="p.key">
                <h3 class="text-sm font-semibold tracking-tight">{{ t(p.title) }}</h3>
                <p class="mt-3 text-sm leading-relaxed text-neutral-700">{{ t(p.body) }}</p>
              </div>
            </div>
          </div>

          <!-- Right: “graphic” card -->
          <div class="lg:col-span-4">
            <div class="rounded-3xl border border-neutral-900/10 bg-white/60 p-6">
              <div class="flex items-center justify-between">
                <div class="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-600">
                  {{ t("graphic.kicker") }}
                </div>
                <div class="text-xs text-neutral-500">{{ t("graphic.note") }}</div>
              </div>

              <div class="mt-6 aspect-square rounded-2xl border border-neutral-900/10 bg-neutral-950/5 p-6">
                <!-- simple dot grid motif (like the screenshot’s “map” art) -->
                <div class="grid h-full w-full grid-cols-12 gap-2 opacity-80">
                  <span
                      v-for="n in 144"
                      :key="n"
                      class="h-1.5 w-1.5 rounded-full"
                      :class="dotClass(n)"
                  />
                </div>
              </div>

              <p class="mt-6 text-sm leading-relaxed text-neutral-700">
                {{ t("graphic.caption") }}
              </p>
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

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
              v-for="item in workTiles"
              :key="item.key"
              class="group overflow-hidden rounded-3xl border border-neutral-900/10 bg-white/50"
          >
            <div class="aspect-[4/3] bg-neutral-950/5">
              <img
                  :src="item.src"
                  :alt="t(item.alt)"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  @error="onImgError"
              />
            </div>
            <div class="p-5">
              <div class="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-600">
                {{ t(item.tag) }}
              </div>
              <div class="mt-2 font-serif text-xl">{{ t(item.title) }}</div>
              <p class="mt-2 text-sm leading-relaxed text-neutral-700">{{ t(item.desc) }}</p>
            </div>
          </div>
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
  { key: "bilingual", title: "services.cards.bilingual.title", desc: "services.cards.bilingual.desc" },
  { key: "seo", title: "services.cards.seo.title", desc: "services.cards.seo.desc" },
  { key: "support", title: "services.cards.support.title", desc: "services.cards.support.desc" },
];

const processPoints = [
  { key: "clarity", title: "process.points.clarity.title", body: "process.points.clarity.body" },
  { key: "craft", title: "process.points.craft.title", body: "process.points.craft.body" },
  { key: "launch", title: "process.points.launch.title", body: "process.points.launch.body" },
];

const workTiles = [
  {
    key: "hotel",
    src: "/san-miguel/san-miguel-hotel.png",
    alt: "work.tiles.hotel.alt",
    tag: "work.tiles.hotel.tag",
    title: "work.tiles.hotel.title",
    desc: "work.tiles.hotel.desc",
  },
  {
    key: "gallery",
    src: "/san-miguel/san-miguel-studio.png",
    alt: "work.tiles.gallery.alt",
    tag: "work.tiles.gallery.tag",
    title: "work.tiles.gallery.title",
    desc: "work.tiles.gallery.desc",
  },
  {
    key: "service",
    src: "/san-miguel/san-miguel-streets-2.png",
    alt: "work.tiles.service.alt",
    tag: "work.tiles.service.tag",
    title: "work.tiles.service.title",
    desc: "work.tiles.service.desc",
  },
];


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

function dotClass(n: number) {
  // Create a subtle “red cluster” motif (inspired by the dot-grid art)
  // A few regions are highlighted; rest are neutral.
  const hot =
      (n % 12 === 8 && n > 70 && n < 120) ||
      (n % 12 === 9 && n > 80 && n < 130) ||
      (n % 12 === 7 && n > 60 && n < 110) ||
      (n % 12 === 10 && n > 92 && n < 138);

  return hot ? "bg-[#d11b1b]" : "bg-neutral-900/25";
}
</script>

<i18n lang="json">
{
  "en": {
    "nav": { "services": "Services", "process": "Process", "work": "Work", "contact": "Contact" },
    "cta": { "primary": "Book a free consult", "secondary": "See services", "book": "Book a consult" },

    "hero": {
      "kicker": "San Miguel de Allende · Web Services",
      "h1a": "Build a website that feels",
      "h1Accent1": "local",
      "h1b": ", looks",
      "h1Accent2": "premium",
      "sub": "We design and build bilingual websites for San Miguel businesses—boutique hotels, artists, galleries, restaurants, and service pros—focused on clarity, speed, and long-term ownership.",
      "imageAlt": "San Miguel de Allende street scene",
      "sideA": "San Miguel businesses deserve websites that match the quality of the experience—quietly confident, not noisy or generic.",
      "sideB": "Many sites look beautiful but don’t convert. We structure your pages to increase inquiries while keeping the design calm and editorial.",
      "sideC": "Clear communication, no jargon, and a process that respects your time."
    },

    "trust": {
      "a": { "k": "Based here", "v": "San Miguel ready" },
      "b": { "k": "Bilingual", "v": "English / Español" },
      "c": { "k": "Performance", "v": "Fast + SEO setup" },
      "d": { "k": "Ownership", "v": "No lock-in" }
    },

    "services": {
      "kicker": "What we do",
      "h2a": "A focused stack for",
      "h2Accent": "high-trust",
      "h2b": " local business websites.",
      "sub": "We combine design, messaging, and modern development so your site feels as intentional as your space—while staying easy to update and built to last.",
      "cards": {
        "design": { "title": "Custom Design", "desc": "A calm, editorial look aligned to your brand and clientele." },
        "bilingual": { "title": "Bilingual UX", "desc": "EN/ES structure that’s clean, consistent, and easy to maintain." },
        "seo": { "title": "SEO + Speed", "desc": "Solid technical setup, fast loads, and search-friendly structure." },
        "support": { "title": "Support", "desc": "Optional ongoing help—updates, fixes, and improvements." }
      }
    },

    "ui": {
      "pill1": "Content structure",
      "pill2": "SEO foundations",
      "pill3": "Mobile-first",
      "pill4": "Analytics ready",
      "blockA": { "k": "Primary goal", "v": "More inquiries + bookings" },
      "blockB": { "k": "Secondary", "v": "Clear story + credibility" },
      "blockC": { "k": "Outcome", "v": "A site that feels crafted—and performs." }
    },

    "process": {
      "kicker": "Process",
      "h2a": "Bridging",
      "h2Accent": "design",
      "h2b": " with business reality",
      "aside": "A simple, respectful workflow with clear milestones. You always know what’s next.",
      "points": {
        "clarity": {
          "title": "1) Clarity first",
          "body": "We define your audience, key pages, and conversion goals before we touch visuals."
        },
        "craft": {
          "title": "2) Craft the look",
          "body": "Typography, spacing, and photography direction—an editorial feel that matches San Miguel."
        },
        "launch": {
          "title": "3) Build & launch",
          "body": "Fast, responsive builds with clean content editing and optional ongoing support."
        }
      }
    },

    "graphic": {
      "kicker": "San Miguel map",
      "note": "concept",
      "caption": "A subtle visual motif that reinforces locality without feeling touristy."
    },

    "work": {
      "kicker": "Work",
      "h2a": "Examples that feel",
      "h2Accent": "crafted",
      "h2b": " and clear",
      "sub": "We can tailor your site to your industry—hospitality, art, wellness, or local services—while keeping the experience simple and high-trust.",
      "cta": "Start a project",
      "tiles": {
        "hotel": {
          "alt": "Boutique hotel website",
          "tag": "Hospitality",
          "title": "Boutique Hotel / Casa",
          "desc": "Booking-focused pages with a calm, premium feel."
        },
        "gallery": {
          "alt": "Gallery website",
          "tag": "Arts",
          "title": "Gallery / Artist Portfolio",
          "desc": "Minimal layouts that let the work lead."
        },
        "service": {
          "alt": "Local service website",
          "tag": "Local Services",
          "title": "Service Business",
          "desc": "Clear offers, strong trust signals, simple inquiries."
        }
      }
    },




    "contact": {
      "kicker": "Contact",
      "h2a": "Ready to build something",
      "h2Accent": "real",
      "sub": "Tell us what you do and what you need. We’ll recommend the simplest path to a site that feels right—and performs.",
      "emailBtn": "Email us",
      "whatsBtn": "WhatsApp",
      "phoneK": "Phone",
      "emailK": "Email",
      "formTitle": "Quick inquiry",
      "formSub": "No pressure—just enough detail to point you in the right direction.",
      "mailSubject": "San Miguel Website Inquiry",
      "mailBody": "Hi Headless Flower,\n\nI’m interested in a website for my business in San Miguel de Allende.\n\nBusiness name:\nWebsite (if any):\nWhat I need help with:\nTimeline:\n\nThanks!",
      "whatsText": "Hi! I’m interested in a website for my business in San Miguel de Allende. Can we talk?"
    },

    "form": {
      "name": "Name",
      "namePh": "Your name",
      "business": "Business",
      "businessPh": "Business name + type",
      "email": "Email",
      "emailPh": "you.com",
      "message": "Message",
      "messagePh": "What do you want your website to do? (Bookings, inquiries, portfolio, etc.)",
      "submit": "Send inquiry",
      "thanks": "Thanks — we’ll reply soon."
    },

    "footer": { "note": "San Miguel de Allende · EN/ES websites · Built with care" }
  },

  "es": {
    "nav": { "services": "Servicios", "process": "Proceso", "work": "Trabajos", "contact": "Contacto" },
    "cta": { "primary": "Agenda una consulta", "secondary": "Ver servicios", "book": "Agendar consulta" },

    "hero": {
      "kicker": "San Miguel de Allende · Servicios Web",
      "h1a": "Construye un sitio que se sienta",
      "h1Accent1": "local",
      "h1b": ", se vea",
      "h1Accent2": "premium",
      "sub": "Diseñamos y desarrollamos sitios bilingües para negocios en San Miguel—hoteles boutique, artistas, galerías, restaurantes y servicios—con enfoque en claridad, velocidad y propiedad a largo plazo.",
      "imageAlt": "Calle en San Miguel de Allende",
      "sideA": "Los negocios de San Miguel merecen sitios que reflejen la calidad de la experiencia—seguros, sobrios y nada genéricos.",
      "sideB": "Muchos sitios se ven bonitos pero no convierten. Organizamos tu contenido para aumentar consultas sin perder una estética editorial.",
      "sideC": "Comunicación clara, sin jerga, y un proceso que respeta tu tiempo."
    },

    "trust": {
      "a": { "k": "Listo aquí", "v": "Enfoque San Miguel" },
      "b": { "k": "Bilingüe", "v": "English / Español" },
      "c": { "k": "Rendimiento", "v": "Rápido + SEO" },
      "d": { "k": "Propiedad", "v": "Sin ataduras" }
    },

    "services": {
      "kicker": "Qué hacemos",
      "h2a": "Una base enfocada para sitios",
      "h2Accent": "de confianza",
      "h2b": " en negocios locales.",
      "sub": "Combinamos diseño, mensajes y desarrollo moderno para que tu sitio se sienta tan intencional como tu espacio—fácil de actualizar y hecho para durar.",
      "cards": {
        "design": { "title": "Diseño a medida", "desc": "Estética editorial, alineada a tu marca y clientela." },
        "bilingual": { "title": "UX bilingüe", "desc": "Estructura EN/ES limpia, consistente y mantenible." },
        "seo": { "title": "SEO + velocidad", "desc": "Base técnica sólida, carga rápida y estructura amigable." },
        "support": { "title": "Soporte", "desc": "Ayuda opcional: cambios, mejoras y mantenimiento." }
      }
    },

    "ui": {
      "pill1": "Estructura de contenido",
      "pill2": "SEO base",
      "pill3": "Mobile-first",
      "pill4": "Analíticas",
      "blockA": { "k": "Objetivo", "v": "Más consultas + reservas" },
      "blockB": { "k": "Secundario", "v": "Historia clara + credibilidad" },
      "blockC": { "k": "Resultado", "v": "Un sitio cuidado—y efectivo." }
    },

    "process": {
      "kicker": "Proceso",
      "h2a": "Uniendo",
      "h2Accent": "diseño",
      "h2b": " con la realidad del negocio",
      "aside": "Un flujo simple, respetuoso y con pasos claros. Siempre sabrás qué sigue.",
      "points": {
        "clarity": {
          "title": "1) Claridad primero",
          "body": "Definimos audiencia, páginas clave y metas antes de tocar lo visual."
        },
        "craft": {
          "title": "2) Cuidamos el look",
          "body": "Tipografía, espacios y dirección fotográfica—una estética editorial San Miguel."
        },
        "launch": {
          "title": "3) Desarrollar y lanzar",
          "body": "Construcción rápida y responsiva con edición sencilla y soporte opcional."
        }
      }
    },

    "graphic": {
      "kicker": "Mapa San Miguel",
      "note": "concepto",
      "caption": "Un motivo visual sutil que refuerza lo local sin sentirse turístico."
    },

    "work": {
      "kicker": "Trabajos",
      "h2a": "Ejemplos con",
      "h2Accent": "cuidado",
      "h2b": " y claridad",
      "sub": "Podemos adaptar el sitio a tu industria—hospitalidad, arte, bienestar o servicios—manteniendo una experiencia simple y de confianza.",
      "cta": "Iniciar proyecto",
      "tiles": {
        "hotel": {
          "alt": "Sitio web para hotel boutique",
          "tag": "Hospitalidad",
          "title": "Hotel boutique / Casa",
          "desc": "Páginas enfocadas en reservas con estética premium."
        },
        "gallery": {
          "alt": "Sitio web para galería",
          "tag": "Artes",
          "title": "Galería / Portafolio",
          "desc": "Layouts mínimos para que la obra sea protagonista."
        },
        "service": {
          "alt": "Sitio web de servicio local",
          "tag": "Servicios",
          "title": "Negocio de servicios",
          "desc": "Oferta clara, confianza y consultas sencillas."
        }
      }
    },





    "contact": {
      "kicker": "Contacto",
      "h2a": "¿Listo para construir algo",
      "h2Accent": "real",
      "sub": "Cuéntanos qué haces y qué necesitas. Te diremos el camino más simple para un sitio que se sienta correcto—y funcione.",
      "emailBtn": "Escríbenos",
      "whatsBtn": "WhatsApp",
      "phoneK": "Teléfono",
      "emailK": "Correo",
      "formTitle": "Mensaje rápido",
      "formSub": "Sin presión—solo lo suficiente para orientarte.",
      "mailSubject": "Consulta de Sitio Web en San Miguel",
      "mailBody": "Hola Headless Flower,\n\nMe interesa un sitio web para mi negocio en San Miguel de Allende.\n\nNombre del negocio:\nSitio actual (si existe):\nEn qué necesito ayuda:\nTiempo estimado:\n\nGracias!",
      "whatsText": "¡Hola! Me interesa un sitio web para mi negocio en San Miguel de Allende. ¿Podemos platicar?"
    },

    "form": {
      "name": "Nombre",
      "namePh": "Tu nombre",
      "business": "Negocio",
      "businessPh": "Nombre + tipo",
      "email": "Correo",
      "emailPh": "tucorreo.com",
      "message": "Mensaje",
      "messagePh": "¿Qué quieres que logre tu sitio? (Reservas, consultas, portafolio, etc.)",
      "submit": "Enviar",
      "thanks": "Gracias — te respondemos pronto."
    },

    "footer": { "note": "San Miguel de Allende · Sitios EN/ES · Hecho con cuidado" }
  }
}
</i18n>
