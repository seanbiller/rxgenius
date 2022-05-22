import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const MobileNavLink = ({ className, href, children, passHref }) => {
  const router = useRouter()
  return (
    <Link href={href} passHref={passHref}>
      <a className="text-base font-medium text-gray-900 hover:text-gray-700">
        {children}
      </a>
    </Link>
  )
}
