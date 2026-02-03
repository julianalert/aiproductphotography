'use client'

export function SeeMore() {
  return (
    <a
      href="#table-of-contents"
      className="flex flex-col items-center gap-2 py-8 text-slate-600 transition hover:text-slate-900"
      aria-label="Scroll to see more"
    >
      <span className="text-base font-medium">See more</span>
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </a>
  )
}
