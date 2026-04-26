'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const courses = [
  {
    id: 'apes',
    label: 'ap environmental science',
    short: 'apes',
    href: '/apes',
    image: '/images/enviro-tile.jpg',
    accent: '#22c55e',
    accentLight: '#86efac',
    tag: 'unit 1–9',
    units: 9,
    desc: 'ecosystems, climate, pollution & solutions',
  },
  {
    id: 'apush',
    label: 'ap united states history',
    short: 'apush',
    href: '/apush',
    image: '/images/apush-tile.jpg',
    accent: '#ef4444',
    accentLight: '#f59e0b',
    tag: 'period 1–9',
    units: 9,
    desc: '1491 to the present — every turning point',
  },
  {
    id: 'lang',
    label: 'ap language & composition',
    short: 'ap lang',
    href: '/lang',
    image: '/images/lang-tile.jpg',
    accent: '#a855f7',
    accentLight: '#ec4899',
    tag: 'unit 1–8',
    units: 8,
    desc: 'rhetoric, argument & all three essays',
  },
  {
    id: 'csp',
    label: 'ap computer science principles',
    short: 'ap csp',
    href: '/csp',
    image: '/images/csp-tile.jpg',
    accent: '#14b8a6',
    accentLight: '#f97316',
    tag: 'big ideas 1–5',
    units: 5,
    desc: 'algorithms, data, internet & impact',
  },
]

function CourseTile({ course }: { course: typeof courses[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={course.href}
      className="relative flex flex-col justify-end overflow-hidden cursor-pointer w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image — fills 100% of the tile */}
      <Image
        src={course.image}
        alt={course.label}
        fill
        sizes="50vw"
        className="object-cover object-center"
        style={{
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        priority
      />

      {/* Base gradient — always present, bottom-weighted so images show at top */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg,
            rgba(5,13,26,0.05) 0%,
            rgba(5,13,26,0.15) 35%,
            rgba(5,13,26,0.72) 65%,
            rgba(5,13,26,0.97) 100%)`,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Accent color wash on hover */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `${course.accent}`,
          opacity: hovered ? 0.08 : 0,
          transition: 'opacity 0.4s ease',
          mixBlendMode: 'screen',
        }}
      />

      {/* Accent border on hover — inset so image doesn't shrink */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: hovered ? `inset 0 0 0 3px ${course.accent}` : 'inset 0 0 0 0px transparent',
          transition: 'box-shadow 0.3s ease',
        }}
      />

      {/* Top-left badge */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6">
        <div
          className="px-2.5 py-1 font-mono text-xs font-bold tracking-widest uppercase"
          style={{
            backgroundColor: course.accent,
            color: '#050d1a',
          }}
        >
          {course.tag}
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 p-5 md:p-8 lg:p-10">
        <p
          className="font-mono text-xs tracking-[0.22em] uppercase mb-2"
          style={{ color: course.accentLight }}
        >
          {course.short}
        </p>
        <h2
          className="text-2xl md:text-3xl xl:text-4xl font-black lowercase leading-tight tracking-tight text-balance"
          style={{ color: '#f0f6ff' }}
        >
          {course.label}
        </h2>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: '#b8d0ee', opacity: 0.85 }}
        >
          {course.desc}
        </p>

        {/* CTA row */}
        <div
          className="mt-4 flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase"
          style={{
            color: course.accent,
            transform: hovered ? 'translateX(6px)' : 'translateX(0)',
            transition: 'transform 0.3s ease',
          }}
        >
          open course
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <main
      className="relative w-full min-h-screen overflow-x-hidden"
      style={{ background: '#050d1a' }}
    >
      {/* Responsive course grid with fixed media ratio cards */}
      <div
        className="grid w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-10 gap-3 sm:gap-4 md:gap-5 lg:grid-cols-2"
      >
        {courses.map((course, i) => {
          const dirs = [
            { x: '-20px', y: '-20px' },
            { x: '20px',  y: '-20px' },
            { x: '-20px', y: '20px'  },
            { x: '20px',  y: '20px'  },
          ]
          return (
            <div
              key={course.id}
              className="relative aspect-[16/9]"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded
                  ? 'translate(0,0)'
                  : `translate(${dirs[i].x}, ${dirs[i].y})`,
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
              }}
            >
              <CourseTile course={course} />
            </div>
          )
        })}
      </div>

      {/* Dividing lines (crosshair) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ zIndex: 15 }}>
        <div className="absolute top-0 bottom-0" style={{ left: '50%', width: '1px', background: 'rgba(26,108,245,0.2)' }} />
      </div>

      {/* Center logo - hidden */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{ zIndex: 20, display: 'none' }}
      />
    </main>
  )
}
