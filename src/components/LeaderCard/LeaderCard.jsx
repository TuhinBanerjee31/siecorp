/* eslint-disable react/prop-types */
import React from 'react'

const LeaderCard = (props) => {
  return (
    <div className="lg:max-w-screen-2xl flex lg:flex-row flex-col lg:items-center mx-auto gap-10 px-3 my-7 shadow-custom">
        <div className="md:w-[20%] w-[70%] h-full">
          <img src={props.data.dp} alt="Darren Lee Kai" className="w-full h-full" />
        </div>

        <div className="lg:w-[70%] w-full p-3">
          <h2 className="text-2xl font-semibold">{props.data.name}</h2>
          <h4 className="text-xl font-medium pb-5">{props.data.position}</h4>
          <p className="md:text-base text-sm tracking-wide">{props.data.desc}</p>
        </div>
      </div>
  )
}

export default LeaderCard