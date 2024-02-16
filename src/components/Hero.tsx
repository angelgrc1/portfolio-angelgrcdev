import { hero } from '@/images'
import Image from 'next/image'
import React from 'react'
import { Button } from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import Stack from './Stack'

export const Hero: React.FC = () => {
  return (
    <section className="w-full pt-[85px] h-auto bg-black relative">
      <div className="container w-full h-[50vh] flex items-center">
        <div className="w-1/2 flex flex-col gap-4 z-10">
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
        <div className="z-10 w-1/2 flex flex-col gap-2 items-center">
          <div className="w-[250px] h-[250px] rounded-full bg-black relative shadow-[0_0_20px_12px] shadow-black border-black">
            <Image
              className="rounded-full absolute"
              alt="Angel Rincones"
              src={hero}
              loading="lazy"
              quality={100}
              fill
            />
          </div>
          <div className="flex items-baseline gap-2 pt-2">
            <FontAwesomeIcon icon={faLocationDot} size="xs" color="#0eff9b" />
            <p className="text-base font-bold">Buenos Aires, Argentina</p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[#0eff9b] font-bold text-lg">+3</span>
            <p className="text-base font-bold">EXP</p>
          </div>
        </div>
      </div>
      <div className="container w-full flex items-center justify-center">
        <Stack />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                    bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />
    </section>
  )
}
