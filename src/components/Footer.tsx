import Link from 'next/link'
import React from 'react'

const ITEMS = ['About', 'Experience', 'Contact']

export const Footer: React.FC = () => {
  return (
    <footer className="w-full h-20 bg-black text-white">
      <div className="container mx-auto h-full flex items-center justify-between">
        <span className="text-sm">
          made with ❤️ by{' '}
          <Link
            href="https://www.linkedin.com/in/agrincones/"
            target="_blank"
            rel="noreferrer"
            className='underline'
          >
            angelgrc
          </Link>
        </span>
        <div className="flex gap-4 items-center">
          {ITEMS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold hover:text-[#0eff9b] transition"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
