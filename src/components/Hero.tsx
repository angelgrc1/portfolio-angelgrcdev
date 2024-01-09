import { hero } from '@/images'
import Image from 'next/image'
import React from 'react'
import { Button } from './Button'

export const Hero: React.FC = () => {
  return (
    <section className="w-full h-[calc(100vh-150px)] bg-black">
      <div className="container w-full h-full flex items-center">
        <div className="w-1/2 flex flex-col gap-4">
          <p className="text-6xl font-bold">Hello,</p>
          <h2 className="text-8xl font-bold">{`I'm Angel.`}</h2>
          <h2 className="text-4xl text-[#0eff9b] font-bold uppercase">
            fullstack developer
          </h2>
          <div className="flex items-center gap-4">
            <Button>Resume</Button>
            <Button>Let{`'`}s work together</Button>
          </div>
        </div>
        <div className="relative w-1/2 flex flex-col items-end">
          <div className="w-[500px] h-[500px] rounded-full bg-black relative shadow-3d">
            <Image
              className="rounded-full absolute"
              alt="Angel Rincones"
              src={hero}
              loading="lazy"
              quality={100}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}
