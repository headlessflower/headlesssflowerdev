<template >
  <main class="pro">
    <header class="pro__header">
      <div class="container pro__header-inner">
        <a class="back" :href="backHref" aria-label="Back to Guava Music Vault">
          ← Back
        </a>

        <div class="pro__title-wrap">
          <h1 class="pro__title">Guava Music Vault — Pro</h1>
          <p class="pro__subtitle">
            Download the Pro build for your platform.
          </p>
        </div>
      </div>
    </header>

    <section class="section" aria-label="Downloads">
      <div class="container">
        <div class="downloads">
          <a
              class="download download--featured"
              :href="links.macSilicon"
              target="_blank"
              rel="noopener"
              aria-label="Download for macOS Apple Silicon"
          >
            <div class="download__left">
              <span class="download__kicker">macOS</span>
              <span class="download__title">Apple Silicon (M1/M2/M3)</span>
              <span class="download__desc">DMG installer for ARM64</span>
            </div>
            <span class="download__arrow" aria-hidden="true">→</span>
          </a>

          <a
              class="download"
              :href="links.macIntel"
              target="_blank"
              rel="noopener"
              aria-label="Download for macOS Intel"
          >
            <div class="download__left">
              <span class="download__kicker">macOS</span>
              <span class="download__title">Intel</span>
              <span class="download__desc">DMG installer for x64</span>
            </div>
            <span class="download__arrow" aria-hidden="true">→</span>
          </a>

          <a
              class="download"
              :href="links.linuxAppImage"
              target="_blank"
              rel="noopener"
              aria-label="Download Linux AppImage"
          >
            <div class="download__left">
              <span class="download__kicker">Linux</span>
              <span class="download__title">AppImage</span>
              <span class="download__desc">Portable build (x86_64)</span>
            </div>
            <span class="download__arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="notes" aria-label="Notes">
          <div class="note-card">
            <h2 class="note-card__title">Install notes</h2>
            <ul class="note-card__list" role="list">
              <li class="note-card__item">
                macOS: open the DMG and drag Guava Music Vault into Applications.
              </li>
              <li class="note-card__item">
                Linux AppImage: make executable (<code>chmod +x</code>) and run.
              </li>
            </ul>
          </div>

          <div class="note-card">
            <h2 class="note-card__title">Need another option?</h2>
            <p class="note-card__body">
              If you prefer to build from source, use the main page’s “Build from Source” link.
            </p>
            <a class="btn btn--ghost" :href="sourceHref">
              Build from Source
            </a>
          </div>
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
const year = new Date().getFullYear()

const backHref = "/guava-music-vault"
const sourceHref = "https://github.com/headlessflower/yt-audio-downloader.git"

const links = {
  macSilicon: "https://headlessflower.gumroad.com/l/mbmmdr",
  macIntel: "https://example.com/guava-music-vault-pro-mac-x64.dmg",
  linuxAppImage: "https://github.com/headlessflower/yt-audio-downloader.git",
}

definePageMeta({
  layout: 'no-contact'
});
</script>

<style scoped>
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
  margin-top: 5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 700;
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
  max-width: 72ch;
}

.section {
  padding: clamp(2.25rem, 4.8vw, 4rem) 0;
}

/* Downloads */
.downloads {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 920px) {
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
  background: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.download:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 55px rgba(15, 23, 42, 0.10);
}

.download--featured {
  border-color: rgba(16, 185, 129, 0.35);
  box-shadow: 0 18px 60px rgba(15, 23, 42, 0.10);
}

.download__kicker {
  display: block;
  font-size: 0.8rem;
  color: rgba(15, 23, 42, 0.55);
  margin-bottom: 0.15rem;
}

.download__title {
  display: block;
  font-weight: 900;
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

/* Notes */
.notes {
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 920px) {
  .notes {
    grid-template-columns: 1fr;
  }
}

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

.note-card__body {
  margin: 0 0 0.9rem;
  color: rgba(15, 23, 42, 0.72);
  line-height: 1.6;
}

.note-card__list {
  margin: 0;
  padding: 0 0 0 1.1rem;
  color: rgba(15, 23, 42, 0.74);
  line-height: 1.6;
}

/* Buttons (match landing) */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.05rem;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 700;
  border: 1px solid rgba(15, 23, 42, 0.12);
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
  user-select: none;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.85);
  color: rgba(15, 23, 42, 0.92);
}

/* Footer */
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
