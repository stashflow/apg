import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteNav } from '@/components/site-nav'
import { apesConfig } from '@/lib/apes-data'
import { apushConfig } from '@/lib/apush-data'
import { cspConfig } from '@/lib/csp-data'
import { langConfig } from '@/lib/lang-data'

type Topic = {
  number: number
  title: string
  reason: string
  memory: string
  score: number
}

type ThemeOverlay = {
  hero: string
  glow: string
  mesh: string
  chip: string
  chip2: string
}

type CourseConfig = {
  id: string
  label: string
  short: string
  accent: string
  accentLight: string
  units: Array<{
    number: number
    title: string
    examWeight: string
    topics: string[]
  }>
}

const courseMap: Record<string, CourseConfig> = {
  apes: apesConfig,
  apush: apushConfig,
  csp: cspConfig,
  lang: langConfig,
}

function scoreTopic(courseKey: string, title: string, topicNumber: number): { score: number; reason: string; memory: string } {
  const lower = title.toLowerCase()
  const base = 10 - Math.min(9, topicNumber) * 0.04
  const has = (needle: string) => lower.includes(needle)

  if (courseKey === 'apush') {
    if (has('civil war') || has('reconstruction')) return { score: base + 5.8, reason: 'Core causation and continuity thread appears across SAQ/LEQ/DBQ prompts.', memory: 'Remember "break, bleed, rebuild": sectional break, war bloodshed, then federal rebuild.' }
    if (has('constitution') || has('federalists')) return { score: base + 5.4, reason: 'Foundational governance arguments drive period comparison questions.', memory: 'Think "rules of the game": who gets power, and who checks that power.' }
    if (has('great depression') || has('new deal')) return { score: base + 5.2, reason: 'Frequent policy-shift evidence cluster for modern era essays.', memory: 'Anchor to real life: economic crash -> government steps in bigger than before.' }
    if (has('cold war') || has('containment')) return { score: base + 5.0, reason: 'High-frequency post-1945 framework used for argumentation.', memory: 'Use the image of a domino line: policy is trying to stop one tile from tipping the next.' }
    if (has('rights') || has('civil rights')) return { score: base + 4.9, reason: 'Often tested as federal-state tension plus social movement impact.', memory: 'Map it to "protest + courts + Congress" as the recurring change recipe.' }
  }

  if (courseKey === 'apes') {
    if (has('climate') || has('greenhouse') || has('carbon')) return { score: base + 5.7, reason: 'Cross-unit mechanism showing up in MCQ and FRQ evidence design.', memory: 'Treat it like a thermal blanket: thicker gases trap more heat.' }
    if (has('energy')) return { score: base + 5.3, reason: 'Common tradeoff comparison domain in FRQs.', memory: 'Use "cost, carbon, consistency" to compare any energy source fast.' }
    if (has('pollution') || has('smog') || has('acid')) return { score: base + 5.0, reason: 'Reliable source-pathway-impact-solution exam pattern.', memory: 'Visualize a pipeline: source -> transport -> harm -> fix.' }
    if (has('biodiversity') || has('ecosystem')) return { score: base + 4.8, reason: 'Foundation for carrying capacity and resilience questions.', memory: 'Think sports team depth: more variety means better survival under stress.' }
  }

  if (courseKey === 'csp') {
    if (has('algorithm') || has('procedure')) return { score: base + 5.7, reason: 'Core AP CSP logic tested directly in multiple formats.', memory: 'Imagine a cooking recipe: exact steps, reusable function, predictable result.' }
    if (has('data') || has('binary') || has('compression')) return { score: base + 5.2, reason: 'Frequent conversion and representation trap area.', memory: 'Think zip file logic: same message, smarter packaging.' }
    if (has('internet') || has('packet') || has('routing')) return { score: base + 5.0, reason: 'Network model is foundational for reliability and security questions.', memory: 'Picture road trips with reroutes: packets can take different highways.' }
    if (has('impact') || has('bias') || has('privacy')) return { score: base + 4.9, reason: 'High-weight societal impact category on exam blueprints.', memory: 'Use "who benefits, who is harmed, who decides" every time.' }
  }

  if (courseKey === 'lang') {
    if (has('thesis') || has('line of reasoning')) return { score: base + 5.6, reason: 'Thesis + line cohesion is the biggest score multiplier across essays.', memory: 'Treat thesis like GPS destination; each paragraph is one turn that must match.' }
    if (has('evidence') || has('commentary')) return { score: base + 5.2, reason: 'Most common rubric gap in timed writing.', memory: 'Use "quote, explain, so-what" as the non-negotiable 3-step move.' }
    if (has('rhetorical') || has('argument')) return { score: base + 5.0, reason: 'Directly tied to rhetorical analysis and argument prompts.', memory: 'Ask: what move did the writer make, and what effect did it create?' }
    if (has('synthesis')) return { score: base + 4.8, reason: 'Source integration is high impact and highly scorable.', memory: 'Think DJ mixing tracks: blend sources smoothly instead of stacking summaries.' }
  }

  return {
    score: base + 3.6,
    reason: 'Necessary for complete unit coverage and stronger transfer across question styles.',
    memory: `Use one sentence: "${title}" means this idea, this effect, and this exam use-case.`,
  }
}

