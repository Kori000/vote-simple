'use client'
import { vote, getList, deleteVote } from '@/api'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import close from './close.svg'
type VoteList = {
  id: number
  vote_num: number
  title: string
}[]

type ApiRes = {
  code?: number
  data?: any
}

export default function VotePage({}) {
  useEffect(() => {
    getVoteList()

    return () => {}
  }, [])

  async function getVoteList() {
    const res: ApiRes = await getList()
    if (res.code !== 200) return
    setVoteList(res.data as VoteList)
    console.log('res', res)
  }
  const [voteList, setVoteList] = useState<VoteList>([])

  async function voteClick(id: number) {
    const res = await vote({ id })
    console.log('投票', res)
    getVoteList()
  }

  async function delVote(id: number) {
    const res = await deleteVote({ id })
    console.log('删除投票', res)
    getVoteList()
  }

  return (
    <div className=' min-h-screen grid grid-cols-2 grid-flow-row-dense gap-2 items-center justify-center px-2 '>
      {voteList.length > 0 &&
        voteList.map(item => {
          return (
            <div
              key={item.id}
              className='border-2 p-10 rounded-xl flex items-center justify-center flex-col gap-14 '
            >
              <h1 className='text-6xl text-red-400 '>{item.title}</h1>
              <div className='text-6xl '>{item.vote_num}</div>
              <div className='flex items-center justify-center gap-4 '>
                <button
                  type='button'
                  className='p-5 rounded-2xl border-2  px-10 active:bg-slate-600'
                  onClick={() => voteClick(item.id)}
                >
                  Vote
                </button>
                <button
                  type='button'
                  className='p-5 rounded-2xl border-2 border-red-500  px-10 active:bg-red-600'
                  onClick={() => delVote(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        })}
    </div>
  )
}
