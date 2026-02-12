<template >
  <main class="page">
    <!-- HERO -->
    <section class="hero" aria-label="Guava Music Vault hero">
      <div class="container hero__inner">
        <div class="hero__content">
          <p class="badge">Desktop app</p>
          <h1 class="hero__title">Guava Music Vault</h1>
          <p class="hero__subtitle">
            A fast, desktop-first vault for collecting audio from the web and organizing it into a clean, local library.
          </p>

          <div class="hero__actions">
            <a class="btn btn--primary" :href="links.macDmg" target="_blank" rel="noopener">
              Download Mac DMG - Silicon
            </a>
            <a class="btn btn--ghost" :href="links.linuxInstall" target="_blank" rel="noopener">
              Linux Install
            </a>
            <a class="btn btn--ghost" :href="links.buildFromSource" target="_blank" rel="noopener">
              Build from Source
            </a>
          </div>

          <ul class="hero__meta" role="list">
            <li class="meta">
              <span class="meta__label">Platform</span>
              <span class="meta__value">macOS • Linux</span>
            </li>
            <li class="meta">
              <span class="meta__label">Focus</span>
              <span class="meta__value">Audio-first downloads + library</span>
            </li>
            <li class="meta">
              <span class="meta__label">Built by</span>
              <span class="meta__value">Headless Flower</span>
            </li>
          </ul>
        </div>

        <!-- IMAGE PLACEHOLDER -->
        <div class="hero__image">
          <img
              src="/guava-music-thumbnail.png "
              alt="Guava Music Vault application interface"
          />
        </div>
      </div>
    </section>


    <!-- FEATURES -->
    <section class="section" aria-label="Features">
      <div class="container">
        <header class="section__header">
          <h2 class="section__title">Features built for a clean workflow</h2>
          <p class="section__subtitle">
            Simple on the surface, powerful where it counts—speed, organization, and local control.
          </p>
        </header>

        <div class="grid">
          <article class="card">
            <h3 class="card__title">Fast, local-first library</h3>
            <p class="card__body">
              Keep everything on your machine. Create a tidy audio vault you can back up and move anywhere.
            </p>
          </article>

          <article class="card">
            <h3 class="card__title">Queue + batch processing</h3>
            <p class="card__body">
              Add multiple links, let the queue run, and come back to completed downloads—no babysitting.
            </p>
          </article>

          <article class="card">
            <h3 class="card__title">Flexible export formats</h3>
            <p class="card__body">
              Choose audio formats and quality presets that fit your workflow, from lightweight to high fidelity.
            </p>
          </article>

          <article class="card">
            <h3 class="card__title">Metadata friendly</h3>
            <p class="card__body">
              Keep titles organized and consistent so your music players and library tools stay clean.
            </p>
          </article>

          <article class="card">
            <h3 class="card__title">Desktop-native experience</h3>
            <p class="card__body">
              Built for desktop use: quick paste, clear progress, and a focused UI that stays out of your way.
            </p>
          </article>

          <article class="card">
            <h3 class="card__title">Private by default</h3>
            <p class="card__body">
              Your downloads stay local. No accounts, no cloud requirement—just your vault, your files.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="section" aria-label="Pricing">
      <div class="container">
        <header class="section__header">
          <h2 class="section__title">Simple pricing</h2>
          <p class="section__subtitle">
            Start free, upgrade when you need a bigger queue.
          </p>
        </header>

        <div class="pricing">
          <!-- Free -->
          <article class="price-card" aria-label="Free plan">
            <div class="price-card__top">
              <h3 class="price-card__name">Free</h3>
              <p class="price-card__price">$0</p>
            </div>

            <p class="price-card__desc">For light use and trying the workflow.</p>

            <ul class="price-card__list" role="list">
              <li class="price-card__item">
                <span class="check" aria-hidden="true">✓</span>
                <span><strong>10 URLs</strong> download limit</span>
              </li>
              <li class="price-card__item">
                <span class="check" aria-hidden="true">✓</span>
                <span>Core features included</span>
              </li>
              <li class="price-card__item">
                <span class="check" aria-hidden="true">✓</span>
                <span>macOS + Linux</span>
              </li>
            </ul>

            <div class="price-card__cta">
              <a class="btn btn--ghost" href="#downloads">Get started</a>
            </div>
          </article>

          <!-- Pro -->
          <article class="price-card price-card--featured" aria-label="Pro plan">
            <div class="price-card__ribbon" aria-hidden="true">
              Most popular
            </div>

            <div class="price-card__top">
              <h3 class="price-card__name">Pro</h3>
              <p class="price-card__price">$12</p>
            </div>

            <p class="price-card__desc">
              For regular use and bigger batches.
            </p>

            <ul class="price-card__list" role="list">
              <li class="price-card__item">
                <span class="check" aria-hidden="true">✓</span>
                <span><strong>100 URLs</strong> download limit</span>
              </li>
              <li class="price-card__item">
                <span class="check" aria-hidden="true">✓</span>
                <span>Everything in Free</span>
              </li>
              <li class="price-card__item">
                <span class="check" aria-hidden="true">✓</span>
                <span>Best for playlists / large queues</span>
              </li>
            </ul>

            <div class="price-card__cta">
              <a class="btn btn--primary" href="/guava-music-vault-pro">Upgrade to Pro</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- DOWNLOADS -->
    <section id="downloads" class="section section--alt" aria-label="Downloads">

    <div class="container">
        <header class="section__header">
          <h2 class="section__title">Get Guava Music Vault</h2>
          <p class="section__subtitle">
            Choose the install path that matches your setup.
          </p>
        </header>

        <div class="downloads">
          <a class="download" :href="links.linuxInstall" target="_blank" rel="noopener">
            <div class="download__left">
              <span class="download__kicker">Linux</span>
              <span class="download__title">Install</span>
              <span class="download__desc">Package / AppImage / instructions</span>
            </div>
            <span class="download__arrow" aria-hidden="true">→</span>
          </a>

          <a class="download" :href="links.buildFromSource" target="_blank" rel="noopener">
            <div class="download__left">
              <span class="download__kicker">Developers</span>
              <span class="download__title">Build from Source</span>
              <span class="download__desc">Clone repo, fetch binaries, build</span>
            </div>
            <span class="download__arrow" aria-hidden="true">→</span>
          </a>

          <a class="download" :href="links.macDmg" target="_blank" rel="noopener">
            <div class="download__left">
              <span class="download__kicker">macOS</span>
              <span class="download__title">Download DMG</span>
              <span class="download__desc">Drag-and-drop installer</span>
            </div>
            <span class="download__arrow" aria-hidden="true">→</span>
          </a>
        </div>


      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer" aria-label="Footer">
      <div class="container footer__inner">
        <p class="footer__copy">
          © {{ year }} Guava Music Vault
        </p>
        <a class="footer__link" :href="agencyUrl" target="_blank" rel="noopener">
          Built by Headless Flower
        </a>
      </div>
    </footer>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'no-contact'
});
const year = new Date().getFullYear()

