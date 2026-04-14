'use client'

import { useVideoState } from '@/contexts/video-context'

interface VideoDropdownProps {
  courseId: string
  videoId: string
  title?: string
  accent: string
  accentLight: string
}

export function VideoDropdown({ courseId, videoId, title, accent, accentLight }: VideoDropdownProps) {
  const { isOpen, toggle } = useVideoState(courseId)

  return (
    <div className="mb-6 overflow-hidden">
      {/* Toggle button */}
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-4 py-3 transition-all duration-200"
        style={{
          background: isOpen ? `${accent}15` : `${accent}0a`,
          border: `1px solid ${isOpen ? accent : `${accent}40`}`,
          color: accentLight,
        }}
      >
        <div className="flex items-center gap-3">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6.75 12L9 14.25L15.75 7.5M2 9L6.75 13.75L15.75 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-mono text-sm font-bold uppercase tracking-wider">
            {title || 'Watch Video'}
          </span>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.25s ease',
          }}
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Video embed */}
      {isOpen && (
        <div
          className="w-full overflow-hidden bg-black/40"
          style={{
            aspectRatio: '16/9',
            borderTop: `1px solid ${accent}40`,
            animation: 'fade-in 0.3s ease',
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
            title={title || 'Educational Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 'none' }}
          />
        </div>
      )}
    </div>
  )
}
