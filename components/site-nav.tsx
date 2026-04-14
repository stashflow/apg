'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const courses = [
  { label: 'apes', href: '/apes', accent: '#22c55e' },
  { label: 'apush', href: '/apush', accent: '#ef4444' },
  { label: 'ap lang', href: '/lang', accent: '#a855f7' },
  { label: 'ap csp', href: '/csp', accent: '#14b8a6' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-14"
        style={{
          background: 'rgba(5,13,26,0.94)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(26,108,245,0.18)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-black text-base md:text-lg lowercase tracking-tight transition-opacity duration-200 hover:opacity-80 flex items-center gap-1"
          style={{ color: '#f0f6ff', letterSpacing: '-0.02em' }}
        >
          ap grounds<span style={{ color: '#00d4ff' }}>.</span>
          <span style={{ color: '#7a9ab0', fontSize: '0.875rem', fontWeight: 600, letterSpacing: 'normal' }}>ezo.lol</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {courses.map((c) => {
            const active = pathname.startsWith(c.href)
            return (
              <Link
                key={c.href}
                href={c.href}
                className="relative px-3 py-1.5 font-mono text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  color: active ? c.accent : '#7a9ab0',
                }}
                onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = '#f0f6ff' }}
                onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = '#7a9ab0' }}
              >
                {active && (
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5"
                    style={{ background: c.accent }}
                  />
                )}
                {c.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-5 transition-all duration-300"
            style={{
              background: '#f0f6ff',
              transform: open ? 'rotate(45deg) translate(3px, 4px)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-5 transition-all duration-300"
            style={{ background: '#f0f6ff', opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-5 transition-all duration-300"
            style={{
              background: '#f0f6ff',
              transform: open ? 'rotate(-45deg) translate(3px, -4px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 md:hidden"
        style={{
          background: 'rgba(5,13,26,0.98)',
          backdropFilter: 'blur(24px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      >
        <Link
          href="/"
          className="font-black text-3xl lowercase tracking-tight mb-4 flex items-center gap-2"
          style={{ color: '#f0f6ff', letterSpacing: '-0.02em' }}
          onClick={() => setOpen(false)}
        >
          ap grounds<span style={{ color: '#00d4ff' }}>.</span>
          <span style={{ color: '#7a9ab0', fontSize: '1.5rem', fontWeight: 600, letterSpacing: 'normal' }}>ezo.lol</span>
        </Link>
        {courses.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="font-mono text-sm tracking-widest uppercase px-6 py-3 w-full text-center"
            style={{
              color: c.accent,
              border: `1px solid ${c.accent}33`,
            }}
            onClick={() => setOpen(false)}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-14" />
    </>
  )
}
