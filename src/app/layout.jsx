import { Inter } from 'next/font/google'
import Script from 'next/script'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AI Product Photography Course – Studio & Lifestyle Photos That Build Trust',
    template: '%s | AI Product Photography Course',
  },
  description:
    'A 5-day email course for e-commerce brands. Learn how to create AI product photos that don’t look like AI—studio and lifestyle shots that build trust, not doubt.',
  keywords: ['AI product photography', 'e-commerce photography', 'product photos', 'AI photos', 'email course'],
  authors: [{ name: 'AI Product Photography Course' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'AI Product Photography Course',
    title: 'AI Product Photography Course – Studio & Lifestyle Photos That Build Trust',
    description:
      'A 5-day email course for e-commerce brands. Learn how to create AI product photos that don’t look like AI.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'AI Product Photography Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Product Photography Course – Studio & Lifestyle Photos That Build Trust',
    description:
      'A 5-day email course for e-commerce brands. Learn how to create AI product photos that don’t look like AI.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17912302186"
          strategy="beforeInteractive"
        />
        <Script id="google-ads" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17912302186');
          `}
        </Script>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="6b5b6e73-3004-4fe4-b675-226ee5437193"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}
