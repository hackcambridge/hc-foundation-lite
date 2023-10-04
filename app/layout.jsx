import './globals.css'
import { Providers } from "./providers";

export default function Layout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Hack Cambridge Foundation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Hack Cambridge Foundation</title>
        <link href="https://db.onlinewebfonts.com/c/9527a4c4f55e8075eb6a60fe577d89c4?family=Px+Grotesk+Regular" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@800&amp;display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}