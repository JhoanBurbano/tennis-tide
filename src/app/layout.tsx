import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tennis Tide',
  description: 'Tennis Tide es una aplicación web innovadora para facilitar la gestión y participación en torneos de tenis. Este sistema está diseñado para ofrecer una experiencia de usuario fluida y eficiente, con un enfoque principal en funcionalidad y un toque secundario de diseño atractivo. Con Tennis Tide, los usuarios pueden sumergirse en el emocionante mundo del tenis, ya sea como administradores que supervisan torneos y usuarios, o como participantes regulares que exploran, se registran y disfrutan de la competencia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
