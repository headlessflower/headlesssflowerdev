<template>
  <main class="page">
    <section class="hero" aria-label="Fetchr hero">
      <div class="container hero__inner">
        <div class="hero__content">
          <p class="badge">Desktop app</p>
          <h1 class="hero__title">Fetchr</h1>
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

        <div class="hero__image">
          <img src="/guava-music/guava-music-thumbnail.png " alt="Fetchr application interface" />
        </div>
      </div>
    </section>

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

    <section class="section" aria-label="Pricing">
      <div class="container">
        <header class="section__header">
          <h2 class="section__title">Simple pricing</h2>
          <p class="section__subtitle">
            Start free, upgrade when you need a bigger queue.
          </p>
        </header>

        <div class="pricing">
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
                <span><strong>Unlimited URLs</strong></span>
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
              <a class="btn btn--primary" href="/fetchr-pro">Upgrade to Pro</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="downloads" class="section section--alt" aria-label="Downloads">
      <div class="container">
        <header class="section__header">
          <h2 class="section__title">Get Fetchr</h2>
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

    <footer class="footer" aria-label="Footer">
      <div class="container footer__inner">
        <p class="footer__copy">
          © {{ year }} Fetchr
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

const links = {
  linuxInstall: "https://example.com/linux-install",
  buildFromSource: "https://github.com/headlessflower/yt-audio-downloader.git",
  macDmg: "https://headlessflower.gumroad.com/l/obynwq"
}

const agencyUrl = "https://headlessflower.dev"
</script>

<style scoped>
:global(body) { background: #0a0a0a; }
.page { min-height: 100vh; color: #f5f5f5; background: radial-gradient(900px 420px at 20% 0%, rgba(220, 38, 38, 0.16), transparent 55%), radial-gradient(800px 420px at 88% 8%, rgba(255, 255, 255, 0.06), transparent 60%), #0a0a0a; }
.container { width: min(1120px, 100%); margin: 0 auto; padding: 0 1.25rem; }
.hero, .section { padding: clamp(3rem, 5vw, 5rem) 0; }
.section--alt { background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01)); border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
.hero__inner, .pricing, .grid, .downloads { display: grid; gap: 1rem; }
.hero__inner { grid-template-columns: 1.1fr 0.9fr; align-items: center; gap: 1.25rem; }
.pricing { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.downloads { grid-template-columns: repeat(3, minmax(0, 1fr)); }
@media (max-width: 940px) { .hero__inner, .pricing, .downloads { grid-template-columns: 1fr; } .hero__image { justify-self: start; max-width: 100%; } }
@media (max-width: 920px) { .grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px) { .grid, .hero__meta { grid-template-columns: 1fr; } .footer__inner { flex-direction: column; align-items: flex-start; } }
.badge, .meta, .card, .price-card, .download { border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); }
.badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.7rem; border-radius: 999px; font-size: 0.8rem; color: rgba(255, 255, 255, 0.82); }
.hero__title, .section__title, .price-card__price { color: #ffffff; }
.hero__title { margin: 0.7rem 0 0.8rem; font-size: clamp(2.6rem, 6vw, 5.25rem); line-height: 0.93; letter-spacing: -0.04em; }
.hero__subtitle, .section__subtitle, .card__body, .price-card__desc, .price-card__item, .download__desc, .footer__copy { color: rgba(255, 255, 255, 0.68); }
.hero__subtitle { margin: 0 0 1.3rem; max-width: 56ch; font-size: 1.03rem; line-height: 1.65; }
.hero__actions, .price-card__cta { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.hero__actions { margin: 1rem 0 1.35rem; }
.btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9rem 1.1rem; border-radius: 999px; text-decoration: none; font-weight: 700; letter-spacing: 0.02em; border: 1px solid rgba(255, 255, 255, 0.14); transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease; }
.btn:hover, .download:hover { transform: translateY(-1px); }
.btn--primary { background: rgba(255, 255, 255, 0.94); color: #111111; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35); }
.btn--ghost { background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.9); }
.hero__image { width: 100%; max-width: 560px; justify-self: end; }
.hero__image img { width: 100%; display: block; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.04); box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45); }
.hero__meta { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.75rem; margin: 0; padding: 0; list-style: none; }
.meta, .card, .price-card, .download { border-radius: 22px; padding: 1.05rem; }
.meta__label, .download__kicker, .price-card__ribbon { font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; }
.meta__label, .download__kicker { color: rgba(255, 255, 255, 0.5); }
.meta__value, .card__title, .download__title, .price-card__name { color: #ffffff; font-weight: 700; }
.section__header { margin-bottom: 1.5rem; max-width: 72ch; }
.section__title { margin: 0 0 0.55rem; font-size: clamp(1.9rem, 4vw, 3.5rem); letter-spacing: -0.03em; line-height: 0.98; }
.card__title, .price-card__name, .download__title { margin: 0 0 0.45rem; font-size: 1.02rem; }
.card__body { margin: 0; line-height: 1.6; }
.price-card { position: relative; padding-top: 2.2rem; }
.price-card--featured { border-color: rgba(220, 38, 38, 0.42); box-shadow: 0 24px 70px rgba(0, 0, 0, 0.4); }
.price-card__ribbon { position: absolute; top: 12px; right: 12px; z-index: 2; padding: 0.32rem 0.65rem; border-radius: 999px; color: rgba(255, 255, 255, 0.92); background: rgba(220, 38, 38, 0.16); border: 1px solid rgba(220, 38, 38, 0.35); }
.price-card__top { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }
.price-card__price { margin: 0; font-size: 1.65rem; font-weight: 900; letter-spacing: -0.03em; }
.price-card__desc { margin: 0.5rem 0 0.9rem; line-height: 1.6; }
.price-card__list { margin: 0; padding: 0; list-style: none; display: grid; gap: 0.55rem; }
.price-card__item { display: flex; gap: 0.6rem; align-items: flex-start; }
.check { display: inline-flex; width: 22px; height: 22px; align-items: center; justify-content: center; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.26); background: rgba(220, 38, 38, 0.12); color: #ffffff; font-weight: 900; flex: 0 0 auto; }
.download { display: flex; align-items: center; justify-content: space-between; gap: 1rem; text-decoration: none; box-shadow: 0 18px 55px rgba(0, 0, 0, 0.22); }
.download__desc { display: block; margin-top: 0.25rem; font-size: 0.92rem; line-height: 1.45; }
.download__arrow { font-size: 1.2rem; color: rgba(255, 255, 255, 0.52); }
.footer { padding: 1.5rem 0 2.25rem; }
.footer__inner { display: flex; align-items: center; justify-content: space-between; gap: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 1.2rem; }
.footer__link { color: rgba(255, 255, 255, 0.88); text-decoration: none; font-weight: 700; border-bottom: 1px solid rgba(255, 255, 255, 0.18); padding-bottom: 0.1rem; }
.footer__link:hover { border-bottom-color: rgba(220, 38, 38, 0.55); }
</style>
