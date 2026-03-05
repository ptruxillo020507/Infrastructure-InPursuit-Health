/**
 * nav.js — InPursuit Health Universal Navigation + Footer
 * Drop in site root. Add before </body> on every page:
 *   <script src="nav.js"></script>
 */

(function () {

  /* ── NAV STRUCTURE ─────────────────────────────────────────── */
  var NAV = [
    {
      label: 'MAHA',
      href:  'maha.html'
    },
    {
      label: 'TETRA',
      href:  'tetra.html',
      children: [
        { label: 'TETRA Ex\u2122',        href: 'tetra-ex.html',        desc: 'Enterprise data exchange &amp; interoperability infrastructure' },
        { label: 'TETRA Conductor\u2122', href: 'tetra-conductor.html', desc: 'Model-agnostic AI orchestration layer for healthcare' },
        {
          label: 'TETRA Aegis\u2122',
          href:  'tetra-aegis.html',
          desc:  'AI governance &amp; supervisory control architecture',
          children: [
            { label: 'TETRA Sentinel\u2122', href: 'tetra-sentinel.html', desc: 'Real-time AI supervision &amp; threat interception agent' }
          ]
        }
      ]
    },
    {
      label: 'For You',
      href:  'for-you.html',
      children: [
        { label: 'The Data Oath', href: 'data-oath.html', desc: 'Our promise on how your health data is used' }
      ]
    },
    {
      label: 'For VBC Providers',
      href:  'for-providers.html',
      children: [
        { label: 'CMS ACCESS Model', href: 'access.html', desc: 'Apply by April\u00a01, 2026\u00a0\u2014 Cohort\u00a01' },
        { label: 'MSSP',            href: 'mssp.html',   desc: 'Medicare Shared Savings Program' },
        { label: 'LEAD',            href: 'lead.html',   desc: 'Lung Cancer Early Detection' },
        { label: 'TEAM',            href: 'team.html',   desc: 'Transforming Episode Accountability Model' }
      ]
    },
    {
      label: 'Veterans First',
      href:  'veterans-first.html'
    }
  ];

  var CTA = { label: 'Invest', href: 'investor.html' };

  /* ── FOOTER COLUMNS ────────────────────────────────────────── */
  var FOOTER_COLS = [
    {
      heading: 'Policy',
      links: [
        { label: 'MAHA',             href: 'maha.html' },
        { label: 'Privacy Policy',   href: 'privacy.html' },
        { label: 'Terms of Service', href: 'terms.html' },
        { label: 'Security Center',  href: 'security.html' }
      ]
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us',   href: 'about.html' },
        { label: 'Leadership', href: 'leadership.html' },
        { label: 'Careers',    href: 'careers.html' },
        { label: 'Contact',    href: 'contact.html' }
      ]
    }
  ];

  /* ── CSS ───────────────────────────────────────────────────── */
  var CSS = [
    ':root{--iph-navy:#0A1628;--iph-navy-deep:#060E1A;--iph-navy-mid:#112240;--iph-gold:#C5A44E;--iph-gold-light:#D4B96A;--iph-white:#FFFFFF;--iph-muted:rgba(255,255,255,0.55);--iph-border:rgba(197,164,78,0.2);--iph-border-dim:rgba(197,164,78,0.08);--iph-drop:#060E1A;--iph-h:64px;}',
    'body{padding-top:var(--iph-h);}',
    '#iph-header{background:#060E1A;border-bottom:1px solid rgba(197,164,78,0.2);position:fixed;top:0;left:0;right:0;z-index:1000;transition:box-shadow 0.3s ease;}',
    '#iph-header.scrolled{box-shadow:0 4px 30px rgba(0,0,0,0.4);}',
    '#iph-header-inner{max-width:1400px;margin:0 auto;padding:0 40px;display:flex;justify-content:space-between;align-items:center;height:var(--iph-h);}',
    /* brand */
    '#iph-brand{display:flex;align-items:center;text-decoration:none;flex-shrink:0;}',
    '#iph-brand-wordmark{font-family:"Instrument Serif",Georgia,serif;font-size:22px;color:#C5A44E;letter-spacing:1px;line-height:1;}',
    '#iph-brand-pipe{color:rgba(197,164,78,0.3);font-size:18px;margin:0 12px;font-weight:300;}',
    '#iph-brand-sub{font-family:"Instrument Sans",Arial,sans-serif;font-size:9px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(197,164,78,0.55);line-height:1;}',
    /* desktop nav */
    '#iph-nav{display:flex;align-items:center;gap:0;list-style:none;margin:0;padding:0;}',
    '.iph-ni{position:relative;list-style:none;}',
    '.iph-ni>a{display:flex;align-items:center;gap:4px;padding:20px 14px;font-family:"Instrument Sans",Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.3s ease;cursor:pointer;position:relative;white-space:nowrap;}',
    '.iph-ni>a:hover,.iph-ni.iph-open>a{color:#C5A44E;}',
    '.iph-ni>a::after{content:"";position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:0;height:2px;background:#C5A44E;transition:width 0.3s ease;}',
    '.iph-ni>a:hover::after,.iph-ni.iph-open>a::after{width:60%;}',
    '.iph-chev{width:10px;height:10px;flex-shrink:0;opacity:0.5;transition:transform 0.2s,opacity 0.2s;}',
    '.iph-ni.iph-open>a .iph-chev,.iph-drop-item.iph-open>a .iph-chev{transform:rotate(180deg);opacity:0.9;}',
    /* dropdown */
    '.iph-drop{display:none;position:absolute;top:calc(var(--iph-h) + 1px);left:0;min-width:280px;background:#060E1A;border:1px solid rgba(197,164,78,0.15);border-radius:10px;padding:8px;box-shadow:0 24px 60px rgba(0,0,0,0.5);z-index:999;list-style:none;margin:0;}',
    '.iph-ni.iph-open>.iph-drop{display:block;}',
    '.iph-drop-item{position:relative;list-style:none;}',
    '.iph-drop-item>a{display:flex;flex-direction:column;padding:11px 14px;border-radius:8px;text-decoration:none;transition:background 0.15s;}',
    '.iph-drop-item>a:hover,.iph-drop-item.iph-open>a{background:rgba(197,164,78,0.07);}',
    '.iph-drop-sep{height:1px;background:rgba(197,164,78,0.08);margin:4px 8px;}',
    '.di-label{font-family:"Instrument Sans",Arial,sans-serif;font-size:13px;font-weight:600;color:#FFFFFF;display:flex;align-items:center;gap:6px;}',
    '.di-desc{font-family:"Instrument Sans",Arial,sans-serif;font-size:11px;color:rgba(255,255,255,0.4);margin-top:3px;line-height:1.45;}',
    /* sub-dropdown */
    '.iph-subdrop{display:none;background:rgba(0,0,0,0.3);border:1px solid rgba(197,164,78,0.08);border-radius:8px;margin:2px 8px 4px;padding:4px;list-style:none;}',
    '.iph-drop-item.iph-open>.iph-subdrop{display:block;}',
    '.iph-subdrop-item{list-style:none;}',
    '.iph-subdrop-item a{display:flex;flex-direction:column;padding:9px 12px;border-radius:6px;text-decoration:none;transition:background 0.15s;}',
    '.iph-subdrop-item a:hover{background:rgba(197,164,78,0.07);}',
    '.iph-subdrop-item .di-label{font-size:12px;color:#C5A44E;}',
    /* CTA */
    '#iph-cta{margin-left:24px;flex-shrink:0;display:inline-flex;align-items:center;padding:9px 22px;background:#C5A44E;color:#060E1A;font-family:"Instrument Sans",Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;border-radius:4px;white-space:nowrap;position:relative;overflow:hidden;animation:iphInvestPulse 3.5s ease-in-out infinite;}',
    '#iph-cta::before{content:"";position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(105deg,transparent 20%,rgba(255,255,255,0.28) 50%,transparent 80%);animation:iphInvestShimmer 3.5s ease-in-out infinite;pointer-events:none;}',
    '#iph-cta:hover{transform:translateY(-1px);animation-play-state:paused;}',
    '#iph-cta:hover::before{animation-play-state:paused;}',
    '@keyframes iphInvestPulse{0%,100%{background:#C5A44E;box-shadow:0 0 0 0 rgba(197,164,78,0);}40%{background:#d4b05a;box-shadow:0 0 12px 2px rgba(197,164,78,0.45),0 0 28px 6px rgba(197,164,78,0.18);}70%{background:#C5A44E;box-shadow:0 0 6px 1px rgba(197,164,78,0.2);}}',
    '@keyframes iphInvestShimmer{0%,30%{left:-100%;}55%{left:140%;}100%{left:140%;}}',
    '.btn-invest{position:relative;overflow:hidden;animation:iphInvestPulse 3.5s ease-in-out infinite;}',
    '.btn-invest::before{content:"";position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(105deg,transparent 20%,rgba(255,255,255,0.28) 50%,transparent 80%);animation:iphInvestShimmer 3.5s ease-in-out infinite;pointer-events:none;}',
    '.btn-invest:hover{animation-play-state:paused;}',
    '.btn-invest:hover::before{animation-play-state:paused;}',
    /* burger */
    '#iph-burger{display:none;background:none;border:none;width:32px;height:32px;cursor:pointer;position:relative;flex-shrink:0;}',
    '#iph-burger span{display:block;width:22px;height:2px;background:#C5A44E;position:absolute;left:5px;transition:all 0.3s ease;}',
    '#iph-burger span:nth-child(1){top:8px;}#iph-burger span:nth-child(2){top:15px;}#iph-burger span:nth-child(3){top:22px;}',
    '#iph-header.iph-mob-open #iph-burger span:nth-child(1){transform:translateY(7px) rotate(45deg);}',
    '#iph-header.iph-mob-open #iph-burger span:nth-child(2){opacity:0;}',
    '#iph-header.iph-mob-open #iph-burger span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}',
    /* mobile */
    '#iph-mob{display:none;position:fixed;top:var(--iph-h);left:0;right:0;background:#060E1A;border-top:1px solid rgba(197,164,78,0.2);z-index:999;overflow-y:auto;max-height:calc(100vh - var(--iph-h));padding:12px 0 32px;}',
    '#iph-header.iph-mob-open~#iph-mob{display:block;}',
    '.mob-sec{border-bottom:1px solid rgba(197,164,78,0.07);padding:2px 0;}',
    '.mob-top{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-family:"Instrument Sans",Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.7);text-decoration:none;cursor:pointer;}',
    '.mob-sec.iph-open .mob-top .iph-chev{transform:rotate(180deg);opacity:0.9;}',
    '.mob-kids{display:none;padding-bottom:6px;}.mob-sec.iph-open .mob-kids{display:block;}',
    '.mob-kid{display:flex;flex-direction:column;padding:10px 24px 10px 36px;text-decoration:none;}',
    '.mob-kid .di-label{font-size:13px;color:#FFFFFF;}.mob-kid .di-desc{font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;}',
    '.mob-sub-head{padding:8px 24px 3px 36px;font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#C5A44E;opacity:0.5;}',
    '.mob-sub{display:flex;flex-direction:column;padding:9px 24px 9px 50px;text-decoration:none;background:rgba(0,0,0,0.18);}',
    '.mob-sub .di-label{font-size:12px;color:#C5A44E;}.mob-sub .di-desc{font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;}',
    '.mob-cta{display:block;margin:20px 24px 0;padding:14px;background:#C5A44E;color:#060E1A;font-family:"Instrument Sans",Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-align:center;text-decoration:none;border-radius:4px;}',
    /* footer */
    '#iph-footer{background:#060E1A;border-top:1px solid rgba(197,164,78,0.1);padding:48px 40px 32px;}',
    '#iph-footer-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;}',
    '#iph-footer-brand{font-family:"Instrument Serif",Georgia,serif;font-size:18px;color:#C5A44E;letter-spacing:1px;}',
    '#iph-footer-legal{font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:0.5px;}',
    '#iph-footer-cols{max-width:1200px;margin:24px auto 0;padding-top:24px;border-top:1px solid rgba(197,164,78,0.08);display:flex;gap:64px;flex-wrap:wrap;}',
    '.iph-fcol-head{font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(197,164,78,0.5);margin-bottom:14px;}',
    '.iph-fcol-links{display:flex;flex-direction:column;gap:11px;}',
    '.iph-fcol-links a{font-size:11px;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.3);text-decoration:none;transition:color 0.3s;}',
    '.iph-fcol-links a:hover{color:#C5A44E;}',
    '#iph-footer-disclaimer{max-width:1200px;margin:24px auto 0;font-size:10px;color:rgba(255,255,255,0.15);line-height:1.6;}',
    /* responsive */
    '@media(max-width:900px){#iph-nav,#iph-cta{display:none!important;}#iph-burger{display:block;}#iph-footer-cols{gap:40px;}}',
    '@media(min-width:901px){#iph-mob{display:none!important;}}',
    '@media(max-width:768px){#iph-header-inner{padding:0 20px;}#iph-footer{padding:40px 24px 28px;}}'
  ].join('\n');

  /* ── CHEVRON ────────────────────────────────────────────────── */
  function chev() {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 12 12');
    s.setAttribute('fill', 'none');
    s.setAttribute('stroke', 'currentColor');
    s.setAttribute('stroke-width', '2');
    s.setAttribute('stroke-linecap', 'round');
    s.setAttribute('stroke-linejoin', 'round');
    s.className.baseVal = 'iph-chev';
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    p.setAttribute('points', '2,4 6,8 10,4');
    s.appendChild(p);
    return s;
  }

  /* ── DESKTOP DROPDOWN ───────────────────────────────────────── */
  function buildDrop(items) {
    var ul = document.createElement('ul');
    ul.className = 'iph-drop';
    items.forEach(function (item, idx) {
      if (idx > 0) { var sep = document.createElement('li'); sep.className = 'iph-drop-sep'; ul.appendChild(sep); }
      var li = document.createElement('li');
      li.className = 'iph-drop-item';
      var a = document.createElement('a');
      a.href = item.href || '#';
      var lbl = document.createElement('span');
      lbl.className = 'di-label';
      lbl.innerHTML = item.label;
      if (item.children && item.children.length) lbl.appendChild(chev());
      a.appendChild(lbl);
      if (item.desc) { var d = document.createElement('span'); d.className = 'di-desc'; d.innerHTML = item.desc; a.appendChild(d); }
      li.appendChild(a);
      if (item.children && item.children.length) {
        var sub = document.createElement('ul');
        sub.className = 'iph-subdrop';
        item.children.forEach(function (sc) {
          var sli = document.createElement('li'); sli.className = 'iph-subdrop-item';
          var sa = document.createElement('a'); sa.href = sc.href || '#';
          var sl = document.createElement('span'); sl.className = 'di-label'; sl.innerHTML = sc.label; sa.appendChild(sl);
          if (sc.desc) { var sd = document.createElement('span'); sd.className = 'di-desc'; sd.innerHTML = sc.desc; sa.appendChild(sd); }
          sli.appendChild(sa); sub.appendChild(sli);
        });
        li.appendChild(sub);
        a.addEventListener('click', function (e) { e.preventDefault(); li.classList.toggle('iph-open'); });
      }
      ul.appendChild(li);
    });
    return ul;
  }

  /* ── DESKTOP NAV ────────────────────────────────────────────── */
  function buildNav() {
    var ul = document.createElement('ul');
    ul.id = 'iph-nav';
    NAV.forEach(function (item) {
      var li = document.createElement('li'); li.className = 'iph-ni';
      var a = document.createElement('a'); a.href = item.href || '#';
      var labelSpan = document.createElement('span');
      labelSpan.innerHTML = item.label;
      a.appendChild(labelSpan);
      if (item.children) a.appendChild(chev());
      li.appendChild(a);
      if (item.children) {
        li.appendChild(buildDrop(item.children));
        // Hover opens/closes dropdown
        li.addEventListener('mouseenter', function () {
          document.querySelectorAll('.iph-ni.iph-open').forEach(function (el) { el.classList.remove('iph-open'); });
          li.classList.add('iph-open');
        });
        li.addEventListener('mouseleave', function () {
          li.classList.remove('iph-open');
        });
        // Clicking the label text navigates; clicking chevron toggles dropdown
        a.addEventListener('click', function (e) {
          if (e.target.closest('.iph-chev')) {
            e.preventDefault();
            li.classList.toggle('iph-open');
          }
          // otherwise let href navigate normally
        });
      }
      ul.appendChild(li);
    });
    return ul;
  }

  /* ── MOBILE MENU ────────────────────────────────────────────── */
  function buildMobile() {
    var wrap = document.createElement('div'); wrap.id = 'iph-mob';
    NAV.forEach(function (item) {
      var sec = document.createElement('div'); sec.className = 'mob-sec';
      if (item.children) {
        var topDiv = document.createElement('div'); topDiv.className = 'mob-top';
        var ts = document.createElement('span'); ts.innerHTML = item.label; topDiv.appendChild(ts); topDiv.appendChild(chev());
        topDiv.addEventListener('click', function () { sec.classList.toggle('iph-open'); });
        sec.appendChild(topDiv);
        var kids = document.createElement('div'); kids.className = 'mob-kids';
        item.children.forEach(function (child) {
          var ca = document.createElement('a'); ca.href = child.href || '#'; ca.className = 'mob-kid';
          var cl = document.createElement('span'); cl.className = 'di-label'; cl.innerHTML = child.label; ca.appendChild(cl);
          if (child.desc) { var cd = document.createElement('span'); cd.className = 'di-desc'; cd.innerHTML = child.desc; ca.appendChild(cd); }
          kids.appendChild(ca);
          if (child.children && child.children.length) {
            var sh = document.createElement('div'); sh.className = 'mob-sub-head'; sh.textContent = 'Includes'; kids.appendChild(sh);
            child.children.forEach(function (sub) {
              var sa = document.createElement('a'); sa.href = sub.href || '#'; sa.className = 'mob-sub';
              var sl = document.createElement('span'); sl.className = 'di-label'; sl.innerHTML = sub.label; sa.appendChild(sl);
              if (sub.desc) { var sd = document.createElement('span'); sd.className = 'di-desc'; sd.innerHTML = sub.desc; sa.appendChild(sd); }
              kids.appendChild(sa);
            });
          }
        });
        sec.appendChild(kids);
      } else {
        var a = document.createElement('a'); a.href = item.href; a.className = 'mob-top'; a.innerHTML = item.label; sec.appendChild(a);
      }
      wrap.appendChild(sec);
    });
    var cta = document.createElement('a'); cta.href = CTA.href; cta.className = 'mob-cta'; cta.textContent = CTA.label;
    wrap.appendChild(cta);
    return wrap;
  }

  /* ── FOOTER ─────────────────────────────────────────────────── */
  function buildFooter() {
    var footer = document.createElement('footer'); footer.id = 'iph-footer';
    var inner = document.createElement('div'); inner.id = 'iph-footer-inner';
    var brand = document.createElement('div'); brand.id = 'iph-footer-brand'; brand.textContent = 'InPursuit Health';
    var legal = document.createElement('span'); legal.id = 'iph-footer-legal'; legal.innerHTML = '\u00a9 2026 InPursuit Health, LLC. All rights reserved.';
    inner.appendChild(brand); inner.appendChild(legal); footer.appendChild(inner);
    var cols = document.createElement('div'); cols.id = 'iph-footer-cols';
    FOOTER_COLS.forEach(function (col) {
      var div = document.createElement('div');
      var head = document.createElement('div'); head.className = 'iph-fcol-head'; head.textContent = col.heading; div.appendChild(head);
      var links = document.createElement('div'); links.className = 'iph-fcol-links';
      col.links.forEach(function (lk) {
        var a = document.createElement('a'); a.href = lk.href; a.textContent = lk.label; links.appendChild(a);
      });
      div.appendChild(links); cols.appendChild(div);
    });
    footer.appendChild(cols);
    var disc = document.createElement('p'); disc.id = 'iph-footer-disclaimer';
    disc.textContent = 'InPursuit Health is a veteran-owned healthcare technology company providing data interoperability and orchestration infrastructure. The information on this site is for informational purposes only and does not constitute medical advice. TETRA is a registered technology of InPursuit Health, LLC.';
    footer.appendChild(disc);
    return footer;
  }

  /* ── INJECT ─────────────────────────────────────────────────── */
  function inject() {
    var style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);

    var header = document.createElement('header'); header.id = 'iph-header';
    var inner = document.createElement('div'); inner.id = 'iph-header-inner';

    var brand = document.createElement('a'); brand.id = 'iph-brand'; brand.href = 'index.html';
    brand.innerHTML = '<span id="iph-brand-wordmark">InPursuit Health</span><span id="iph-brand-pipe">|</span><span id="iph-brand-sub">MAHA Policy Accelerant</span>';
    inner.appendChild(brand);
    inner.appendChild(buildNav());

    var ctaEl = document.createElement('a'); ctaEl.id = 'iph-cta'; ctaEl.href = CTA.href; ctaEl.textContent = CTA.label;
    inner.appendChild(ctaEl);

    var burger = document.createElement('button'); burger.id = 'iph-burger'; burger.setAttribute('aria-label', 'Menu');
    burger.innerHTML = '<span></span><span></span><span></span>';
    burger.addEventListener('click', function () { header.classList.toggle('iph-mob-open'); });
    inner.appendChild(burger);

    header.appendChild(inner);
    var mob = buildMobile();
    document.body.insertBefore(mob, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);

    window.addEventListener('scroll', function () { header.classList.toggle('scrolled', window.scrollY > 10); });

    // Replace existing footer or append
    var existing = document.querySelector('footer');
    if (existing) existing.remove();
    document.body.appendChild(buildFooter());

    // Dropdowns close on mouseleave — no click handler needed

    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#iph-nav .iph-ni>a').forEach(function (a) {
      if (a.getAttribute('href') === page) a.style.color = '#C5A44E';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
