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
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: '100svh' }}
    >
      {/* 2×2 grid — no gap, completely fills viewport */}
      <div
        className="grid w-full h-full"
        style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}
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
              className="relative"
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
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
        <div
          className="absolute top-0 bottom-0"
          style={{ left: '50%', width: '1px', background: 'rgba(26,108,245,0.3)' }}
        />
        <div
          className="absolute left-0 right-0"
          style={{ top: '50%', height: '1px', background: 'rgba(26,108,245,0.3)' }}
        />
      </div>

      {/* Center logo */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{ zIndex: 20 }}
      >
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scale(1)' : 'scale(0.9)',
            transition: 'opacity 0.8s ease 0.45s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.45s',
          }}
        >
          <div
            className="relative flex flex-col items-center px-6 py-4 md:px-10 md:py-5"
            style={{
              background: 'rgba(5,13,26,0.82)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(26,108,245,0.3)',
              boxShadow: '0 0 32px rgba(26,108,245,0.18), 0 0 64px rgba(0,212,255,0.07)',
            }}
          >
            {/* Top shimmer line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, #1a6cf5, #00d4ff, #1a6cf5, transparent)',
                backgroundSize: '200% 100%',
                animation: 'shimmer-slide 3s linear infinite',
              }}
            />
            {/* Bottom shimmer line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, #1a6cf5, #00d4ff, #1a6cf5, transparent)',
                backgroundSize: '200% 100%',
                animation: 'shimmer-slide 3s linear infinite reverse',
              }}
            />

            {/* BSP wordmark — B S P large, surrounding letters small */}
            <h1
              className="flex items-baseline gap-0 leading-none select-none"
              aria-label="best study plan"
            >
              {/* "best" — B big, est small */}
              <span
                className="font-black"
                style={{ color: '#00d4ff', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
              >
                B
              </span>
              <span
                className="font-bold"
                style={{ color: '#b8d0ee', fontSize: 'clamp(0.6rem, 1.1vw, 0.95rem)', letterSpacing: '0.04em', opacity: 0.7, marginRight: '0.18em' }}
              >
                est
              </span>

              {/* "study" — S big, tudy small */}
              <span
                className="font-black"
                style={{ color: '#1a6cf5', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
              >
                S
              </span>
              <span
                className="font-bold"
                style={{ color: '#b8d0ee', fontSize: 'clamp(0.6rem, 1.1vw, 0.95rem)', letterSpacing: '0.04em', opacity: 0.7, marginRight: '0.18em' }}
              >
                tudy
              </span>

              {/* "plan." — P big, lan. small */}
              <span
                className="font-black"
                style={{ color: '#38a8ff', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
              >
                P
              </span>
              <span
                className="font-bold"
                style={{ color: '#b8d0ee', fontSize: 'clamp(0.6rem, 1.1vw, 0.95rem)', letterSpacing: '0.04em', opacity: 0.7 }}
              >
                lan
              </span>
              <span
                className="font-black"
                style={{ color: '#00d4ff', fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', lineHeight: 1, marginLeft: '1px' }}
              >
                .
              </span>
            </h1>

            {/* URL */}
            <p
              className="font-mono mt-1.5 tracking-widest"
              style={{ color: '#3a5a7a', fontSize: 'clamp(0.5rem, 0.85vw, 0.7rem)', letterSpacing: '0.12em' }}
            >
              bsp.ezo.lol
            </p>

            {/* Course color dots */}
            <div className="flex items-center gap-2 mt-2.5">
              {[
                { color: '#22c55e', delay: '0s' },
                { color: '#ef4444', delay: '0.25s' },
                { color: '#a855f7', delay: '0.5s' },
                { color: '#14b8a6', delay: '0.75s' },
              ].map((d, i) => (
                <div key={i} className="relative flex items-center justify-center w-3 h-3">
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: '12px', height: '12px',
                      background: d.color,
                      opacity: 0.35,
                      animation: `pulse-ring 2s ease-out ${d.delay} infinite`,
                    }}
                  />
                  <div className="w-1.5 h-1.5 rounded-full relative" style={{ background: d.color }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
