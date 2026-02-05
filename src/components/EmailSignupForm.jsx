'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

import { Button } from '@/components/Button'

export function EmailSignupForm({
  inputId = 'email-signup',
  buttonText = 'Access the hub',
  className = '',
  variant = 'light',
}) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const isDark = variant === 'dark'

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/loops/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }
      router.push('/thank-you')
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex max-w-md">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className={clsx(
            'min-w-0 flex-1 rounded-l-lg border border-r-0 bg-white py-3 px-4 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-inset disabled:opacity-50',
            isDark
              ? 'border-white/30 focus:border-white focus:ring-white placeholder:text-slate-500'
              : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400'
          )}
        />
        <Button
          type="submit"
          color={isDark ? 'white' : 'blue'}
          disabled={loading}
          className="cursor-pointer rounded-l-none rounded-r-lg py-3 px-5 font-semibold shadow-sm"
        >
          {loading ? 'Saving…' : buttonText}
        </Button>
      </form>
      {error && (
        <p
          className={clsx('mt-2 text-sm', isDark ? 'text-blue-100' : 'text-red-600')}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}
