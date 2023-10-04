"use client"
import './HC_logos.scss'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function HackCambridge2018LogoSmall({loaded}) {
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
      return <img className='small' src="/2018/HC_2018_small_light.png" alt="Hack Cambridge 2018 Logo Small Light Mode" />
    case 'dark':
      return <img className='small' src="/2018/HC_2018_small_dark.png" alt="Hack Cambridge 2018 Logo Small Dark Mode" />
  }
}

function HackCambridge2018LogoLarge({loaded}) {
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
      return <h1 className='large grotesk'>Hack Cambridge Ternary</h1>
    case 'dark':
      return <h1 className='large grotesk'>Hack Cambridge Ternary</h1>
  }
}

export { HackCambridge2018LogoSmall, HackCambridge2018LogoLarge }