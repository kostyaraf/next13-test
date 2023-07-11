// import '../../globals.css'
import { Inter } from 'next/font/google'
import Header from '../../../../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header color="#ff0909"/> 
        {children}
      </body>
    </html>
  )
}
