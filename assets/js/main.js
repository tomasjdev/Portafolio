/**
 * main.js — Lógica del portafolio.
 *
 * Responsabilidades:
 *   1. Idioma (ES/EN) con persistencia en localStorage.
 *   2. Tema claro/oscuro con detección de preferencia del sistema.
 *   3. Renderizado de las secciones dinámicas desde CONTENT (content.js).
 *   4. Navegación: menú móvil, scroll-spy, header al hacer scroll, botón "volver arriba".
 *   5. Modal accesible de detalle de proyecto.
 *   6. Animaciones de entrada con IntersectionObserver.
 *
 * No depende de librerías externas.
 */

(function () {
  'use strict';

  /* ───────────────────────────── Utilidades ───────────────────────────── */

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /** Escapa texto para insertarlo de forma segura en HTML. */
  const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  /** Devuelve el valor del idioma activo: acepta string plano u objeto {es, en}. */
  const t = (value, lang) => {
    if (value == null) return '';
    return typeof value === 'object' && !Array.isArray(value) ? (value[lang] ?? value.es) : value;
  };

  /** Lee de localStorage sin romper si está bloqueado (modo privado, etc.). */
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch { /* sin persistencia */ } },
  };

  /* ─────────────────────────────── Iconos ─────────────────────────────── */

  const ICONS = {
    code:   '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
    globe:  '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/>',
    cloud:  '<path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.1 10.6A3.5 3.5 0 0 0 6.5 19z"/>',
    chart:  '<path d="M3 3v18h18M7 15v3M12 10v8M17 6v12"/>',
    bolt:   '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    tools:  '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    boxes:  '<path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
    truck:  '<path d="M2 7h11v10H2zM13 10h4l4 3v4h-8z"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    shield: '<path d="M12 2l8 4v6c0 5-3.5 8.6-8 10-4.5-1.4-8-5-8-10V6z"/><path d="M9.5 12.2l1.8 1.8 3.4-3.6"/>',
    work:   '<path d="M3 8h18v12H3zM8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    education: '<path d="M22 9L12 4 2 9l10 5 10-5z"/><path d="M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/>',
    mail:   '<path d="M3 6h18v12H3z"/><path d="M3 7l9 6 9-6"/>',
    phone:  '<path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
    pin:    '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>',
    github: '<path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/>',
    award:  '<circle cx="12" cy="9" r="6"/><path d="M8.2 14.3L7 22l5-2.5L17 22l-1.2-7.7"/>',
  };

  /** Iconos que se dibujan rellenos en lugar de con trazo (logos de marca). */
  const FILLED_ICONS = new Set(['linkedin', 'github']);

  const svg = (name, cls = 'icon') => {
    const extra = FILLED_ICONS.has(name) ? ' icon--filled' : '';
    return `<svg class="${cls}${extra}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  };

  /* ────────────────────────────── Estado ─────────────────────────────── */

  const SUPPORTED_LANGS = ['es', 'en'];
  let lang = 'es';

  /* ──────────────────────────────- Idioma ──────────────────────────────- */

  function detectLang() {
    const saved = store.get('lang');
    if (SUPPORTED_LANGS.includes(saved)) return saved;
    return (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
  }

  function applyLang(next) {
    lang = SUPPORTED_LANGS.includes(next) ? next : 'es';
    store.set('lang', lang);

    document.documentElement.lang = lang;

    // Textos estáticos marcados con data-i18n.
    const dict = I18N[lang];
    $$('[data-i18n]').forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value;
    });

    // Botón de idioma: muestra el idioma al que se cambiaría.
    const badge = $('#lang-badge');
    if (badge) {
      const other = lang === 'es' ? 'EN' : 'ES';
      badge.textContent = other;
      $('#lang-toggle').setAttribute(
        'aria-label',
        lang === 'es' ? 'Switch to English' : 'Cambiar a español'
      );
    }

    renderAll();
  }

  /* ─────────────────────────────── Tema ──────────────────────────────── */

  function detectTheme() {
    const saved = store.get('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    store.set('theme', theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b1120' : '#f8fafc');
  }

  /* ───────────────────────────── Renderizado ─────────────────────────── */

  function renderStats() {
    const el = $('#hero-stats');
    if (!el) return;
    el.innerHTML = CONTENT.stats.map((s) => `
      <li class="stat">
        <span class="stat__value">${esc(s.value)}</span>
        <span class="stat__label">${esc(t(s.label, lang))}</span>
      </li>`).join('');
  }

  function renderApproach() {
    const el = $('#approach-steps');
    if (!el) return;
    el.innerHTML = CONTENT.approach.map((s) => `
      <li class="steps__item">
        <h4 class="steps__title">${esc(t(s.title, lang))}</h4>
        <p class="steps__text">${esc(t(s.text, lang))}</p>
      </li>`).join('');
  }

  function renderSkills() {
    const el = $('#skills-grid');
    if (!el) return;
    el.innerHTML = CONTENT.skills.map((g) => `
      <article class="skill-card reveal">
        <div class="skill-card__icon">${svg(g.icon)}</div>
        <h3 class="skill-card__title">${esc(t(g.title, lang))}</h3>
        <ul class="skill-card__list">
          ${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}
        </ul>
      </article>`).join('');
  }

  function renderProjects() {
    const el = $('#projects-grid');
    if (!el) return;
    const dict = I18N[lang];

    el.innerHTML = CONTENT.projects.map((p, index) => `
      <article class="project reveal${p.featured ? ' project--featured' : ''}">
        <div class="project__top">
          <div class="project__icon">${svg(p.icon)}</div>
          <span class="project__year">${esc(p.year)}</span>
        </div>

        <h3 class="project__title">${esc(t(p.title, lang))}</h3>
        <p class="project__summary">${esc(t(p.summary, lang))}</p>

        <ul class="tags" aria-label="${esc(dict['projects.stack'])}">
          ${p.stack.slice(0, 4).map((s) => `<li class="tag">${esc(s)}</li>`).join('')}
        </ul>

        <div class="project__actions">
          <button class="btn btn--sm btn--primary" type="button" data-project="${index}">
            ${esc(dict['projects.detail'])}
          </button>
          ${p.repo ? `<a class="btn btn--sm btn--ghost" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">
            ${svg('github')}<span>${esc(dict['projects.repo'])}</span>
          </a>` : ''}
        </div>
      </article>`).join('');
  }

  function renderTimeline() {
    const el = $('#timeline');
    if (!el) return;
    el.innerHTML = CONTENT.timeline.map((item) => `
      <li class="tl-item reveal">
        <div class="tl-item__marker">${svg(item.type)}</div>
        <div class="tl-item__body">
          <span class="tl-item__period">${esc(t(item.period, lang))}</span>
          <h3 class="tl-item__role">${esc(t(item.role, lang))}</h3>
          <p class="tl-item__org">${esc(item.org)}</p>
          <ul class="tl-item__bullets">
            ${t(item.bullets, lang).map((b) => `<li>${esc(b)}</li>`).join('')}
          </ul>
        </div>
      </li>`).join('');
  }

  function renderCerts() {
    const el = $('#certs-grid');
    if (!el) return;
    el.innerHTML = CONTENT.certs.map((c) => `
      <article class="cert reveal">
        <div class="cert__icon">${svg('award')}</div>
        <div>
          <h3 class="cert__name">${esc(c.name)}</h3>
          <p class="cert__issuer">${esc(c.issuer)}</p>
          <p class="cert__topic">${esc(t(c.topic, lang))}</p>
        </div>
      </article>`).join('');
  }

  function renderContact() {
    const el = $('#contact-grid');
    if (!el) return;
    const dict = I18N[lang];

    const cards = [
      { icon: 'mail',  label: dict['contact.emailLabel'],    value: CONFIG.email,    href: `mailto:${CONFIG.email}` },
      { icon: 'linkedin', label: dict['contact.linkedinLabel'], value: 'in/tomás-jiménez-albornoz', href: CONFIG.linkedin, external: true },
      { icon: 'github',   label: dict['contact.githubLabel'],   value: '@tomasjdev', href: CONFIG.github, external: true },
    ];

    el.innerHTML = cards.map((c) => {
      const inner = `
        <span class="contact__icon">${svg(c.icon)}</span>
        <span class="contact__meta">
          <span class="contact__label">${esc(c.label)}</span>
          <span class="contact__value">${esc(c.value)}</span>
        </span>`;
      return c.href
        ? `<a class="contact__item reveal" href="${esc(c.href)}"${c.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${inner}</a>`
        : `<div class="contact__item reveal">${inner}</div>`;
    }).join('');
  }

  function renderAll() {
    renderStats();
    renderApproach();
    renderSkills();
    renderProjects();
    renderTimeline();
    renderCerts();
    renderContact();
    observeReveals();
  }

  /* ───────────────────────── Modal de proyecto ───────────────────────── */

  const modal = $('#project-modal');
  let lastFocused = null;

  function openProject(index) {
    const p = CONTENT.projects[index];
    if (!p || !modal) return;
    const dict = I18N[lang];

    $('#modal-body').innerHTML = `
      <div class="modal__head">
        <div class="project__icon">${svg(p.icon)}</div>
        <div>
          <span class="project__year">${esc(p.year)}</span>
          <h3 class="modal__title" id="modal-title">${esc(t(p.title, lang))}</h3>
        </div>
      </div>

      <p class="modal__desc">${esc(t(p.description, lang))}</p>

      <h4 class="modal__label">${esc(dict['projects.highlights'])}</h4>
      <ul class="modal__list">
        ${t(p.highlights, lang).map((h) => `<li>${esc(h)}</li>`).join('')}
      </ul>

      <div class="modal__value">
        <h4 class="modal__label">${esc(dict['projects.value'])}</h4>
        <p>${esc(t(p.value, lang))}</p>
      </div>

      <h4 class="modal__label">${esc(dict['projects.stack'])}</h4>
      <ul class="tags">${p.stack.map((s) => `<li class="tag">${esc(s)}</li>`).join('')}</ul>

      <ul class="tags tags--muted">${p.tags.map((s) => `<li class="tag tag--muted">#${esc(s)}</li>`).join('')}</ul>

      ${p.repo ? `<a class="btn btn--primary" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">
        ${svg('github')}<span>${esc(dict['projects.repo'])}</span></a>` : ''}
    `;

    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('is-locked');
    $('.modal__close', modal).focus();
  }

  function closeProject() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('is-locked');
    if (lastFocused) lastFocused.focus();
  }

  /* Mantiene el foco dentro del modal mientras está abierto. */
  function trapFocus(e) {
    if (modal.hidden || e.key !== 'Tab') return;
    const focusables = $$('a[href], button:not([disabled])', modal);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ──────────────────────── Animaciones de entrada ───────────────────── */

  let revealObserver = null;

  function observeReveals() {
    const items = $$('.reveal:not(.is-visible)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }

    items.forEach((el) => revealObserver.observe(el));
  }

  /* ─────────────────────────── Navegación ────────────────────────────── */

  function initNav() {
    const header = $('#header');
    const menu = $('#nav-menu');
    const burger = $('#nav-toggle');
    const toTop = $('#to-top');

    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.classList.toggle('is-active', open);
    });

    // Cierra el menú móvil al navegar.
    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        menu.classList.remove('is-open');
        burger.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
      }
    });

    // Header compacto y botón "volver arriba" según el scroll.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        header.classList.toggle('is-scrolled', y > 24);
        toTop.hidden = y < 600;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Scroll-spy: resalta el enlace de la sección visible.
    const sections = $$('main section[id]');
    if ('IntersectionObserver' in window && sections.length) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          $$('.nav__link').forEach((a) => {
            a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach((s) => spy.observe(s));
    }
  }

  /* ────────────────────────────── Arranque ───────────────────────────── */

  function init() {
    applyTheme(detectTheme());
    applyLang(detectLang());
    initNav();

    $('#year').textContent = new Date().getFullYear();

    $('#theme-toggle').addEventListener('click', () => {
      applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });

    $('#lang-toggle').addEventListener('click', () => {
      applyLang(lang === 'es' ? 'en' : 'es');
    });

    // Delegación: abrir modal desde cualquier tarjeta de proyecto.
    $('#projects-grid').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-project]');
      if (btn) openProject(Number(btn.dataset.project));
    });

    modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-close-modal]')) closeProject();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProject();
      trapFocus(e);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
