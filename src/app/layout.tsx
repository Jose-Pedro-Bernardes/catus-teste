import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globalStyles/globals.css'
import '../globalStyles/reset.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Catus',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}