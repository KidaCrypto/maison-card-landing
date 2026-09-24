import './styles.css'
import { getLegalPage, renderLegalPage } from './legal.js'

const legalPage = getLegalPage(window.location.pathname)

if (legalPage) {
  renderLegalPage(legalPage)
} else {

const appStoreUrl = import.meta.env.VITE_APP_STORE_URL || 'https://apps.apple.com/'

const arrow = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg>'

const cta = (label = 'Download for iPhone', style = 'primary') => `
  <a class="button button--${style}" href="${appStoreUrl}" target="_blank" rel="noreferrer">
    <span>${label}</span>${arrow}
  </a>`

const icon = (name) => {
  const paths = {
    cards: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="m9 8 3-2 3 2v5l-3 2-3-2V8Z"/>',
    tear: '<path d="M4 5h16M6 5l1 15h10l1-15"/><path d="m9 9 2 2-2 2 3 3"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    store: '<path d="M4 10v10h16V10M3 4h18l-2 6H5L3 4Z"/><path d="M9 14h6v6"/>'
  }

  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`
}

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Rumby home"><img class="brand__mark" src="/assets/rumby-mark.png" alt="" /><img class="brand__wordmark" src="/assets/rumby-wordmark.png" alt="Rumby" /></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span class="sr-only">Open navigation</span></button>
      <nav class="primary-nav" id="primary-nav" aria-label="Primary navigation">
        <a href="#how">How it works</a>
        <a href="#packs">Packs</a>
        <a href="#collection">Collection</a>
        ${cta('Get the app', 'nav')}
      </nav>
    </header>

    <main id="main">
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span></span>The Social Experiment for iPhone</p>
          <h1 id="hero-title">Open packs.<br />Find your grail.</h1>
          <p class="hero-intro">Pick a card pack, rip the foil, and reveal five collectible cards. Every pull joins your collection.</p>
          <div class="hero-actions">
            ${cta()}
            <p>iOS 17 or later<br />Values are simulated in preview</p>
          </div>
        </div>

        <div class="app-preview" aria-label="The Social Experiment pack screen preview">
          <div class="app-topbar">
            <img src="/assets/rumby-mark.png" alt="" aria-hidden="true" />
            <span class="balance"><b>$</b>$247.00</span>
            <span class="profile" aria-hidden="true"></span>
          </div>
          <div class="category-chips" aria-label="Card categories">
            <span class="is-selected"><i class="pokemon"></i>Pokémon</span>
            <span><i class="one-piece"></i>One Piece</span>
          </div>
          <div class="preview-stage">
            <img class="pack pack--side pack--left" src="/assets/pack-gold.png" alt="" aria-hidden="true" />
            <div class="pack-glow"></div>
            <img class="pack pack--hero" src="/assets/pack-obsidian.png" alt="Obsidian Pokémon card pack" fetchpriority="high" />
            <img class="pack pack--side pack--right" src="/assets/pack-basic.png" alt="" aria-hidden="true" />
          </div>
          <div class="preview-title">
            <h2>Pokémon Obsidian Pack</h2>
            <span>◉ &nbsp; What's inside</span>
          </div>
          <div class="preview-stats">
            <div><span>Min Value</span><strong>$50</strong></div>
            <div class="max-pull"><span>Max Pull</span><strong>$300</strong></div>
            <div><span>Odds</span><strong>▥ ›</strong></div>
          </div>
          <div class="buy-button">Buy for $150</div>
          <p class="demo-note">Paid with demo credits · pulls and values simulated</p>
        </div>
      </section>

      <section class="proof" aria-label="Product highlights">
        <div><strong>6</strong><span>Pack tiers</span></div>
        <div><strong>5</strong><span>Cards per pack</span></div>
        <div><strong>2</strong><span>Card universes</span></div>
        <div><strong>1</strong><span>Collection</span></div>
      </section>

      <section class="how section" id="how" aria-labelledby="how-title">
        <div class="section-heading">
          <p class="eyebrow"><span></span>How it works</p>
          <h2 id="how-title">The best part of collecting,<br />right from the start.</h2>
          <p>The Social Experiment is built around the pack-opening loop. Choose your tier, make the rip, and see what joins your collection.</p>
        </div>
        <ol class="feature-grid">
          <li>${icon('cards')}<span>01</span><h3>Choose a pack</h3><p>Select Pokémon or One Piece, then browse six tiers from Basic to Diamond.</p></li>
          <li>${icon('tear')}<span>02</span><h3>Rip the foil</h3><p>Drag across the pack and move through a focused, tactile card reveal.</p></li>
          <li>${icon('grid')}<span>03</span><h3>Keep every pull</h3><p>Your five revealed cards are saved together in your The Social Experiment collection.</p></li>
        </ol>
      </section>

      <section class="pack-section section" id="packs" aria-labelledby="packs-title">
        <div class="section-heading section-heading--center">
          <p class="eyebrow"><span></span>Featured packs</p>
          <h2 id="packs-title">Find your pack.</h2>
          <p>Each tier has its own price, pull range, foil, and color. Pick one to preview its stats.</p>
        </div>
        <div class="pack-browser">
          <div class="pack-tabs" role="tablist" aria-label="Pack tiers">
            <button role="tab" aria-selected="false" data-pack="basic">Basic</button>
            <button role="tab" aria-selected="false" data-pack="gold">Gold</button>
            <button role="tab" aria-selected="true" data-pack="obsidian">Obsidian</button>
          </div>
          <div class="browser-stage">
            <div class="browser-glow"></div>
            <img id="pack-image" src="/assets/pack-obsidian.png" alt="Obsidian Pokémon card pack" />
          </div>
          <h3 id="pack-name">Pokémon Obsidian Pack</h3>
          <button class="inside-button" type="button">◉ &nbsp; What's inside</button>
          <div class="pack-value-row">
            <div><span>Min Value</span><strong id="pack-min">$50</strong></div>
            <div class="max"><span>Max Pull</span><strong id="pack-max">$300</strong></div>
            <div><span>Cards</span><strong>5</strong></div>
          </div>
          <div class="pack-buy" id="pack-buy">Buy for $150</div>
          <p>Paid with demo credits · pulls and values simulated</p>
        </div>
      </section>

      <section class="collection section" id="collection" aria-labelledby="collection-title">
        <div class="collection-copy">
          <p class="eyebrow"><span></span>Your collection</p>
          <h2 id="collection-title">Every reveal,<br />kept together.</h2>
          <p>Browse the cards you have pulled, see rarity and simulated value at a glance, and return to the details anytime.</p>
          <ul>
            <li>${icon('grid')}<div><strong>Collection view</strong><span>All your revealed cards in one place.</span></div></li>
            <li>${icon('cards')}<div><strong>Card details</strong><span>Artwork, rarity, grade, and preview value.</span></div></li>
          </ul>
        </div>
        <div class="collection-preview" aria-label="The Social Experiment collection preview">
          <div class="collection-header"><h3>Collection</h3><span>12 cards</span></div>
          <div class="filter-chips"><span class="active">All</span><span>Pokémon</span><span>One Piece</span></div>
          <div class="card-grid">
            <article><img class="card-art" src="https://images.pokemontcg.io/sv2/22_hires.png" alt="Bramblin Pokémon card" loading="lazy" /><h4>Bramblin</h4><p><b>Epic</b><span>$1.76</span></p></article>
            <article><img class="card-art" src="https://images.pokemontcg.io/base5/59_hires.png" alt="Machop Pokémon card" loading="lazy" /><h4>Machop</h4><p><b>Common</b><span>$0.47</span></p></article>
            <article><img class="card-art" src="https://images.pokemontcg.io/dp3/110_hires.png" alt="Shuppet Pokémon card" loading="lazy" /><h4>Shuppet</h4><p><b>Rare</b><span>$1.11</span></p></article>
            <article><img class="card-art" src="https://images.pokemontcg.io/swsh2/89_hires.png" alt="Dreepy Pokémon card" loading="lazy" /><h4>Dreepy</h4><p><b>Common</b><span>$0.49</span></p></article>
          </div>
        </div>
      </section>

      <section class="final-cta" aria-labelledby="cta-title">
        <img src="/assets/rumby-mark.png" alt="" aria-hidden="true" />
        <div><p class="eyebrow"><span></span>The Social Experiment for iPhone</p><h2 id="cta-title">Your next pull<br />starts here.</h2></div>
        ${cta('Get The Social Experiment')}
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-brand">
          <a class="brand brand--footer" href="#top"><img class="brand__mark" src="/assets/rumby-mark.png" alt="" /><img class="brand__wordmark" src="/assets/rumby-wordmark.png" alt="Rumby" /></a>
          <p>Open packs. Find your grail.</p>
        </div>
        <nav class="footer-sitemap" aria-label="Footer sitemap">
          <h2>Sitemap</h2>
          <div>
            <a href="#top">Home</a>
            <a href="#how">How it works</a>
            <a href="#packs">Packs</a>
            <a href="#collection">Collection</a>
            <a href="${appStoreUrl}" target="_blank" rel="noreferrer">Download</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </nav>
        <address class="footer-address">
          <strong>Company address</strong>
          <span>The Social Experiment LLC<br />8 The Green, Suite R<br />Dover, DE 19901<br />United States</span>
        </address>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} The Social Experiment. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  </div>`

const packData = {
  basic: { name: 'Pokémon Basic Pack', min: '$1', max: '$10', price: '$5', image: '/assets/pack-basic.png', color: '#6b7280', text: '#fafafa' },
  gold: { name: 'Pokémon Gold Pack', min: '$10', max: '$70', price: '$35', image: '/assets/pack-gold.png', color: '#f59e0b', text: '#0a0a0c' },
  obsidian: { name: 'Pokémon Obsidian Pack', min: '$50', max: '$300', price: '$150', image: '/assets/pack-obsidian.png', color: '#7c3aed', text: '#fafafa' }
}

document.querySelectorAll('[data-pack]').forEach((button) => {
  button.addEventListener('click', () => {
    const pack = packData[button.dataset.pack]
    document.querySelectorAll('[data-pack]').forEach((tab) => tab.setAttribute('aria-selected', String(tab === button)))
    document.querySelector('#pack-image').src = pack.image
    document.querySelector('#pack-image').alt = pack.name
    document.querySelector('#pack-name').textContent = pack.name
    document.querySelector('#pack-min').textContent = pack.min
    document.querySelector('#pack-max').textContent = pack.max
    document.querySelector('#pack-buy').textContent = `Buy for ${pack.price}`
    document.querySelector('#pack-buy').style.setProperty('--pack-color', pack.color)
    document.querySelector('#pack-buy').style.setProperty('--pack-text', pack.text)
  })
})

const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.primary-nav')
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!open))
  navigation.classList.toggle('is-open', !open)
})
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false')
  navigation.classList.remove('is-open')
}))
}
