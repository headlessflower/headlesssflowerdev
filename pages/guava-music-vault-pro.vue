<!-- guava-music-vault-pro.vue -->
<template>
  <main class="pro">
    <header class="pro__header">
      <div class="container pro__header-inner">
        <a class="back" :href="backHref" aria-label="Back to Guava Music Vault">
          ← Back
        </a>

        <div class="pro__title-wrap">
          <h1 class="pro__title">Guava Music Vault — Pro</h1>
          <p class="pro__subtitle">
            Pro is built for high-volume workflows: DJs, music researchers, and archivists who need a clean,
            repeatable way to curate and maintain a local library.
          </p>
        </div>
      </div>
    </header>

    <!-- HERO STRIP -->
    <section class="section" aria-label="Pro overview">
      <div class="container">
        <div class="hero-strip">
          <div class="hero-strip__left">
            <p class="badge">Buy once • Own forever</p>
            <h2 class="hero-strip__title">$20 Pro License</h2>
            <p class="hero-strip__body">
              No subscriptions. One purchase unlocks the Pro URL limit and Pro downloads.
            </p>

            <div class="hero-strip__cta">
              <a class="btn btn--primary" :href="purchaseLink" target="_blank" rel="noopener">
                Buy Pro ($20)
              </a>
            </div>

            <ul class="hero-strip__meta" role="list">
              <li class="meta">
                <span class="meta__label">Pro URL limit</span>
                <span class="meta__value">100 URLs</span>
              </li>
              <li class="meta">
                <span class="meta__label">License</span>
                <span class="meta__value">Buy once • Own forever</span>
              </li>
              <li class="meta">
                <span class="meta__label">Refunds</span>
                <span class="meta__value">No refunds</span>
              </li>
            </ul>

            <div class="disclaimer" role="note" aria-label="Research and copyright notice">
              <h3 class="disclaimer__title">Research + library curation only</h3>
              <p class="disclaimer__body">
                Guava Music Vault is intended for research purposes and library curation. By using this product,
                you agree to respect creators, platforms, and all applicable laws—especially copyrighted content.
                You are responsible for ensuring you have permission or rights for any content you process or store.
              </p>
            </div>
          </div>

          <div class="hero-strip__right">
            <!-- Replace with your Pro page hero/screenshot -->
            <img
                class="hero-strip__img"
                src="/guava-music/guava-music-thumbnail.png"
                alt="Guava Music Vault Pro screenshot"
            />

          </div>
        </div>
      </div>
    </section>

    <!-- DOWNLOADS -->
    <section id="downloads" class="section section--alt" aria-label="Downloads">
      <div class="container">
        <header class="section__header">
          <h2 class="section__title">Downloads</h2>
          <p class="section__subtitle">
            Access to Pro builds is provided after purchase.
          </p>
        </header>

        <div class="locked">
          <div class="locked__card">
            <h3 class="locked__title">Pro builds are purchase-gated</h3>
            <p class="locked__body">
              To download Pro builds, purchase a Pro license. You’ll receive access to the latest downloads for:
            </p>
            <ul class="locked__list" role="list">
              <li class="locked__item">macOS Apple Silicon (M1/M2/M3)</li>
              <li class="locked__item">Linux AppImage</li>
            </ul>

            <div class="locked__cta">
              <a class="btn btn--primary" :href="purchaseLink" target="_blank" rel="noopener">
                Buy Pro ($20)
              </a>
            </div>

            <p class="locked__fine">
              By purchasing and using Pro, you agree to use the tool for research and library curation and to respect
              all copyrighted content and platform terms.
            </p>
          </div>

          <div class="note-card">
            <h3 class="note-card__title">Install notes</h3>
            <ul class="note-card__list" role="list">
              <li class="note-card__item">
                macOS: open the DMG and drag Guava Music Vault into Applications.
              </li>
              <li class="note-card__item">
                Linux AppImage: make executable (<code>chmod +x</code>) and run.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY PRO -->
    <section class="section" aria-label="Why Pro">
      <div class="container">
        <header class="section__header">
          <h2 class="section__title">Why Pro</h2>
          <p class="section__subtitle">
            Pro is better when your work depends on collecting consistently—whether you’re prepping sets,
            tracking versions, or building a long-term local archive.
          </p>
        </header>

        <div class="pro-grid">
          <article class="pro-card">
            <h3 class="pro-card__title">DJ-ready batch workflow</h3>
            <p class="pro-card__body">
              Build crates faster. Paste a long list of links, let the queue run, and come back to a clean,
              completed output folder.
            </p>
          </article>

          <article class="pro-card">
            <h3 class="pro-card__title">Better for research depth</h3>
            <p class="pro-card__body">
              When you’re tracking sources across channels, uploads, and versions, larger capture sessions help you
              keep each project together.
            </p>
          </article>

          <article class="pro-card">
            <h3 class="pro-card__title">Archive-friendly habits</h3>
            <p class="pro-card__body">
              Pro supports local-first archiving: predictable export, repeatable runs, and workflows that fit backup
              and preservation practices.
            </p>
          </article>

          <article class="pro-card">
            <h3 class="pro-card__title">Fewer interruptions</h3>
            <p class="pro-card__body">
              Higher URL limits reduce stop-and-restart friction when you’re processing playlists, references, or multi-source
              research lists.
            </p>
          </article>
        </div>

        <ThreeImageShowcase
            class="showcase"
            aria-label="Pro workflow screenshots"
            :items="showcaseItems"
            :image-height="220"
        />

        <div class="whypro-cta">
          <a class="btn btn--primary" :href="purchaseLink" target="_blank" rel="noopener">
            Buy Pro ($20)
          </a>
        </div>
      </div>
    </section>

    <!-- POLICIES -->
    <section class="section section--alt" aria-label="License and refund policy">
      <div class="container">
        <header class="section__header">
          <h2 class="section__title">License + policy</h2>
          <p class="section__subtitle">
            Clear terms, no surprises.
          </p>
        </header>

        <div class="policy-grid">
          <article class="policy-card">
            <h3 class="policy-card__title">Buy once, own forever</h3>
            <p class="policy-card__body">
              Pro is a one-time purchase that unlocks the Pro URL limit and access to Pro builds. No subscriptions.
            </p>
          </article>

          <article class="policy-card">
            <h3 class="policy-card__title">No refunds</h3>
            <p class="policy-card__body">
              All sales are final. Please confirm your OS and hardware support before purchasing
              (currently: macOS Apple Silicon + Linux AppImage).
            </p>
          </article>

          <article class="policy-card">
            <h3 class="policy-card__title">Respect copyrighted content</h3>
            <p class="policy-card__body">
              This product is intended for research and library curation. Use of Guava Music Vault means you will respect
              creators, platforms, and all copyrighted material. You are responsible for ensuring you have the rights or
              permission to process any content.
            </p>
          </article>

          <article class="policy-card">
            <h3 class="policy-card__title">Your responsibility</h3>
            <p class="policy-card__body">
              You are responsible for complying with platform terms of service and applicable laws in your jurisdiction.
              Guava Music Vault does not grant rights to content.
            </p>
          </article>
        </div>

        <div class="policy-cta">
          <a class="btn btn--primary" :href="purchaseLink" target="_blank" rel="noopener">
            Buy Pro ($20)
          </a>
        </div>
      </div>
    </section>

    <footer class="footer" aria-label="Footer">
      <div class="container footer__inner">
        <p class="footer__copy">© {{ year }} Guava Music Vault</p>
        <span class="footer__by">Built by <strong>Headless Flower</strong></span>
      </div>
    </footer>
  </main>
