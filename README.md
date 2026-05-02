# 🎬 IMDB Clone

**A responsive React application for discovering trending movies and managing a personal watchlist — powered by the TMDB API.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css)](...)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat&logo=react-router)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=flat&logo=axios)](https://axios-http.com/)
[![TMDB](https://img.shields.io/badge/TMDB_API-v3-01B4E4?style=flat)](https://www.themoviedb.org/)

---

## 📌 Live Demo

> 🔗 [View Live](#)(https://imdb-clone-tau.vercel.app/)

---

## 📸 Screenshots


| Home Page | WatchList |
|-----------|-----------|
| ![Movies](src/img/movies.jpeg) | ![WatchList](src/img/watchlist.jpeg) |

---

## ✨ Features

- 🔥 **Trending Movies Feed** — Fetches real-time popular movies from the TMDB API
- 📄 **Pagination** — Browse through multiple pages of trending content
- ➕ **Add/Remove WatchList** — Toggle movies in/out of your watchlist with a single click
- 💾 **Persistent Storage** — Watchlist is saved to `localStorage` so it survives page refresh
- 🔍 **Live Search** — Filter watchlist movies by title in real time
- 🎭 **Genre Filtering** — Filter watchlist by dynamically generated genre tabs
- 🗑️ **Delete from WatchList** — Remove individual movies from your watchlist
- 🖼️ **TMDB Image Integration** — Displays official movie posters from TMDB CDN
- 📱 **Responsive Design** — Adapts from mobile to desktop using Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI component library with hooks (`useState`, `useEffect`) |
| **Vite** | Fast development build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework for responsive styling |
| **React Router v6** | Client-side routing (`BrowserRouter`, `Routes`, `Route`, `Link`) |
| **Axios** | HTTP client for TMDB REST API calls |
| **TMDB API v3** | Movie data, genre mapping, and poster images |
| **localStorage** | Browser-side persistence for watchlist state |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/huzefa-sharbat/imdb-clone.git
cd imdb-clone

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Open .env and replace with your actual TMDB API key
# VITE_TMDB_API_KEY=your_api_key_here

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory (copy from `.env.example`):

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

> ⚠️ **Never commit your `.env` file.** It is already included in `.gitignore`.  
> Get your free API key at [themoviedb.org](https://www.themoviedb.org/settings/api).

---

## 📁 Project Structure

```
imdb-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed navigation with React Router links
│   │   ├── Banner.jsx        # Hero banner component
│   │   ├── Movies.jsx        # Movie grid with pagination and loading state
│   │   ├── MovieCard.jsx     # Individual movie card with watchlist toggle
│   │   ├── WatchList.jsx     # Full watchlist with search and genre filter
│   │   └── Pagination.jsx    # Prev/Next page controls
│   ├── img/
│   │   └── camera-logo.png
│   ├── App.jsx               # Root component — state, routing, handlers
│   ├── App.css
│   └── main.jsx
├── .env.example              # Template for environment variables
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💡 Key Implementation Highlights

- **API key security**: API key stored in `.env` and accessed via `import.meta.env.VITE_TMDB_API_KEY` — never hardcoded
- **State management**: Lifted state in `App.jsx` shared down via props to `Movies` and `WatchList`
- **Genre mapping**: Fetched once on mount and passed as `genreMap` object (`{id: name}`) to avoid redundant API calls
- **Derived state pattern**: WatchList genre tabs dynamically generated from current watchlist movies using `Set` for deduplication
- **localStorage sync**: Every add/remove/delete operation updates both React state and `localStorage` atomically

---

## 🧑‍💻 Author

**Huzefa Sharbatwala**  
BSc Computer Science — SIES College, Mumbai  

[![GitHub](https://img.shields.io/badge/GitHub-huzefa--sharbat-181717?style=flat&logo=github)](https://github.com/huzefa-sharbat)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/huzefa-sharbatwala)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

> *This project was built as part of my MERN stack learning journey.*
