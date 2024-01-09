import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <button
      className={`bg-white text-black font-medium py-2 px-4 rounded ${className} shadow-retro transition-transform duration-200 hover:scale-105`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