</template>

<script setup>

definePageMeta({
  layout: 'no-contact',
})

import ThreeImageShowcase from "@/components/ThreeImageShowcase.vue"

const year = new Date().getFullYear()

// Update to match your routing
const backHref = "/guava-music-vault"

// Replace with your purchase/checkout URL
const purchaseLink = "https://headlessflower.gumroad.com/l/svnwd"

// Replace these with your real images + captions
const showcaseItems = [
  {
    src: "/guava-music/gmv-queue-processing.png",
    alt: "Queue view showing multiple items processing",
    description: "Queue big batches for crate building and deep research lists—ideal for DJs and collectors.",
  },
  {
    src: "/guava-music/gmv-settings.png",
    alt: "Export/output settings panel",
    description: "Consistent exports help you maintain a clean library and repeatable archival workflows.",
  },
  {
    src: "/guava-music/gmv-folder.png",
    alt: "Local library view with saved items",
    description: "Keep a local-first vault you can back up, migrate, and preserve over time.",
  },
]
</script>

<style scoped>
/* ---- Base ---- */
.pro {
  min-height: 100vh;
  color: #0f172a;
  background: radial-gradient(1100px 520px at 20% 0%, rgba(34, 197, 94, 0.10), transparent 55%),
  radial-gradient(900px 520px at 85% 10%, rgba(16, 185, 129, 0.12), transparent 60%),
  #ffffff;
}

.container {
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* ---- Header ---- */
.pro__header {
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
}

.pro__header-inner {
  padding: 1.25rem 0 1.5rem;
  display: grid;
  gap: 0.75rem;
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 800;
  color: rgba(15, 23, 42, 0.85);
  width: fit-content;
  border-bottom: 1px solid rgba(15, 23, 42, 0.18);
  padding-bottom: 0.1rem;
}

.back:hover {
  border-bottom-color: rgba(16, 185, 129, 0.65);
}

.pro__title {
  margin: 0;
  font-size: clamp(1.8rem, 3.2vw, 2.4rem);
  letter-spacing: -0.02em;
}

.pro__subtitle {
  margin: 0.35rem 0 0;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.6;
  max-width: 78ch;
}

/* ---- Sections ---- */
.section {
  padding: clamp(2.25rem, 4.8vw, 4rem) 0;
}

.section--alt {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.02), rgba(15, 23, 42, 0.01));
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
}

