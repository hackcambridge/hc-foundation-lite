"use client"
import './HCF_banner.css'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function HackCambridgeFoundationLogo() {
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
      return <img src="/HCF_banner_black.png" alt="Hack Cambridge Foundation Logo Light Mode" />
    case 'dark':
      return <img src="/HCF_banner_white.png" alt="Hack Cambridge Foundation Logo Dark Mode" />
  }
}