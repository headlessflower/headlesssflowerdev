<!-- fetchr-pro.vue -->
<template>
  <main class="pro">
    <header class="pro__header">
      <div class="container pro__header-inner">
        <a class="back" :href="backHref" aria-label="Back to Fetchr">
          ← Back
        </a>

        <div class="pro__title-wrap">
          <h1 class="pro__title">Fetchr — Pro</h1>
          <p class="pro__subtitle">
            Pro is built for high-volume workflows: DJs, music researchers, and archivists who need a clean,
            repeatable way to curate and maintain a local library.
          </p>
        </div>
      </div>
    </header>

    <section class="section" aria-label="Pro overview">
      <div class="container">
        <div class="hero-strip">
          <div class="hero-strip__left">
            <p class="badge">Buy once • Own forever</p>
            <h2 class="hero-strip__title">$10 Pro License</h2>
            <p class="hero-strip__body">
              No subscriptions. One purchase unlocks the Pro URL limit and Pro downloads.
            </p>

            <div class="hero-strip__cta">
              <a class="btn btn--primary" :href="purchaseLink" target="_blank" rel="noopener">
                Buy Pro ($10)
              </a>
            </div>

            <ul class="hero-strip__meta" role="list">
              <li class="meta">
                <span class="meta__label">Pro URL limit</span>
                <span class="meta__value">Unlimited URLs</span>
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
                Fetchr is intended for research purposes and library curation. By using this product,
                you agree to respect creators, platforms, and all applicable laws—especially copyrighted content.
                You are responsible for ensuring you have permission or rights for any content you process or store.
              </p>
            </div>
          </div>

          <div class="hero-strip__right">
            <img class="hero-strip__img" src="/guava-music/guava-music-thumbnail.png" alt="Fetchr Pro screenshot" />
          </div>
        </div>
      </div>
    </section>

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
                Buy Pro ($10)
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
                macOS: open the DMG and drag Fetchr into Applications.
              </li>
              <li class="note-card__item">
                Linux AppImage: make executable (<code>chmod +x</code>) and run.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

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

        <ThreeImageShowcase class="showcase" aria-label="Pro workflow screenshots" :items="showcaseItems" :image-height="220" />

        <div class="whypro-cta">
          <a class="btn btn--primary" :href="purchaseLink" target="_blank" rel="noopener">
            Buy Pro ($10)
          </a>
        </div>
      </div>
    </section>

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
              This product is intended for research and library curation. Use of Fetchr means you will respect
              creators, platforms, and all copyrighted material. You are responsible for ensuring you have the rights or
              permission to process any content.
            </p>
          </article>

          <article class="policy-card">
            <h3 class="policy-card__title">Your responsibility</h3>
            <p class="policy-card__body">
              You are responsible for complying with platform terms of service and applicable laws in your jurisdiction.
              Fetchr does not grant rights to content.
            </p>
          </article>
        </div>

        <div class="policy-cta">
          <a class="btn btn--primary" :href="purchaseLink" target="_blank" rel="noopener">
            Buy Pro ($10)
          </a>
        </div>
      </div>
    </section>

    <footer class="footer" aria-label="Footer">
      <div class="container footer__inner">
        <p class="footer__copy">© {{ year }} Fetchr</p>
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
const backHref = "/fetchr"
const purchaseLink = "https://headlessflower.gumroad.com/l/iymurc"

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
:global(body) { background: #0a0a0a; }
.pro { min-height: 100vh; color: #f5f5f5; background: radial-gradient(920px 420px at 18% 0%, rgba(220, 38, 38, 0.16), transparent 55%), radial-gradient(820px 420px at 88% 10%, rgba(255, 255, 255, 0.05), transparent 60%), #0a0a0a; }
.container { width: min(1120px, 100%); margin: 0 auto; padding: 0 1.25rem; }
.pro__header { border-bottom: 1px solid rgba(255, 255, 255, 0.08); background: rgba(10, 10, 10, 0.78); backdrop-filter: blur(14px); }
.pro__header-inner { padding: 1.25rem 0 1.5rem; display: grid; gap: 0.75rem; }
.back { display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; font-weight: 800; color: rgba(255, 255, 255, 0.86); width: fit-content; border-bottom: 1px solid rgba(255, 255, 255, 0.18); padding-bottom: 0.1rem; }
.back:hover { border-bottom-color: rgba(220, 38, 38, 0.55); }
.pro__title, .section__title, .hero-strip__title { color: #ffffff; }
.pro__title { margin: 0; font-size: clamp(2rem, 4vw, 3.6rem); line-height: 0.95; letter-spacing: -0.04em; }
.pro__subtitle, .section__subtitle, .hero-strip__body, .locked__body, .locked__list, .locked__fine, .note-card__list, .pro-card__body, .policy-card__body, .disclaimer__body, .footer__copy, .footer__by { color: rgba(255, 255, 255, 0.68); }
.pro__subtitle { margin: 0.45rem 0 0; line-height: 1.65; max-width: 78ch; }
.section { padding: clamp(2.5rem, 5vw, 4.5rem) 0; }
.section--alt { background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01)); border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
.section__header { margin-bottom: 1.25rem; max-width: 78ch; }
.section__title { margin: 0 0 0.5rem; font-size: clamp(1.9rem, 4vw, 3.4rem); line-height: 0.98; letter-spacing: -0.04em; }
.hero-strip, .locked, .pro-grid, .policy-grid { display: grid; gap: 1rem; }
.hero-strip { grid-template-columns: 1.1fr 0.9fr; align-items: start; }
.locked { grid-template-columns: 1.15fr 0.85fr; }
.pro-grid, .policy-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
@media (max-width: 940px) { .hero-strip, .locked, .pro-grid, .policy-grid { grid-template-columns: 1fr; } .hero-strip__right { justify-self: start; max-width: 100%; } }
@media (max-width: 640px) { .hero-strip__meta, .footer__inner { grid-template-columns: 1fr; } .footer__inner { flex-direction: column; align-items: flex-start; } }
.badge, .meta, .disclaimer, .locked__card, .note-card, .pro-card, .policy-card { border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); }
.badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.7rem; border-radius: 999px; font-size: 0.8rem; color: rgba(255, 255, 255, 0.82); }
.hero-strip__title { margin: 0.65rem 0 0.35rem; font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.04em; }
.hero-strip__body { margin: 0; line-height: 1.65; max-width: 68ch; }
.hero-strip__cta, .locked__cta, .whypro-cta, .policy-cta { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.hero-strip__cta { margin: 1rem 0 1.1rem; }
.hero-strip__meta { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.75rem; margin: 0; padding: 0; list-style: none; }
.meta, .disclaimer, .locked__card, .note-card, .pro-card, .policy-card { border-radius: 22px; padding: 1.1rem; }
.meta__label { display: block; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255, 255, 255, 0.5); margin-bottom: 0.2rem; }
.meta__value, .disclaimer__title, .locked__title, .note-card__title, .pro-card__title, .policy-card__title { color: #ffffff; }
.meta__value { display: block; font-weight: 800; }
.hero-strip__right { width: 100%; justify-self: end; max-width: 520px; }
.hero-strip__img { width: 100%; display: block; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.04); box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45); }
.btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9rem 1.1rem; border-radius: 999px; text-decoration: none; font-weight: 700; letter-spacing: 0.02em; border: 1px solid rgba(255, 255, 255, 0.14); transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease; }
.btn:hover { transform: translateY(-1px); }
.btn--primary { background: rgba(255, 255, 255, 0.94); color: #111111; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35); }
.showcase { margin-top: 1rem; }
.note-card code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 0.92em; color: rgba(255, 255, 255, 0.88); }
.footer { padding: 1.5rem 0 2.25rem; }
.footer__inner { display: flex; align-items: center; justify-content: space-between; gap: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 1.2rem; }
</style>