.section__header {
  margin-bottom: 1.25rem;
  max-width: 78ch;
}

.section__title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.55rem, 2.8vw, 2.1rem);
  letter-spacing: -0.02em;
}

.section__subtitle {
  margin: 0;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.6;
}

/* ---- Hero strip ---- */
.hero-strip {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.25rem;
  align-items: start;
}

@media (max-width: 940px) {
  .hero-strip {
    grid-template-columns: 1fr;
  }
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.65rem;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 999px;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
}

.hero-strip__title {
  margin: 0.6rem 0 0.35rem;
  font-size: clamp(1.7rem, 3vw, 2.1rem);
  letter-spacing: -0.02em;
}

.hero-strip__body {
  margin: 0;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.6;
  max-width: 68ch;
}

.hero-strip__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1rem 0 1.1rem;
}

.hero-strip__meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (max-width: 640px) {
  .hero-strip__meta {
    grid-template-columns: 1fr;
  }
}

.meta {
  padding: 0.85rem 0.9rem;
  border: 1px solid rgba(15, 23, 42, 0.10);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
}

.meta__label {
  display: block;
  font-size: 0.78rem;
  color: rgba(15, 23, 42, 0.55);
  margin-bottom: 0.2rem;
}

.meta__value {
  display: block;
  font-weight: 800;
  color: rgba(15, 23, 42, 0.9);
}

.hero-strip__right {
  width: 100%;
  justify-self: end;
  max-width: 520px;
}

@media (max-width: 940px) {
  .hero-strip__right {
    justify-self: start;
    max-width: 100%;
  }
}

.hero-strip__img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 22px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #ffffff;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
}

.fineprint {
  margin: 0.75rem 0 0;
  font-size: 0.82rem;
  color: rgba(15, 23, 42, 0.55);
}

/* ---- Disclaimer ---- */
.disclaimer {
  margin-top: 1rem;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
  padding: 1rem 1.05rem;
}

.disclaimer__title {
  margin: 0 0 0.35rem;
  font-size: 1rem;
  letter-spacing: -0.01em;
}

.disclaimer__body {
  margin: 0;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.6;
}

/* ---- Buttons ---- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.05rem;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 800;
  border: 1px solid rgba(15, 23, 42, 0.12);
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
  user-select: none;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.btn--primary {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.95), rgba(16, 185, 129, 0.95));
  color: #ffffff;
  border-color: rgba(16, 185, 129, 0.25);
}

/* ---- Locked downloads ---- */
.locked {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 1rem;
}

@media (max-width: 920px) {
  .locked {
    grid-template-columns: 1fr;
  }
}

.locked__card {
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  padding: 1.15rem;
}

.locked__title {
  margin: 0 0 0.45rem;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.locked__body {
  margin: 0 0 0.75rem;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.6;
}

.locked__list {
  margin: 0;
  padding: 0 0 0 1.1rem;
  color: rgba(15, 23, 42, 0.74);
  line-height: 1.6;
}

.locked__cta {
  margin-top: 0.95rem;
  display: flex;
}

.locked__fine {
  margin: 0.75rem 0 0;
  font-size: 0.9rem;
  color: rgba(15, 23, 42, 0.62);
  line-height: 1.55;
}

/* ---- Notes ---- */
.note-card {
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
  padding: 1.15rem;
}

.note-card__title {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.note-card__list {
  margin: 0;
  padding: 0 0 0 1.1rem;
  color: rgba(15, 23, 42, 0.74);
  line-height: 1.6;
}

.note-card code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.92em;
}

/* ---- Why Pro cards ---- */
.pro-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 920px) {
  .pro-grid {
    grid-template-columns: 1fr;
  }
}

.pro-card {
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  padding: 1.15rem;
}

.pro-card__title {
  margin: 0 0 0.45rem;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.pro-card__body {
  margin: 0;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.6;
}

.showcase {
  margin-top: 1rem;
}

.whypro-cta {
  margin-top: 1rem;
  display: flex;
}

/* ---- Policy ---- */
.policy-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 920px) {
  .policy-grid {
    grid-template-columns: 1fr;
  }
}

.policy-card {
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  padding: 1.15rem;
}

.policy-card__title {
  margin: 0 0 0.45rem;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.policy-card__body {
  margin: 0;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.6;
}

.policy-cta {
  margin-top: 1rem;
  display: flex;
}

/* ---- Footer ---- */
.footer {
  padding: 1.5rem 0 2.25rem;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  padding-top: 1.2rem;
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

.footer__copy {
  margin: 0;
  color: rgba(15, 23, 42, 0.62);
  font-size: 0.95rem;
}

.footer__by {
  color: rgba(15, 23, 42, 0.75);
}
</style>