import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({ handleWatchList, watchList }) {

  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${pageNo}`)
      .then((res) => {
        setMovies(res.data.results)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [pageNo])

  function forward() {
    setPageNo(prev => prev + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  function backward() {
    if (pageNo > 1) {
      setPageNo(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div>
      <div className='text-xl sm:text-2xl font-bold pt-8 pb-2 text-center'>
        Trending Movies
      </div>

      {loading ? (
        <div className='flex justify-center items-center h-64 text-gray-400 text-lg'>
          Loading movies...
        </div>
      ) : (
        // FIX: xl:grid-cols-8 made posters too tiny — capped at grid-cols-5
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2 sm:p-4'>
          {movies.map((movieObj) => (
            <MovieCard
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              title={movieObj.title}
              movieObj={movieObj}
              handleWatchList={handleWatchList}
              watchList={watchList}
            />
          ))}
        </div>
      )}

      <Pagination forward={forward} backward={backward} pageNo={pageNo} />
    </div>
  )
}

export default Movies