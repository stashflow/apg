'use client'

import { Suspense, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { CollegeBored } from '@/components/college-bored'
import { SiteNav } from '@/components/site-nav'
import { normalizeCourseKey } from '@/lib/college-bored-data'

function CollegeBoredPageContent() {
  const searchParams = useSearchParams()
  const selectedCourse = useMemo(
    () => normalizeCourseKey(searchParams.get('course') ?? 'apes'),
    [searchParams]
  )

  return (
    <div className="min-h-screen" style={{ background: '#050d1a' }}>
      <SiteNav />
      <CollegeBored courseShort={selectedCourse} />
    </div>
  )
}

export default function CollegeBoredPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen" style={{ background: '#050d1a' }}>
          <SiteNav />
          <div className="px-6 py-8 text-sm text-slate-200">
            <div className="border border-slate-700 bg-slate-900/40 px-5 py-8">
              Loading CollegeBored...
            </div>
          </div>
        </div>
      }
    >
      <CollegeBoredPageContent />
    </Suspense>
  )
}
