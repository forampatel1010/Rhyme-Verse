// games.js - All 6 game implementations

'use strict';

const Games = {
  currentGame: null,
  gameArea: null,

  init() {
    this.gameArea = document.getElementById('game-area');
    this.renderGameCards();
  },

  renderGameCards() {
    const container = document.getElementById('games-grid');
    if (!container || typeof GAMES_DATA === 'undefined') return;

    const gamesList = [
      { key: 'rhymeMatch', color: '#87CEEB' },
      { key: 'fillBlank', color: '#F48FB1' },
      { key: 'pictureId', color: '#A5D6A7' },
      { key: 'arrangeOrder', color: '#FFF176' },
      { key: 'listenId', color: '#B39DDB' },
      { key: 'letterGame', color: '#FFCC80' }
    ];

    container.innerHTML = gamesList.map(({ key, color }) => {
      const game = GAMES_DATA[key];
      const state = App.getState();
      const completed = state.completedGames[key] !== undefined;
      const bestScore = state.completedGames[key];

      return `
        <div class="game-card" style="border-top:6px solid ${color};" onclick="Games.startGame('${key}')">
          <span class="game-card-emoji">${game.emoji}</span>
          <div class="game-card-title">${game.title}</div>
          <div class="game-card-desc">${game.description}</div>
          ${completed ? `<div style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:8px;">🏆 શ્રેષ્ઠ: ${bestScore}</div>` : ''}
          <button class="game-card-btn">
            ${completed ? '🔄 ફરી રમો' : '🎮 રમો'}
          </button>
        </div>
      `;
    }).join('');
  },

  startGame(gameKey) {
    this.currentGame = gameKey;

    const gameArea = document.getElementById('game-area');
    if (!gameArea) return;

    gameArea.style.display = 'block';
    gameArea.scrollIntoView({ behavior: 'smooth', block: 'start' });

    switch (gameKey) {
      case 'rhymeMatch': this.startRhymeMatch(); break;
      case 'fillBlank': this.startFillBlank(); break;
      case 'pictureId': this.startPictureId(); break;
      case 'arrangeOrder': this.startArrangeOrder(); break;
      case 'listenId': this.startListenId(); break;
      case 'letterGame': this.startLetterGame(); break;
    }
  },

  // ===== GAME 1: Rhyme Matching =====
  startRhymeMatch() {
    const game = GAMES_DATA.rhymeMatch;
    const pairs = [...game.pairs];
    let score = 0;
    let lives = 3;
    let matched = 0;
    let selectedLeft = null;
    let selectedRight = null;

    // Shuffle right column
    const leftItems = pairs.map(p => p.left);
    const rightItems = [...pairs.map(p => p.right)].sort(() => Math.random() - 0.5);

    const render = () => {
      document.getElementById('game-area').innerHTML = `
        <div class="game-header">
          <div>
            <button class="btn btn-outline btn-sm" onclick="Games.closeGame()">← પાછા</button>
            <h3 class="game-title" style="display:inline;margin-left:12px;">${game.emoji} ${game.title}</h3>
          </div>
          <div class="game-stats">
            <div class="game-lives">${'❤️'.repeat(lives)}${'🖤'.repeat(3 - lives)}</div>
            <div class="game-score">⭐ ${score}</div>
          </div>
        </div>
        <div class="game-progress">
          <div class="game-progress-label"><span>જોડ: ${matched}/${pairs.length}</span></div>
          <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${(matched/pairs.length)*100}%"></div></div>
        </div>
        <p style="text-align:center;color:var(--text-secondary);margin-bottom:20px;">ડાબી અને જમણી બાજુ થી એક-એક શબ્દ પસંદ કરો</p>
        <div class="match-grid">
          <div class="match-column" id="left-col">
            ${leftItems.map((word, i) => `
              <div class="match-item" id="left-${i}" data-word="${word}" data-side="left"
                   onclick="Games.rhymeMatchSelect('left', ${i}, this)">
                ${word}
              </div>
            `).join('')}
          </div>
          <div class="match-column" id="right-col">
            ${rightItems.map((word, i) => `
              <div class="match-item" id="right-${i}" data-word="${word}" data-side="right"
                   onclick="Games.rhymeMatchSelect('right', ${i}, this)">
                ${word}
              </div>
            `).join('')}
          </div>
        </div>
      `;

      // Store state on window for handlers
      window._rmState = { pairs, leftItems, rightItems, score, lives, matched, selectedLeft, selectedRight };
    };

    render();

    // Store handler
    window.Games._rmData = { pairs, leftItems, rightItems, score, lives, matched };
    window.Games._rmSelectedLeft = null;
    window.Games._rmSelectedRight = null;
  },

  rhymeMatchSelect(side, idx, el) {
    const state = window.Games._rmData;
    if (!state) return;
    if (el.classList.contains('matched')) return;

    if (side === 'left') {
      // Deselect previous
      if (window.Games._rmSelectedLeft !== null) {
        const prev = document.getElementById(`left-${window.Games._rmSelectedLeft}`);
        if (prev) prev.classList.remove('selected');
      }
      window.Games._rmSelectedLeft = idx;
      el.classList.add('selected');
    } else {
      if (window.Games._rmSelectedRight !== null) {
        const prev = document.getElementById(`right-${window.Games._rmSelectedRight}`);
        if (prev) prev.classList.remove('selected');
      }
      window.Games._rmSelectedRight = idx;
      el.classList.add('selected');
    }

    // Check for a match
    if (window.Games._rmSelectedLeft !== null && window.Games._rmSelectedRight !== null) {
      const leftEl = document.getElementById(`left-${window.Games._rmSelectedLeft}`);
      const rightEl = document.getElementById(`right-${window.Games._rmSelectedRight}`);

      const leftWord = leftEl.dataset.word;
      const rightWord = rightEl.dataset.word;

      // Find if they're a valid pair
      const isMatch = state.pairs.some(p => p.left === leftWord && p.right === rightWord);

      if (isMatch) {
        leftEl.classList.remove('selected');
        rightEl.classList.remove('selected');
        leftEl.classList.add('matched');
        rightEl.classList.add('matched');
        leftEl.innerHTML = `✓ ${leftWord}`;
        rightEl.innerHTML = `✓ ${rightWord}`;
        state.matched++;
        state.score += 10;

        document.querySelector('.game-score').textContent = `⭐ ${state.score}`;
        document.querySelector('.progress-bar-fill').style.width = `${(state.matched / state.pairs.length) * 100}%`;
        document.querySelector('.game-progress-label span').textContent = `જોડ: ${state.matched}/${state.pairs.length}`;

        App.showToast('✅ સાચી જોડ! +10 સ્કોર', 'success');

        if (state.matched === state.pairs.length) {
          setTimeout(() => Games.showCompletion('rhymeMatch', state.score, state.pairs.length * 10), 600);
        }
      } else {
        leftEl.classList.add('wrong-match');
        rightEl.classList.add('wrong-match');
        state.lives = Math.max(0, state.lives - 1);
        document.querySelector('.game-lives').innerHTML = '❤️'.repeat(state.lives) + '🖤'.repeat(3 - state.lives);
        App.showToast('❌ ખોટી જોડ!', 'error');

        setTimeout(() => {
          leftEl.classList.remove('wrong-match', 'selected');
          rightEl.classList.remove('wrong-match', 'selected');
        }, 700);

        if (state.lives === 0) {
          setTimeout(() => Games.showGameOver('rhymeMatch', state.score), 800);
        }
      }

      window.Games._rmSelectedLeft = null;
      window.Games._rmSelectedRight = null;
    }
  },

  // ===== GAME 2: Fill the Blank =====
  startFillBlank() {
    const game = GAMES_DATA.fillBlank;
    const questions = [...game.questions].sort(() => Math.random() - 0.5);
    let qIdx = 0;
    let score = 0;
    let lives = 3;
    let answered = false;

    window.Games._fbState = { questions, qIdx, score, lives };
    this.renderFillBlank();
  },

  renderFillBlank() {
    const { questions, qIdx, score, lives } = window.Games._fbState;
    const q = questions[qIdx];
    const gameArea = document.getElementById('game-area');

    gameArea.innerHTML = `
      <div class="game-header">
        <div>
          <button class="btn btn-outline btn-sm" onclick="Games.closeGame()">← પાછા</button>
          <h3 class="game-title" style="display:inline;margin-left:12px;">✏️ ખાલી જગ્યા ભરો</h3>
        </div>
        <div class="game-stats">
          <div class="game-lives">${'❤️'.repeat(lives)}${'🖤'.repeat(3 - lives)}</div>
          <div class="game-score">⭐ ${score}</div>
        </div>
      </div>
      <div class="game-progress">
        <div class="game-progress-label"><span>પ્રશ્ન: ${qIdx + 1}/${questions.length}</span></div>
        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${((qIdx)/questions.length)*100}%"></div></div>
      </div>
      <div style="background:var(--bg-secondary);border-radius:var(--radius-lg);padding:28px;margin-bottom:20px;text-align:center;">
        <p style="font-size:1.5rem;font-weight:700;color:var(--text-primary);line-height:1.8;">
          ${q.sentence.replace('___', '<span style="background:var(--yellow);padding:2px 16px;border-radius:8px;border-bottom:3px solid #FFD54F;">___</span>')}
        </p>
      </div>
      <div class="options-grid">
        ${q.options.map((opt, i) => `
          <button class="option-btn" onclick="Games.checkFillBlank(${i}, '${opt}', '${q.answer}', this)">
            ${opt}
          </button>
        `).join('')}
      </div>
    `;
  },

  checkFillBlank(idx, selected, answer, btn) {
    const state = window.Games._fbState;
    if (!state) return;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if (selected === answer) {
      btn.classList.add('correct');
      state.score += 15;
      App.showToast('🎉 સાચો જવાબ! +15', 'success');
    } else {
      btn.classList.add('wrong');
      state.lives = Math.max(0, state.lives - 1);
      App.showToast('❌ ખોટો જવાબ!', 'error');
      // Show correct
      buttons.forEach(b => {
        if (b.textContent.trim() === answer) b.classList.add('correct');
      });

      if (state.lives === 0) {
        setTimeout(() => Games.showGameOver('fillBlank', state.score), 1000);
        return;
      }
    }

    state.qIdx++;
    const delay = 900;

    if (state.qIdx >= state.questions.length) {
      setTimeout(() => Games.showCompletion('fillBlank', state.score, state.questions.length * 15), delay);
    } else {
      setTimeout(() => Games.renderFillBlank(), delay);
    }
  },

  // ===== GAME 3: Picture Identify =====
  startPictureId() {
    const game = GAMES_DATA.pictureId;
    const questions = [...game.questions].sort(() => Math.random() - 0.5);
    window.Games._piState = { questions, qIdx: 0, score: 0, lives: 3 };
    this.renderPictureId();
  },

  renderPictureId() {
    const { questions, qIdx, score, lives } = window.Games._piState;
    const q = questions[qIdx];
    const gameArea = document.getElementById('game-area');

    gameArea.innerHTML = `
      <div class="game-header">
        <div>
          <button class="btn btn-outline btn-sm" onclick="Games.closeGame()">← પાછા</button>
          <h3 class="game-title" style="display:inline;margin-left:12px;">🖼️ ચિત્ર ઓળખો</h3>
        </div>
        <div class="game-stats">
          <div class="game-lives">${'❤️'.repeat(lives)}${'🖤'.repeat(3 - lives)}</div>
          <div class="game-score">⭐ ${score}</div>
        </div>
      </div>
      <div class="game-progress">
        <div class="game-progress-label"><span>પ્રશ્ન: ${qIdx + 1}/${questions.length}</span></div>
        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${(qIdx/questions.length)*100}%"></div></div>
      </div>
      <div style="text-align:center;margin:24px 0;">
        <div style="font-size:100px;background:var(--bg-secondary);border-radius:var(--radius-xl);padding:32px;display:inline-block;box-shadow:var(--shadow-md);animation:float 3s ease-in-out infinite;">
          ${q.emoji}
        </div>
        <p style="margin-top:16px;font-size:1.1rem;color:var(--text-secondary);">આ ચિત્ર શેનું છે?</p>
      </div>
      <div class="options-grid">
        ${q.options.map((opt, i) => `
          <button class="option-btn" onclick="Games.checkPictureId(${i}, '${opt}', '${q.answer}', this)">
            ${opt}
          </button>
        `).join('')}
      </div>
    `;
  },

  checkPictureId(idx, selected, answer, btn) {
    const state = window.Games._piState;
    if (!state) return;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if (selected === answer) {
      btn.classList.add('correct');
      state.score += 15;
      App.showToast('🎉 સાચો! +15', 'success');
    } else {
      btn.classList.add('wrong');
      state.lives = Math.max(0, state.lives - 1);
      App.showToast('❌ ખોટો!', 'error');
      buttons.forEach(b => { if (b.textContent.trim() === answer) b.classList.add('correct'); });

      if (state.lives === 0) {
        setTimeout(() => Games.showGameOver('pictureId', state.score), 1000);
        return;
      }
    }

    state.qIdx++;
    if (state.qIdx >= state.questions.length) {
      setTimeout(() => Games.showCompletion('pictureId', state.score, state.questions.length * 15), 900);
    } else {
      setTimeout(() => Games.renderPictureId(), 900);
    }
  },

  // ===== GAME 4: Arrange in Order =====
  startArrangeOrder() {
    const game = GAMES_DATA.arrangeOrder;
    const allQuestions = game.questions;
    const q = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    const shuffled = [...q.lines].sort(() => Math.random() - 0.5);

    window.Games._aoState = {
      question: q,
      shuffled,
      userOrder: [],
      score: 0,
      lives: 3,
      allQuestions,
      qIdx: 0
    };
    this.renderArrangeOrder();
  },

  renderArrangeOrder() {
    const state = window.Games._aoState;
    const { question, shuffled, userOrder, score, lives } = state;
    const gameArea = document.getElementById('game-area');

    gameArea.innerHTML = `
      <div class="game-header">
        <div>
          <button class="btn btn-outline btn-sm" onclick="Games.closeGame()">← પાછા</button>
          <h3 class="game-title" style="display:inline;margin-left:12px;">🔀 ${question.title}</h3>
        </div>
        <div class="game-stats">
          <div class="game-lives">${'❤️'.repeat(lives)}${'🖤'.repeat(3 - lives)}</div>
          <div class="game-score">⭐ ${score}</div>
        </div>
      </div>
      <p style="color:var(--text-secondary);margin-bottom:20px;text-align:center;">ક્રમ અનુસાર પંક્તિઓ પર ક્લિક કરો</p>
      
      ${userOrder.length > 0 ? `
        <div style="background:var(--bg-secondary);border-radius:var(--radius-lg);padding:16px;margin-bottom:16px;">
          <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:8px;">તમારો ક્રમ:</p>
          ${userOrder.map((line, i) => `
            <div style="padding:8px 12px;font-weight:600;color:var(--lavender);">
              ${i + 1}. ${line}
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div class="arrange-lines" id="arrange-lines">
        ${shuffled.map((line, i) => {
          const used = userOrder.includes(line);
          return `
            <div class="arrange-line ${used ? 'matched' : ''}" 
                 data-line="${line}" data-idx="${i}"
                 onclick="${used ? '' : `Games.aoSelectLine('${line.replace(/'/g, "\\'")}', this)`}"
                 style="${used ? 'opacity:0.4;cursor:default;' : ''}">
              <span class="line-num">${i + 1}</span>
              ${line}
            </div>
          `;
        }).join('')}
      </div>

      <div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        ${userOrder.length === shuffled.length ? `
          <button class="btn btn-mint" onclick="Games.aoCheck()">✅ ચકાસો</button>
        ` : ''}
        <button class="btn btn-outline" onclick="Games.aoReset()">🔄 ફરી શરૂ</button>
      </div>
    `;
  },

  aoSelectLine(line, el) {
    const state = window.Games._aoState;
    if (!state) return;
    if (state.userOrder.includes(line)) return;

    state.userOrder.push(line);
    this.renderArrangeOrder();
  },

  aoReset() {
    const state = window.Games._aoState;
    if (!state) return;
    state.userOrder = [];
    this.renderArrangeOrder();
  },

  aoCheck() {
    const state = window.Games._aoState;
    if (!state) return;

    const correct = state.question.lines;
    const userOrder = state.userOrder;
    const isCorrect = correct.every((line, i) => line === userOrder[i]);

    if (isCorrect) {
      state.score += 20;
      App.showToast('🎉 સાચો ક્રમ! +20', 'success');
      state.qIdx++;

      if (state.qIdx >= state.allQuestions.length) {
        setTimeout(() => Games.showCompletion('arrangeOrder', state.score, state.allQuestions.length * 20), 800);
      } else {
        const nextQ = state.allQuestions[state.qIdx];
        state.question = nextQ;
        state.shuffled = [...nextQ.lines].sort(() => Math.random() - 0.5);
        state.userOrder = [];
        setTimeout(() => Games.renderArrangeOrder(), 800);
      }
    } else {
      state.lives = Math.max(0, state.lives - 1);
      App.showToast('❌ ખોટો ક્રમ! ફરી ક્રો.', 'error');
      state.userOrder = [];

      if (state.lives === 0) {
        setTimeout(() => Games.showGameOver('arrangeOrder', state.score), 800);
      } else {
        setTimeout(() => Games.renderArrangeOrder(), 800);
      }
    }
  },

  // ===== GAME 5: Listen and Identify =====
  startListenId() {
    const game = GAMES_DATA.listenId;
    const questions = [...game.questions].sort(() => Math.random() - 0.5);
    window.Games._liState = { questions, qIdx: 0, score: 0, lives: 3, canAnswer: false };
    this.renderListenId();
  },

  renderListenId() {
    const { questions, qIdx, score, lives } = window.Games._liState;
    const q = questions[qIdx];
    const gameArea = document.getElementById('game-area');

    gameArea.innerHTML = `
      <div class="game-header">
        <div>
          <button class="btn btn-outline btn-sm" onclick="Games.closeGame()">← પાછા</button>
          <h3 class="game-title" style="display:inline;margin-left:12px;">👂 સાંભળો અને ઓળખો</h3>
        </div>
        <div class="game-stats">
          <div class="game-lives">${'❤️'.repeat(lives)}${'🖤'.repeat(3 - lives)}</div>
          <div class="game-score">⭐ ${score}</div>
        </div>
      </div>
      <div class="game-progress">
        <div class="game-progress-label"><span>પ્રશ્ન: ${qIdx + 1}/${questions.length}</span></div>
        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${(qIdx/questions.length)*100}%"></div></div>
      </div>
      <div style="text-align:center;margin:32px 0;">
        <div style="font-size:80px;margin-bottom:16px;">👂</div>
        <p style="font-size:1.1rem;color:var(--text-secondary);margin-bottom:20px;">સાંભળો અને સાચો ગુજરાતી શબ્દ ઓળખો</p>
        <button class="btn btn-sky btn-lg" onclick="Games.listenSpeak()" id="listen-btn">
          🔊 સાંભળો
        </button>
      </div>
      <div class="options-grid" id="listen-options" style="pointer-events:none;opacity:0.5;">
        ${q.options.map((opt, i) => `
          <button class="option-btn" onclick="Games.checkListenId(${i}, '${opt}', '${q.word}', this)">
            ${opt}
          </button>
        `).join('')}
      </div>
      <p style="text-align:center;font-size:0.85rem;color:var(--text-muted);margin-top:12px;" id="listen-hint">
        "સાંભળો" બટન દબાઓ
      </p>
    `;

    // Store current word
    window.Games._liCurrentWord = q.word;
  },

  listenSpeak() {
    const word = window.Games._liCurrentWord;
    const btn = document.getElementById('listen-btn');
    const optionsEl = document.getElementById('listen-options');
    const hint = document.getElementById('listen-hint');

    if (btn) {
      btn.disabled = true;
      btn.textContent = '🔊 સાંભળો...';
    }

    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(word);
      utt.lang = 'gu-IN';
      const onEnd = () => {
        if (optionsEl) {
          optionsEl.style.pointerEvents = 'auto';
          optionsEl.style.opacity = '1';
        }
        if (btn) {
          btn.disabled = false;
          btn.textContent = '🔊 ફરી સાંભળો';
        }
        if (hint) hint.textContent = 'હવે જવાબ આપો';
        window.Games._liState.canAnswer = true;
      };
      utt.onend = onEnd;
      utt.onerror = onEnd;
      window.speechSynthesis.speak(utt);
    } else {
      if (optionsEl) {
        optionsEl.style.pointerEvents = 'auto';
        optionsEl.style.opacity = '1';
      }
      if (btn) {
        btn.disabled = false;
        btn.textContent = '🔊 ફરી સાંભળો';
      }
      window.Games._liState.canAnswer = true;
    }
  },

  checkListenId(idx, selected, answer, btn) {
    const state = window.Games._liState;
    if (!state) return;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if (selected === answer) {
      btn.classList.add('correct');
      state.score += 15;
      App.showToast('🎉 સાચો! +15', 'success');
    } else {
      btn.classList.add('wrong');
      state.lives = Math.max(0, state.lives - 1);
      App.showToast('❌ ખોટો!', 'error');
      buttons.forEach(b => { if (b.textContent.trim() === answer) b.classList.add('correct'); });

      if (state.lives === 0) {
        setTimeout(() => Games.showGameOver('listenId', state.score), 1000);
        return;
      }
    }

    state.qIdx++;
    if (state.qIdx >= state.questions.length) {
      setTimeout(() => Games.showCompletion('listenId', state.score, state.questions.length * 15), 900);
    } else {
      setTimeout(() => Games.renderListenId(), 900);
    }
  },

  // ===== GAME 6: Letter Game =====
  startLetterGame() {
    const game = GAMES_DATA.letterGame;
    const questions = [...game.questions].sort(() => Math.random() - 0.5);
    window.Games._lgState = { questions, qIdx: 0, score: 0, lives: 3 };
    this.renderLetterGame();
  },

  renderLetterGame() {
    const { questions, qIdx, score, lives } = window.Games._lgState;
    const q = questions[qIdx];
    const gameArea = document.getElementById('game-area');

    // Shuffle options
    const shuffledOpts = [...q.options].sort(() => Math.random() - 0.5);

    gameArea.innerHTML = `
      <div class="game-header">
        <div>
          <button class="btn btn-outline btn-sm" onclick="Games.closeGame()">← પાછા</button>
          <h3 class="game-title" style="display:inline;margin-left:12px;">🔤 અક્ષર રમત</h3>
        </div>
        <div class="game-stats">
          <div class="game-lives">${'❤️'.repeat(lives)}${'🖤'.repeat(3 - lives)}</div>
          <div class="game-score">⭐ ${score}</div>
        </div>
      </div>
      <div class="game-progress">
        <div class="game-progress-label"><span>પ્રશ્ન: ${qIdx + 1}/${questions.length}</span></div>
        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${(qIdx/questions.length)*100}%"></div></div>
      </div>
      <div style="text-align:center;margin:24px 0;">
        <div style="font-size:100px;font-weight:900;color:var(--lavender);
                    text-shadow:4px 4px 0 rgba(179,157,219,0.3);
                    animation:float 3s ease-in-out infinite;">
          ${q.letter}
        </div>
        <p style="font-size:1rem;color:var(--text-secondary);margin-top:8px;">${q.hint}</p>
        <p style="font-size:0.9rem;color:var(--text-muted);">આ અક્ષર સાથે ક્યું ચિત્ર શરૂ થાય?</p>
      </div>
      <div class="options-grid">
        ${shuffledOpts.map((opt, i) => `
          <button class="option-btn" onclick="Games.checkLetterGame(${i}, '${opt.emoji}', '${q.answer}', this)"
                  style="flex-direction:column;gap:8px;padding:20px 12px;">
            <span style="font-size:48px;">${opt.emoji}</span>
            <span style="font-size:0.85rem;">${opt.label}</span>
          </button>
        `).join('')}
      </div>
    `;
  },

  checkLetterGame(idx, selected, answer, btn) {
    const state = window.Games._lgState;
    if (!state) return;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if (selected === answer) {
      btn.classList.add('correct');
      state.score += 15;
      App.showToast('🎉 સાચો! +15', 'success');
    } else {
      btn.classList.add('wrong');
      state.lives = Math.max(0, state.lives - 1);
      App.showToast('❌ ખોટો!', 'error');
      buttons.forEach(b => {
        if (b.querySelector('span')?.textContent === answer) b.classList.add('correct');
      });

      if (state.lives === 0) {
        setTimeout(() => Games.showGameOver('letterGame', state.score), 1000);
        return;
      }
    }

    state.qIdx++;
    if (state.qIdx >= state.questions.length) {
      setTimeout(() => Games.showCompletion('letterGame', state.score, state.questions.length * 15), 900);
    } else {
      setTimeout(() => Games.renderLetterGame(), 900);
    }
  },

  // ===== COMPLETION SCREENS =====
  showCompletion(gameKey, score, maxScore) {
    const gameArea = document.getElementById('game-area');
    const stars = score >= maxScore * 0.9 ? 3 : score >= maxScore * 0.6 ? 2 : 1;
    const messages = ['ઘણું સારું!', 'બહુ સારું!', '🌟 ઉત્તમ! 🌟'];
    const msg = messages[stars - 1];

    App.markGameCompleted(gameKey, score);
    App.celebrate();

    gameArea.innerHTML = `
      <div class="game-complete">
        <span class="game-complete-emoji">🏆</span>
        <div class="game-complete-title">${msg}</div>
        <p style="color:var(--text-secondary);font-size:1.1rem;margin:8px 0 20px;">
          સ્કોર: ${score} / ${maxScore}
        </p>
        <div class="game-complete-stars">
          ${[1,2,3].map(i => `<span class="star-icon ${i <= stars ? 'earned' : ''}" 
             style="animation-delay:${i * 0.2}s">⭐</span>`).join('')}
        </div>
        <p style="color:var(--text-secondary);margin:16px 0 24px;">
          ${stars === 3 ? 'પૂર્ણ ગુણ! અદ્ભુત!' : stars === 2 ? 'ઘણો સારો પ્રયાસ!' : 'ફરી ક્રો, વધુ સારું કરો!'}
        </p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-mint btn-lg" onclick="Games.startGame('${gameKey}')">🔄 ફરી રમો</button>
          <button class="btn btn-lavender btn-lg" onclick="Games.closeGame()">📖 બધી રમત</button>
          <a href="progress.html" class="btn btn-sky btn-lg">🌟 પ્રગતિ જુઓ</a>
        </div>
      </div>
    `;

    // Animate stars with delay
    setTimeout(() => {
      const starEls = document.querySelectorAll('.star-icon.earned');
      starEls.forEach((el, i) => {
        setTimeout(() => el.style.animation = 'starPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards', i * 200);
      });
    }, 100);
  },

  showGameOver(gameKey, score) {
    const gameArea = document.getElementById('game-area');

    gameArea.innerHTML = `
      <div class="game-complete">
        <span class="game-complete-emoji">😢</span>
        <div class="game-complete-title">હાય! ❤️ ખૂટી ગઈ</div>
        <p style="color:var(--text-secondary);font-size:1.1rem;margin:8px 0 20px;">
          સ્કોર: ${score}
        </p>
        <p style="color:var(--text-secondary);margin-bottom:24px;">ફરી ક્રો, ભૂલોમાંથી શીખો!</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-pink btn-lg" onclick="Games.startGame('${gameKey}')">🔄 ફરી રમો</button>
          <button class="btn btn-outline btn-lg" onclick="Games.closeGame()">← પાછા</button>
        </div>
      </div>
    `;
  },

  closeGame() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    const gameArea = document.getElementById('game-area');
    if (gameArea) {
      gameArea.style.display = 'none';
      gameArea.innerHTML = '';
    }
    this.currentGame = null;
    this.renderGameCards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('games-grid')) {
    Games.init();
  }
});
