"use client"
import './HC_logos.scss'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function HackCambridge2021LogoSmall({loaded}) {
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
      return <img className='small' src="/2021/HC_2021_small_light.png" alt="Hack Cambridge 2021 Logo Small Light Mode" />
    case 'dark':
      return <img className='small' src="/2021/HC_2021_small_dark.png" alt="Hack Cambridge 2021 Logo Small Dark Mode" />
  }
}

function HackCambridge2021LogoLarge({loaded}) {
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
      return <h1 className='large orbitron'>Hex Cambridge</h1>
    case 'dark':
      return <h1 className='large orbitron'>Hex Cambridge</h1>
  }
}

export { HackCambridge2021LogoSmall, HackCambridge2021LogoLarge }