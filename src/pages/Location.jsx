import React from 'react'
import Nav from '../components/Nav/Nav'

const Location = () => {
  return (
    <div className='font-suse'>
      <div className='relative'>
        <Nav bgImage="l-header-image" />
        <div className="w-full bg-white min-h-[55vh] absolute bottom-0 pb-16 flex flex-col justify-center items-center">
          <h1 className="lg:text-[11rem] text-8xl py-6 font-bold bg-clip-text text-transparent bg-cover bg-center bg-l-header-image text-center">
            Our Locations
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Location
