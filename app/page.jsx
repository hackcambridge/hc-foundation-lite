"use client"
import './globals.css'
import { useState } from 'react'
import HackCambridgeFoundationLogo from '../components/HCF_banner'
import { HackCambridge2016LogoSmall, HackCambridge2016LogoLarge} from '../components/HC_2016'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  setTimeout(() => {
    setLoaded(true)
  }, 1000)

  if (!loaded) {
    return (<HackCambridgeFoundationLogo />)
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <span>
          <HackCambridge2016LogoSmall />
          <HackCambridge2016LogoLarge />
        </span>
      </div>
    )
  }
}
