"use client"
import './HC_logos.scss'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function HackCambridge2023LogoSmall({loaded}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!loaded) setMounted(true)
    else setMounted(false)
  }, [])

  if (!mounted) {
    return null
  } else {
    return <img className='small' src="/2023/HC_2023_small.png" alt="Hack Cambridge 2023 Logo Small" />
  }
}

function HackCambridge2023LogoLarge({loaded}) {
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
      return <h1 className='large industryLong'>Hack Cambridge Spyder</h1>
    case 'dark':
      return <h1 className='large industryLong'>Hack Cambridge Spyder</h1>
  }
}

export { HackCambridge2023LogoSmall, HackCambridge2023LogoLarge }