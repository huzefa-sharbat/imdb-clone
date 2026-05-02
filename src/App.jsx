import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'

function App() {

  const [watchList, setWatchList] = useState([])
  const [genreMap, setGenreMap] = useState({})

  // Load from localStorage on mount
  useEffect(() => {
    const savedList = localStorage.getItem('moviesList')
    if (savedList) {
      setWatchList(JSON.parse(savedList))
    }
  }, [])

  // Fetch genre map
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en`)
      .then((res) => {
        const map = {}
        res.data.genres.forEach((g) => { map[g.id] = g.name })
        setGenreMap(map)
      })
  }, [])

  function handleWatchList(movieObj) {
    const doesContain = watchList.some((movie) => movie.id === movieObj.id)
    if (doesContain) {
      const filtered = watchList.filter((movie) => movie.id !== movieObj.id)
      setWatchList(filtered)
      localStorage.setItem('moviesList', JSON.stringify(filtered))
    } else {
      const newList = [...watchList, movieObj]
      setWatchList(newList)
      localStorage.setItem('moviesList', JSON.stringify(newList))
    }
  }

  function deleteMovieFromWatchList(movieObj) {
    const filtered = watchList.filter((movie) => movie.id !== movieObj.id)
    setWatchList(filtered)
    localStorage.setItem('moviesList', JSON.stringify(filtered))
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner /><Movies handleWatchList={handleWatchList} watchList={watchList} /></>} />
          {/* FIX: Route path must be lowercase to match Navbar link */}
          <Route path="/watchlist" element={<WatchList watchList={watchList} genreMap={genreMap} deleteMovieFromWatchList={deleteMovieFromWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
