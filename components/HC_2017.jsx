"use client"
import './HC_logos.scss'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function HackCambridge2017LogoSmall({loaded}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!loaded) setMounted(true)
    else setMounted(false)
  }, [])

  if (!mounted) {
    return null
  } else {
    return <img className='small' src="/2017/HC_2017_small.png" alt="Hack Cambridge 2017 Logo Small" />
  }
}

function HackCambridge2017LogoLarge({loaded}) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!loaded) setMounted(true)
    else setMounted(false)
  }, [])

  if (!mounted) {
    return null
  }

  switch (resolvedTheme) {
    case 'light':
      return <img className='large' src="/2017/HC_2017_large_light.png" alt="Hack Cambridge 2017 Logo Large Light Mode" />
    case 'dark':
      return <img className='large' src="/2017/HC_2017_large_dark.png" alt="Hack Cambridge 2017 Logo Large Dark Mode" />
  }
}

export { HackCambridge2017LogoSmall, HackCambridge2017LogoLarge }