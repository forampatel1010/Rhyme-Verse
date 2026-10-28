// components.js - Reusable UI component builders

'use strict';

const Components = {

  // Build navigation HTML
  buildNav(activePage) {
    return `
      <nav class="navbar">
        <div class="container">
          <a href="index.html" class="logo">
            <span class="logo-star-icon">⭐</span>
            <div class="logo-text-group">
              <span class="logo-title">RhymeVerse</span>
              <span class="logo-tagline">Little Words, Big Dreams!</span>
            </div>
          </a>

          <ul class="nav-links">
            <li><a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>🏠 હોમ</a></li>
            <li><a href="rhymes.html" ${activePage === 'rhymes' ? 'class="active"' : ''}>📖 બાળગીતો</a></li>
            <li><a href="rhymes.html#stories" ${activePage === 'stories' ? 'class="active"' : ''}>📖 વાર્તાઓ</a></li>
            <li><a href="games.html" ${activePage === 'games' ? 'class="active"' : ''}>🎮 રમતો</a></li>
            <li><a href="rhymes.html#learn" ${activePage === 'learn' ? 'class="active"' : ''}>💡 શિક્ષણ</a></li>
            <li><a href="progress.html" ${activePage === 'progress' ? 'class="active"' : ''}>✏️ મારી પ્રગતિ</a></li>
          </ul>

          <div class="nav-actions">
            <div class="star-count" title="તમારા મળેલા તારા">
              ⭐ <span class="star-display-count">5</span>
            </div>
            <button class="nav-btn" id="btn-sound" title="ધ્વનિ">🔊</button>
            <button class="nav-btn" id="btn-dark-mode" title="ડાર્ક મોડ">🌙</button>
            <div class="nav-avatar-wrap" title="બાળક પ્રોફાઇલ">
              <img src="assets/images/avatar_kid.jpg" alt="બાળક પ્રોફાઇલ" class="nav-avatar">
            </div>
            <button class="hamburger" id="hamburger" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-panel">
          <button class="mobile-menu-close" id="mobile-menu-close">✕</button>
          <a href="index.html">🏠 હોમ</a>
          <a href="rhymes.html">📖 બાળગીતો</a>
          <a href="rhymes.html#stories">📖 વાર્તાઓ</a>
          <a href="games.html">🎮 રમતો</a>
          <a href="rhymes.html#learn">💡 શિક્ષણ</a>
          <a href="progress.html">✏️ મારી પ્રગતિ</a>
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
                ⭐ RhymeVerse
              </div>
              <p class="footer-desc">
                ગુજરાતી ભાષા અને બાળસાહિત્ય શીખવા માટેનું જાદુઈ, રંગીન, ઇન્ટરેક્ટિવ શૈક્ષણિક મંચ.
                ગીતો, વાર્તાઓ અને શીખવાની દુનિયામાં તમારું હાર્દિક સ્વાગત છે!
              </p>
            </div>
            <div>
              <div class="footer-heading">ઝડપી લિંક</div>
              <ul class="footer-links">
                <li><a href="index.html">🏠 હોમ</a></li>
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
            &copy; 2026 RhymeVerse &mdash; Little Words, Big Dreams! | ♪ ગાઈએ, રમીએ, શીખીએ!
          </div>
        </div>
      </footer>
    `;
  },

  // Build rhyme card matching the reference UI
  buildRhymeCard(rhyme) {
    const isFav = window.App ? App.isFavorite(rhyme.id) : false;
    const lyricsLines = (rhyme.preview || '').split('\n').filter(Boolean).slice(0, 2);
    const lyricsHtml = lyricsLines.length > 0 ? lyricsLines.join('<br>') : rhyme.title;
    const cardColor = rhyme.color || '#E91E63';
    const thumbImg = rhyme.image || 'assets/images/hero_reading_kid.jpg';

    return `
      <div class="storybook-card rhyme-card" data-id="${rhyme.id}" data-title="${rhyme.title}"
           data-category="${rhyme.categoryLabel}" data-preview="${rhyme.preview}">
        <div class="storybook-thumb-wrap" onclick="RhymeCards.playVideo(${rhyme.id})" title="ઓડિયો સાંભળવા ક્લિક કરો">
          <img src="${thumbImg}" alt="${rhyme.title}" class="storybook-thumb" loading="lazy">
          <button class="storybook-star-badge ${isFav ? 'active' : ''}"
                  onclick="event.stopPropagation(); RhymeCards.toggleFav(${rhyme.id}, this)" title="મનપસંદ">
            ⭐
          </button>
        </div>
        <div class="storybook-title-pill-wrap">
          <div class="storybook-title-pill" style="background: ${cardColor};">
            ${rhyme.title}
          </div>
        </div>
        <div class="storybook-body">
          <p class="storybook-lyrics-snippet">${lyricsHtml}</p>
          <button class="storybook-bottom-btn" style="background: ${cardColor};"
                  onclick="RhymeCards.playVideo(${rhyme.id})" title="ઓડિયો અને ગીત સાંભળો">
            📖 ${rhyme.title}
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
