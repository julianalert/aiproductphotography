import Image from 'next/image'

import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'

function BeforeAfterLabels({ beforeImage, afterImage }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-md mx-auto sm:mx-0">
      <div className="relative rounded-lg overflow-hidden bg-slate-200 shadow-md">
        <span className="absolute top-1.5 left-1.5 z-10 flex items-center gap-1 rounded bg-rose-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
          <span aria-hidden>×</span> Before
        </span>
        <Image
          src={beforeImage}
          alt="Before"
          className="h-auto w-full object-cover aspect-[3/4]"
          width={240}
          height={320}
        />
      </div>
      <div className="relative rounded-lg overflow-hidden bg-slate-200 shadow-md">
        <span className="absolute top-1.5 right-1.5 z-10 flex items-center gap-1 rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
          <span aria-hidden>✓</span> After
        </span>
        <Image
          src={afterImage}
          alt="After"
          className="h-auto w-full object-cover aspect-[3/4]"
          width={240}
          height={320}
        />
      </div>
    </div>
  )
}

export function Testimonial({ id, author, children, beforeAfter }) {
  return (
    <aside
      id={id}
      aria-label={`Testimonial from ${author.name}`}
      className="relative bg-slate-100 py-16 sm:py-32"
    >
      <div className="text-slate-900/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
      <Container size="xs" className="relative">
        <figure>
          <div className="flex text-slate-900 sm:justify-center">
            {beforeAfter ? (
              <BeforeAfterLabels beforeImage={beforeAfter.before} afterImage={beforeAfter.after} />
            ) : (
              <StarRating />
            )}
          </div>
          <blockquote className="mt-10 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center">
            {children}
          </blockquote>
          <figcaption className="mt-10 flex items-center sm:justify-center">
            <div className="overflow-hidden rounded-full bg-slate-200">
              <Image
                className="h-12 w-12 object-cover"
                src={author.image}
                alt=""
                width={48}
                height={48}
              />
            </div>
            <div className="ml-4">
              <div className="text-base/6 font-medium tracking-tight text-slate-900">
                {author.name}
              </div>
              <div className="mt-1 text-sm text-slate-600">{author.role}</div>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  )
}
