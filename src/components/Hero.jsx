import React from 'react'
import starBig   from '../assets/Star.png'
import starSmall from '../assets/Star2.png'

export default function Hero() {
  return (
    <section className="relative w-full bg-[rgba(49,47,47,1)] text-white overflow-hidden pt-20 pb-24">

      <div className="absolute inset-x-0 top-24 flex justify-center pointer-events-none">
  <div
    className="w-80 h-80 rounded-full bg-red-600/20 filter blur-[64px]"
  />
</div>

      <img
        src={starBig}
        alt=""
        className="absolute top-12 right-40 w-13 h-13 opacity-50 pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h1 className="font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Bringing Your</span>
          <span className="block">
            Dream Into <span className="text-red-500">Reality</span>
          </span>
        </h1>

        <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg">
          We increase revenue and ensure sustainable long-term growth<br/>
          for your business through powerful IT Solutions
        </p>

        <div className="relative inline-flex items-center mt-10">
          <img
            src={starSmall}
            alt=""
            className="absolute -left-40 w-5 h-5 opacity-50 pointer-events-none"
          />

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-base font-semibold transition">
            Book A Meeting
          </button>

          <img
            src={starSmall}
            alt=""
            className="absolute -right-20 w-8 h-8 opacity-50 pointer-events-none"
          />
        </div>
      </div>
    </section>
  )
}
