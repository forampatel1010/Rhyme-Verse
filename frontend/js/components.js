// components.js - Reusable UI component builders

'use strict';

const Components = {

  // Build navigation HTML
  buildNav(activePage) {
    return `
      <nav class="navbar">
        <div class="container">
          <a href="index.html" class="logo">
            <svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="url(#logoGrad)"/>
              <text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" font-size="22" fill="white">♪</text>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#87CEEB"/>
                  <stop offset="0.5" stop-color="#B39DDB"/>
                  <stop offset="1" stop-color="#F48FB1"/>
                </linearGradient>
              </defs>
            </svg>
            Rhymeverse
          </a>

          <ul class="nav-links">
            <li><a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>🏠 મુખ્ય પાનું</a></li>
            <li><a href="rhymes.html" ${activePage === 'rhymes' ? 'class="active"' : ''}>📖 બાળગીતો</a></li>
            <li><a href="games.html" ${activePage === 'games' ? 'class="active"' : ''}>🎮 રમતો</a></li>
            <li><a href="rhymes.html#learn" ${activePage === 'learn' ? 'class="active"' : ''}>✏️ શીખો</a></li>
            <li><a href="progress.html" ${activePage === 'progress' ? 'class="active"' : ''}>🌟 મારી પ્રગતિ</a></li>
          </ul>

          <div class="nav-actions">
            <div class="star-count">
              ⭐ <span class="star-display-count">0</span>
            </div>
            <button class="nav-btn" id="btn-sound" title="ધ્વનિ">🔊</button>
            <button class="nav-btn" id="btn-dark-mode" title="ડાર્ક મોડ">🌙</button>
            <button class="hamburger" id="hamburger" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-panel">
          <button class="mobile-menu-close" id="mobile-menu-close">✕</button>
          <a href="index.html">🏠 મુખ્ય પાનું</a>
          <a href="rhymes.html">📖 બાળગીતો</a>
          <a href="games.html">🎮 રમતો</a>
          <a href="rhymes.html#learn">✏️ શીખો</a>
          <a href="progress.html">🌟 મારી પ્રગતિ</a>
        </div>
      </div>
    `;
  },

  // Build footer HTML
  buildFooter() {
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="footer-logo">
                ♪ Rhymeverse
              </div>
              <p class="footer-desc">
                ગુજરાતી ભાષા અને સંસ્કૃતિ શીખવા માટેનું મજેદાર, રંગીન, ઇન્ટરેક્ટિવ શૈક્ષણિક મંચ. 
                બાળકો માટે ગીત, રમત અને ભણતર - એક સ્થળે.
              </p>
            </div>
            <div>
              <div class="footer-heading">ઝડપી લિંક</div>
              <ul class="footer-links">
                <li><a href="index.html">🏠 મુખ્ય પાનું</a></li>
                <li><a href="rhymes.html">📖 બાળગીતો</a></li>
                <li><a href="games.html">🎮 રમતો</a></li>
                <li><a href="progress.html">🌟 પ્રગતિ</a></li>
              </ul>
            </div>
            <div>
              <div class="footer-heading">માહિતી</div>
              <ul class="footer-links">
                <li><a href="#">👨‍👩‍👧 અમારા વિશે</a></li>
                <li><a href="#">👪 વાલીઓ માટે</a></li>
                <li><a href="#">📧 સંપર્ક</a></li>
                <li><a href="#">📜 નિયમો</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            &copy; 2024 Rhymeverse &mdash; ગુજરાતી શિક્ષણ | ♪ ગાઈએ, રમીએ, શીખીએ!
          </div>
        </div>
      </footer>
    `;
  },

  // Build rhyme card
  buildRhymeCard(rhyme) {
    const isFav = App.isFavorite(rhyme.id);
    return `
      <div class="rhyme-card" data-id="${rhyme.id}" data-title="${rhyme.title}"
           data-category="${rhyme.categoryLabel}" data-preview="${rhyme.preview}"
           style="border-top-color: ${rhyme.color};">
        <div class="rhyme-card-illustration" style="background: ${rhyme.color}22; cursor:pointer;"
             onclick="RhymeCards.playVideo(${rhyme.id})" title="ઓડિયો સાંભળવા ક્લિક કરો">
          <span style="font-size:72px;animation:float 3s ease-in-out infinite;">${rhyme.emoji}</span>
          <span class="video-play-chip">▶️ ઓડિયો</span>
        </div>
        <div class="rhyme-card-header">
          <h3 class="rhyme-card-title">${rhyme.title}</h3>
          <span class="rhyme-card-category">${rhyme.categoryLabel}</span>
        </div>
        <p class="rhyme-card-preview">${rhyme.preview}</p>
        <div class="rhyme-card-actions">
          <button class="btn-play" onclick="RhymeCards.playVideo(${rhyme.id})" data-rhyme-id="${rhyme.id}" title="ઓડિયો અને ગીત સાંભળો">
            ▶️ ઓડિયો
          </button>
          <a href="rhyme-detail.html?id=${rhyme.id}" class="btn-learn" title="સંપૂર્ણ જોડકણું અને ગીત">
            📖 વધુ શીખો
          </a>
          <button class="btn-favorite ${isFav ? 'active' : ''}" onclick="RhymeCards.toggleFav(${rhyme.id}, this)" title="મનપસંદ">
            ${isFav ? '⭐' : '☆'}
          </button>
        </div>
      </div>
    `;
  }
};

// Rhyme card interaction handlers (global scope)
const RhymeCards = {
  // Play video with audio in a child-friendly popup modal
  playVideo(rhymeId) {
    // Stop any text-to-speech if running
    if (window.Audio && typeof Audio.stop === 'function') {
      Audio.stop();
    }

    const rhyme = RHYMES_DATA.find(r => r.id === rhymeId);
    if (!rhyme) return;

    this.ensureModalExists();

    const modal = document.getElementById('global-video-modal');
    const modalTitle = document.getElementById('modal-video-title');
    const modalCategory = document.getElementById('modal-video-category');
    const modalVideo = document.getElementById('modal-video-element');
    const modalLearnBtn = document.getElementById('modal-video-learn-btn');

    modalTitle.textContent = `${rhyme.emoji} ${rhyme.title}`;
    modalCategory.textContent = `📂 ${rhyme.categoryLabel}`;
    modalLearnBtn.href = `rhyme-detail.html?id=${rhyme.id}`;

    // Set video source
    modalVideo.pause();
    modalVideo.src = encodeURI(rhyme.video);
    modalVideo.load();

    // Respect sound setting
    if (window.App && App.state && App.state.settings && App.state.settings.sound === false) {
      modalVideo.muted = true;
    } else {
      modalVideo.muted = false;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Play video
    const playPromise = modalVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.log('Autoplay handled by user interaction:', err);
      });
    }

    // Award star if user watches till end
    modalVideo.onended = () => {
      if (window.App) {
        App.celebrate();
        App.addStars(3, 'વિડિયો જોડકણું જોયું!');
        App.markRhymeCompleted(rhyme.id);
      }
    };
  },

  // Close the popup video modal
  closeVideoModal() {
    const modal = document.getElementById('global-video-modal');
    if (!modal) return;
    const modalVideo = document.getElementById('modal-video-element');
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.removeAttribute('src');
      modalVideo.load();
    }
    modal.classList.remove('active');
    document.body.style.overflow = '';
  },

  // Ensure modal HTML exists in DOM
  ensureModalExists() {
    if (document.getElementById('global-video-modal')) return;

    const modalHtml = `
      <div id="global-video-modal" class="rhyme-modal-backdrop" onclick="RhymeCards.handleBackdropClick(event)">
        <div class="rhyme-modal-box">
          <div class="rhyme-modal-header">
            <div style="display:flex;align-items:center;gap:10px;">
              <h3 id="modal-video-title" style="margin:0;font-size:1.3rem;color:var(--text-primary);font-weight:800;"></h3>
              <span id="modal-video-category" class="badge-chip"></span>
            </div>
            <button class="rhyme-modal-close" onclick="RhymeCards.closeVideoModal()" aria-label="બંધ કરો">✕</button>
          </div>
          <div class="rhyme-modal-video-wrap">
            <video id="modal-video-element" controls playsinline preload="auto">
              તમારું બ્રાઉઝર વિડિયો સપોર્ટ કરતું નથી.
            </video>
          </div>
          <div class="rhyme-modal-footer">
            <span style="font-size:0.9rem;color:var(--text-secondary);">🎵 ગાઓ અને આનંદ માણો!</span>
            <a id="modal-video-learn-btn" href="#" class="btn btn-lavender btn-sm">
              📖 સંપૂર્ણ જોડકણું અને ક્વિઝ →
            </a>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Keyboard ESC listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') RhymeCards.closeVideoModal();
    });
  },

  handleBackdropClick(event) {
    if (event.target.id === 'global-video-modal') {
      this.closeVideoModal();
    }
  },

  // Backward compatibility alias
  playPreview(rhymeId) {
    this.playVideo(rhymeId);
  },

  toggleFav(rhymeId, btn) {
    const isNowFav = App.toggleFavorite(rhymeId);
    btn.classList.toggle('active', isNowFav);
    btn.textContent = isNowFav ? '⭐' : '☆';
    btn.style.animation = 'heartBeat 0.5s ease';
    setTimeout(() => btn.style.animation = '', 600);
  }
};
