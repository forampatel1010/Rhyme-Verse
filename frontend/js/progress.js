// progress.js - Stars, badges, progress tracking

'use strict';

const Progress = {
  init() {
    if (!document.getElementById('progress-page')) return;
    this.render();
  },

  render() {
    const state = App.getState();
    this.renderStats(state);
    this.renderStreak(state);
    this.renderBadges(state);
    this.renderRhymeProgress(state);
    this.renderGameProgress(state);
  },

  renderStats(state) {
    const container = document.getElementById('stats-grid');
    if (!container) return;

    const totalRhymes = typeof RHYMES_DATA !== 'undefined' ? RHYMES_DATA.length : 12;
    const completedGamesCount = Object.keys(state.completedGames || {}).length;
    const totalGames = 6;

    container.innerHTML = `
      <div class="stat-card" style="border-color: #FFF176;">
        <div class="stat-value">⭐ ${state.stars}</div>
        <div class="stat-label">કુલ તારા</div>
      </div>
      <div class="stat-card" style="border-color: #A5D6A7;">
        <div class="stat-value">📖 ${state.completedRhymes.length}/${totalRhymes}</div>
        <div class="stat-label">જોડકણાં શીખ્યા</div>
      </div>
      <div class="stat-card" style="border-color: #B39DDB;">
        <div class="stat-value">🎮 ${completedGamesCount}/${totalGames}</div>
        <div class="stat-label">રમત પૂર્ણ</div>
      </div>
      <div class="stat-card" style="border-color: #F48FB1;">
        <div class="stat-value">🏆 ${state.badges.length}</div>
        <div class="stat-label">બેજ મળ્યા</div>
      </div>
    `;
  },

  renderStreak(state) {
    const container = document.getElementById('streak-display');
    if (!container) return;

    container.innerHTML = `
      <div class="streak-card">
        <div style="font-size:40px;margin-bottom:8px;">🔥</div>
        <div class="streak-number">${state.streak || 0}</div>
        <div class="streak-label">દિવસ સળંગ</div>
        <div style="margin-top:12px;opacity:0.85;font-size:0.875rem;">
          ${state.lastVisit ? `છેલ્લી મુલાકાત: ${new Date(state.lastVisit).toLocaleDateString('gu-IN')}` : 'આજે પ્રથમ મુલાકાત!'}
        </div>
      </div>
    `;
  },

  renderBadges(state) {
    const container = document.getElementById('badges-grid');
    if (!container || typeof BADGES_DATA === 'undefined') return;

    const state_badges = state.badges || [];

    container.innerHTML = BADGES_DATA.map(badge => {
      const unlocked = state_badges.includes(badge.id);
      const progress = this.getBadgeProgress(badge, state);

      return `
        <div class="badge-card ${unlocked ? 'unlocked' : 'locked'}" title="${badge.description}">
          ${!unlocked ? '<div class="badge-lock">🔒</div>' : '<div class="badge-lock">✅</div>'}
          <span class="badge-emoji">${badge.emoji}</span>
          <div class="badge-title">${badge.title}</div>
          <div class="badge-desc">${badge.description}</div>
          <div style="margin-top:12px;">
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill" style="width:${Math.min(100, progress)}%"></div>
            </div>
            <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;text-align:center;">
              ${unlocked ? 'પ્રાપ્ત! 🎉' : `${Math.round(progress)}% પૂર્ણ`}
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  getBadgeProgress(badge, state) {
    const req = badge.requirement;
    if (state.badges && state.badges.includes(badge.id)) return 100;

    switch (req.type) {
      case 'completedRhymes':
        return ((state.completedRhymes || []).length / req.count) * 100;
      case 'stars':
        return ((state.stars || 0) / req.count) * 100;
      case 'completedGames':
        return (Object.keys(state.completedGames || {}).length / req.count) * 100;
      case 'vocabulary':
        return ((state.vocabularyCompleted || []).length / req.count) * 100;
      default:
        return 0;
    }
  },

  renderRhymeProgress(state) {
    const container = document.getElementById('rhyme-progress-list');
    if (!container || typeof RHYMES_DATA === 'undefined') return;

    const completedRhymes = state.completedRhymes || [];
    const favoriteRhymes = state.favoriteRhymes || [];

    container.innerHTML = RHYMES_DATA.map(rhyme => {
      const completed = completedRhymes.includes(rhyme.id);
      const fav = favoriteRhymes.includes(rhyme.id);

      return `
        <div class="rhyme-progress-item">
          <div class="rhyme-progress-emoji">${rhyme.emoji}</div>
          <div class="rhyme-progress-info">
            <div class="rhyme-progress-title">${rhyme.title}</div>
            <div class="rhyme-progress-status">
              ${completed ? '✅ શીખ્યા' : '⏳ બાકી'} ${fav ? '• ⭐ મનપસંદ' : ''}
            </div>
          </div>
          <div class="rhyme-progress-check">
            ${completed ? '🌟' : '⭕'}
          </div>
          <a href="rhyme-detail.html?id=${rhyme.id}" class="btn btn-sm btn-lavender">
            ${completed ? 'ફરી જુઓ' : 'શીખો'}
          </a>
        </div>
      `;
    }).join('');
  },

  renderGameProgress(state) {
    const container = document.getElementById('game-progress-list');
    if (!container || typeof GAMES_DATA === 'undefined') return;

    const completedGames = state.completedGames || {};
    const gameNames = {
      rhymeMatch: 'જોડકણાં જોડો',
      fillBlank: 'ખાલી જગ્યા ભરો',
      pictureId: 'ચિત્ર ઓળખો',
      arrangeOrder: 'સાચો ક્રમ ગોઠવો',
      listenId: 'સાંભળો અને ઓળખો',
      letterGame: 'અક્ષર રમત'
    };
    const gameEmojis = {
      rhymeMatch: '🔗', fillBlank: '✏️', pictureId: '🖼️',
      arrangeOrder: '🔀', listenId: '👂', letterGame: '🔤'
    };

    container.innerHTML = Object.entries(gameNames).map(([id, name]) => {
      const score = completedGames[id];
      const completed = score !== undefined;

      return `
        <div class="rhyme-progress-item">
          <div class="rhyme-progress-emoji">${gameEmojis[id]}</div>
          <div class="rhyme-progress-info">
            <div class="rhyme-progress-title">${name}</div>
            <div class="rhyme-progress-status">
              ${completed ? `✅ શ્રેષ્ઠ સ્કોર: ${score}` : '⏳ હજી રમ્યા નથી'}
            </div>
          </div>
          <div class="rhyme-progress-check">${completed ? '🏆' : '⭕'}</div>
          <a href="games.html" class="btn btn-sm btn-pink">
            ${completed ? 'ફરી રમો' : 'રમો'}
          </a>
        </div>
      `;
    }).join('');
  },

  // Reset all progress
  resetProgress() {
    if (confirm('શું તમે બધી પ્રગતિ ભૂંસવા માંગો છો?')) {
      localStorage.removeItem('rhymeverse_state');
      App.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
      App.saveState();
      App.showToast('🔄 પ્રગતિ ભૂંસી નાખી', 'info');
      setTimeout(() => this.render(), 300);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Progress.init();
});
