'use client'
import { useEffect } from 'react'

const Stripe = () => {
  useEffect(() => {
    window.location.href = 'https://buy.stripe.com/test_aEUdRQbok6pU0vK144'
  }, [])

  return (
    <div>
      <h1>Redirecting to Stripe...</h1>
    </div>
  )
}

export default Stripe
