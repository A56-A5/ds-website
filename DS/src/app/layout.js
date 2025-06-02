import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DS Department',
  description: 'Department of Data Science',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
