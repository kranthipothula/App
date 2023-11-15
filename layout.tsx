import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/footer/footer';


const PoppinsFont = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Show Now',

  description: 'Shop Now app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${Poppins.className} text-slate-700'}>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </div>
    </body>
    </html>
  )
}
