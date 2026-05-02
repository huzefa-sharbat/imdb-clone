import React, { useState } from 'react'
import logo from '../img/camera-logo.png'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const linkClass = (path) =>
    `font-bold text-lg transition-all duration-200 hover:translate-y-0.5 ${
      location.pathname === path ? 'text-blue-600' : 'text-blue-500'
    }`

  return (
    <nav className="w-full bg-white border-b shadow-sm fixed top-0 left-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full object-cover" src={logo} alt="FilmVault Logo" />
          <span className="text-xl font-extrabold text-gray-800 tracking-tight">IMDB-CLONE</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-8">
          <Link className={linkClass('/')} to="/">Movies</Link>
          <Link className={linkClass('/watchlist')} to="/watchlist">WatchList</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 shadow-md">
          <Link
            className={linkClass('/')}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            🎬 Movies
          </Link>
          <Link
            className={linkClass('/watchlist')}
            to="/watchlist"
            onClick={() => setMenuOpen(false)}
          >
            📋 WatchList
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar