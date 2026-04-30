'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type ReadAloudProps = {
  title?: string
  text: string
  accent?: string
  accentLight?: string
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

export function ReadAloud({ title = 'have the teacher read it', text, accent = '#4f46e5', accentLight = '#93c5fd' }: ReadAloudProps) {
  const [open, setOpen] = useState(false)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceName, setVoiceName] = useState('')
  const [rate, setRate] = useState(1)
  const [pitch, setPitch] = useState(1)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentChar, setCurrentChar] = useState(0)

  const utterRef = useRef<SpeechSynthesisUtterance | null>(null)
  const offsetRef = useRef(0)

  const cleanText = useMemo(() => text.replace(/\s+/g, ' ').trim(), [text])
  const words = useMemo(() => parseWords(cleanText), [cleanText])
  const currentWord = useMemo(() => closestWordIndex(words, currentChar), [words, currentChar])

  const selectedVoice = useMemo(
    () => voices.find((v) => v.name === voiceName) ?? voices[0],
    [voices, voiceName],
  )

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

  const speakFromChar = (startChar: number) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !cleanText) return
    window.speechSynthesis.cancel()

    const start = Math.max(0, Math.min(cleanText.length - 1, startChar))
    const segment = cleanText.slice(start)
    if (!segment) return

    const utter = new SpeechSynthesisUtterance(segment)
    utter.voice = selectedVoice ?? null
    utter.rate = rate
    utter.pitch = pitch
    offsetRef.current = start
    utterRef.current = utter

    utter.onstart = () => {
      setIsSpeaking(true)
      setIsPaused(false)
      setCurrentChar(start)
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
    }

    utter.onerror = () => {
      setIsSpeaking(false)
      setIsPaused(false)
    }

    window.speechSynthesis.speak(utter)
  }

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
  }

  const seekWord = (targetWord: number) => {
    if (words.length === 0) return
    const i = Math.max(0, Math.min(words.length - 1, targetWord))
    const nextChar = words[i].start
    setCurrentChar(nextChar)
    if (isSpeaking) speakFromChar(nextChar)
  }

  const skipWords = (delta: number) => {
    seekWord(currentWord + delta)
  }

  const closePanel = () => {
    setOpen(false)
    onStop()
  }

  const progressPct = words.length > 0 ? (currentWord / words.length) * 100 : 0

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed right-4 md:right-6 top-20 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all"
        style={{
          background: open ? `linear-gradient(135deg, ${accent}, ${accentLight})` : 'rgba(9,20,34,0.88)',
          color: '#f8fbff',
          border: `1px solid ${open ? accentLight : 'rgba(147,197,253,0.35)'}`,
        }}
        title="Have the Teacher Read It"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 10v4h4l5 4V6L7 10H3zm13.5 2a3.5 3.5 0 0 0-2.5-3.35v6.7A3.5 3.5 0 0 0 16.5 12zm0-7.5v2a7.5 7.5 0 0 1 0 11v2c4.03-1.05 7-4.7 7-9.5s-2.97-8.45-7-9.5z"/>
        </svg>
      </button>

      {open && (
        <div className="fixed right-4 md:right-6 top-33 z-50 w-[min(460px,calc(100vw-2rem))] rounded-xl border shadow-2xl overflow-hidden" style={{ background: '#081426', borderColor: 'rgba(147,197,253,0.35)' }}>
          <div className="px-4 py-3 border-b" style={{ borderColor: 'rgba(147,197,253,0.25)', background: 'rgba(12,29,51,0.92)' }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: accentLight }}>audio reading</p>
                <p className="text-sm font-black lowercase" style={{ color: '#ecf5ff' }}>{title}</p>
              </div>
              <button type="button" onClick={closePanel} className="px-2 py-1 text-[10px] font-mono uppercase border" style={{ color: '#a9bfd8', borderColor: 'rgba(147,197,253,0.3)' }}>close</button>
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

            <label className="block text-[11px] font-mono uppercase tracking-wide">jump to word ({Math.min(words.length, currentWord + 1)}/{words.length || 0})
              <input
                type="range"
                min={0}
                max={Math.max(0, words.length - 1)}
                step={1}
                value={Math.max(0, Math.min(words.length - 1, currentWord)) || 0}
                onChange={(e) => seekWord(Number(e.target.value))}
                className="mt-2 w-full"
              />
            </label>

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
    </>
  )
}
