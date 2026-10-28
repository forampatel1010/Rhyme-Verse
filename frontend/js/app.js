// app.js - Main app logic, routing, localStorage

'use strict';

// ===== DEFAULT STATE =====
const DEFAULT_STATE = {
  stars: 0,
  completedRhymes: [],
  favoriteRhymes: [],
  completedGames: {},
  badges: [],
  vocabularyCompleted: [],
  streak: 0,
  lastVisit: null,
  settings: { sound: true, darkMode: false, largeText: false }
};

// ===== STATE MANAGEMENT =====
const App = {
  state: null,

  init() {
    this.loadState();
    this.updateStreak();
    this.applySettings();
    this.initNavigation();
    this.initSearch();
    this.initToasts();
    this.markActivePage();
  },

  loadState() {
    try {
      const saved = localStorage.getItem('rhymeverse_state');
      if (saved) {
        this.state = Object.assign({}, DEFAULT_STATE, JSON.parse(saved));
        // Ensure nested objects exist
        this.state.settings = Object.assign({}, DEFAULT_STATE.settings, this.state.settings || {});
        this.state.completedGames = this.state.completedGames || {};
      } else {
        this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
      }
    } catch (e) {
      console.warn('Could not load state:', e);
      this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  },

  saveState() {
    try {
      localStorage.setItem('rhymeverse_state', JSON.stringify(this.state));
    } catch (e) {
      console.warn('Could not save state:', e);
    }
  },

  getState() {
    return this.state;
  },

  updateStreak() {
    const today = new Date().toDateString();
    const lastVisit = this.state.lastVisit;

    if (lastVisit === today) {
      // Already visited today
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastVisit === yesterday.toDateString()) {
      // Visited yesterday - maintain streak
      this.state.streak = (this.state.streak || 0) + 1;
    } else if (lastVisit !== null) {
      // Missed a day - reset streak
      this.state.streak = 1;
    } else {
      // First visit
      this.state.streak = 1;
    }

    this.state.lastVisit = today;
    this.saveState();
  },

  addStars(count, message) {
    this.state.stars += count;
    this.saveState();
    this.showToast(`⭐ ${count} તારા મળ્યા! ${message || ''}`, 'star');
    this.checkBadges();
    this.updateStarDisplays();
  },

  markRhymeCompleted(rhymeId) {
    if (!this.state.completedRhymes.includes(rhymeId)) {
      this.state.completedRhymes.push(rhymeId);
      this.addStars(5, 'જોડકણું શીખ્યા!');
      this.saveState();
      this.checkBadges();
    }
  },

  toggleFavorite(rhymeId) {
    const idx = this.state.favoriteRhymes.indexOf(rhymeId);
    if (idx === -1) {
      this.state.favoriteRhymes.push(rhymeId);
      this.showToast('⭐ મનપસંદ ઉમેર્યું!', 'info');
    } else {
      this.state.favoriteRhymes.splice(idx, 1);
      this.showToast('💔 મનપસંદ દૂર કર્યું', 'info');
    }
    this.saveState();
    return idx === -1;
  },

  isFavorite(rhymeId) {
    return this.state.favoriteRhymes.includes(rhymeId);
  },

  markGameCompleted(gameId, score) {
    if (!this.state.completedGames[gameId] || this.state.completedGames[gameId] < score) {
      this.state.completedGames[gameId] = score;
    }
    this.addStars(10, 'રમત જીતી!');
    this.saveState();
    this.checkBadges();
  },

  markVocabularyCompleted(rhymeId) {
    if (!this.state.vocabularyCompleted.includes(rhymeId)) {
      this.state.vocabularyCompleted.push(rhymeId);
      this.addStars(3, 'શબ્દ ભંડોળ!');
      this.saveState();
      this.checkBadges();
    }
  },

  checkBadges() {
    if (typeof BADGES_DATA === 'undefined') return;
    BADGES_DATA.forEach(badge => {
      if (this.state.badges.includes(badge.id)) return;

      let earned = false;
      const req = badge.requirement;

      if (req.type === 'completedRhymes' && this.state.completedRhymes.length >= req.count) earned = true;
      if (req.type === 'stars' && this.state.stars >= req.count) earned = true;
      if (req.type === 'completedGames' && Object.keys(this.state.completedGames).length >= req.count) earned = true;
      if (req.type === 'vocabulary' && this.state.vocabularyCompleted.length >= req.count) earned = true;

      if (earned) {
        this.state.badges.push(badge.id);
        this.saveState();
        this.showToast(`🏆 બેજ મળ્યો: ${badge.title}!`, 'success');
      }
    });
  },

  // Settings
  toggleDarkMode() {
    this.state.settings.darkMode = !this.state.settings.darkMode;
    this.saveState();
    this.applySettings();
    return this.state.settings.darkMode;
  },

  toggleSound() {
    this.state.settings.sound = !this.state.settings.sound;
    this.saveState();
    // Sync all video elements on current page
    document.querySelectorAll('video').forEach(v => {
      v.muted = !this.state.settings.sound;
    });
    return this.state.settings.sound;
  },

  toggleLargeText() {
    this.state.settings.largeText = !this.state.settings.largeText;
    this.saveState();
    this.applySettings();
    return this.state.settings.largeText;
  },

  applySettings() {
    const { darkMode, largeText } = this.state.settings;
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('large-text', largeText);

    const darkBtn = document.getElementById('btn-dark-mode');
    if (darkBtn) darkBtn.textContent = darkMode ? '☀️' : '🌙';

    const soundBtn = document.getElementById('btn-sound');
    if (soundBtn) soundBtn.textContent = this.state.settings.sound ? '🔊' : '🔇';
  },

  updateStarDisplays() {
    const displays = document.querySelectorAll('.star-display-count');
    displays.forEach(el => {
      el.textContent = this.state.stars;
    });
  },

  // Navigation
  initNavigation() {
    // Dark mode toggle
    const darkBtn = document.getElementById('btn-dark-mode');
    if (darkBtn) {
      darkBtn.addEventListener('click', () => this.toggleDarkMode());
    }

    // Sound toggle
    const soundBtn = document.getElementById('btn-sound');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const on = this.toggleSound();
        soundBtn.textContent = on ? '🔊' : '🔇';
        if (typeof Audio !== 'undefined' && typeof stopSpeech === 'function') {
          if (!on) stopSpeech();
        }
      });
    }

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-menu-close');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('open');
      });

      if (mobileClose) {
        mobileClose.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
        });
      }

      mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) mobileMenu.classList.remove('open');
      });
    }
  },

  markActivePage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a, .mobile-menu-panel a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes(path)) {
        link.classList.add('active');
      }
    });
  },

  // Search
  initSearch() {
    const searchInput = document.getElementById('rhyme-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      this.filterRhymes(query);
    });
  },

  filterRhymes(query) {
    const cards = document.querySelectorAll('.rhyme-card[data-id]');
    cards.forEach(card => {
      const title = (card.dataset.title || '').toLowerCase();
      const category = (card.dataset.category || '').toLowerCase();
      const preview = (card.dataset.preview || '').toLowerCase();
      const visible = !query || title.includes(query) || category.includes(query) || preview.includes(query);
      card.style.display = visible ? '' : 'none';
    });
  },

  // Toast
  initToasts() {
    if (!document.getElementById('toast-container')) {
      const tc = document.createElement('div');
      tc.id = 'toast-container';
      tc.className = 'toast-container';
      document.body.appendChild(tc);
    }
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: '✅', error: '❌', info: 'ℹ️', star: '⭐' };
    toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;

    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
  },

  // Confetti celebration
  celebrate() {
    const colors = ['#FF6B6B', '#FFF176', '#A5D6A7', '#87CEEB', '#B39DDB', '#F48FB1'];
    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        top: -20px;
        left: ${Math.random() * 100}vw;
        width: ${Math.random() * 10 + 6}px;
        height: ${Math.random() * 10 + 6}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        z-index: 9999;
        animation: confettiFall ${Math.random() * 2 + 1.5}s ease-in ${Math.random() * 0.5}s forwards;
        pointer-events: none;
      `;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }
};

// URL params helper
const URLParams = {
  get(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
  App.updateStarDisplays();
});
