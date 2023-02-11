import React from 'react'
import { SumUp } from './utils/SumUpDB'

function Total() {
  return (
    <div className="md:flex items-center justify-center w-full lg:space-y-0 space-y-4  lg:space-x-14  px-12">
    {SumUp.map((item) => (
      <div key={item.id}>
        <div className="space-y-6 w-full items-center justify-center flex flex-col ">
          <span className="py-4 px-4 shadow-lg shadow-gray-300 items-center justify-center flex">
            {item.icon}
          </span>
          <span className="items-start justify-center flex flex-col">
            <h2 className="font-bold text-xl"> {item.amount}</h2>
            <h2>{item.title} </h2>
          </span>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Total;
