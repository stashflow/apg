'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface VideoContextType {
  videoOpen: Record<string, boolean>
  toggleVideo: (courseId: string) => void
}

const VideoContext = createContext<VideoContextType | undefined>(undefined)

export function VideoProvider({ children }: { children: ReactNode }) {
  const [videoOpen, setVideoOpen] = useState<Record<string, boolean>>({
    apes: true,
    apush: true,
    lang: true,
    csp: true,
  })

  useEffect(() => {
    const stored = localStorage.getItem('videoStates')
    if (stored) {
      setVideoOpen(JSON.parse(stored))
    }
  }, [])

  const toggleVideo = (courseId: string) => {
    setVideoOpen((prev) => {
      const updated = { ...prev, [courseId]: !prev[courseId] }
      localStorage.setItem('videoStates', JSON.stringify(updated))
      return updated
    })
  }

  return (
    <VideoContext.Provider value={{ videoOpen, toggleVideo }}>
      {children}
    </VideoContext.Provider>
  )
}

export function useVideoState(courseId: string) {
  const context = useContext(VideoContext)
  if (!context) {
    throw new Error('useVideoState must be used within VideoProvider')
  }
  return {
    isOpen: context.videoOpen[courseId] ?? true,
    toggle: () => context.toggleVideo(courseId),
  }
}
