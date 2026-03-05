/* ─────────────────────────────────────────────────────
   InPursuit Health — nav.js
   Brand gold: #C5A44E  |  Navy: #0A1628
   ───────────────────────────────────────────────────── */

(function () {
  const GOLD  = '#C5A44E';
  const NAVY  = '#0A1628';
  const NAV_H = '68px';

  /* ── 1. INJECT STYLES ── */
  const style = document.createElement('style');
  style.textContent = `
    /* Reset nav margin so nothing shifts */
    body { margin-top: ${NAV_H}; }

    #ip-nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: ${NAV_H};
      background: ${NAVY};
      border-bottom: 1px solid rgba(197,164,78,0.25);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2.5rem;
      z-index: 9999;
      font-family: Arial, Helvetica, sans-serif;
      box-sizing: border-box;
    }

    /* ── Logo ── */
    #ip-nav .nav-logo {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      text-decoration: none;
      flex-shrink: 0;
    }

    #ip-nav .nav-logo-mark {
      width: 32px; height: 32px;
    }

    #ip-nav .nav-logo-text {
      font-family: Georgia, serif;
      font-size: 1.15rem;
      color: #fff;
      letter-spacing: -0.01em;
      line-height: 1;
    }

    #ip-nav .nav-logo-text span {
      display: block;
      font-family: Arial, sans-serif;
      font-size: 0.58rem;
      color: ${GOLD};
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-top: 2px;
    }

    /* ── Nav links container ── */
    #ip-nav .nav-links {
      display: flex;
      align-items: center;
      gap: 0;
      list-style: none;
      margin: 0; padding: 0;
      height: ${NAV_H};
    }

    /* ── Top-level items ── */
    #ip-nav .nav-links > li {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
    }

    #ip-nav .nav-links > li > a {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      height: 100%;
      padding: 0 1rem;
      color: rgba(255,255,255,0.82);
      text-decoration: none;
      font-size: 0.82rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      white-space: nowrap;
      transition: color 0.2s;
      /* Extend the hover area downward to bridge the gap to the dropdown */
      padding-bottom: 0;
      box-sizing: border-box;
    }

    #ip-nav .nav-links > li > a:hover,
    #ip-nav .nav-links > li.open > a {
      color: ${GOLD};
    }

    /* Caret indicator for items with dropdowns */
    #ip-nav .nav-links > li.has-drop > a::after {
      content: '';
      display: inline-block;
      width: 6px; height: 6px;
      border-right: 1.5px solid currentColor;
      border-bottom: 1.5px solid currentColor;
      transform: rotate(45deg);
      margin-top: -3px;
      transition: transform 0.2s;
    }

    #ip-nav .nav-links > li.has-drop.open > a::after {
      transform: rotate(-135deg);
      margin-top: 3px;
    }

    /* ── THE KEY FIX: bridge element fills gap between nav item and dropdown ── */
    #ip-nav .nav-links > li.has-drop > a::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0; right: 0;
      height: 12px;               /* covers the gap */
      background: transparent;
    }

    /* ── Dropdown panel ── */
    #ip-nav .nav-drop {
      display: none;
      position: absolute;
      top: calc(${NAV_H} - 1px);  /* flush to nav bottom, no gap */
      left: 0;
      min-width: 220px;
      background: ${NAVY};
      border: 1px solid rgba(197,164,78,0.2);
      border-top: 2px solid ${GOLD};
      border-radius: 0 0 8px 8px;
      padding: 0.5rem 0;
      box-shadow: 0 12px 40px rgba(0,0,0,0.5);
      z-index: 10000;
    }

    /* Show on hover — the parent li maintains hover state because
       the dropdown is a child of it, so moving mouse into dropdown
       keeps the li:hover active. No gap = no disappearing. */
    #ip-nav .nav-links > li.has-drop:hover > .nav-drop,
    #ip-nav .nav-links > li.has-drop.open > .nav-drop {
      display: block;
    }

    #ip-nav .nav-drop a {
      display: block;
      padding: 0.55rem 1.25rem;
      color: rgba(255,255,255,0.78);
      text-decoration: none;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.03em;
      transition: all 0.15s;
      white-space: nowrap;
    }

    #ip-nav .nav-drop a:hover {
      color: ${GOLD};
      background: rgba(197,164,78,0.07);
      padding-left: 1.5rem;
    }

    #ip-nav .nav-drop .drop-label {
      display: block;
      padding: 0.6rem 1.25rem 0.3rem;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${GOLD};
      opacity: 0.7;
    }

    #ip-nav .nav-drop hr {
      border: none;
      border-top: 1px solid rgba(197,164,78,0.12);
      margin: 0.35rem 0;
    }

    /* ── CTA button ── */
    #ip-nav .nav-cta {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;
    }

    #ip-nav .nav-cta a {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 1.2rem;
      border-radius: 6px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-decoration: none;
      transition: all 0.2s;
      white-space: nowrap;
    }

    #ip-nav .btn-nav-outline {
      border: 1px solid rgba(197,164,78,0.45);
      color: ${GOLD};
      background: transparent;
    }

    #ip-nav .btn-nav-outline:hover {
      background: rgba(197,164,78,0.1);
      border-color: ${GOLD};
    }

    #ip-nav .btn-nav-solid {
      background: ${GOLD};
      color: ${NAVY};
      border: 1px solid ${GOLD};
    }

    #ip-nav .btn-nav-solid:hover {
      background: #d4ba6e;
      border-color: #d4ba6e;
    }

    /* ── Mobile hamburger ── */
    #ip-nav .nav-hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      padding: 4px;
      background: none;
      border: none;
    }

    #ip-nav .nav-hamburger span {
      display: block;
      width: 24px; height: 2px;
      background: rgba(255,255,255,0.8);
      border-radius: 2px;
      transition: all 0.3s;
    }

    /* ── Mobile drawer ── */
    #ip-nav-mobile {
      display: none;
      position: fixed;
      top: ${NAV_H};
      left: 0; right: 0;
      background: ${NAVY};
      border-bottom: 1px solid rgba(197,164,78,0.2);
      z-index: 9998;
      padding: 1rem 0 1.5rem;
      font-family: Arial, sans-serif;
      overflow-y: auto;
      max-height: calc(100vh - ${NAV_H});
    }

    #ip-nav-mobile.open { display: block; }

    #ip-nav-mobile a {
      display: block;
      padding: 0.65rem 2rem;
      color: rgba(255,255,255,0.82);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 600;
      border-left: 3px solid transparent;
      transition: all 0.15s;
    }

    #ip-nav-mobile a:hover {
      color: ${GOLD};
      border-left-color: ${GOLD};
      background: rgba(197,164,78,0.06);
    }

    #ip-nav-mobile .mob-section {
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${GOLD};
      opacity: 0.6;
      padding: 1rem 2rem 0.25rem;
    }

    #ip-nav-mobile .mob-sub a {
      padding-left: 2.75rem;
      font-size: 0.82rem;
      font-weight: 500;
    }

    #ip-nav-mobile .mob-cta {
      padding: 1rem 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    #ip-nav-mobile .mob-cta a {
      text-align: center;
      border-radius: 6px;
      padding: 0.7rem;
      border-left: none !important;
    }

    /* ── Footer ── */
    #ip-footer {
      background: ${NAVY};
      border-top: 1px solid rgba(197,164,78,0.2);
      padding: 3.5rem 2.5rem 2rem;
      font-family: Arial, sans-serif;
    }

    .ip-footer-grid {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 2.5rem;
    }

    .ip-footer-brand .logo-text {
      font-family: Georgia, serif;
      font-size: 1.1rem;
      color: #fff;
      margin-bottom: 0.25rem;
    }

    .ip-footer-brand .logo-sub {
      font-size: 0.62rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${GOLD};
      margin-bottom: 1rem;
    }

    .ip-footer-brand p {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.45);
      line-height: 1.7;
      max-width: 240px;
    }

    .ip-footer-brand .footer-marks {
      margin-top: 1rem;
      font-size: 0.7rem;
      color: rgba(197,164,78,0.6);
    }

    .ip-footer-col h4 {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${GOLD};
      margin-bottom: 1rem;
    }

    .ip-footer-col a {
      display: block;
      font-size: 0.8rem;
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      margin-bottom: 0.55rem;
      transition: color 0.2s;
    }

    .ip-footer-col a:hover { color: ${GOLD}; }

    .ip-footer-bottom {
      max-width: 1100px;
      margin: 2.5rem auto 0;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(197,164,78,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .ip-footer-bottom p {
      font-size: 0.72rem;
      color: rgba(255,255,255,0.3);
    }

    .ip-footer-bottom a {
      color: rgba(255,255,255,0.3);
      text-decoration: none;
      margin-left: 1.25rem;
      font-size: 0.72rem;
      transition: color 0.2s;
    }

    .ip-footer-bottom a:hover { color: ${GOLD}; }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      #ip-nav .nav-links,
      #ip-nav .nav-cta { display: none; }
      #ip-nav .nav-hamburger { display: flex; }
      .ip-footer-grid { grid-template-columns: 1fr 1fr; }
    }

    @media (max-width: 560px) {
      #ip-nav { padding: 0 1.25rem; }
      .ip-footer-grid { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);

  /* ── 2. BUILD NAV HTML ── */
  const nav = document.createElement('nav');
  nav.id = 'ip-nav';
  nav.innerHTML = `
    <a href="/index.html" class="nav-logo">
      <svg class="nav-logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" stroke="${GOLD}" stroke-width="1.5" fill="none"/>
        <line x1="16" y1="1" x2="16" y2="31" stroke="${GOLD}" stroke-width="1" opacity="0.5"/>
        <line x1="1" y1="16" x2="31" y2="16" stroke="${GOLD}" stroke-width="1" opacity="0.5"/>
        <circle cx="16" cy="16" r="3" fill="${GOLD}"/>
        <line x1="16" y1="1" x2="16" y2="10" stroke="${GOLD}" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
      <div class="nav-logo-text">
        InPursuit Health
        <span>Results Matter™</span>
      </div>
    </a>

    <ul class="nav-links">

      <li class="has-drop">
        <a href="#">Infrastructure</a>
        <div class="nav-drop">
          <span class="drop-label">Core</span>
          <a href="/tetra.html">TETRA™ — Data Fabric</a>
          <a href="/tetra-ex.html">TETRA Ex™ — Exchange</a>
          <hr>
          <span class="drop-label">Intelligence</span>
          <a href="/tetra-aegis.html">TETRA Aegis™ — Protection</a>
          <a href="/tetra-conductor.html">TETRA Conductor™ — AI Orchestration</a>
        </div>
      </li>

      <li class="has-drop">
        <a href="#">Solutions</a>
        <div class="nav-drop">
          <span class="drop-label">Providers</span>
          <a href="/for-providers.html">For Providers</a>
          <a href="/access.html">CMS ACCESS Model</a>
          <a href="/access-apply.html">Apply Now</a>
          <hr>
          <span class="drop-label">Consumers</span>
          <a href="/for-you.html">For You</a>
          <a href="/mypursuit.html">MyPursuit App</a>
          <hr>
          <span class="drop-label">Federal</span>
          <a href="/veterans-first.html">Veterans First</a>
          <a href="/maha.html">MAHA Initiative</a>
        </div>
      </li>

      <li class="has-drop">
        <a href="#">VBC Models</a>
        <div class="nav-drop">
          <a href="/access.html">ACCESS Model</a>
          <a href="/mssp.html">MSSP</a>
          <a href="/lead.html">LEAD</a>
          <a href="/team.html">TEAM</a>
        </div>
      </li>

      <li class="has-drop">
        <a href="#">Company</a>
        <div class="nav-drop">
          <a href="/about.html">About</a>
          <a href="/leadership.html">Leadership</a>
          <a href="/partner-network.html">Partner Network</a>
          <a href="/careers.html">Careers</a>
          <a href="/contact.html">Contact</a>
        </div>
      </li>

      <li>
        <a href="/investor.html">Investors</a>
      </li>

    </ul>

    <div class="nav-cta">
      <a href="/access-apply.html" class="btn-nav-outline">Apply — ACCESS Model</a>
      <a href="mailto:info@inpursuithealth.com" class="btn-nav-solid">Contact Us</a>
    </div>

    <button class="nav-hamburger" id="ip-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;
  document.body.prepend(nav);

  /* ── 3. MOBILE DRAWER ── */
  const drawer = document.createElement('div');
  drawer.id = 'ip-nav-mobile';
  drawer.innerHTML = `
    <div class="mob-section">Infrastructure</div>
    <div class="mob-sub">
      <a href="/tetra.html">TETRA™ — Data Fabric</a>
      <a href="/tetra-ex.html">TETRA Ex™ — Exchange</a>
      <a href="/tetra-aegis.html">TETRA Aegis™ — Protection</a>
      <a href="/tetra-conductor.html">TETRA Conductor™ — AI Orchestration</a>
    </div>
    <div class="mob-section">Solutions</div>
    <div class="mob-sub">
      <a href="/for-providers.html">For Providers</a>
      <a href="/access.html">CMS ACCESS Model</a>
      <a href="/for-you.html">For You</a>
      <a href="/mypursuit.html">MyPursuit App</a>
      <a href="/veterans-first.html">Veterans First</a>
      <a href="/maha.html">MAHA Initiative</a>
    </div>
    <div class="mob-section">VBC Models</div>
    <div class="mob-sub">
      <a href="/access.html">ACCESS</a>
      <a href="/mssp.html">MSSP</a>
      <a href="/lead.html">LEAD</a>
      <a href="/team.html">TEAM</a>
    </div>
    <div class="mob-section">Company</div>
    <div class="mob-sub">
      <a href="/about.html">About</a>
      <a href="/leadership.html">Leadership</a>
      <a href="/partner-network.html">Partner Network</a>
      <a href="/careers.html">Careers</a>
      <a href="/contact.html">Contact</a>
      <a href="/investor.html">Investors</a>
    </div>
    <div class="mob-cta">
      <a href="/access-apply.html" class="btn-nav-outline" style="border:1px solid rgba(197,164,78,0.45);color:#C5A44E;">Apply — ACCESS Model</a>
      <a href="mailto:info@inpursuithealth.com" class="btn-nav-solid" style="background:#C5A44E;color:#0A1628;font-weight:700;">Contact Us</a>
    </div>
  `;
  document.body.insertBefore(drawer, nav.nextSibling);

  /* ── 4. HAMBURGER TOGGLE ── */
  document.getElementById('ip-hamburger').addEventListener('click', function () {
    drawer.classList.toggle('open');
    const spans = this.querySelectorAll('span');
    if (drawer.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  /* ── 5. CLOSE DRAWER ON LINK CLICK ── */
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      document.getElementById('ip-hamburger').querySelectorAll('span')
        .forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  /* ── 6. HIGHLIGHT ACTIVE PAGE ── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href !== '#' && href.endsWith(path)) {
      a.style.color = GOLD;
    }
  });

  /* ── 7. FOOTER ── */
  const footer = document.createElement('footer');
  footer.id = 'ip-footer';
  footer.innerHTML = `
    <div class="ip-footer-grid">
      <div class="ip-footer-brand">
        <div class="logo-text">InPursuit Health</div>
        <div class="logo-sub">Harness the Power of Your Data™</div>
        <p>AI-ready data infrastructure for value-based care. Powering providers, protecting patients, and enabling the next generation of healthcare at federal scale.</p>
        <div class="footer-marks">Results Matter™ &nbsp;·&nbsp; Harness the Power of Your Data™</div>
      </div>
      <div class="ip-footer-col">
        <h4>Infrastructure</h4>
        <a href="/tetra.html">TETRA™</a>
        <a href="/tetra-ex.html">TETRA Ex™</a>
        <a href="/tetra-aegis.html">TETRA Aegis™</a>
        <a href="/tetra-conductor.html">TETRA Conductor™</a>
      </div>
      <div class="ip-footer-col">
        <h4>Solutions</h4>
        <a href="/for-providers.html">For Providers</a>
        <a href="/access.html">ACCESS Model</a>
        <a href="/for-you.html">For You</a>
        <a href="/veterans-first.html">Veterans First</a>
        <a href="/maha.html">MAHA</a>
      </div>
      <div class="ip-footer-col">
        <h4>Company</h4>
        <a href="/about.html">About</a>
        <a href="/leadership.html">Leadership</a>
        <a href="/investor.html">Investors</a>
        <a href="/careers.html">Careers</a>
        <a href="/contact.html">Contact</a>
      </div>
    </div>
    <div class="ip-footer-bottom">
      <p>© 2026 InPursuit Health, LLC &nbsp;·&nbsp; Wyoming &nbsp;·&nbsp; All rights reserved.</p>
      <div>
        <a href="/privacy.html">Privacy</a>
        <a href="/terms.html">Terms</a>
        <a href="/security-center.html">Security</a>
        <a href="/data-oath.html">Data Oath</a>
        <a href="mailto:info@inpursuithealth.com">info@inpursuithealth.com</a>
      </div>
    </div>
  `;
  document.body.appendChild(footer);

})();
