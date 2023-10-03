"use client"
import './HC_2016.scss'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function HackCambridge2016LogoSmall() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  switch (resolvedTheme) {
    case 'light':
      return <img className='small' src="/2016/HC_2016_small_light.svg" alt="Hack Cambridge 2016 Logo Small Light Mode" />
    case 'dark':
      return <img className='small' src="/2016/HC_2016_small_dark.svg" alt="Hack Cambridge 2016 Logo Small Dark Mode" />
  }
}

function HackCambridge2016LogoLarge() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  switch (resolvedTheme) {
    case 'light':
      return <img className='large' src="/2016/HC_2016_large_light.svg" alt="Hack Cambridge 2016 Logo Large Light Mode" />
    case 'dark':
      return <img className='large' src="/2016/HC_2016_large_dark.svg" alt="Hack Cambridge 2016 Logo Large Dark Mode" />
  }
}

export { HackCambridge2016LogoSmall, HackCambridge2016LogoLarge }