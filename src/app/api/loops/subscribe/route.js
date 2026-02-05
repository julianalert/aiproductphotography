import { NextResponse } from 'next/server'

const LOOPS_API_KEY = process.env.LOOPS_API_KEY
const LOOPS_UPDATE_URL = 'https://app.loops.so/api/v1/contacts/update'
const LOOPS_EVENTS_URL = 'https://app.loops.so/api/v1/events/send'
const LOOPS_EVENT_NAME = 'paidCourseProductPhotos'

function isValidEmail(value) {
  if (typeof value !== 'string' || !value.trim()) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value.trim())
}

export async function POST(request) {
  if (!LOOPS_API_KEY) {
    console.error('LOOPS_API_KEY is not set')
    return NextResponse.json(
      { error: 'Subscription service is not configured' },
      { status: 500 }
    )
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address' },
      { status: 400 }
    )
  }

  try {
    const res = await fetch(LOOPS_UPDATE_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source: 'hero',
      }),
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
      console.error('Loops API error:', res.status, data)
      return NextResponse.json(
        { error: data.message || 'Could not save your email. Please try again.' },
        { status: res.status >= 500 ? 500 : 400 }
      )
    }

    const eventRes = await fetch(LOOPS_EVENTS_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        eventName: LOOPS_EVENT_NAME,
      }),
    })
    if (!eventRes.ok) {
      const eventErr = await eventRes.text()
      console.error('Loops events/send error:', eventRes.status, eventErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
