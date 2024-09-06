import React from 'react'

const EnergyCard = (props) => {
  return (
    <>
    <div className={`flex max-w-screen-2xl mx-auto ${props.data.partialp} md:${props.data.initailp} items-stretch bg-white p-6`}>
        {/* <!-- Left Image Section --> */}
        <div className="w-full md:w-1/2">
          <img
            src={props.data.cardImage}
            alt="Workers in factory"
            className="w-full h-full object-cover lg:rounded-none lg:rounded-l-lg rounded-t-lg"
          />
        </div>

        {/* <!-- Right Text Section --> */}
        <div className={`w-full md:w-1/2 bg-[${props.data.bgColor}] text-white p-6 flex flex-col justify-center lg:rounded-none lg:rounded-r-lg rounded-b-lg`}>
          <h2 className={`text-5xl font-bold mb-4 text-[${props.data.titleColor}] text-center`}>oil and natural gas</h2>
          <p className="mb-4 text-lg md:w-[80%] text-center mx-auto">
            Oil and natural gas are essential to providing the energy we use
            every day. Our diverse set of assets helps us find and produce
            energy the world needs.
          </p>
          <p className="text-white p">
            see our portfolio
          </p>
        </div>
      </div>
      </>
  )
}

export default EnergyCard
