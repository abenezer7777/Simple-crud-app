import './globals.css'
import { Poppins } from 'next/font/google'

import Header from './components/Header'
// import Footer from './components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'] })

export const metadata = {
  title: 'Simple Poject on nextjs',
  description: 'Generated by Abenezer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='mx-auto px-5'>   
          <Header />
         
          <div className="lg:pl-64 mt-5 px-3">      
          {children}
          </div> 
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
