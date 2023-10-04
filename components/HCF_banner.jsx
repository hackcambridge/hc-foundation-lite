"use client"
import './HCF_banner.css'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function HackCambridgeFoundationLogo({loaded}) {
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
      return <img className='banner' src="/foundation/HCF_banner_black.png" alt="Hack Cambridge Foundation Logo Light Mode" />
    case 'dark':
      return <img className='banner' src="/foundation/HCF_banner_white.png" alt="Hack Cambridge Foundation Logo Dark Mode" />
  }
}