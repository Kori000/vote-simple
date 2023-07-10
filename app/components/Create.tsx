'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import close from './close.svg'
import { createVote } from '@/api'
type Props = {
  update: () => void
}

export default function Create({ update }: Props) {
  const [showModal, setShowModal] = useState(false)
  const [newTitle, setNewTitle] = useState<string>('')

  async function create() {
    if (!newTitle) return
    console.log('newTitle', newTitle)
    const res = await createVote({ title: newTitle })
    console.log('res', res)
    update()
    setNewTitle('')
    setShowModal(!showModal)
  }
  return (
    <div className='flex items-center justify-center  '>
      <button
        type='button'
        className='p-5 rounded-2xl border-2  px-10 bg-slate-50 text-black'
        onClick={() => setShowModal(!showModal)}
      >
        Open
      </button>

      {showModal && (
        <div className='w-3/4 h-[400px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-100 text-black flex items-center justify-around flex-col rounded-lg '>
          <h1 className='text-3xl '>新增投票</h1>
          <Image
            src={close}
            alt='close'
            className='absolute right-2 top-2 cursor-pointer'
            onClick={() => setShowModal(!showModal)}
          ></Image>
          <input
            type='text'
            className='border border-black rounded-md px-6 py-2 '
            onChange={e => {
              setNewTitle(e.target.value)
            }}
          />
          <button
            type='button'
            className='border border-black rounded-md px-6 py-2'
            onClick={create}
          >
            Create
          </button>
        </div>
      )}
    </div>
  )
}
