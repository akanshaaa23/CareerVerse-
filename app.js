/* ========================================================
   app.js — Career Roadmap Generator Application Logic
   ======================================================== */

// ===== STATE =====
let currentCareer = null;
let progress = {}; // { careerKey: { skills: Set, projects: Set } }
let quizAnswers = [];
let quizStep = 0;
let earnedBadges = new Set();

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initSearchLive();
  loadProgress();
  buildSalarySection();
  buildQuiz();
  setFooterQuote();
  initHamburger();
});

// ===== THEME =====
function initTheme() {
  const saved = localStorage.getItem('cm_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cm_theme', next);
  });
}

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 40
      ? (document.documentElement.getAttribute('data-theme') === 'dark' ? 'rgba(5,11,26,0.95)' : 'rgba(240,246,255,0.95)')
      : '';
  });
}

// ===== HAMBURGER =====
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

// ===== FOOTER QUOTE =====
function setFooterQuote() {
  document.getElementById('footerQuote').textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

// ===== LOAD PROGRESS from localStorage =====
function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem('cm_progress') || '{}');
    // Convert arrays back to Sets
    for (const [key, val] of Object.entries(saved)) {
      progress[key] = {
        skills: new Set(val.skills || []),
        projects: new Set(val.projects || [])
      };
    }
    const savedBadges = JSON.parse(localStorage.getItem('cm_badges') || '[]');
    earnedBadges = new Set(savedBadges);
  } catch (e) {
    progress = {};
    earnedBadges = new Set();
  }
}

// ===== SAVE PROGRESS =====
function saveProgress() {
  const serializable = {};
  for (const [key, val] of Object.entries(progress)) {
    serializable[key] = {
      skills: [...val.skills],
      projects: [...val.projects]
    };
  }
  localStorage.setItem('cm_progress', JSON.stringify(serializable));
  localStorage.setItem('cm_badges', JSON.stringify([...earnedBadges]));
}

// ===== GENERATE ROADMAP =====
document.getElementById('generateBtn').addEventListener('click', generateRoadmap);
document.getElementById('careerSelect').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') generateRoadmap();
});

function generateRoadmap() {
  const select = document.getElementById('careerSelect');
  const careerKey = select.value;
  if (!careerKey) {
    showToast('Please select a career path first!');
    select.focus();
    return;
  }
  currentCareer = careerKey;
  if (!progress[careerKey]) {
    progress[careerKey] = { skills: new Set(), projects: new Set() };
  }

  // Loading animation
  const loadingScreen = document.getElementById('loadingScreen');
  const roadmapOutput = document.getElementById('roadmapOutput');
  roadmapOutput.style.display = 'none';
  loadingScreen.style.display = 'block';

  let pct = 0;
  const fill = document.getElementById('loaderFill');
  const interval = setInterval(() => {
    pct += Math.random() * 15 + 5;
    if (pct >= 100) { pct = 100; clearInterval(interval); }
    fill.style.width = pct + '%';
  }, 80);

  setTimeout(() => {
    loadingScreen.style.display = 'none';
    renderRoadmap(careerKey);
    roadmapOutput.style.display = 'block';
    roadmapOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Trigger search if there's text in search box
    const q = document.getElementById('searchInput').value.trim();
    if (q) runSearch(q, careerKey);
  }, 1400);
}

// ===== RENDER ROADMAP =====
function renderRoadmap(careerKey) {
  const data = CAREERS[careerKey];
  if (!data) return;

  document.getElementById('roadmapTitle').textContent = `${data.emoji} ${data.title} Roadmap`;
  document.getElementById('roadmapMeta').textContent = data.meta;

  renderTimeline(careerKey, data);
  renderResources(data);
  updateProgress(careerKey);
  renderAchievements(careerKey, data);
}

