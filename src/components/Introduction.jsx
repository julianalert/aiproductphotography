import Image from 'next/image'
import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import aiProductPhoto from '@/images/ai-product-photography.png'
import badAiProductPhoto from '@/images/bad-ai-product-photography.png'
import goodAiProductPhoto from '@/images/good-ai-product-photography.png'
export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
      <p className="mt-4">
          I get you.
        </p>
        <p className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900">
        You tried this last trendy AI tool that promised great product photos,
        and you ended up with images like this.
        </p>
        <div className="mt-4 w-full">
          <Image
            src={badAiProductPhoto}
            alt="Bad AI-generated product photography"
            width={aiProductPhoto.width}
            height={aiProductPhoto.height}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <p className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900">
        While what you had in mind looked more like this.
        </p>
        <div className="mt-4 w-full">
          <Image
            src={goodAiProductPhoto}
            alt="Good AI-generated product photography"
            width={aiProductPhoto.width}
            height={aiProductPhoto.height}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <p className="mt-4">
          So you closed all the browser tabs and thought:
        </p>
        <blockquote className="mt-3 border-l-4 border-slate-300 pl-5 py-1 italic text-slate-700">
          “They’re all lying. AI is trash. I can’t use this on my PDP or socials.”
        </blockquote>
        <p className="mt-4">
        And honestly? You were right.
        </p>
        <p className="mt-4">
        Those pictures you got were trash. 
        </p>
        <p className="mt-4">
        You'd have lost your customers trust. 
        </p>
        <p className="mt-4">
        But it's not your fault.
        </p>
        <p className="mt-4">
        Most tools are powerful, but they’re not quite there yet.
        </p>
        <blockquote className="mt-3 border-l-4 border-slate-300 pl-5 py-1 italic text-slate-700">
          “So what can I do?”
        </blockquote>
        <p className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900">
        Well, you CAN create product images that look real.
        </p>
        <p className="mt-4">
        You CAN create images your customers will never question.
        </p>
        <p className="mt-4">
        You CAN create photos that you won't feel embarrassed to show on your PDP or socials.
        </p>
        <p className="mt-4">
        You just need:
        </p>
        <ul role="list" className="mt-4 space-y-3">
          {[
            'The right tools,',
            'the right workflow',
            'and the judgment to use them properly',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          By the end of this course, you’ll have all the confidence you need to create product images that actually sell.
        </p>
        <p className="mt-4">
          No studio.
No photographer.
No logistics.
No delays.
No $5k invoice.
        </p>
        <p className="mt-4">
        Just you, and your computer.
        </p>
        <p className="mt-10">
          <Link
            href="https://buy.stripe.com/7sY5kEaVEaO4atzet5eME0a"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get the course now{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
