import React from 'react';
import trustBanner from '../assets/trustbrand.png';
import b1 from '../assets/Logomark1.png';
import b2 from '../assets/Logomark2.png';
import b3 from '../assets/Logomark3.png';
import b4 from '../assets/Logomark4.png';
import b5 from '../assets/Logomark5.png';

export default function TrustedBrands() {
  const brands = [
    { src: b1, label: 'Layers' },
    { src: b2, label: 'Quotient' },
    { src: b3, label: 'Circoolees' },
    { src: b4, label: 'Hourglass' },
    { src: b5, label: 'Command + R' },
  ];

  return (
    <section className="bg-[#312F2F] py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* banner image with red bars + text baked in */}
        <img
          src={trustBanner}
          alt="Trusted by Amazing Brands"
          className="mx-auto mb-8 max-w-lg w-full"
        />

        {/* black pill background */}
        <div className="inline-flex flex-nowrap items-center bg-[#1a1a1a] rounded-lg px-6 py-4 overflow-x-auto">
          {brands.map((b, i) => (
            <div
              key={i}
              className="flex flex-shrink-0 items-center gap-3 text-white"
            >
              <img
                src={b.src}
                alt={b.label}
                className="w-10 h-10 object-contain"
              />
              <span className="font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
