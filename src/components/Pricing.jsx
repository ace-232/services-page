// src/components/Pricing.jsx
import React from 'react'
import plusIcon from '../assets/Star-solid.png'

const plans = [
  {
    title: 'Standard',
    badge: 'Most Popular',
    badgeColor: 'bg-red-600 text-white',
    description: 'One request at a time. For companies who need on-going design support.',
    price: '$2,995',
    period: '/m',
    subtitle: 'Pause or cancel anytime',
    features: [
      '1× active task at a time',
      'Unlimited revisions',
      'Dedicated project manager',
      'Daily comms through Slack',
      'Work with senior designers',
      '2–3 days turn around time',
      'Top tier design',
    ],
  },
  {
    title: 'Growth',
    badge: 'Best value',
    badgeColor: 'bg-white text-gray-900',
    description: 'Double the requests. For companies with increasing design needs. Limited spots.',
    price: '$4,795',
    period: '/m',
    subtitle: 'Pause or cancel anytime',
    features: [
      '2× active task at a time',
      'Unlimited revisions',
      'Dedicated project manager',
      'Daily comms through Slack',
      'Work with senior designers',
      '2–3 days turn around time',
      'Top tier design',
    ],
  },
  {
    title: 'Basic – Weekly',
    badge: null,
    badgeColor: '',
    description: 'Perfect if you want to try the subscription out or only have a few one-off tasks.',
    price: '$890',
    period: '/m',
    subtitle: 'Paid per weekly',
    features: [
      'Fixed scope of work',
      '2 rounds of revisions',
      'Dedicated project manager',
      'Daily comms through Slack',
      '1× designer',
      '2–5 days turn around time',
      'Top tier design',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="bg-[#312F2F] text-white py-16">
      {/* Header */}
      <div className="container mx-auto px-4 text-center space-y-10">
        <small className="text-red-600 uppercase tracking-widest text-sm">
          Clear &amp; Simple Pricing
        </small>
        <h2 className="text-4xl md:text-5xl font-bold">
          Simple pricing to level up your brand.
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee.
          Cancel anytime.
        </p>
      </div>

      <div className="mt-30 container mx-auto px-4 
                      grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="flex flex-col bg-[#1F1F1F] border border-red-600 
                       rounded-lg p-5 space-y-4"
          >
            {/* Title + badge */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              {plan.badge && (
                <span
                  className={`${plan.badgeColor} text-xs font-semibold 
                              px-4 py-1 rounded-sm`}
                >
                  {plan.badge}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm">{plan.description}</p>
            <hr className="border-red-600" />

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-red-600">
                {plan.price}
              </span>
              <span className="text-lg text-gray-300">{plan.period}</span>
            </div>
            <p className="text-gray-400 text-sm">{plan.subtitle}</p>
            <hr className="border-red-600" />

            {/* Features */}
            <ul className="flex-1 space-y-2 mt-2">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-2 text-gray-300">
                  <img
                    src={plusIcon}
                    alt=""
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-sm">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <button className="mt-4 py-2 border border-red-600 rounded-md
                               hover:bg-red-600 transition">
              Book A Call
            </button>
            <button className="mt-2 py-2 bg-red-600 rounded-md
                               hover:bg-red-700 transition">
              Click to buy
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