// Replace with your real URLs
const links = {
  linuxInstall: "https://example.com/linux-install",
  buildFromSource: "https://github.com/headlessflower/yt-audio-downloader.git",
  macDmg: "https://headlessflower.gumroad.com/l/obynwq"
}

// Replace with your agency URL
const agencyUrl = "https://headlessflower.dev"
</script>

<style scoped>
/* ---- Base ---- */
.page {
  min-height: 100vh;
  color: #0f172a;
  background: radial-gradient(1200px 500px at 20% 0%, rgba(34, 197, 94, 0.10), transparent 55%),
  radial-gradient(900px 500px at 85% 10%, rgba(16, 185, 129, 0.12), transparent 60%),
  #ffffff;
}

.container {
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* ---- Hero ---- */
.hero {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0 3rem;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2.25rem;
  align-items: center;
}

@media (max-width: 940px) {
  .hero__inner {
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

.hero__title {
  font-size: clamp(2.2rem, 4vw, 3.25rem);
  letter-spacing: -0.02em;
  margin: 0.6rem 0 0.75rem;
  line-height: 1.05;
}

.hero__subtitle {
  margin: 0 0 1.25rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(15, 23, 42, 0.78);
  max-width: 56ch;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1rem 0 1.35rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.05rem;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid rgba(15, 23, 42, 0.12);
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
  user-select: none;
}

.hero__image {
  width: 100%;
  max-width: 520px;
  justify-self: end;
}

@media (max-width: 940px) {
  .hero__image {
    justify-self: start;
    max-width: 100%;
  }
}

.hero__image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 22px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #ffffff;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
}
.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.btn--primary {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.95), rgba(16, 185, 129, 0.95));
  color: white;
  border-color: rgba(16, 185, 129, 0.25);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.8);
  color: rgba(15, 23, 42, 0.92);
}

.hero__meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (max-width: 640px) {
  .hero__meta {
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
  font-weight: 600;
  color: rgba(15, 23, 42, 0.9);
}

/* ---- Preview ---- */
.hero__preview {
  justify-self: end;
  width: 100%;
  max-width: 440px;
}

@media (max-width: 940px) {
  .hero__preview {
    justify-self: start;
    max-width: 560px;
  }
}

.preview {
  border-radius: 22px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 60px rgba(15, 23, 42, 0.10);
  overflow: hidden;
}

.preview__topbar {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.75rem 0.85rem;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.65);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.18);
}

.preview__title {
  margin-left: 0.5rem;
  font-size: 0.85rem;
  color: rgba(15, 23, 42, 0.65);
}

.preview__body {
  padding: 1rem;
}

.preview__row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.9rem;
}

.pill {
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.25);
  background: rgba(16, 185, 129, 0.10);
}

.pill--muted {
  border-color: rgba(15, 23, 42, 0.10);
  background: rgba(15, 23, 42, 0.04);
  color: rgba(15, 23, 42, 0.72);
}

.preview__panel {
  border: 1px solid rgba(15, 23, 42, 0.10);
  border-radius: 18px;
  padding: 0.9rem;
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.9rem;
}

