import { logo } from '@/images'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { IconLookup } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ITEMS = ['About', 'Experience', 'Contact']

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="w-full h-auto bg-black/10 backdrop-blur fixed top-0 z-50">
        <div className="container grid grid-cols-3 py-4 w-full h-full">
          <Link
            href="/"
            className="w-[50px] h-[50px] rounded-full bg-black relative border border-black"
          >
            <Image
              className="grayscale rounded-full absolute"
              alt="Logo de Angel Rincones"
              src={logo}
              fill
            />
          </Link>
          <div className="py-2 px-6 bg-[#0A0A0A] rounded-full w-fit h-full flex items-center justify-center gap-10 relative">
            {ITEMS.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-lg font-bold hover:text-[#0eff9b] transition"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="h-full flex gap-4 items-center justify-end">
            <Link
              href="https://github.com/angelgrc1"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub as IconLookup}
                color="#fff"
                size="sm"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/agrincones/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin as IconLookup}
                color="#fff"
                size="sm"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
