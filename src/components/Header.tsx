import { logo } from '@/images'
import {
  IconDefinition,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { IconLookup, faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ITEMS = [
  {
    label: 'About',
    onClick: () => null,
  },
  {
    label: 'Experience',
    onClick: () => null,
  },
  {
    label: 'Contact me',
    onClick: () => null,
  },
]

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="w-full h-auto">
        <div className="container grid grid-cols-3 py-4 w-full h-full">
          <Link
            href="/"
            className="w-[50px] h-[50px] rounded-full bg-black relative"
          >
            <Image
              className="grayscale rounded-full image-shadow absolute"
              alt="Logo de Angel Rincones"
              src={logo}
              fill
            />
          </Link>
          <div className="py-2 px-6 bg-[#0A0A0A] rounded-full w-fit h-full flex items-center justify-center gap-10 relative">
            {ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.label.toLowerCase()}
                className="text-white text-lg font-bold"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="h-full flex gap-4 items-center justify-end">
            <FontAwesomeIcon
              icon={faGithub as IconLookup}
              color="#fff"
              size="sm"
            />
            <FontAwesomeIcon
              icon={faLinkedin as IconLookup}
              color="#fff"
              size="sm"
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
