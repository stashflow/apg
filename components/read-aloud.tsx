'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type ReadAloudControls = {
  seekToWord: (word: string) => void
  seekToIndex: (wordIndex: number) => void
}

type ReadAloudProps = {
  title?: string
  text: string
  accent?: string
  accentLight?: string
  onWordChange?: (word: string, wordIndex: number) => void
  onRegisterControls?: (controls: ReadAloudControls) => void
  topOffsetClassName?: string
  panelTopOffsetClassName?: string
  inline?: boolean
  className?: string
  autoPlayOnTextChange?: boolean
  onPlaybackEnd?: () => void
}

type WordMeta = {
  word: string
  start: number
  end: number
}

function parseWords(text: string): WordMeta[] {
  const words: WordMeta[] = []
  const regex = /\S+/g
  let match: RegExpExecArray | null
  while ((match = regex.exec(text)) !== null) {
    words.push({ word: match[0], start: match.index, end: match.index + match[0].length })
  }
  return words
}

function closestWordIndex(words: WordMeta[], charIndex: number): number {
  if (words.length === 0) return 0
  let lo = 0
  let hi = words.length - 1
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (words[mid].start <= charIndex && words[mid].end >= charIndex) return mid
    if (words[mid].start < charIndex) lo = mid + 1
    else hi = mid - 1
  }
  return Math.max(0, Math.min(words.length - 1, lo))
}

function normalizeWord(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '')
}

