import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { AuthProvider } from '../contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BusGo - Bus Booking',
  description: 'Book bus tickets easily and compare prices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500">
            <Header />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}