.preview__headline {
  margin: 0;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.preview__copy {
  margin: 0.35rem 0 0.8rem;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.55;
  font-size: 0.95rem;
}

.preview__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.6rem;
}

.stat {
  padding: 0.55rem 0.6rem;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(15, 23, 42, 0.03);
}

.stat__label {
  display: block;
  font-size: 0.72rem;
  color: rgba(15, 23, 42, 0.55);
  margin-bottom: 0.12rem;
}

.stat__value {
  display: block;
  font-weight: 700;
  font-size: 0.9rem;
}

.preview__list {
  display: grid;
  gap: 0.6rem;
}

.item {
  display: grid;
  grid-template-columns: 10px 1fr;
  gap: 0.7rem;
  align-items: center;
  padding: 0.65rem 0.7rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.65);
}

.item__bar {
  width: 10px;
  height: 38px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.7);
}

.item__bar--muted {
  background: rgba(15, 23, 42, 0.16);
}

.item__title {
  display: block;
  font-weight: 700;
  font-size: 0.92rem;
}

.item__sub {
  display: block;
  font-size: 0.82rem;
  color: rgba(15, 23, 42, 0.62);
  margin-top: 0.12rem;
}

.fineprint {
  margin: 0.75rem 0 0;
  font-size: 0.82rem;
  color: rgba(15, 23, 42, 0.55);
}

/* ---- Sections ---- */
.section {
  padding: clamp(2.5rem, 5vw, 4.25rem) 0;
}

.section--alt {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.02), rgba(15, 23, 42, 0.01));
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
}

.section__header {
  margin-bottom: 1.5rem;
  max-width: 72ch;
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

/* ---- Cards ---- */
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.card {
  border: 1px solid rgba(15, 23, 42, 0.10);
  border-radius: 18px;
  padding: 1.1rem;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
}

.card__title {
  margin: 0 0 0.45rem;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.card__body {
  margin: 0;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.6;
}

/* ---- Downloads ---- */
.downloads {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 860px) {
  .downloads {
    grid-template-columns: 1fr;
  }
}

.download {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.15rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.download:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 55px rgba(15, 23, 42, 0.10);
}

.download__kicker {
  display: block;
  font-size: 0.8rem;
  color: rgba(15, 23, 42, 0.55);
  margin-bottom: 0.15rem;
}

.download__title {
  display: block;
  font-weight: 800;
  color: rgba(15, 23, 42, 0.92);
  letter-spacing: -0.01em;
}

.download__desc {
  display: block;
  margin-top: 0.25rem;
  color: rgba(15, 23, 42, 0.70);
  font-size: 0.92rem;
  line-height: 1.45;
}

.download__arrow {
  font-size: 1.2rem;
  color: rgba(15, 23, 42, 0.55);
}

.note {
  margin: 1rem 0 0;
  color: rgba(15, 23, 42, 0.62);
  font-size: 0.92rem;
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

.footer__link {
  color: rgba(15, 23, 42, 0.85);
  text-decoration: none;
  font-weight: 700;
  border-bottom: 1px solid rgba(15, 23, 42, 0.18);
  padding-bottom: 0.1rem;
}

.footer__link:hover {
  border-bottom-color: rgba(16, 185, 129, 0.65);
}

/* ---- Pricing ---- */
.pricing {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 860px) {
  .pricing {
    grid-template-columns: 1fr;
  }
}

.price-card {
  position: relative;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
  padding: 1.15rem;
}

.price-card--featured {
  border-color: rgba(16, 185, 129, 0.35);
  box-shadow: 0 18px 60px rgba(15, 23, 42, 0.10);
}

.price-card__ribbon {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  border: 1px solid rgba(16, 185, 129, 0.30);
  background: rgba(16, 185, 129, 0.10);
  color: rgba(15, 23, 42, 0.85);
}

.price-card__top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
}

.price-card__name {
  margin: 0;
  font-size: 1.15rem;
  letter-spacing: -0.01em;
}

.price-card__price {
  margin: 0;
  font-size: 1.45rem;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.price-card__desc {
  margin: 0.5rem 0 0.9rem;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.6;
}

.price-card__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.55rem;
}

.price-card__item {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  color: rgba(15, 23, 42, 0.78);
  line-height: 1.45;
}

.check {
  display: inline-flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.25);
  background: rgba(16, 185, 129, 0.10);
  font-weight: 900;
  flex: 0 0 auto;
}

.price-card__cta {
  margin-top: 1rem;
  display: flex;
}

.price-card {
  padding-top: 2.1rem; /* creates breathing room under the badge */
}

/* Badge stays top-right */
.price-card__ribbon {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;

  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 800;
  border: 1px solid rgba(16, 185, 129, 0.35);
  background: rgba(16, 185, 129, 0.12);
  color: rgba(15, 23, 42, 0.85);
}

/* Header row handles layout */
.price-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

/* Price styling (no absolute positioning!) */
.price-card__price {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: rgba(15, 23, 42, 0.95);
}

</style>
