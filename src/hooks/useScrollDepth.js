import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '../utils/analytics'

const THRESHOLDS = [25, 50, 75, 100]

export const useScrollDepth = () => {
  const fired = useRef(new Set())

  useEffect(() => {
    fired.current = new Set()

    const handleScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total <= 0) return
      const pct = Math.round((scrolled / total) * 100)

      for (const threshold of THRESHOLDS) {
        if (pct >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold)
          trackScrollDepth(threshold)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
