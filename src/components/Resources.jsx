import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/ai-product-photo.png'
import discordImage from '@/images/resources/ai-lifestyle-photo.png'
import figmaImage from '@/images/resources/ai-studio-photo.png'

const resources = [
  {
    title: 'How to create studio photos',
    description:
      'Perfectly structured templates for quickly designing new icons at dozens of common sizes.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'How to create product photos',
    description:
      'Weekly videos where we dissect and recreate beautiful icons we find on the web.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      )
    },
  },
  {
    title: 'How to create lifestyle photos',
    description:
      "A private Discord server where you can get help and give feedback on each others' work.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="resources-title">
          What's inside
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          A complete suite of courses to cover all your needs.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Stop paying for overpriced AI Product Photography Tools. Learn how to create your own AI Product Photography for free.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
      <Container className="mt-16">
        <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
          Coming next
        </h3>
        <ol
          role="list"
          className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
        >
          <li className="py-3 flex items-center justify-between gap-4" aria-label="How to Create Consistent Models">
            <span className="font-medium text-slate-900">
              How to Create Consistent Models
            </span>
            <span className="shrink-0 rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
              Coming soon
            </span>
          </li>
          <li className="py-3 flex items-center justify-between gap-4" aria-label="How to Create Original Decor">
            <span className="font-medium text-slate-900">
              How to Create Original Decor
            </span>
            <span className="shrink-0 rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
              Coming soon
            </span>
          </li>
          <li className="py-3 flex items-center justify-between gap-4" aria-label="How to Create a Complete Brand Photoshoot">
            <span className="font-medium text-slate-900">
              How to Create a Complete Brand Photoshoot
            </span>
            <span className="shrink-0 rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
              Coming soon
            </span>
          </li>
        </ol>
      </Container>
    </section>
  )
}
