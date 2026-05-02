import React from 'react'

function Banner() {
  return (
    <div
      className='mt-16 h-[50vh] sm:h-[65vh] md:h-[80vh] bg-center bg-cover flex items-end'
      style={{ backgroundImage: 'url(https://assets-in.bmscdn.com/discovery-catalog/events/et00478890-cqrmvfcpky-landscape.jpg)' }}
    >
      <div className='w-full py-3 px-4 bg-blue-950/50 flex text-white items-center justify-center self-end'>
        <span className='text-lg sm:text-2xl md:text-3xl font-bold tracking-widest'>DHURANDHAR</span>
      </div>
    </div>
  )
}

export default Banner