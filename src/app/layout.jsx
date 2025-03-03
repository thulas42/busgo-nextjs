import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VersionBadge from '../components/VersionBadge';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 to-purple-500">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <VersionBadge />
      </body>
    </html>
  );
} 