# Test the Stripe → Loops payment flow locally

## Simplest: test Loops only (no Stripe)

To confirm that the **paidCourseProductPhotos** event reaches Loops, use the dev-only test route. No Stripe CLI, no payment.

1. Set `LOOPS_API_KEY` in `.env.local`.
2. Run `npm run dev`.
3. Open in browser or run in terminal:

   ```bash
   curl "http://127.0.0.1:3000/api/test-paid-event?email=your@email.com"
   ```

   Use an email you can look up in [Loops → Contacts](https://app.loops.so). You should see `{"ok":true,"message":"..."}` and the event in Loops. This route is **disabled in production** (`NODE_ENV=production`).

---

## Full flow: Stripe webhook → Loops

### 1. Use Stripe **test mode**

- In [Stripe Dashboard](https://dashboard.stripe.com), turn **Test mode** ON (toggle top-right).
- In `.env.local` use your **test** secret key: `STRIPE_SECRET_KEY=sk_test_...` (not `sk_live_...`).
- Get your **test** Payment Link: Dashboard → **Product catalog** → **Payment links** (in test mode), or create one. Use that link for testing (your live link `buy.stripe.com/...` may be live-only).

## 2. Install Stripe CLI and forward webhooks

Stripe can’t reach `localhost`, so the CLI forwards webhooks to your machine.

**Install Stripe CLI** (if needed):

- **macOS (Homebrew):** `brew install stripe/stripe-cli/stripe`
- **Windows (Scoop):** `scoop install stripe`
- Or: https://docs.stripe.com/stripe-cli#install

**Log in (one time):**

```bash
stripe login
```

**Forward webhooks to your app** (leave this running in a separate terminal):

```bash
stripe listen --forward-to http://127.0.0.1:3000/api/webhooks/stripe
```

The CLI will print something like:

```text
Ready! Your webhook signing secret is whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Copy that **`whsec_...`** value.

## 3. Point your app at the CLI secret

In `.env.local` set:

```env
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

(Use the secret from the `stripe listen` output, not from the Dashboard.)

Restart your Next.js dev server so it picks up the new env.

## 4. Run the app and make a test payment

1. Start the app: `npm run dev`
2. Open your site (e.g. http://127.0.0.1:3000) and click through to the **test** Payment Link (or open the test link directly).
3. At Stripe Checkout use:
   - **Card:** `4242 4242 4242 4242`
   - **Expiry:** any future date (e.g. 12/34)
   - **CVC:** any 3 digits
   - **Email:** use an email you can check in Loops (e.g. your own or a test address)

4. Complete the payment.

## 5. Check that it worked

- **Stripe CLI terminal:** You should see a `checkout.session.completed` event and a `200` response to your webhook URL.
- **Next.js terminal:** No 4xx/5xx from `/api/webhooks/stripe`.
- **Loops:** In [Loops](https://app.loops.so) → **Contacts**, find the email you used; in **Events** (or the contact’s activity) you should see a `paidCourseProductPhotos` event.

If the webhook returns 400/500, the CLI will show it; check the Next.js logs for the exact error (e.g. missing `LOOPS_API_KEY`, Loops API error).

## 6. When you’re done testing

Stop `stripe listen`. For **production**, create a webhook endpoint in Stripe Dashboard (Developers → Webhooks) with URL `https://your-domain.com/api/webhooks/stripe`, subscribe to `checkout.session.completed`, and set `STRIPE_WEBHOOK_SECRET` in production to that endpoint’s **Signing secret** (`whsec_...`).