function hasAny(text: string, terms: string[]): boolean {
  return terms.some((term) => text.includes(term))
}

function getThemeOverlay(courseKey: string, unitTitle: string, unitTopics: string[]): ThemeOverlay {
  const normalized = `${unitTitle} ${unitTopics.join(' ')}`.toLowerCase()

  if (courseKey === 'apush') {
    if (hasAny(normalized, ['1491', '1607', 'native', 'columbian', 'encomienda', 'colon'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(180,83,9,0.34), rgba(245,158,11,0.22) 42%, rgba(38,25,12,0.88))',
        glow: 'radial-gradient(70% 70% at 16% 15%, rgba(251,191,36,0.26), transparent 70%)',
        mesh: 'repeating-linear-gradient(115deg, rgba(251,191,36,0.10) 0px, rgba(251,191,36,0.10) 2px, transparent 2px, transparent 16px)',
        chip: 'Origins & Exchange',
        chip2: 'Land, labor, contact',
      }
    }
    if (hasAny(normalized, ['revolution', 'constitution', 'federal', 'independence', 'confederation'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(239,68,68,0.34), rgba(245,158,11,0.24) 44%, rgba(26,18,38,0.90))',
        glow: 'radial-gradient(70% 70% at 10% 20%, rgba(239,68,68,0.24), transparent 70%)',
        mesh: 'repeating-linear-gradient(135deg, rgba(248,113,113,0.12) 0px, rgba(248,113,113,0.12) 2px, transparent 2px, transparent 17px)',
        chip: 'Revolution & Founding',
        chip2: 'Power, rights, design',
      }
    }
    if (hasAny(normalized, ['civil war', 'reconstruction', 'slavery', '13th', '14th', '15th'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(220,38,38,0.34), rgba(251,146,60,0.20) 45%, rgba(22,35,64,0.90))',
        glow: 'radial-gradient(70% 70% at 82% 22%, rgba(220,38,38,0.20), transparent 70%)',
        mesh: 'repeating-linear-gradient(95deg, rgba(248,113,113,0.12) 0px, rgba(248,113,113,0.12) 2px, transparent 2px, transparent 15px)',
        chip: 'Conflict & Reconstruction',
        chip2: 'Union, rights, aftermath',
      }
    }
    if (hasAny(normalized, ['industrial', 'gilded', 'progressive', 'immigration', 'urbanization'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(37,99,235,0.30), rgba(249,115,22,0.20) 52%, rgba(15,23,42,0.92))',
        glow: 'radial-gradient(70% 70% at 88% 14%, rgba(59,130,246,0.22), transparent 70%)',
        mesh: 'repeating-linear-gradient(140deg, rgba(125,211,252,0.12) 0px, rgba(125,211,252,0.12) 2px, transparent 2px, transparent 14px)',
        chip: 'Industry & Reform',
        chip2: 'Growth, labor, response',
      }
    }
    if (hasAny(normalized, ['cold war', 'vietnam', 'watergate', '1980', 'globalization', '9/11'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(59,130,246,0.30), rgba(239,68,68,0.22) 48%, rgba(15,23,42,0.92))',
        glow: 'radial-gradient(70% 70% at 85% 10%, rgba(59,130,246,0.22), transparent 70%)',
        mesh: 'repeating-linear-gradient(100deg, rgba(96,165,250,0.12) 0px, rgba(96,165,250,0.12) 2px, transparent 2px, transparent 16px)',
        chip: 'Global Tension',
        chip2: 'Containment, protest, change',
      }
    }
    return {
      hero: 'linear-gradient(135deg, rgba(239,68,68,0.30), rgba(245,158,11,0.25) 55%, rgba(8,22,40,0.92))',
      glow: 'radial-gradient(60% 70% at 12% 12%, rgba(245,158,11,0.18), transparent 70%)',
      mesh: 'repeating-linear-gradient(130deg, rgba(254,202,202,0.08) 0px, rgba(254,202,202,0.08) 2px, transparent 2px, transparent 18px)',
      chip: 'Causation Through Time',
      chip2: 'Themes over trivia',
    }
  }

  if (courseKey === 'apes') {
    if (hasAny(normalized, ['ecosystem', 'biome', 'biodiversity', 'species', 'succession'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(34,197,94,0.30), rgba(16,185,129,0.24) 50%, rgba(9,24,20,0.92))',
        glow: 'radial-gradient(65% 70% at 86% 18%, rgba(74,222,128,0.22), transparent 70%)',
        mesh: 'repeating-linear-gradient(120deg, rgba(74,222,128,0.12) 0px, rgba(74,222,128,0.12) 2px, transparent 2px, transparent 14px)',
        chip: 'Ecology Networks',
        chip2: 'Flow, balance, resilience',
      }
    }
    if (hasAny(normalized, ['energy', 'fossil', 'nuclear', 'solar', 'wind'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(234,179,8,0.30), rgba(34,197,94,0.22) 48%, rgba(17,24,39,0.92))',
        glow: 'radial-gradient(65% 70% at 14% 14%, rgba(250,204,21,0.22), transparent 70%)',
        mesh: 'repeating-linear-gradient(130deg, rgba(250,204,21,0.12) 0px, rgba(250,204,21,0.12) 2px, transparent 2px, transparent 14px)',
        chip: 'Energy Tradeoffs',
        chip2: 'Cost, carbon, reliability',
      }
    }
    if (hasAny(normalized, ['pollution', 'smog', 'acid', 'waste', 'eutrophication'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(6,182,212,0.28), rgba(59,130,246,0.22) 48%, rgba(11,23,39,0.92))',
        glow: 'radial-gradient(70% 75% at 82% 16%, rgba(56,189,248,0.24), transparent 70%)',
        mesh: 'repeating-linear-gradient(95deg, rgba(56,189,248,0.11) 0px, rgba(56,189,248,0.11) 2px, transparent 2px, transparent 14px)',
        chip: 'Pollution Pathways',
        chip2: 'Source, impact, fix',
      }
    }
    return {
      hero: 'linear-gradient(135deg, rgba(34,197,94,0.28), rgba(20,184,166,0.24) 50%, rgba(9,24,20,0.92))',
      glow: 'radial-gradient(60% 70% at 85% 20%, rgba(34,197,94,0.22), transparent 70%)',
      mesh: 'repeating-linear-gradient(120deg, rgba(110,231,183,0.12) 0px, rgba(110,231,183,0.12) 2px, transparent 2px, transparent 16px)',
      chip: 'Systems & Tradeoffs',
      chip2: 'Interdependence',
    }
  }

  if (courseKey === 'csp') {
    if (hasAny(normalized, ['data', 'binary', 'compression', 'metadata'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(45,212,191,0.30), rgba(56,189,248,0.22) 50%, rgba(7,22,40,0.92))',
        glow: 'radial-gradient(68% 74% at 13% 14%, rgba(45,212,191,0.24), transparent 70%)',
        mesh: 'repeating-linear-gradient(125deg, rgba(45,212,191,0.14) 0px, rgba(45,212,191,0.14) 2px, transparent 2px, transparent 12px)',
        chip: 'Data Thinking',
        chip2: 'Encode, compress, infer',
      }
    }
    if (hasAny(normalized, ['algorithm', 'programming', 'loops', 'procedures', 'pseudocode'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(14,165,233,0.30), rgba(249,115,22,0.20) 52%, rgba(8,24,41,0.92))',
        glow: 'radial-gradient(65% 72% at 84% 15%, rgba(249,115,22,0.22), transparent 70%)',
        mesh: 'repeating-linear-gradient(92deg, rgba(125,211,252,0.12) 0px, rgba(125,211,252,0.12) 2px, transparent 2px, transparent 12px)',
        chip: 'Algorithmic Logic',
        chip2: 'Pattern, procedure, proof',
      }
    }
    if (hasAny(normalized, ['internet', 'network', 'packet', 'dns', 'cybersecurity'])) {
      return {
        hero: 'linear-gradient(135deg, rgba(20,184,166,0.30), rgba(59,130,246,0.22) 48%, rgba(8,20,38,0.92))',
        glow: 'radial-gradient(65% 70% at 88% 20%, rgba(59,130,246,0.22), transparent 70%)',
        mesh: 'repeating-linear-gradient(138deg, rgba(56,189,248,0.10) 0px, rgba(56,189,248,0.10) 2px, transparent 2px, transparent 13px)',
        chip: 'Network Systems',
        chip2: 'Packets, routes, trust',
      }
    }
    return {
      hero: 'linear-gradient(135deg, rgba(20,184,166,0.30), rgba(249,115,22,0.24) 50%, rgba(10,22,35,0.92))',
      glow: 'radial-gradient(65% 75% at 15% 15%, rgba(20,184,166,0.25), transparent 70%)',
      mesh: 'repeating-linear-gradient(125deg, rgba(45,212,191,0.10) 0px, rgba(45,212,191,0.10) 2px, transparent 2px, transparent 14px)',
      chip: 'Logic & Impact',
      chip2: 'Build + evaluate',
    }
  }

  if (hasAny(normalized, ['rhetorical situation', 'speaker', 'audience', 'purpose', 'soapstone'])) {
    return {
      hero: 'linear-gradient(135deg, rgba(168,85,247,0.30), rgba(139,92,246,0.24) 48%, rgba(27,18,52,0.92))',
      glow: 'radial-gradient(65% 75% at 16% 18%, rgba(192,132,252,0.24), transparent 70%)',
      mesh: 'repeating-linear-gradient(122deg, rgba(196,181,253,0.12) 0px, rgba(196,181,253,0.12) 2px, transparent 2px, transparent 14px)',
      chip: 'Rhetorical Situation',
      chip2: 'Who, why, for whom',
    }
  }
  if (hasAny(normalized, ['style', 'diction', 'syntax', 'imagery', 'parallelism'])) {
    return {
      hero: 'linear-gradient(135deg, rgba(236,72,153,0.30), rgba(168,85,247,0.24) 48%, rgba(34,17,54,0.92))',
      glow: 'radial-gradient(68% 72% at 84% 16%, rgba(244,114,182,0.24), transparent 70%)',
      mesh: 'repeating-linear-gradient(100deg, rgba(244,114,182,0.10) 0px, rgba(244,114,182,0.10) 2px, transparent 2px, transparent 14px)',
      chip: 'Style & Effect',
      chip2: 'Word, rhythm, tone',
    }
  }
  if (hasAny(normalized, ['argument', 'claim', 'evidence', 'commentary', 'synthesis'])) {
    return {
      hero: 'linear-gradient(135deg, rgba(217,70,239,0.30), rgba(236,72,153,0.22) 48%, rgba(27,21,55,0.92))',
      glow: 'radial-gradient(66% 70% at 80% 20%, rgba(236,72,153,0.24), transparent 70%)',
      mesh: 'repeating-linear-gradient(130deg, rgba(217,70,239,0.11) 0px, rgba(217,70,239,0.11) 2px, transparent 2px, transparent 15px)',
      chip: 'Argument Craft',
      chip2: 'Claim, proof, reasoning',
    }
  }
  return {
    hero: 'linear-gradient(135deg, rgba(168,85,247,0.30), rgba(236,72,153,0.24) 52%, rgba(20,17,45,0.92))',
    glow: 'radial-gradient(65% 75% at 88% 16%, rgba(236,72,153,0.22), transparent 70%)',
    mesh: 'repeating-linear-gradient(120deg, rgba(196,181,253,0.10) 0px, rgba(196,181,253,0.10) 2px, transparent 2px, transparent 16px)',
    chip: 'Argument & Style',
    chip2: 'Read, reason, write',
  }
}

