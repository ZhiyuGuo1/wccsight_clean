/* WCCSight — main.js */

/* ── VLM tab switching ── */
function showTab(idx, btn) {
  ['tab-0', 'tab-1', 'tab-2'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.style.display = i === idx ? 'block' : 'none';
  });
  document.querySelectorAll('.tab-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
}

/* ── Nav: shadow on scroll ── */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Mobile burger ── */
function closeMobile() {
  const m = document.getElementById('navMobile');
  if (m) m.classList.remove('open');
}
(function () {
  const burger = document.getElementById('burger');
  const mobile = document.getElementById('navMobile');
  if (!burger || !mobile) return;
  burger.addEventListener('click', () => mobile.classList.toggle('open'));
  // close on outside click
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !mobile.contains(e.target)) {
      mobile.classList.remove('open');
    }
  });
})();

/* ── Smooth scroll for all anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Fade-in on scroll ── */
(function () {
  const targets = document.querySelectorAll(
    '.section, .hero, .card, .contrib, .stat, .vlm-card, figure'
  );
  targets.forEach(el => el.classList.add('fade-hidden'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // slight stagger for grids
          const siblings = entry.target.parentElement
            ? [...entry.target.parentElement.children].filter(
                c => c.classList.contains('fade-hidden') || c.classList.contains('fade-in')
              )
            : [];
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.remove('fade-hidden');
            entry.target.classList.add('fade-in');
          }, Math.min(idx * 60, 240));
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => io.observe(el));
})();
