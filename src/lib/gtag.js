/**
 * Google Ads "Outbound click" conversion.
 * Call this when the user clicks a buy link; it fires the conversion then redirects in the callback.
 * The click handler must preventDefault() and call this with the link href.
 */
export function gtag_report_conversion(url) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    if (typeof url === 'string' && url) window.location.href = url
    return
  }

  const callback = function () {
    if (typeof url === 'string' && url) {
      window.location.href = url
    }
  }

  window.gtag('event', 'conversion', {
    send_to: 'AW-17912302186/OPe9CKrk3_IbEOqUoN1C',
    event_callback: callback,
  })
}
