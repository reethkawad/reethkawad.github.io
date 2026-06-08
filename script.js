// ═══════════════════════════════════════════════════════════════
//  PORTFOLIO — kawadreeth.github.io
//  script.js
// ═══════════════════════════════════════════════════════════════

// ── State ───────────────────────────────────────────────────
const state = {
  activeFilter: 'all',
};

// ── Utilities ───────────────────────────────────────────────
function zoneClass(zone) {
  return `zone-${zone}`;
}

function zoneLabel(zone) {
  const map = { cleantech: '⚡ Cleantech', robotics: '🤖 Robotics', hardware: '🔧 Hardware' };
  return map[zone] ?? zone;
}

// ── Theme ────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('rk-theme') ?? 'dark';
  applyTheme(saved);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const sunEl  = document.querySelector('.icon-sun');
  const moonEl = document.querySelector('.icon-moon');
  if (sunEl)  sunEl.style.display  = theme === 'dark'  ? 'none' : 'inline';
  if (moonEl) moonEl.style.display = theme === 'light' ? 'none' : 'inline';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('rk-theme', next);
}

// ── Typing Effect ────────────────────────────────────────────
function initTyping(targetId, text, speed = 80) {
  const el = document.getElementById(targetId);
  if (!el) return;
  let i = 0;
  function tick() {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) setTimeout(tick, speed);
  }
  tick();
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getQuerySlug() {
  return new URLSearchParams(window.location.search).get('slug') || '';
}

function parseAboutBio(text) {
  const startMarker = 'Short Bio (Portfolio About Page / LinkedIn Summary)';
  const endMarker = 'HOW TO USE THIS DOCUMENT';
  const start = text.indexOf(startMarker);
  const end = text.indexOf(endMarker);
  if (start === -1 || end === -1 || end <= start) return [];

  return text
    .slice(start + startMarker.length, end)
    .split(/\n\n+/)
    .map(part => part.trim())
    .filter(Boolean)
    .filter(part => !part.toUpperCase().includes('ABOUT ME'))
    .slice(0, 3);
}

async function renderAbout() {
  const aboutText = document.querySelector('.about-text');
  if (!aboutText) return;

  const fallback = Array.isArray(SITE?.ABOUT?.bio) ? SITE.ABOUT.bio : [];

  try {
    const response = await fetch('data/doc_text.txt', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    const paragraphs = parseAboutBio(text);
    const bio = paragraphs.length ? paragraphs : fallback;
    aboutText.innerHTML = bio.map(paragraph => `<p>${paragraph}</p>`).join('');
  } catch {
    aboutText.innerHTML = fallback.map(paragraph => `<p>${paragraph}</p>`).join('');
  }
}

// ── Render: Projects ─────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;
  grid.innerHTML = '';

  PROJECTS.forEach(p => {
    const link = document.createElement('a');
    link.href = `projects/project.html?slug=${encodeURIComponent(p.slug)}`;
    link.className = `project-card ${zoneClass(p.zone)}`;
    link.dataset.zone = p.zone;
    link.setAttribute('role', 'listitem');
    link.setAttribute('aria-label', p.title);

    link.innerHTML = `
      <img class="card-image" src="${p.thumb || ''}" alt="${escapeHtml(p.title)}" loading="lazy" />
      <div class="card-body">
        <span class="zone-badge ${zoneClass(p.zone)}">${zoneLabel(p.zone)}</span>
        <h3 class="card-title">${escapeHtml(p.title)}</h3>
        <div class="card-tags">
          ${(p.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    `;

    grid.appendChild(link);
  });
}

