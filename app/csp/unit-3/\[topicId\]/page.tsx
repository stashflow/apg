'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function TopicDetailPage({ params }: { params: { topicId: string } }) {
  const router = useRouter()

  useEffect(() => {
    router.push('/csp/unit-3')
  }, [router])

  return <div>Loading...</div>
}
