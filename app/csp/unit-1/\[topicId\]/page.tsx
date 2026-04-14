'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function TopicDetailPage({ params }: { params: { topicId: string } }) {
  const router = useRouter()

  useEffect(() => {
    // Redirect back to unit page if topic detail page doesn't exist
    router.push('/csp/unit-1')
  }, [router])

  return <div>Loading...</div>
}