function renderProjectDetail() {
  const page = document.querySelector('[data-page-type="project"]');
  if (!page || typeof PROJECTS === 'undefined') return;

  const slug = getQuerySlug();
  const project = PROJECTS.find(p => p.slug === slug) || PROJECTS[0];
  if (!project) return;

  document.title = `${project.title} — Reeth Kawad`;
  page.querySelector('[data-project-zone]').textContent = zoneLabel(project.zone);
  page.querySelector('[data-project-title]').textContent = project.title;

  const heroImg = page.querySelector('[data-project-hero]');
  const heroSrc = project.gallery?.[0] || project.thumb || '';
  if (heroImg && heroSrc) { heroImg.src = heroSrc; heroImg.alt = project.title; }

  const star = project.star;
  if (star) {
    page.querySelector('[data-project-situation]').textContent = star.situation || '';
    page.querySelector('[data-project-task]').textContent = star.task || '';
    page.querySelector('[data-project-action]').innerHTML =
      (star.action || []).map(a => `<li>${escapeHtml(a)}</li>`).join('');
    page.querySelector('[data-project-result]').innerHTML =
      (star.result || []).map(r => `<li>${escapeHtml(r)}</li>`).join('');
  }

  const tags = page.querySelector('[data-project-tags]');
  if (tags) tags.innerHTML = (project.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');

  const gallery = page.querySelector('[data-project-gallery]');
  if (gallery) {
    const images = [...new Set([project.thumb, ...(project.gallery || [])].filter(Boolean))];
    gallery.innerHTML = images.length
      ? images.map(src => `<figure class="project-figure"><img src="${src}" alt="${escapeHtml(project.title)}" loading="lazy" /></figure>`).join('')
      : '<p class="project-empty">No gallery images yet — add image paths to the <code>gallery</code> array in <code>data/site-data.js</code>.</p>';
  }

  const links = page.querySelector('[data-project-links]');
  if (links) {
    links.innerHTML = (project.links || []).length
      ? project.links.map(l => `<a class="detail-link" href="${l.url}" target="_blank" rel="noopener">${escapeHtml(l.label)} ↗</a>`).join('')
      : '<p class="project-empty">No external links yet.</p>';
  }
}

// ── Filter Logic ─────────────────────────────────────────────
function applyFilter(zone) {
  state.activeFilter = zone;

  // Update filter tabs
  document.querySelectorAll('.filter-tab').forEach(btn => {
    const isActive = btn.dataset.filter === zone;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Update zone portals
  document.querySelectorAll('.zone-portal').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.zone === zone);
    btn.setAttribute('aria-pressed', btn.dataset.zone === zone ? 'true' : 'false');
  });

  // Show/hide cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.toggle('hidden', zone !== 'all' && card.dataset.zone !== zone);
  });
}

// ── Render: Experience ───────────────────────────────────────
function renderExperience() {
  const list = document.getElementById('experience-list');
  if (!list || typeof EXPERIENCE === 'undefined') return;

  list.innerHTML = EXPERIENCE.map(e => {
    const subprojectTitles = (e.subprojects || [])
      .map(sp => `<div class="exp-subproject">▸ ${escapeHtml(sp.title)}</div>`)
      .join('');

    const toolTags = e.subprojects?.length
      ? (e.subprojects[0].tools || []).map(t => `<span class="tag tag--small">${escapeHtml(t)}</span>`).join('')
      : '';

    const bulletsHTML = !e.subprojects?.length && e.bullets?.length
      ? `<ul class="exp-bullets">${e.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`
      : '';

    return `
      <a class="exp-entry exp-entry-link" href="experience/experience.html?slug=${encodeURIComponent(e.slug)}" target="_blank" rel="noopener">
        <div class="exp-dot ${zoneClass(e.zone)}"></div>
        <div class="exp-card ${zoneClass(e.zone)}">
          <div class="exp-header">
            ${e.logo ? `<img src="${e.logo}" alt="${escapeHtml(e.company)}" class="exp-logo" />` : ''}
            <div class="exp-left">
              <span class="exp-company">${escapeHtml(e.company)}</span>
              <span class="exp-role">${escapeHtml(e.role)}</span>
            </div>
            <div class="exp-right">
              <span class="exp-dates">${escapeHtml(e.dates)}</span>
              <span class="exp-location">${escapeHtml(e.location)}</span>
            </div>
            <span class="zone-badge ${zoneClass(e.zone)}">${zoneLabel(e.zone)}</span>
          </div>
          ${subprojectTitles ? `<div class="exp-subprojects">${subprojectTitles}</div>` : ''}
          ${bulletsHTML}
          ${toolTags ? `<div class="exp-tools">${toolTags}</div>` : ''}
        </div>
      </a>
    `;
  }).join('');
}

