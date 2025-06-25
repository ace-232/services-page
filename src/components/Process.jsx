// src/components/Process.jsx
import React from 'react'
import iconRocket  from '../assets/process.png'
import iconPenTool from '../assets/process2.png'
import iconRefresh from '../assets/process3.png'

const steps = [
  {
    icon: iconRocket,
    title: 'Subscribe & Get Started',
    text:  'Submit as many design tasks as you need—no limits.',
  },
  {
    icon: iconPenTool,
    title: 'Polished Designs, On Time',
    text:  'Our designers deliver your request within a few days.',
  },
  {
    icon: iconRefresh,
    title: 'Revisions Made Simple',
    text:  'Unlimited tweaks until it’s exactly right.',
  },
]

export default function Process() {
  return (
    <section className="bg-[#312F2F] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-red-600" />
          <small className="uppercase text-red-600 tracking-widest text-sm">
            How We Work
          </small>
          <div className="h-px w-16 bg-red-600" />
        </div>

        {/* TWO‐COLUMN ROW: Heading | (Paragraph + Button) */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16 gap-8">
          {/* Left column: big heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-md">
            Get a dedicated design team at a fraction of the cost.
          </h2>

          {/* Right column: sub-text + CTA */}
          <div className="flex flex-col items-start text-left space-y-6 max-w-md">
            <p className="text-gray-300 text-base md:text-lg">
              Grow your brand with high-quality design for a flat monthly fee.
              Work with senior designers. Subscribe and make as many requests
              as you need—no limits.
            </p>
            <a
              href="#get-started"
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition"
            >
              See Pricing
            </a>
          </div>
        </div>

        {/* ICON + ARROW FLOW */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          {steps.map((step, i) => (
            <React.Fragment key={step.title}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-full">
                  <img src={step.icon} alt={step.title} className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.text}</p>
              </div>
              {i < steps.length - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
