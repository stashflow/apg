'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function TopicDetailPage({ params }: { params: { topicId: string } }) {
  const router = useRouter()

  useEffect(() => {
    router.push('/apes/unit-5')
  }, [router])

  return <div>Loading...</div>
}
