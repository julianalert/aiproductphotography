import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata = {
  title: 'Thank you',
  description: 'Thanks for signing up for the AI Product Photography course.',
  robots: { index: false, follow: true },
}

export default function ThankYouPage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center py-20">
      <Container size="xs" className="text-center">
        <h1 className="font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
          Thank you
        </h1>
        <p className="mt-4 text-xl text-slate-600">
          You&apos;re on the list. We&apos;ll be in touch soon with everything you need to get started.
        </p>
        <p className="mt-8">
          <Link
            href="/"
            className="font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            ← Back to home
          </Link>
        </p>
      </Container>
    </main>
  )
}
