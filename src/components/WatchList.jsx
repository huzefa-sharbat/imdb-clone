import React, { useState } from 'react'

function WatchList({ watchList, genreMap, deleteMovieFromWatchList }) {

  const [search, setSearch] = useState('')
  const [currGenre, setCurrGenre] = useState('All Genres')

  let temp = watchList.map((i) => i.genre_ids.map((id) => genreMap[id]))
  temp = temp.flat()
  const genres = ['All Genres', ...new Set(temp)]

  const filteredMovies = watchList.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase())
    const matchesGenre =
      currGenre === 'All Genres' ||
      movie.genre_ids.map((id) => genreMap[id]).includes(currGenre)
    return matchesSearch && matchesGenre
  })

  if (watchList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center gap-4 px-4">
        <div className="text-6xl">🎬</div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700">Your WatchList is empty</h2>
        <p className="text-gray-400 text-sm sm:text-base">Go add some movies you want to watch!</p>
      </div>
    )
  }

  return (
    <>
      {/* Genre Filter Tabs */}
      <div className="flex justify-center pt-20 px-3 sm:px-6 gap-2 mb-4 flex-wrap">
        {genres.map((genre, index) => (
          <button
            key={index}
            onClick={() => setCurrGenre(genre)}
            className={`px-4 sm:px-7 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
              currGenre === genre ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6 px-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Movies"
          className="w-full max-w-sm px-4 py-2 rounded-lg bg-gray-100 text-sm text-gray-600 outline-none placeholder-gray-400"
        />
      </div>

      {/* ─── DESKTOP TABLE ─── */}
      <div className="hidden md:block border border-gray-200 mx-5 rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-5 py-4 font-semibold text-gray-600 w-1/2">Name</th>
              <th className="text-left px-5 py-4 font-semibold text-gray-600">Ratings</th>
              <th className="text-left px-5 py-4 font-semibold text-gray-600">Popularity</th>
              <th className="text-left px-5 py-4 font-semibold text-gray-600">Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-10 text-gray-400">No movies match your search or filter.</td>
              </tr>
            ) : (
              filteredMovies.map((movieObj) => (
                <tr key={movieObj.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movieObj.poster_path}`}
                        alt={movieObj.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <span className="text-gray-700 font-medium">{movieObj.title}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-500">{movieObj.vote_average.toFixed(1)}</td>
                  <td className="px-5 py-4 text-gray-500">{Math.round(movieObj.popularity)}</td>
                  <td className="px-5 py-4 text-gray-500 text-sm">{movieObj.genre_ids.map((id) => genreMap[id]).join(', ')}</td>
                  <td className="px-5 py-4">
                    <button onClick={() => deleteMovieFromWatchList(movieObj)} className="text-red-400 font-medium text-sm hover:text-red-600 transition-colors">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ─── MOBILE CARD VIEW ─── */}
      <div className="md:hidden px-4 flex flex-col gap-3 mb-6">
        {filteredMovies.length === 0 ? (
          <div className="text-center py-10 text-gray-400">No movies match your search or filter.</div>
        ) : (
          filteredMovies.map((movieObj) => (
            <div key={movieObj.id} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <img
                src={`https://image.tmdb.org/t/p/w200/${movieObj.poster_path}`}
                alt={movieObj.title}
                className="w-16 h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <p className="font-semibold text-gray-800 text-sm leading-tight mb-1 truncate">{movieObj.title}</p>
                  <p className="text-xs text-gray-400 mb-1">{movieObj.genre_ids.map((id) => genreMap[id]).join(', ')}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-xs text-gray-500">
                    <span>⭐ {movieObj.vote_average.toFixed(1)}</span>
                    <span>🔥 {Math.round(movieObj.popularity)}</span>
                  </div>
                  <button
                    onClick={() => deleteMovieFromWatchList(movieObj)}
                    className="text-red-400 font-medium text-xs hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default WatchList