function parseUnitNumber(unitId: string): number | null {
  const match = /^unit-(\d+)$/i.exec(unitId)
  if (!match) return null
  const number = Number.parseInt(match[1], 10)
  return Number.isFinite(number) && number > 0 ? number : null
}

export default function JistUnitPage({ params }: { params: { course: string; unitId: string } }) {
  const { course, unitId } = params

  const courseKey = course.toLowerCase()
  const config = courseMap[courseKey]
  const unitNumber = parseUnitNumber(unitId)
  if (!config || !unitNumber) notFound()

  const unit = config.units.find((entry) => entry.number === unitNumber)
  if (!unit) notFound()

  const rankedTopics: Topic[] = unit.topics
    .map((title, index) => {
      const topicNumber = index + 1
      const scored = scoreTopic(courseKey, title, topicNumber)
      return {
        number: topicNumber,
        title,
        reason: scored.reason,
        memory: scored.memory,
        score: scored.score,
      }
    })
    .sort((a, b) => b.score - a.score || a.number - b.number)

  const focusCount = Math.min(Math.max(4, Math.ceil(unit.topics.length * 0.45)), 7)
  const focus = rankedTopics.slice(0, focusCount)
  const theme = getThemeOverlay(courseKey, unit.title, unit.topics)
  const coveragePct = Math.round((focus.length / unit.topics.length) * 100)

  return (
    <div className="min-h-screen" style={{ background: '#050d1a' }}>
      <SiteNav />

      <div className="relative overflow-hidden border-b" style={{ borderColor: `${config.accent}44` }}>
        <div className="absolute inset-0" style={{ background: theme.hero }} />
        <div className="absolute inset-0" style={{ background: theme.glow }} />
        <div className="absolute inset-0 opacity-45" style={{ background: theme.mesh }} />
        <div className="absolute -right-20 -top-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${config.accentLight}33` }} />
        <div className="absolute -left-16 bottom-0 h-44 w-44 rounded-full blur-3xl" style={{ background: `${config.accent}2f` }} />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'rgba(255,255,255,0.35)' }} />

        <div className="relative px-6 md:px-12 py-10 md:py-14 max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-widest uppercase mb-5" style={{ color: '#cbe3ff' }}>
            <Link href="/" className="hover:opacity-85 transition-opacity">home</Link>
            <span style={{ color: '#87a4c7' }}>/</span>
            <Link href={`/${courseKey}`} className="hover:opacity-85 transition-opacity">{config.short}</Link>
            <span style={{ color: '#87a4c7' }}>/</span>
            <Link href={`/${courseKey}/${unitId}`} className="hover:opacity-85 transition-opacity">unit {unit.number}</Link>
            <span style={{ color: '#87a4c7' }}>/</span>
            <span style={{ color: '#f0f6ff' }}>jist</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[11px] uppercase tracking-wider mb-4" style={{ background: `${config.accent}24`, color: '#ecfeff', border: `1px solid ${config.accent}55` }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: config.accentLight }} />
            {theme.chip}
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 ml-2 font-mono text-[11px] uppercase tracking-wider mb-4" style={{ background: 'rgba(10,26,48,0.42)', color: '#d7ebff', border: '1px solid rgba(177,209,239,0.35)' }}>
            {theme.chip2}
          </div>

          <h1 className="text-4xl md:text-6xl font-black lowercase leading-none tracking-tight mb-3" style={{ color: '#f8fbff' }}>
            JIST: unit {unit.number}
          </h1>
          <p className="text-base md:text-lg max-w-3xl leading-relaxed" style={{ color: '#d5e7fb' }}>
            Just Important Stuff Today for <span style={{ color: config.accentLight, fontWeight: 800 }}>{unit.title}</span>. Start with the high-leverage ideas, then run the full map in order.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/${courseKey}/${unitId}`}
              className="px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5"
              style={{ color: '#e6f2ff', border: '1px solid rgba(226,240,255,0.35)', background: 'rgba(6,18,34,0.35)' }}
            >
              back to unit
            </Link>
            <div className="px-4 py-2 font-mono text-xs uppercase tracking-wider" style={{ color: '#e6f2ff', border: `1px solid ${config.accent}77`, background: `linear-gradient(120deg, ${config.accent}44, ${config.accentLight}33)` }}>
              exam weight: {unit.examWeight}
            </div>
            <div className="px-4 py-2 font-mono text-xs uppercase tracking-wider" style={{ color: '#d0e6ff', border: '1px solid rgba(125,211,252,0.32)', background: 'rgba(8,30,53,0.4)' }}>
              {focus.length} priority ideas
            </div>
          </div>

          <div className="mt-5 max-w-xl">
            <div className="flex items-center justify-between mb-1.5">
              <p className="font-mono text-[11px] uppercase tracking-wide" style={{ color: '#d8ebff' }}>JIST coverage</p>
              <p className="font-mono text-[11px] uppercase tracking-wide" style={{ color: config.accentLight }}>{coveragePct}% of unit</p>
            </div>
            <div className="h-2 overflow-hidden" style={{ background: 'rgba(10,28,48,0.55)', border: '1px solid rgba(173,205,235,0.28)' }}>
              <div
                className="h-full animate-gradient-shift"
                style={{
                  width: `${coveragePct}%`,
                  background: `linear-gradient(90deg, ${config.accent}, ${config.accentLight}, ${config.accent})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <main className="px-6 md:px-12 py-10 md:py-12 max-w-6xl mx-auto">
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-xl md:text-2xl font-black lowercase" style={{ color: '#f0f6ff' }}>priority stack</h2>
            <div className="flex-1 h-px" style={{ background: 'rgba(138,177,214,0.35)' }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {focus.map((item, idx) => (
              <article
                key={`focus-${item.number}`}
                className="relative p-4 md:p-5 border overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: `${config.accent}66`,
                  background: `linear-gradient(135deg, ${config.accent}12, rgba(10,25,44,0.95) 55%)`,
                }}
              >
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl" style={{ background: `${config.accentLight}2f` }} />
                <div className="absolute top-0 left-0 h-full w-1" style={{ background: `linear-gradient(180deg, ${config.accent}, ${config.accentLight})` }} />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 flex items-center justify-center font-mono text-[11px] font-black" style={{ background: `${config.accent}2f`, color: '#eaf6ff', border: `1px solid ${config.accent}80` }}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wide" style={{ color: '#9fc6ea' }}>topic {item.number}</span>
                    </div>
                    <Link
                      href={`/${courseKey}/${unitId}/${item.number}`}
                      className="font-mono text-[11px] uppercase tracking-wide hover:opacity-85"
                      style={{ color: config.accentLight }}
                    >
                      open
                    </Link>
                  </div>

                  <h3 className="text-lg font-black lowercase mb-2" style={{ color: '#f7fbff' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: '#bcd8f4' }}>{item.reason}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#d8ecff' }}>
                    <span className="font-bold" style={{ color: config.accentLight }}>How to remember:</span> {item.memory}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-xl md:text-2xl font-black lowercase" style={{ color: '#f0f6ff' }}>full unit map in order</h2>
            <div className="flex-1 h-px" style={{ background: 'rgba(138,177,214,0.35)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {unit.topics.map((topic, index) => {
              const number = index + 1
              const inFocus = focus.some((entry) => entry.number === number)
              return (
                <Link
                  key={`map-${number}`}
                  href={`/${courseKey}/${unitId}/${number}`}
                  className="group px-4 py-3 border transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    borderColor: inFocus ? `${config.accent}70` : 'rgba(122,154,176,0.35)',
                    background: inFocus
                      ? `linear-gradient(130deg, ${config.accent}18, rgba(10,24,43,0.94))`
                      : 'rgba(7,21,37,0.78)',
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-wide mb-1" style={{ color: inFocus ? config.accentLight : '#8fb0cc' }}>
                        {inFocus ? 'priority' : 'full coverage'}
                      </p>
                      <p className="text-sm font-bold lowercase leading-snug" style={{ color: '#eef6ff' }}>{number}. {topic}</p>
                    </div>
                    <span className="font-mono text-[11px]" style={{ color: '#88afcf' }}>open</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
