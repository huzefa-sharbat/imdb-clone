import React from 'react'

function Pagination({ forward, backward, pageNo }) {
  return (
    <div className="py-4 mx-3 sm:mx-5 mb-5 flex items-center justify-center gap-4 sm:gap-6 text-white bg-gray-900/40 rounded-lg">

      <button
        onClick={backward}
        disabled={pageNo === 1}
        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full transition hover:scale-105 duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <i className="fa-solid fa-arrow-left text-sm sm:text-base"></i>
      </button>

      <span className="text-xl sm:text-2xl font-bold min-w-[2rem] text-center">{pageNo}</span>

      <button
        onClick={forward}
        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full transition hover:scale-105 duration-300 active:scale-95"
      >
        <i className="fa-solid fa-arrow-right text-sm sm:text-base"></i>
      </button>

    </div>
  )
}

export default Pagination