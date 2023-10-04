"use client"
import './HC_logos.scss'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function HackCambridge2022LogoSmall({loaded}) {
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
      return <img className='small' src="/2022/HC_2022_small_light.png" alt="Hack Cambridge 2022 Logo Small Light Mode" />
    case 'dark':
      return <img className='small' src="/2022/HC_2022_small_dark.png" alt="Hack Cambridge 2022 Logo Small Dark Mode" />
  }
}

function HackCambridge2022LogoLarge({loaded}) {
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
      return <h1 className='large industry'>Hack Cambridge Atlas</h1>
    case 'dark':
      return <h1 className='large industry'>Hack Cambridge Atlas</h1>
  }
}

export { HackCambridge2022LogoSmall, HackCambridge2022LogoLarge }