export function ReadAloud({
  title = 'have the teacher read it',
  text,
  accent = '#4f46e5',
  accentLight = '#93c5fd',
  onWordChange,
  onRegisterControls,
  topOffsetClassName = 'top-20',
  panelTopOffsetClassName = 'top-33',
  inline = false,
  className = '',
  autoPlayOnTextChange = false,
  onPlaybackEnd,
}: ReadAloudProps) {
  const [open, setOpen] = useState(false)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceName, setVoiceName] = useState('')
  const [rate, setRate] = useState(1)
  const [pitch, setPitch] = useState(1)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentChar, setCurrentChar] = useState(0)

  const offsetRef = useRef(0)
  const restartPausedRef = useRef(false)

  const cleanText = useMemo(() => {
    return text
      .replace(/\r\n/g, '\n')
      .replace(/\n{2,}/g, '. ')
      .replace(/\n/g, '. ')
      .replace(/\s+/g, ' ')
      .replace(/\.\s*\./g, '.')
      .trim()
  }, [text])
  const words = useMemo(() => parseWords(cleanText), [cleanText])
  const currentWord = useMemo(() => closestWordIndex(words, currentChar), [words, currentChar])

  const selectedVoice = useMemo(
    () => voices.find((v) => v.name === voiceName) ?? voices[0],
    [voices, voiceName],
  )

  const speakFromChar = (startChar: number, shouldPauseAfterStart = false) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !cleanText) return
    window.speechSynthesis.cancel()

    const start = Math.max(0, Math.min(cleanText.length - 1, startChar))
    const segment = cleanText.slice(start)
    if (!segment) return

    restartPausedRef.current = shouldPauseAfterStart

    const utter = new SpeechSynthesisUtterance(segment)
    utter.voice = selectedVoice ?? null
    utter.rate = rate
    utter.pitch = pitch
    offsetRef.current = start

    utter.onstart = () => {
      setIsSpeaking(true)
      setIsPaused(false)
      setCurrentChar(start)
      if (restartPausedRef.current && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.pause()
        setIsPaused(true)
        restartPausedRef.current = false
      }
    }

    utter.onboundary = (ev: SpeechSynthesisEvent) => {
      if (ev.name === 'word') {
        setCurrentChar(offsetRef.current + ev.charIndex)
      }
    }

    utter.onend = () => {
      setIsSpeaking(false)
      setIsPaused(false)
      setCurrentChar(cleanText.length)
      if (onPlaybackEnd) onPlaybackEnd()
    }

    utter.onerror = () => {
      setIsSpeaking(false)
      setIsPaused(false)
    }

    window.speechSynthesis.speak(utter)
  }

  const seekWord = (targetWord: number) => {
    if (words.length === 0) return
    const i = Math.max(0, Math.min(words.length - 1, targetWord))
    const nextChar = words[i].start
    setCurrentChar(nextChar)
    if (isSpeaking) {
      speakFromChar(nextChar, isPaused)
      return
    }
    if (onWordChange) onWordChange(words[i].word, i)
  }

  const seekToWord = (rawWord: string) => {
    const normalized = normalizeWord(rawWord)
    if (!normalized || words.length === 0) return

    let bestIndex = -1
    let bestDistance = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < words.length; i += 1) {
      if (normalizeWord(words[i].word) !== normalized) continue
      const distance = Math.abs(i - currentWord)
      if (distance < bestDistance) {
        bestDistance = distance
        bestIndex = i
      }
    }

    if (bestIndex >= 0) seekWord(bestIndex)
  }

  useEffect(() => {
    if (!onRegisterControls) return
    onRegisterControls({ seekToWord, seekToIndex: seekWord })
  }, [onRegisterControls, currentWord, words])

  useEffect(() => {
    if (!onWordChange) return
    if (!isSpeaking) {
      onWordChange('', 0)
      return
    }
    const next = words[currentWord]?.word ?? ''
    onWordChange(next, currentWord)
  }, [currentWord, isSpeaking, onWordChange, words])

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

    const load = () => {
      const list = window.speechSynthesis.getVoices()
      setVoices(list)
      if (!voiceName && list.length > 0) {
        const preferred = list.find((v) => /en-US|Google|Samantha|Daniel|Karen/i.test(`${v.lang} ${v.name}`))
        setVoiceName((preferred ?? list[0]).name)
      }
    }

    load()
    window.speechSynthesis.onvoiceschanged = load
    return () => {
      if (window.speechSynthesis.onvoiceschanged === load) window.speechSynthesis.onvoiceschanged = null
    }
  }, [voiceName])

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  useEffect(() => {
    if (!isSpeaking) return
    speakFromChar(currentChar, isPaused)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceName, rate, pitch])

  useEffect(() => {
    if (!autoPlayOnTextChange || !cleanText) return
    setCurrentChar(0)
    speakFromChar(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cleanText, autoPlayOnTextChange])

  const onPlayPause = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

    if (!isSpeaking) {
      const start = currentChar >= cleanText.length ? 0 : currentChar
      speakFromChar(start)
      return
    }

    if (isPaused) {
      window.speechSynthesis.resume()
      setIsPaused(false)
    } else {
      window.speechSynthesis.pause()
      setIsPaused(true)
    }
  }

  const onStop = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
    setIsPaused(false)
    setCurrentChar(0)
    if (onWordChange) onWordChange('', 0)
  }

  const skipWords = (delta: number) => {
    seekWord(currentWord + delta)
  }

  const closePanel = () => {
    setOpen(false)
  }

  const progressPct = words.length > 0 ? (currentWord / words.length) * 100 : 0

  return (
    <div className={inline ? `relative ${className}` : ''}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={inline
          ? `h-9 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${className}`
          : `fixed right-4 md:right-6 ${topOffsetClassName} z-50 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${className}`}
        style={{
          zIndex: inline ? undefined : 50,
          width: open ? (inline ? '62px' : '68px') : (inline ? '40px' : '46px'),
          background: open ? `linear-gradient(135deg, ${accent}, ${accentLight})` : 'rgba(9,20,34,0.88)',
          color: '#f8fbff',
          border: `1px solid ${open ? accentLight : 'rgba(147,197,253,0.35)'}`,
          boxShadow: open ? `0 10px 30px ${accent}66` : '0 8px 22px rgba(6,14,25,0.55)',
        }}
        title="Have the Teacher Read It"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 10v4h4l5 4V6L7 10H3zm13.5 2a3.5 3.5 0 0 0-2.5-3.35v6.7A3.5 3.5 0 0 0 16.5 12zm0-7.5v2a7.5 7.5 0 0 1 0 11v2c4.03-1.05 7-4.7 7-9.5s-2.97-8.45-7-9.5z"/>
        </svg>
      </button>

      {open && (
        <div className={inline
          ? 'absolute left-full ml-2 top-0 z-50 w-[min(460px,calc(100vw-2rem))] rounded-xl border shadow-2xl overflow-hidden'
          : `fixed right-4 md:right-6 ${panelTopOffsetClassName} z-50 w-[min(460px,calc(100vw-2rem))] rounded-xl border shadow-2xl overflow-hidden`}
          style={{ background: '#081426', borderColor: 'rgba(147,197,253,0.35)' }}>
          <div className="px-4 py-3 border-b" style={{ borderColor: 'rgba(147,197,253,0.25)', background: 'rgba(12,29,51,0.92)' }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: accentLight }}>audio reading</p>
                <p className="text-sm font-black lowercase" style={{ color: '#ecf5ff' }}>{title}</p>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={closePanel} className="px-2 py-1 text-[10px] font-mono uppercase border" style={{ color: '#a9bfd8', borderColor: 'rgba(147,197,253,0.3)' }}>close</button>
                <button type="button" onClick={closePanel} className="w-7 h-7 text-xs border flex items-center justify-center" style={{ color: '#a9bfd8', borderColor: 'rgba(147,197,253,0.3)' }} aria-label="Dismiss reader panel">×</button>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3" style={{ color: '#d6e8fb' }}>
            <div className="grid grid-cols-2 gap-2">
              <label className="text-[11px] font-mono uppercase tracking-wide">voice
                <select value={voiceName} onChange={(e) => setVoiceName(e.target.value)} className="mt-1 w-full text-xs px-2 py-1.5 border" style={{ background: '#0f2238', borderColor: 'rgba(147,197,253,0.35)' }}>
                  {voices.map((v) => (
                    <option key={`${v.name}-${v.lang}`} value={v.name}>{v.name} ({v.lang})</option>
                  ))}
                </select>
              </label>
              <label className="text-[11px] font-mono uppercase tracking-wide">speed {rate.toFixed(2)}x
                <input type="range" min={0.6} max={2} step={0.05} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full" />
              </label>
            </div>

            <label className="block text-[11px] font-mono uppercase tracking-wide">tone {pitch.toFixed(2)}
              <input type="range" min={0.7} max={1.3} step={0.05} value={pitch} onChange={(e) => setPitch(Number(e.target.value))} className="mt-2 w-full" />
            </label>

            <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: 'rgba(147,197,253,0.2)' }}>
              <div className="h-full transition-all" style={{ width: `${progressPct}%`, background: `linear-gradient(90deg, ${accent}, ${accentLight})` }} />
            </div>

            <p className="text-[11px] font-mono uppercase tracking-wide" style={{ color: '#9cb9d8' }}>
              highlighted words are seek targets: double-click a word in notes to jump there
            </p>

            <div className="grid grid-cols-5 gap-2">
              <button type="button" onClick={() => skipWords(-15)} className="py-2 text-xs font-bold border" style={{ borderColor: 'rgba(147,197,253,0.35)' }}>-15w</button>
              <button type="button" onClick={() => skipWords(-5)} className="py-2 text-xs font-bold border" style={{ borderColor: 'rgba(147,197,253,0.35)' }}>-5w</button>
              <button type="button" onClick={onPlayPause} className="py-2 text-xs font-bold" style={{ background: `linear-gradient(135deg, ${accent}, ${accentLight})`, color: '#fff' }}>
                {!isSpeaking ? 'Play' : isPaused ? 'Resume' : 'Pause'}
              </button>
              <button type="button" onClick={() => skipWords(5)} className="py-2 text-xs font-bold border" style={{ borderColor: 'rgba(147,197,253,0.35)' }}>+5w</button>
              <button type="button" onClick={() => skipWords(15)} className="py-2 text-xs font-bold border" style={{ borderColor: 'rgba(147,197,253,0.35)' }}>+15w</button>
            </div>

            <button type="button" onClick={onStop} className="w-full py-2 text-xs font-bold border" style={{ borderColor: 'rgba(239,68,68,0.45)', color: '#fecaca', background: 'rgba(127,29,29,0.22)' }}>
              Stop and reset
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
