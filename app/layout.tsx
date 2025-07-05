import type { Metadata } from 'next'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  icons: {
    icon: '/icon.png',
  },
}
