import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '')
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
const loopsApiKey = process.env.LOOPS_API_KEY

const LOOPS_EVENT_NAME = 'paidCourseProductPhotos'

async function sendEventToLoops(email) {
  if (!loopsApiKey) {
    throw new Error('LOOPS_API_KEY is not set')
  }
  const res = await fetch('https://app.loops.so/api/v1/events/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${loopsApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      eventName: LOOPS_EVENT_NAME,
    }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Loops API error: ${res.status} ${err}`)
  }
  return res.json()
}

export async function POST(request) {
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set')
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    )
  }

  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature' }, { status: 400 })
  }

  let event
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true })
  }

  const session = event.data?.object
  const email =
    session?.customer_details?.email ??
    session?.customer_email ??
    null

  if (!email) {
    console.error('checkout.session.completed: no customer email in session', session?.id)
    return NextResponse.json(
      { error: 'No customer email in session' },
      { status: 400 }
    )
  }

  try {
    await sendEventToLoops(email)
  } catch (err) {
    console.error('Failed to send event to Loops:', err)
    return NextResponse.json(
      { error: 'Loops send failed' },
      { status: 500 }
    )
  }

  return NextResponse.json({ received: true })
}
