import { logo } from '@/images'
import Image from 'next/image'
import Link from 'next/link'

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-16 bg-black relative"
    >
      <div className="container z-10">
        <h1 className="text-6xl font-bold py-16 text-center">About Me</h1>

        <div className="flex w-full justify-between">
          <div className="flex flex-col w-1/2">
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              tempora labore delectus dolorum quia quod tenetur. Dignissimos sed
              in praesentium!
            </p>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              tempora labore delectus dolorum quia quod tenetur. Dignissimos sed
              in praesentium!
            </p>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              tempora labore delectus dolorum quia quod tenetur. Dignissimos sed
              in praesentium!
            </p>
          </div>
          <div className="w-1/ flex items-center justify-end">
            <div className="w-[400px] h-[400px] bg-black relative shadow-retro">
              <Image
                className="grayscale absolute"
                alt="Angel Rincones"
                src={logo}
                loading="lazy"
                quality={100}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
