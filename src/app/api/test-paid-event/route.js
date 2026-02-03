import { NextResponse } from 'next/server'

const LOOPS_EVENT_NAME = 'paidCourseProductPhotos'

/**
 * Dev-only: send a fake "paidCourseProductPhotos" event to Loops for an email.
 * Use ?email=you@example.com or POST body { "email": "you@example.com" }.
 * Disabled in production.
 */
export async function GET(request) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 404 })
  }
  const email = request.nextUrl.searchParams.get('email')
  if (!email) {
    return NextResponse.json(
      { error: 'Add ?email=your@email.com' },
      { status: 400 }
    )
  }
  return sendToLoops(email)
}

export async function POST(request) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 404 })
  }
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'JSON body with email' }, { status: 400 })
  }
  const email = body?.email
  if (!email || typeof email !== 'string') {
    return NextResponse.json(
      { error: 'Body must include { "email": "your@email.com" }' },
      { status: 400 }
    )
  }
  return sendToLoops(email)
}

async function sendToLoops(email) {
  const apiKey = process.env.LOOPS_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'LOOPS_API_KEY is not set in .env.local' },
      { status: 500 }
    )
  }
  const res = await fetch('https://app.loops.so/api/v1/events/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      eventName: LOOPS_EVENT_NAME,
    }),
  })
  if (!res.ok) {
    const err = await res.text()
    return NextResponse.json(
      { error: 'Loops API error', details: err },
      { status: res.status }
    )
  }
  return NextResponse.json({
    ok: true,
    message: `Sent "${LOOPS_EVENT_NAME}" to Loops for ${email}. Check Loops → Contacts.`,
  })
}
