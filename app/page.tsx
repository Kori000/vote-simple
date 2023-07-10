'use client'

import Image from 'next/image'

import VotePage from './components/VotePage'

import Create from './components/Create'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isRefresh, setIsRefresh] = useState(false)

  useEffect(() => {
    isRefresh && setTimeout(() => setIsRefresh(false))
  }, [isRefresh])

  const updateChild = () => {
    setIsRefresh(true)
  }

  return (
    <main className='py-4 '>
      <Create update={updateChild}></Create>

      {!isRefresh && <VotePage></VotePage>}
    </main>
  )
}
