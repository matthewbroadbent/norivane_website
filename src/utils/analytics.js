const gtag = (...args) => {
  if (typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

export const trackEvent = (eventName, params = {}) => {
  gtag('event', eventName, params)
}

export const trackPageView = (pagePath) => {
  gtag('event', 'page_view', { page_path: pagePath })
}

export const trackScoreToolClick = (location) => {
  trackEvent('score_tool_click', {
    event_category: 'engagement',
    event_label: location,
  })
}

export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    value: depth,
  })
}

export const trackContactFormSubmit = (interest) => {
  trackEvent('contact_form_submit', {
    event_category: 'conversion',
    event_label: interest,
  })
}
