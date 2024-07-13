"use client"
import './HC_logos.scss'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function HackCambridge2020LogoSmall({loaded}) {
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
      return <img className='small' src="/2020/HC_2020_small_light.png" alt="Hack Cambridge 2020 Logo Small Light Mode" />
    case 'dark':
      return <img className='small' src="/2020/HC_2020_small_dark.png" alt="Hack Cambridge 2020 Logo Small Dark Mode" />
  }
}

function HackCambridge2020LogoLarge({loaded}) {
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
      return <img className='large' src="/2020/HC_2020_large_light.png" alt="Hack Cambridge 2020 Logo Large Light Mode" />
    case 'dark':
      return <img className='large' src="/2020/HC_2020_large_dark.png" alt="Hack Cambridge 2020 Logo Large Dark Mode" />
  }
}

export { HackCambridge2020LogoSmall, HackCambridge2020LogoLarge }