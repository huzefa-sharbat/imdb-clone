import React from 'react'

function MovieCard({ poster_path, title, movieObj, handleWatchList, watchList }) {

  const doesContain = watchList.some((movie) => movie.id === movieObj.id)

  return (
    <div
      className="relative h-[35vh] sm:h-[38vh] md:h-[40vh] rounded-xl m-2 sm:m-3 md:m-4 bg-cover bg-center hover:scale-105 duration-300 active:scale-95 hover:cursor-pointer flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {/* Watchlist toggle — top right */}
      <div
        onClick={() => handleWatchList(movieObj)}
        className="absolute top-2 right-2 text-base sm:text-xl bg-black/80 rounded-lg w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center"
      >
        {doesContain ? '❌' : '✅'}
      </div>

      {/* Title */}
      <div className="w-full py-1 px-2 text-xs sm:text-sm font-semibold bg-gray-950/70 rounded-b-xl flex text-white items-center justify-center text-center">
        {title}
      </div>
    </div>
  )
}

export default MovieCard