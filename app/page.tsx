'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const courses = [
  {
    id: 'apes',
    label: 'ap environmental science',
    short: 'apes',
    href: '/apes',
    image: '/images/enviro-tile.jpg',
    accent: '#22c55e',
    accentLight: '#86efac',
    tag: 'the living earth',
    units: 9,
    position: 'top-left',
  },
  {
    id: 'apush',
    label: 'ap united states history',
    short: 'apush',
    href: '/apush',
    image: '/images/apush-tile.jpg',
    accent: '#ef4444',
    accentLight: '#f59e0b',
    tag: 'from colonies to now',
    units: 9,
    position: 'top-right',
  },
  {
    id: 'lang',
    label: 'ap language & composition',
    short: 'ap lang',
    href: '/lang',
    image: '/images/lang-tile.jpg',
    accent: '#a855f7',
    accentLight: '#ec4899',
    tag: 'rhetoric & argument',
    units: 9,
    position: 'bottom-left',
  },
  {
    id: 'csp',
    label: 'ap computer science principles',
    short: 'ap csp',
    href: '/csp',
    image: '/images/csp-tile.jpg',
    accent: '#14b8a6',
    accentLight: '#f97316',
    tag: 'code & data',
    units: 5,
    position: 'bottom-right',
  },
]

function CourseTile({ course, delay }: { course: typeof courses[0]; delay: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLAnchorElement>(null)

  return (
    <Link
      ref={ref}
      href={course.href}
      className="relative flex flex-col justify-end overflow-hidden group cursor-pointer"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <Image
        src={course.image}
        alt={course.label}
        fill
        className="object-cover transition-transform duration-700 ease-out"
        style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        priority
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(160deg, ${course.accent}22 0%, #050d1a99 40%, #050d1aee 100%)`,
          opacity: hovered ? 0.85 : 0.65,
        }}
      />

      {/* Animated accent border on hover */}
      <div
        className="absolute inset-0 border-4 transition-all duration-300"
        style={{
          borderColor: hovered ? course.accent : 'transparent',
        }}
      />

      {/* Corner tag */}
      <div
        className="absolute top-5 left-5 px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300"
        style={{
          backgroundColor: course.accent,
          color: '#050d1a',
          opacity: hovered ? 1 : 0.8,
          transform: hovered ? 'translateY(0)' : 'translateY(-4px)',
        }}
      >
        {course.tag}
      </div>

      {/* Unit count badge */}
      <div
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center font-mono font-black text-sm border-2 transition-all duration-300"
        style={{
          borderColor: course.accentLight,
          color: course.accentLight,
          backgroundColor: '#050d1a88',
          opacity: hovered ? 1 : 0.7,
        }}
      >
        {course.units}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 lg:p-10">
        <p
          className="font-mono text-xs tracking-[0.25em] uppercase mb-2 transition-all duration-300"
          style={{ color: course.accentLight }}
        >
          {course.short}
        </p>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-black lowercase leading-tight tracking-tight transition-all duration-300 text-balance"
          style={{ color: '#f0f6ff' }}
        >
          {course.label}
        </h2>

        {/* Arrow indicator */}
        <div
          className="mt-4 flex items-center gap-2 font-mono text-sm font-bold transition-all duration-400"
          style={{
            color: course.accent,
            transform: hovered ? 'translateX(8px)' : 'translateX(0)',
          }}
        >
          <span>study now</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Animated shimmer on hover */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${course.accent}18 50%, transparent 60%)`,
            backgroundSize: '200% 100%',
            animation: 'shimmer-slide 1.5s ease infinite',
          }}
        />
      )}
    </Link>
  )
}

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* 2x2 grid - no gaps, fills entire screen */}
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
        {/* Top-left: APES */}
        <div
          className="relative"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
          }}
        >
          <CourseTile course={courses[0]} delay={100} />
        </div>

        {/* Top-right: APUSH */}
        <div
          className="relative"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          <CourseTile course={courses[1]} delay={200} />
        </div>

        {/* Bottom-left: AP Lang */}
        <div
          className="relative"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
          }}
        >
          <CourseTile course={courses[2]} delay={300} />
        </div>

        {/* Bottom-right: AP CSP */}
        <div
          className="relative"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
          }}
        >
          <CourseTile course={courses[3]} delay={400} />
        </div>
      </div>

      {/* Center logo overlay */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{ zIndex: 20 }}
      >
        <div
          className="relative flex flex-col items-center justify-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scale(1)' : 'scale(0.85)',
            transition: 'opacity 0.8s ease 0.5s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.5s',
          }}
        >
          {/* Logo container */}
          <div
            className="relative px-8 py-6 md:px-12 md:py-8 flex flex-col items-center"
            style={{
              background: 'rgba(5, 13, 26, 0.88)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(26, 108, 245, 0.4)',
              boxShadow: '0 0 60px rgba(26,108,245,0.25), 0 0 120px rgba(0,212,255,0.1)',
            }}
          >
            {/* Pulse ring */}
            <div
              className="absolute inset-0"
              style={{
                border: '2px solid rgba(0,212,255,0.3)',
                animation: 'pulse-ring 2.5s ease-out infinite',
              }}
            />

            {/* Top line */}
            <div
              className="absolute top-0 left-6 right-6 h-0.5"
              style={{ background: 'linear-gradient(90deg, transparent, #1a6cf5, #00d4ff, #1a6cf5, transparent)' }}
            />
            {/* Bottom line */}
            <div
              className="absolute bottom-0 left-6 right-6 h-0.5"
              style={{ background: 'linear-gradient(90deg, transparent, #1a6cf5, #00d4ff, #1a6cf5, transparent)' }}
            />

            <p
              className="font-mono text-xs tracking-[0.3em] uppercase mb-1"
              style={{ color: '#38a8ff' }}
            >
              your path to a 5
            </p>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-black lowercase tracking-tight text-center leading-none"
              style={{ color: '#f0f6ff' }}
            >
              meade<span style={{ color: '#1a6cf5' }}> study </span>plan<span style={{ color: '#00d4ff' }}>.</span>
            </h1>

            <p
              className="font-mono text-xs mt-2 tracking-widest uppercase"
              style={{ color: '#4a7090' }}
            >
              ap exam prep — built different
            </p>

            {/* Course count dots */}
            <div className="flex gap-3 mt-4">
              {['#22c55e', '#ef4444', '#a855f7', '#14b8a6'].map((c, i) => (
                <div
                  key={i}
                  className="w-2 h-2"
                  style={{
                    backgroundColor: c,
                    animation: `pulse-ring 2s ease-out ${i * 0.3}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Crosshair lines at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 15 }}
      >
        {/* Horizontal line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: '50%',
            height: '1px',
            background: 'rgba(26, 108, 245, 0.25)',
          }}
        />
        {/* Vertical line */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: '50%',
            width: '1px',
            background: 'rgba(26, 108, 245, 0.25)',
          }}
        />
      </div>
    </main>
  )
}
