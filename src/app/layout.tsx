import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estúdio Abrasel',
  description: 'Estúdio Abrasel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <nav>
          <ul className='flex gap-4  p-4'>
            <li>
              <Link href='/abrasel'>Abrasel</Link>
            </li>
            <li>Metodologia</li>
            <li>Dados</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
