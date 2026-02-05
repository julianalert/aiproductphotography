'use client'

import clsx from 'clsx'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { EmailSignupForm } from '@/components/EmailSignupForm'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

function Plan({ name, description, price, features, featured = false, useForm = false }) {
  const isFree = price === 0 || price === '0' || price === 'free'

  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-blue-600 sm:shadow-lg',
      )}
    >
      {featured && (
        <div className="absolute inset-0 mask-[linear-gradient(white,transparent)] text-white/10">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          {isFree ? (
            <span
              className={clsx(
                'text-4xl tracking-tight sm:text-5xl',
                featured ? 'text-white' : 'text-slate-900',
              )}
            >
              Free
            </span>
          ) : (
            <>
              <span
                className={clsx(
                  'text-[1.75rem]/9',
                  featured ? 'text-blue-200' : 'text-slate-500',
                )}
              >
                $
              </span>
              <span
                className={clsx(
                  'mt-1 ml-1 text-7xl tracking-tight',
                  featured ? 'text-white' : 'text-slate-900',
                )}
              >
                {price}
              </span>
            </>
          )}
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900',
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600',
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {useForm ? (
          <EmailSignupForm
            inputId="pricing-email"
            buttonText="Get access for free"
            variant="dark"
            className="mt-8"
          />
        ) : null}
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <Container>
        <SectionHeading number="3" id="pricing-title">
          Pricing
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Yes, it's free.
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          If you want to create AI product photos that convert, this is for you.
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="bg-slate-50 sm:px-6 sm:pb-16 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <div className="mx-auto max-w-md">
            <Plan
              featured
              useForm
              name="Complete access to the hub"
              description="You'll learn how to create AI product photos that convert."
              price="free"
              features={[
                'Full access to all the course content',
                'Access to all the workflows we will explore',
                'Access to the prompt library for every style (fashion, beauty, home, etc.)',
                'Direct support if you need help',
                'All future updates for life',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
