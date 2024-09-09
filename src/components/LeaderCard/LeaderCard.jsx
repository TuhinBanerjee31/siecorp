/* eslint-disable react/prop-types */
import React from 'react'

const LeaderCard = (props) => {
  return (
    <div className={`flex flex-col max-w-screen-xl bg-[${props.data.bgColor}] rounded-lg mx-auto gap-5 my-10`}>
        {/* TOP CONTENT */}
        <div className="flex md:flex-row flex-col gap-5 pt-4 pl-4">
          <img src={props.data.dp} alt="..." className="h-60 w-60 rounded-lg" />

          <div className="md:self-end">
            <h2 className={`text-5xl font-semibold text-[${props.data.nColor}]`}>{props.data.name}</h2>
            <h3 className="text-3xl text-white py-2">{props.data.position}</h3>
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div>
          <h5 className="text-white p-4 text-xl tracking-wide">{props.data.desc}</h5>
        </div>
      </div>
  )
}

export default LeaderCard