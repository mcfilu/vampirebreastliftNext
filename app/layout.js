import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Suspense } from 'react';
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleTagManager from '@magicul/next-google-tag-manager';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Vampire BreastLift PRP Rejuvanation',
    template: '%s',
  },
  description: {
    default: 'Vampire BreastLift in London by Dr Sherif Wakil',
    template: '%s',
  },
  verification: {
    google: 'zp1pkX8868abC_dJ0eQGfuQlPNgcpOMdWUovBrFVILI',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<></>}>
          <GoogleAnalytics/>
        </Suspense>
        <Suspense fallback={<></>}>
          <GoogleTagManager id="GTM-MN4QV5Z4" /> 
        </Suspense>
        
        
        {children}
        <Script strategy="afterInteractive" data-bot-id="a243d8ad-44a1-4441-aecd-b9b2a08ff886" src="https://launcher.enquirybot.com/index.js"></Script>
        </body>
    </html>
  )
}