function renderExperienceDetail() {
  const page = document.querySelector('[data-page-type="experience"]');
  if (!page || typeof EXPERIENCE === 'undefined') return;

  const slug = getQuerySlug();
  const experience = EXPERIENCE.find(item => (item.slug || slugify(item.company)) === slug) || EXPERIENCE[0];
  if (!experience) return;

  document.title = `${experience.company} — Reeth Kawad`;
  page.querySelector('[data-experience-zone]')?.textContent = zoneLabel(experience.zone);
  page.querySelector('[data-experience-company]')?.textContent = experience.company;
  page.querySelector('[data-experience-role]')?.textContent = experience.role;
  page.querySelector('[data-experience-dates]')?.textContent = experience.dates;
  page.querySelector('[data-experience-location]')?.textContent = experience.location;

  const logo = page.querySelector('[data-experience-logo]');
  if (logo && experience.logo) {
    logo.src = experience.logo;
    logo.alt = experience.company;
  } else if (logo) {
    logo.remove();
  }

  const bullets = page.querySelector('[data-experience-bullets]');
  if (bullets) {
    bullets.innerHTML = experience.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('');
  }

  const flowchart = page.querySelector('[data-experience-flowchart]');
  if (flowchart) {
    flowchart.innerHTML = experience.flowchart?.length
      ? experience.flowchart.map((node, index) => `
          <span class="exp-flowchart-node ${zoneClass(experience.zone)}">${escapeHtml(node)}</span>
          ${index < experience.flowchart.length - 1 ? '<span class="exp-flowchart-arrow">→</span>' : ''}
        `).join('')
      : '<span class="project-empty">Add a flowchart array in <code>data/site-data.js</code> to show work areas.</span>';
  }

  const links = page.querySelector('[data-experience-links]');
  if (links) {
    links.innerHTML = experience.links?.length
      ? experience.links.map(link => `<a class="detail-link" href="${link.url}" target="_blank" rel="noopener">${escapeHtml(link.label)} ↗</a>`).join('')
      : '<p class="project-empty">No external links available yet.</p>';
  }
}

// ── Render: Skills ───────────────────────────────────────────
function renderSkills() {
  const tree = document.getElementById('skills-tree');
  if (!tree || typeof SKILLS === 'undefined') return;

  tree.innerHTML = Object.values(SKILLS).map(cat => `
    <div class="skill-card">
      <div class="skill-card-label">${cat.label}</div>
      <div class="skill-nodes">
        ${cat.items.map(item => `<span class="skill-node">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ── Event Bindings ───────────────────────────────────────────
function bindEvents() {
  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  // Zone portals (hero)
  document.querySelectorAll('.zone-portal').forEach(btn => {
    btn.addEventListener('click', () => {
      const zone = btn.dataset.zone;
      applyFilter(zone);
      // Scroll to projects
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Drawer close
  const closeBtn = document.getElementById('drawer-close');
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  const overlay = document.getElementById('drawer-overlay');
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Keyboard: Escape closes drawer
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && state.drawerOpen) closeDrawer();
  });

  // Mobile hamburger
  const hamburger = document.getElementById('nav-hamburger');
  const nav       = document.getElementById('main-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ── Resume / CV ──────────────────────────────────────────────
function initResume() {
  const resume = window.SITE?.ABOUT?.resume;
  if (!resume) return;
  const navLink     = document.getElementById('nav-cv-link');
  const contactLink = document.getElementById('contact-cv-link');
  if (navLink)     { navLink.href     = resume; navLink.style.display     = ''; }
  if (contactLink) { contactLink.href = resume; contactLink.style.display = ''; }
}

// ── Init ─────────────────────────────────────────────────────
function init() {
  initTheme();
  initResume();
  renderAbout();
  renderProjectDetail();
  renderExperienceDetail();
  renderProjects();
  renderExperience();
  renderSkills();
  bindEvents();
  // Small delay so the DOM renders first, making the typing effect feel intentional
  setTimeout(() => initTyping('typing-target', 'Reeth Kawad', 75), 200);
}

document.addEventListener('DOMContentLoaded', init);
