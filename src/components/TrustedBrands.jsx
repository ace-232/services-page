// src/components/TrustedBrands.jsx
import React from 'react'
import trustBanner from '../assets/trustbrand.png'
import b1 from '../assets/Logomark1.png'
import b2 from '../assets/Logomark2.png'
import b3 from '../assets/Logomark3.png'
import b4 from '../assets/Logomark4.png'
import b5 from '../assets/Logomark5.png'

export default function TrustedBrands() {
  const brands = [
    { src: b1, label: 'Layers' },
    { src: b2, label: 'Quotient' },
    { src: b3, label: 'Circoolees' },
    { src: b4, label: 'Hourglass' },
    { src: b5, label: 'Command + R' },
  ];

  return (
    <section className="bg-[#312F2F] py-8 md:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">

        {/* baked-in banner */}
        <img
          src={trustBanner}
          alt="Trusted by Amazing Brands"
          className="mx-auto mb-6 md:mb-8 w-full max-w-sm md:max-w-md"
        />

        {/* pill container */}
        <div
          className="
            flex gap-4
            overflow-x-auto md:overflow-x-visible
            px-4 py-2 md:px-6 md:py-4
            bg-[#1a1a1a] rounded-lg
            scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900
            justify-start md:justify-center
          "
        >
          {brands.map((b, i) => (
            <div
              key={i}
              className="
                flex-shrink-0 flex items-center gap-2
                md:gap-4 text-white
              "
            >
              <img
                src={b.src}
                alt={b.label}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="text-sm md:text-base font-medium">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
