import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavLink = ({ className, href, children, passHref }) => {
  const router = useRouter()
  return (
    <Link href={href} passHref={passHref}>
      <a
        className={
          className === true
            ? className
            : 'text-base font-medium text-gray-500 hover:text-gray-900'
        }
      >
        {children}
      </a>
    </Link>
  )
}
