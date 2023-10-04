"use client"
import './HC_logos.scss'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function HackCambridge2019LogoSmall({loaded}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!loaded) setMounted(true)
    else setMounted(false)
  }, [])

  if (!mounted) {
    return null
  } else {
    return <img className='small' src="/2019/HC_2019_small.svg" alt="Hack Cambridge 2019 Logo Small" />
  }
}

function HackCambridge2019LogoLarge({loaded}) {
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
      return <h1 className='large grotesk'>Hack Cambridge 4D</h1>
    case 'dark':
      return <h1 className='large grotesk'>Hack Cambridge 4D</h1>
  }
}

export { HackCambridge2019LogoSmall, HackCambridge2019LogoLarge }