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
          background: 'rgba(5,13,26,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(26,108,245,0.2)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-black text-lg lowercase tracking-tight transition-opacity duration-200 hover:opacity-80"
          style={{ color: '#f0f6ff' }}
        >
          meade <span style={{ color: '#1a6cf5' }}>study </span>plan<span style={{ color: '#00d4ff' }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {courses.map((c) => {
            const active = pathname.startsWith(c.href)
            return (
              <Link
                key={c.href}
                href={c.href}
                className="font-mono text-xs tracking-widest uppercase transition-all duration-200 hover:opacity-100"
                style={{
                  color: active ? c.accent : '#b8d0ee',
                  opacity: active ? 1 : 0.7,
                  borderBottom: active ? `2px solid ${c.accent}` : '2px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                {c.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-0.5 w-5 transition-all duration-200"
              style={{ background: '#f0f6ff' }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: 'rgba(5,13,26,0.97)', backdropFilter: 'blur(20px)' }}
          onClick={() => setOpen(false)}
        >
          <Link
            href="/"
            className="font-black text-2xl lowercase"
            style={{ color: '#f0f6ff' }}
          >
            meade study plan<span style={{ color: '#00d4ff' }}>.</span>
          </Link>
          {courses.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="font-mono text-sm tracking-widest uppercase"
              style={{ color: c.accent }}
              onClick={() => setOpen(false)}
            >
              {c.label}
            </Link>
          ))}
        </div>
      )}

      {/* Spacer */}
      <div className="h-14" />
    </>
  )
}
