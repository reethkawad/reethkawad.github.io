// ═══════════════════════════════════════════════════════════════
//  PORTFOLIO — kawadreeth.github.io
//  script.js
// ═══════════════════════════════════════════════════════════════

// If a unified `PROJECTS` array is provided (site-data.js), expose it as `projects` for legacy code.
if (typeof PROJECTS !== 'undefined') {
  window.projects = PROJECTS;
}
if (typeof EXPERIENCE !== 'undefined') {
  window.experience = EXPERIENCE;
}
if (typeof SKILLS !== 'undefined') {
  window.skills = SKILLS;
}

// ── State ───────────────────────────────────────────────────
const state = {
  activeFilter: 'all',
  drawerOpen: false,
  activeProjectId: null,
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

// ── Render: Projects ─────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';

  // Use PROJECTS from data/site-data.js when available, fallback to legacy `projects`
  const source = (typeof PROJECTS !== 'undefined') ? PROJECTS : (typeof projects !== 'undefined' ? projects : []);

  source.forEach(p => {

    const card = document.createElement('article');
    card.className = `project-card ${zoneClass(p.zone)}`;
    card.dataset.zone = p.zone;
    card.dataset.id   = p.id;
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', p.title);

    // Determine image property name depending on source
    const imgSrc = p.thumb || p.image || '';

    card.innerHTML = `
      <img class="card-image" src="${imgSrc}" alt="${p.title}" loading="lazy" />
      <div class="card-body">
        <div class="card-meta">
          <span class="zone-badge ${zoneClass(p.zone)}">${zoneLabel(p.zone)}</span>
          ${p.status === 'ongoing' ? '<span class="status-badge ongoing">Ongoing</span>' : ''}
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-summary">${p.summary}</p>
        <div class="card-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `;

    // Make the whole card link to a dedicated project page
    const link = document.createElement('a');
    link.href = `projects/${p.slug || p.id}.html`;
    link.className = 'card-link';
    // Move card content into the link
    link.appendChild(card.cloneNode(true));
    // Append the link to the grid
    grid.appendChild(link);
  });
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

// ── Drawer ───────────────────────────────────────────────────
function openDrawer(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  state.activeProjectId = projectId;
  state.drawerOpen      = true;

  const drawer  = document.getElementById('project-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const content = document.getElementById('drawer-content');

  const linksHTML = project.links.length
    ? `<div class="drawer-links">
         ${project.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="drawer-link">${l.label} ↗</a>`).join('')}
       </div>`
    : '';

  content.innerHTML = `
    <div class="drawer-zone-bar ${zoneClass(project.zone)}"></div>
    <div class="drawer-content-wrap">
      <div class="drawer-header">
        <div class="drawer-meta">
          <span class="zone-badge ${zoneClass(project.zone)}">${zoneLabel(project.zone)}</span>
          ${project.status === 'ongoing' ? '<span class="status-badge ongoing">Ongoing</span>' : ''}
        </div>
        <h2 class="drawer-title">${project.title}</h2>
      </div>
      <img src="${project.image}" alt="${project.title}" class="drawer-image" />
      <div class="drawer-description">${project.description}</div>
      <div class="drawer-tags">
        ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      ${linksHTML}
    </div>
  `;

  // Apply zone class to drawer for CSS variable inheritance
  drawer.className = `project-drawer open ${zoneClass(project.zone)}`;
  overlay.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus the close button for accessibility
  requestAnimationFrame(() => {
    const closeBtn = document.getElementById('drawer-close');
    if (closeBtn) closeBtn.focus();
  });
}

function closeDrawer() {
  const drawer  = document.getElementById('project-drawer');
  const overlay = document.getElementById('drawer-overlay');

  drawer.className       = 'project-drawer';
  overlay.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  state.drawerOpen      = false;
  state.activeProjectId = null;
}

// ── Render: Experience ───────────────────────────────────────
function renderExperience() {
  const list = document.getElementById('experience-list');
  if (!list) return;

  list.innerHTML = experience.map(e => {
    const flowchartHTML = e.flowchart && e.flowchart.length
      ? `<div class="exp-flowchart">
           <div class="exp-flowchart-label">Work areas</div>
           <div class="exp-flowchart-nodes">
             ${e.flowchart.map((node, i) => `
               <span class="exp-flowchart-node ${zoneClass(e.zone)}">${node}</span>
               ${i < e.flowchart.length - 1 ? '<span class="exp-flowchart-arrow">→</span>' : ''}
             `).join('')}
           </div>
         </div>`
      : '';

    const bulletsHTML = e.bullets?.length
      ? `<ul class="exp-bullets">${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
      : '';

    const linksHTML = e.links?.length
      ? `<div class="exp-links">${e.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="exp-link">${l.label} ↗</a>`).join('')}</div>`
      : '';

    return `
      <div class="exp-entry">
        <div class="exp-dot ${zoneClass(e.zone)}"></div>
        <div class="exp-card ${zoneClass(e.zone)}">
          <div class="exp-header">
            <img src="${e.logo}" alt="${e.company}" class="exp-logo" />
            <div class="exp-left">
              <span class="exp-company">${e.company}</span>
              <span class="exp-role">${e.role}</span>
            </div>
            <div class="exp-right">
              <span class="exp-dates">${e.dates}</span>
              <span class="exp-location">${e.location}</span>
            </div>
            <span class="zone-badge ${zoneClass(e.zone)}">${zoneLabel(e.zone)}</span>
          </div>
          ${flowchartHTML}
          ${bulletsHTML}
          ${linksHTML}
        </div>
      </div>
    `;
  }).join('');
}

// ── Render: Skills ───────────────────────────────────────────
function renderSkills() {
  const tree = document.getElementById('skills-tree');
  if (!tree) return;

  tree.innerHTML = Object.entries(skills).map(([key, zone]) => {
    const categoriesHTML = zone.categories.map(cat => `
      <div class="skill-category">
        <div class="skill-category-label">${cat.label}</div>
        <div class="skill-nodes">
          ${cat.items.map(item => `<span class="skill-node">${item}</span>`).join('')}
        </div>
      </div>
    `).join('');

    return `
      <div class="skill-column ${zoneClass(key)}">
        <div class="skill-column-header">
          <div class="skill-column-title">
            <span>${zone.icon}</span> ${zone.label}
          </div>
        </div>
        ${categoriesHTML}
      </div>
    `;
  }).join('');
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

// ── Init ─────────────────────────────────────────────────────
function init() {
  initTheme();
  renderProjects();
  renderExperience();
  renderSkills();
  bindEvents();
  // Small delay so the DOM renders first, making the typing effect feel intentional
  setTimeout(() => initTyping('typing-target', 'Reeth Kawad', 75), 200);
}

document.addEventListener('DOMContentLoaded', init);
