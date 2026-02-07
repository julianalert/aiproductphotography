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
          You now can join the hub and access the course. 
        </p>
        <p className="mt-8">
          <Link
            href="https://eight-numeric-3e2.notion.site/AI-Product-Photography-OS-2fed99bf52d78023a91ce962988c9a74"
            className="font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            Go to the hub <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </main>
  )
}
