import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Day 1: Why Most AI Product Photos Kill Trust': {
    'The Real Problem With AI Product Photos': 1,
    'The Trust Test': 15,
    'Setting up your first artboard': 20,
  },
  'Day 2: What Makes an Image Look Real': {
    'The Core Concept of AI Product Photography': 21,
    'The 5 Realism Pillars': 22,
    'Examples of Good and Bad AI Product Photos': 26,
  },
  'Day 3: The Only Workflow That Works for AI Product Photography': {
    'Our Signature Workflow, Step By Step': 50,
    'The core prompt (and the prompt library)': 57,
    'Step-by-ste guide to create your first AI Product Photo For Your Brand': 57,    
  },
  'Create Lifestyle Images That Make Sense (And Don’t Look Staged)': {
    'The Rules to Know To Nail Lifestyle Images': 82,
    'Step-by-ste guide to create your first AI Lifestyle Photo For Your Brand': 88,
  },
  'The Cost of Getting It Wrong': {
    'Using AI for Product Photos vs Not Using AI': 82,
    'DIY vs DFY': 88,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          What's inside?
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          It's not about making beautiful photos. It's about making visual content that helps you make more money.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        By Day 5, you'll know why most AI product photos fail and how to create images that look like a real shoot and convert better.
        </p>
        <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
          {Object.entries(tableOfContents).map(([title, pages]) => (
            <li key={title}>
              <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                {title}
              </h3>
              <ol
                role="list"
                className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
              >
                {Object.keys(pages).map((topicTitle) => (
                  <li
                    key={topicTitle}
                    className="py-3"
                    aria-label={topicTitle}
                  >
                    <span className="font-medium text-slate-900">
                      {topicTitle}
                    </span>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
