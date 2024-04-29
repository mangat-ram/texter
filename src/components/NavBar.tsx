import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'

const NavBar = () => {
  return (
    <nav
      className="sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all"
    >
      <MaxWidthWrapper>
        <div
          className="flex h-20 items-center justify-between border-b border-zinc-200"
        >
          <Link href="/" className="flex z-40 font-bold font-featureDeck text-4xl">
            <span>Texter.</span>
          </Link>

          {/*Todo Add Mobile navbar*/}
          <div className="hidden items-center space-x-4 sm:flex font-chubbo font-bold">
            <>
              <Link href="/pricing" 
              className={buttonVariants({
                variant:"ghost",
                size:"xl"
              })}>
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                variant:"ghost",
                size:"xl",
              })}
              >
                Sign In
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
                size:"xl"
              })}
              >
                Get Started<ArrowRight className='ml-1.5 h-5 w-5' />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default NavBar