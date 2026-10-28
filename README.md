# 🎵 RhymeVerse (રાઇમ વર્સ) &mdash; ગુજરાતી બાળગીતો

> **An interactive, colorful, and engaging Gujarati children's rhyme and educational platform.**  
> Features 11 authentic animated Gujarati rhymes with synchronized audio & video, interactive learning games, vocabulary builder, quizzes, and star-based progress tracking.

---

## 🌟 Features

- **🎬 11 Authentic Gujarati Rhymes**: High-quality audio and video animations for popular Gujarati children's poems (*ચકીબેન ચકીબેન, હાથીભાઈ તો જાડા, ટામેટું રે ટામેટું, આવ રે વરસાદ, એક બિલાડી જાડી, સાઇકલ મારી સરરર, બે સસલાં રમતા'તા, આવો મેઘરાજા, ગાડી ગાડી રમીએ, બે બાવા જાતા'તા, વાર્તા રે વાર્તા*).
- **📝 Real-time Karaoke / Sing-Along**: Highlights lyric lines automatically as the audio/video plays.
- **📚 Interactive Vocabulary**: Gujarati words with English meanings, child-friendly explanations, emojis, and pronunciation.
- **❓ Interactive Rhyme Quizzes**: 3 multiple-choice questions per rhyme with instant score, star rewards, and feedback.
- **🎮 6 Fun Educational Games**:
  - **જોડકણું જોડો (Rhyme Match)**: Match lines to complete poems.
  - **ખાલી જગ્યા પૂરો (Fill in the Blank)**: Test memory and words.
  - **ચિત્ર ઓળખો (Picture ID)**: Connect characters and objects to poems.
  - **પંક્તિ ક્રમ ગોઠવો (Line Arrangement)**: Arrange scrambled lines in correct order.
  - **સાંભળીને ઓળખો (Audio Challenge)**: Identify the poem by listening.
  - **અક્ષર રમત (Word Puzzle)**: Complete missing letters in Gujarati words.
- **🌟 Star & Badge Progress System**: Tracks learned rhymes, earned stars, and unlocks colorful accomplishment badges.
- **🌙 Child-Friendly Aesthetics**: Warm pastel color scheme, smooth micro-animations, confetti celebrations, and dark mode support.

---

## 📂 Project Architecture

The project follows a clean separation of concerns:

```
RHYME VERSE/
│
├── frontend/                     # Client-side web application
│   ├── css/                      # Modular styling & design system
│   │   ├── main.css              # Color tokens, typography, layout foundation
│   │   ├── components.css        # Cards, video theater player, modals, badges
│   │   ├── animations.css        # Floats, confetti, heartbeats, transitions
│   │   └── responsive.css        # Mobile, tablet, and desktop responsive layouts
│   │
│   ├── js/                       # Client-side JavaScript
│   │   ├── data.js               # 11 rhyme definitions, quizzes, vocab, games data
│   │   ├── app.js                # State management, local storage, streak, sound
│   │   ├── components.js         # Card builder, popup modal video player, nav
│   │   ├── games.js              # Interactive game engine for all 6 games
│   │   └── progress.js           # Progress analytics, badges, stats calculations
│   │
│   ├── RHYMES/                   # 11 Gujarati audio/video files (MP4 format)
│   │   ├── chaki ben chaki ben.mp4
│   │   ├── Hathi bhai to jada.mp4
│   │   ├── Tametu-Re-Tametu.mp4
│   │   ├── aav re varsad.mp4
│   │   ├── ek biladi jadi.mp4
│   │   ├── cycle mari sarara.mp4
│   │   ├── Be Sasla Ramta Ta.mp4
│   │   ├── aavo megh raja.mp4
│   │   ├── gadi gadi ramiye.mp4
│   │   ├── be bava jata ta.mp4
│   │   └── varta re varta.mp4
│   │
│   ├── index.html                # Landing page & featured rhymes
│   ├── rhymes.html               # Full rhyme catalog with filters & search
│   ├── rhyme-detail.html         # Theater player, sing-along, vocab & quiz
│   ├── games.html                # 6 educational games hub
│   └── progress.html             # Child's learning dashboard & badges
│
├── backend/                      # Lightweight media streaming server
│   ├── server.py                 # Multi-threaded server supporting RFC 7233 range requests
│   ├── requirements.txt          # Python requirements (standard library only)
│   └── README.md                 # Backend architecture & streaming documentation
│
├── start.py                      # Root launcher script (single-command run)
├── .gitignore                    # Git ignore configuration
└── README.md                     # Project documentation
```

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- **Python 3.8+** (Uses standard library &mdash; no `pip install` required!)
- Any modern web browser (Chrome, Edge, Firefox, Safari)

### Run the App
From the root directory of the project, execute:

```bash
python start.py
```

Or run directly from the `backend/` folder:

```bash
python backend/server.py
```

Then open your browser at:
👉 **[http://localhost:8000/](http://localhost:8000/)**

> **Note:** The server includes full **HTTP 206 Partial Content (Byte-Range)** streaming support, ensuring seamless seeking, metadata loading, and smooth playback across all video and audio rhymes.

---

## 📦 Pushing to GitHub

To initialize Git and upload this project to your GitHub repository:

```bash
# 1. Initialize a new Git repository
git init

# 2. Stage all project files (frontend, backend, documentation)
git add .

# 3. Commit your files
git commit -m "feat: complete RhymeVerse Gujarati educational platform with frontend and backend architecture"

# 4. Set the default branch to main
git branch -M main

# 5. Connect to your GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🎨 Tech Stack

- **Frontend**: Vanilla HTML5, CSS3 (Modern Glassmorphism & Micro-animations), Vanilla JavaScript (ES6+).
- **Backend**: Python 3 `http.server` with `ThreadingHTTPServer` and custom RFC 7233 Byte-Range handler.
- **Audio & Video**: HTML5 `<video>` & `<audio>` with dual-channel MP4 media.
- **Typography**: Google Fonts (*Noto Sans Gujarati* & *Noto Serif Gujarati*).

---

## 📄 License

This project is created for educational and cultural purposes to help children learn Gujarati language and culture through songs and interactive play.
