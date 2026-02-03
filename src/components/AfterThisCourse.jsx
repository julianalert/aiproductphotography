import { Container } from '@/components/Container'
import { CheckIcon } from '@/components/CheckIcon'
import { SectionHeading } from '@/components/SectionHeading'

function BrainIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-10 w-10 shrink-0 text-pink-500"
      {...props}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5V6h.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H12v.5a2.5 2.5 0 0 1-5 0V11h-.5A2.5 2.5 0 0 1 4 8.5 2.5 2.5 0 0 1 6.5 6H7V4.5A2.5 2.5 0 0 1 9.5 2zM12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 5v2h2v-2h-2zm-2 .5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm6 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z" />
    </svg>
  )
}

const benefits = [
  "Create product images that look like a real photoshoot",
  "Make AI images people don’t question",
  "Use AI without killing trust on your product pages",
  "Build lifestyle scenes that actually make sense",
  "Control light, mood, and realism, not fight the tool",
  "Spot fake-looking AI images instantly (and avoid them)",
  "Know when AI is good enough and when it’s not",
  "Produce visuals you can confidently use on PDPs and socials",
]

export function AfterThisCourse() {
  return (
    <section
      id="after-this-course"
      aria-labelledby="after-this-course-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="after-this-course-tag">
          After this course
        </SectionHeading>
        <div className="mt-8 flex items-start gap-4">
          
          <p
            id="after-this-course-title"
            className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            🧠 After this course, you'll be able to:
          </p>
        </div>
        <ul
          role="list"
          className="mt-10 space-y-4 divide-y divide-slate-200 text-lg tracking-tight text-slate-700"
        >
          {benefits.map((benefit) => (
            <li key={benefit} className="flex gap-4 py-4 first:pt-0">
              <CheckIcon className="h-8 w-8 shrink-0 fill-blue-600" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