// ===== RENDER TIMELINE =====
function renderTimeline(careerKey, data) {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  data.stages.forEach((stage) => {
    const stageEl = document.createElement('div');
    stageEl.className = 'stage';
    stageEl.innerHTML = `
      <div class="stage-marker ${stage.level}">${stage.emoji}</div>
      <div class="stage-content">
        <div class="stage-header">
          <h3 class="stage-title ${stage.level}">${stage.label} — ${stage.duration}</h3>
          <span class="stage-duration ${stage.level}">${stage.duration}</span>
        </div>

        <div class="sub-section">
          <div class="sub-title">📚 Skills to Learn</div>
          <div class="skills-grid">
            ${stage.skills.map((skill, i) => {
              const skillId = `${careerKey}_${stage.level}_skill_${i}`;
              const done = progress[careerKey]?.skills.has(skillId);
              return `<div class="skill-item ${stage.level}-skill ${done ? 'done' : ''}" data-id="${skillId}" onclick="toggleSkill('${skillId}', this)" tabindex="0" role="checkbox" aria-checked="${done}">
                <div class="skill-cb">${done ? '✓' : ''}</div>
                <span>${skill}</span>
              </div>`;
            }).join('')}
          </div>
        </div>

        <div class="sub-section">
          <div class="sub-title">🏗️ Projects to Build</div>
          <div class="projects-list">
            ${stage.projects.map((proj, i) => {
              const projId = `${careerKey}_${stage.level}_proj_${i}`;
              const done = progress[careerKey]?.projects.has(projId);
              return `<div class="project-item ${done ? 'done' : ''}" data-id="${projId}" onclick="toggleProject('${projId}', this)" tabindex="0">
                <div class="project-cb">${done ? '✓' : ''}</div>
                <div class="project-info">
                  <div class="project-name">${proj.name}</div>
                  <div class="project-desc">${proj.desc}</div>
                </div>
                <span class="project-level ${proj.level}">${proj.level}</span>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>
    `;
    timeline.appendChild(stageEl);
  });

  // Keyboard support for skills
  timeline.querySelectorAll('.skill-item').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); el.click(); }
    });
  });
}

// ===== TOGGLE SKILL =====
function toggleSkill(skillId, el) {
  if (!currentCareer) return;
  const p = progress[currentCareer];
  if (p.skills.has(skillId)) {
    p.skills.delete(skillId);
    el.classList.remove('done');
    el.querySelector('.skill-cb').textContent = '';
  } else {
    p.skills.add(skillId);
    el.classList.add('done');
    el.querySelector('.skill-cb').textContent = '✓';
  }
  saveProgress();
  updateProgress(currentCareer);
  checkBadges(currentCareer);
}

// ===== TOGGLE PROJECT =====
function toggleProject(projId, el) {
  if (!currentCareer) return;
  const p = progress[currentCareer];
  if (p.projects.has(projId)) {
    p.projects.delete(projId);
    el.classList.remove('done');
    el.querySelector('.project-cb').textContent = '';
  } else {
    p.projects.add(projId);
    el.classList.add('done');
    el.querySelector('.project-cb').textContent = '✓';
  }
  saveProgress();
  updateProgress(currentCareer);
  checkBadges(currentCareer);
}

// ===== UPDATE PROGRESS BAR =====
function updateProgress(careerKey) {
  const data = CAREERS[careerKey];
  if (!data) return;
  const p = progress[careerKey];

  let totalSkills = 0;
  let totalProjects = 0;
  data.stages.forEach(s => {
    totalSkills += s.skills.length;
    totalProjects += s.projects.length;
  });

  const doneSkills = p.skills.size;
  const doneProjects = p.projects.size;
  const total = totalSkills + totalProjects;
  const done = doneSkills + doneProjects;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressPercent').textContent = pct + '%';
}

// ===== RENDER ACHIEVEMENTS =====
function renderAchievements(careerKey, data) {
  const row = document.getElementById('achievementsRow');
  row.innerHTML = '';
  BADGES.forEach(badge => {
    const earned = earnedBadges.has(`${careerKey}_${badge.id}`);
    const chip = document.createElement('div');
    chip.className = `badge-chip ${earned ? 'earned' : ''}`;
    chip.innerHTML = `${badge.icon} ${badge.name}`;
    chip.title = badge.desc;
    row.appendChild(chip);
  });
}

// ===== CHECK BADGES =====
function checkBadges(careerKey) {
  const data = CAREERS[careerKey];
  if (!data) return;
  const p = progress[careerKey];

  let totalSkills = 0;
  let beginnerSkills = 0;
  let beginnerTotal = 0;
  data.stages.forEach((s, i) => {
    totalSkills += s.skills.length;
    if (i === 0) beginnerTotal = s.skills.length;
  });

  // Count beginner skills done
  data.stages[0].skills.forEach((_, i) => {
    const id = `${careerKey}_${data.stages[0].level}_skill_${i}`;
    if (p.skills.has(id)) beginnerSkills++;
  });

  let totalProjects = 0;
  data.stages.forEach(s => totalProjects += s.projects.length);
  const total = totalSkills + totalProjects;
  const done = p.skills.size + p.projects.size;
  const pct = total > 0 ? (done / total) * 100 : 0;

  const checks = [
    { id: "first_skill", condition: p.skills.size >= 1 },
    { id: "ten_skills", condition: p.skills.size >= 10 },
    { id: "first_project", condition: p.projects.size >= 1 },
    { id: "half_beginner", condition: beginnerTotal > 0 && beginnerSkills >= beginnerTotal * 0.5 },
    { id: "full_beginner", condition: beginnerTotal > 0 && beginnerSkills === beginnerTotal },
    { id: "halfway", condition: pct >= 50 },
    { id: "full_roadmap", condition: pct >= 100 }
  ];

  checks.forEach(({ id, condition }) => {
    const badgeKey = `${careerKey}_${id}`;
    if (condition && !earnedBadges.has(badgeKey)) {
      earnedBadges.add(badgeKey);
      saveProgress();
      const badge = BADGES.find(b => b.id === id);
      if (badge) showBadgePopup(badge);
      renderAchievements(careerKey, data);
    }
  });
}

// ===== BADGE POPUP =====
function showBadgePopup(badge) {
  const popup = document.getElementById('badgePopup');
  document.getElementById('badgeIcon').textContent = badge.icon;
  document.getElementById('badgeName').textContent = badge.name;
  document.getElementById('badgeDesc').textContent = badge.desc;
  popup.style.display = 'block';
  setTimeout(() => { popup.style.display = 'none'; }, 4000);
  showToast(`🏅 Achievement Unlocked: ${badge.name}`);
}

// ===== RENDER RESOURCES =====
function renderResources(data) {
  const section = document.getElementById('resourcesSection');
  section.innerHTML = `
    <h3 class="resources-title">📚 Recommended Learning Resources</h3>
    <div class="resources-grid">
      ${data.resources.map(r => `
        <a href="${r.url}" class="resource-card" target="_blank" rel="noopener">
          <div class="resource-icon">${r.icon}</div>
          <div class="resource-name">${r.name}</div>
          <span class="resource-type ${r.type}">${r.type === 'yt' ? 'YouTube' : r.type === 'free' ? 'Free' : 'Paid'}</span>
          <p class="resource-desc">${r.desc}</p>
        </a>
      `).join('')}
    </div>
  `;
}

// ===== SEARCH =====
function initSearchLive() {
  const input = document.getElementById('searchInput');
  let debounce;
  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      if (currentCareer) runSearch(input.value.trim(), currentCareer);
    }, 300);
  });
}

function runSearch(query, careerKey) {
  const searchResults = document.getElementById('searchResults');
  const content = document.getElementById('searchResultsContent');

  if (!query) {
    searchResults.style.display = 'none';
    return;
  }

  const data = CAREERS[careerKey];
  const q = query.toLowerCase();
  const results = [];

  data.stages.forEach(stage => {
    stage.skills.forEach(skill => {
      if (skill.toLowerCase().includes(q)) {
        results.push({ text: skill, stage: stage.level, type: 'skill' });
      }
    });
    stage.projects.forEach(proj => {
      if (proj.name.toLowerCase().includes(q) || proj.desc.toLowerCase().includes(q)) {
        results.push({ text: proj.name, stage: stage.level, type: 'project' });
      }
    });
  });

  if (results.length === 0) {
    content.innerHTML = '<p style="color:var(--text3);font-size:0.85rem;">No results found for "' + query + '"</p>';
  } else {
    content.innerHTML = results.map(r => `
      <span class="search-tag">
        ${r.type === 'project' ? '🏗️' : '📌'} ${r.text}
        <span class="tag-stage ${r.stage}">${r.stage}</span>
      </span>
    `).join('');
  }
  searchResults.style.display = 'block';
}

// ===== RESET =====
function resetRoadmap() {
  if (!currentCareer) return;
  if (!confirm('Reset all progress for this career? This cannot be undone.')) return;
  progress[currentCareer] = { skills: new Set(), projects: new Set() };
  // Remove earned badges for this career
  [...earnedBadges].filter(b => b.startsWith(currentCareer)).forEach(b => earnedBadges.delete(b));
  saveProgress();
  renderRoadmap(currentCareer);
  showToast('Progress reset! Fresh start 🚀');
}

// ===== DOWNLOAD PDF =====
function downloadPDF() {
  showToast('Opening print dialog for PDF...');
  setTimeout(() => window.print(), 400);
}

// ===== QUIZ =====
function buildQuiz() {
  quizStep = 0;
  quizAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
  renderQuizStep();
}

function renderQuizStep() {
  const content = document.getElementById('quizContent');
  const progressFill = document.getElementById('quizProgressFill');

  if (quizStep >= QUIZ_QUESTIONS.length) {
    renderQuizResult();
    return;
  }

  const q = QUIZ_QUESTIONS[quizStep];
  const pct = (quizStep / QUIZ_QUESTIONS.length) * 100;
  progressFill.style.width = pct + '%';

  content.innerHTML = `
    <div class="quiz-question-num">Question ${quizStep + 1} of ${QUIZ_QUESTIONS.length}</div>
    <div class="quiz-question">${q.question}</div>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option ${quizAnswers[quizStep] === i ? 'selected' : ''}"
          onclick="selectQuizOption(${i})"
          data-idx="${i}">
          <span class="quiz-option-letter">${['A','B','C','D'][i]}</span>
          <span>${opt.text}</span>
        </button>
      `).join('')}
    </div>
    <div class="quiz-nav">
      <button class="quiz-btn" onclick="quizNav(-1)" ${quizStep === 0 ? 'disabled' : ''}>← Back</button>
      <button class="quiz-btn primary" onclick="quizNav(1)" ${quizAnswers[quizStep] === null ? 'disabled' : ''} id="quizNextBtn">
        ${quizStep === QUIZ_QUESTIONS.length - 1 ? 'See Results 🎉' : 'Next →'}
      </button>
    </div>
  `;
}

function selectQuizOption(optIndex) {
  quizAnswers[quizStep] = optIndex;
  document.querySelectorAll('.quiz-option').forEach((el, i) => {
    el.classList.toggle('selected', i === optIndex);
  });
  const nextBtn = document.getElementById('quizNextBtn');
  if (nextBtn) nextBtn.disabled = false;
}

function quizNav(dir) {
  if (dir === 1 && quizAnswers[quizStep] === null) return;
  quizStep += dir;
  if (quizStep < 0) quizStep = 0;
  renderQuizStep();
}

function renderQuizResult() {
  // Tally scores
  const scores = {};
  QUIZ_QUESTIONS.forEach((q, qi) => {
    const ansIdx = quizAnswers[qi];
    if (ansIdx === null) return;
    const opt = q.options[ansIdx];
    for (const [career, pts] of Object.entries(opt.scores || {})) {
      scores[career] = (scores[career] || 0) + pts;
    }
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topKey = sorted[0]?.[0] || 'frontend';
  const topCareer = CAREERS[topKey];
  const runnerUp = sorted[1]?.[0];

  const progressFill = document.getElementById('quizProgressFill');
  progressFill.style.width = '100%';

  document.getElementById('quizContent').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-emoji">🎉</div>
      <div class="quiz-result-title">Your Recommended Career Path:</div>
      <div class="quiz-result-career">${topCareer.emoji} ${topCareer.title}</div>
      <p class="quiz-result-desc">${topCareer.description}</p>
      ${runnerUp ? `<p style="color:var(--text3);font-size:0.85rem;margin-bottom:20px;">Runner-up: ${CAREERS[runnerUp].emoji} ${CAREERS[runnerUp].title}</p>` : ''}
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="quiz-btn primary" onclick="goToRoadmap('${topKey}')">View Roadmap →</button>
        <button class="quiz-btn" onclick="buildQuiz()">Retake Quiz</button>
      </div>
    </div>
  `;
}

function goToRoadmap(careerKey) {
  document.getElementById('careerSelect').value = careerKey;
  document.getElementById('roadmap-section').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => generateRoadmap(), 600);
}

// ===== COMPARE =====
function compareCarers() {
  const a = document.getElementById('compareA').value;
  const b = document.getElementById('compareB').value;
  const result = document.getElementById('compareResult');

  if (!a || !b) { showToast('Please select both careers to compare!'); return; }
  if (a === b) { showToast('Please select two different careers!'); return; }

  const da = COMPARE_DATA[a];
  const db = COMPARE_DATA[b];
  const ca = CAREERS[a];
  const cb = CAREERS[b];

  const metrics = [
    { label: 'Job Demand', key: 'demand', unit: '%' },
    { label: 'Salary Potential', key: 'salary', unit: '%' },
    { label: 'Learning Difficulty', key: 'difficulty', unit: '%' },
    { label: 'Career Growth', key: 'growth', unit: '%' },
    { label: 'Remote Friendliness', key: 'remote', unit: '%' }
  ];

  result.innerHTML = `
    <div class="compare-grid">
      <div class="compare-card">
        <div class="compare-card-title">${ca.emoji} ${ca.title}</div>
        ${metrics.map(m => `
          <div class="compare-row">
            <span class="compare-row-label">${m.label}</span>
            <div style="text-align:right;">
              <span class="compare-row-value" style="color:var(--accent)">${da[m.key]}${m.unit}</span>
              <div class="meter-bar" style="width:120px;margin-top:4px;">
                <div class="meter-fill" style="width:${da[m.key]}%;background:var(--accent)"></div>
              </div>
            </div>
          </div>
        `).join('')}
        <div class="compare-row"><span class="compare-row-label">Time to Job</span><span class="compare-row-value">${da.timeToJob}</span></div>
        <div class="compare-row"><span class="compare-row-label">Key Skill</span><span class="compare-row-value" style="color:var(--accent2)">${da.keySkill}</span></div>
        <div class="compare-row"><span class="compare-row-label">Companies</span><span class="compare-row-value" style="font-size:0.8rem">${da.companies}</span></div>
      </div>

      <div class="compare-mid">
        ${metrics.map(m => {
          const winner = da[m.key] >= db[m.key] ? ca.emoji : cb.emoji;
          return `<div class="compare-metric"><div style="font-size:1.2rem">${winner}</div><div>${m.label}</div></div>`;
        }).join('<div style="font-size:1.5rem;color:var(--accent4)">·</div>')}
      </div>

      <div class="compare-card" style="border-color:rgba(139,92,246,0.25)">
        <div class="compare-card-title" style="color:var(--accent3)">${cb.emoji} ${cb.title}</div>
        ${metrics.map(m => `
          <div class="compare-row">
            <span class="compare-row-label">${m.label}</span>
            <div style="text-align:right;">
              <span class="compare-row-value" style="color:var(--accent3)">${db[m.key]}${m.unit}</span>
              <div class="meter-bar" style="width:120px;margin-top:4px;">
                <div class="meter-fill" style="width:${db[m.key]}%;background:var(--accent3)"></div>
              </div>
            </div>
          </div>
        `).join('')}
        <div class="compare-row"><span class="compare-row-label">Time to Job</span><span class="compare-row-value">${db.timeToJob}</span></div>
        <div class="compare-row"><span class="compare-row-label">Key Skill</span><span class="compare-row-value" style="color:var(--accent2)">${db.keySkill}</span></div>
        <div class="compare-row"><span class="compare-row-label">Companies</span><span class="compare-row-value" style="font-size:0.8rem">${db.companies}</span></div>
      </div>
    </div>
  `;
}

// ===== SALARY SECTION =====
function buildSalarySection() {
  const grid = document.getElementById('salaryGrid');
  grid.innerHTML = Object.entries(SALARY_DATA).map(([key, s]) => `
    <div class="salary-card">
      <div class="salary-emoji">${s.emoji}</div>
      <div class="salary-career">${s.career}</div>
      <div class="salary-india-range">${s.indiaRange} <span style="font-size:0.7rem;color:var(--text3)">/ year (India)</span></div>
      <div class="salary-global-range">🌍 ${s.globalRange} / year (Global)</div>
      <div class="salary-levels">
        <div class="salary-level">
          <span class="salary-level-label">🌱 Junior</span>
          <span class="salary-level-value junior">${s.junior}</span>
        </div>
        <div class="salary-bar-track"><div class="salary-bar" style="width:${s.bars[0]}%;background:var(--accent)"></div></div>
        <div class="salary-level">
          <span class="salary-level-label">🚀 Mid</span>
          <span class="salary-level-value mid">${s.mid}</span>
        </div>
        <div class="salary-bar-track"><div class="salary-bar" style="width:${s.bars[1]}%;background:var(--accent2)"></div></div>
        <div class="salary-level">
          <span class="salary-level-label">⚡ Senior</span>
          <span class="salary-level-value senior">${s.senior}</span>
        </div>
        <div class="salary-bar-track"><div class="salary-bar" style="width:${s.bars[2]}%;background:var(--accent3)"></div></div>
      </div>
    </div>
  `).join('');
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== INTERSECTION OBSERVER for scroll animations =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.salary-card, .resource-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
