import { useState, useEffect } from 'react'

const Success = ({ onPaid }) => {
  const orderId = new URLSearchParams(window.location.search).get('order')
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const checkOrder = async () => {
      for (let i = 0; i < 5; i++) {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/${orderId}`, {
          credentials: 'include',
        })
        const data = await response.json()
        setOrder(data)

        if (data.status === 'paid') {
          onPaid()
          return
        }

        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    }

    checkOrder()
  }, [])

  return (
    <section className="mx-auto my-20 w-[calc(100%-32px)] max-w-[640px] border-2 border-ink bg-white p-8 text-center shadow-[8px_8px_0_#171717] md:p-12">
      {!order && <h1 className="text-4xl font-bold">CHECKING YOUR PAYMENT...</h1>}

      {order?.status === 'paid' && (
        <>
          <span className="text-[11px] font-extrabold tracking-[0.18em] text-orange">ORDER #{order.id}</span>
          <h1 className="mt-3 text-5xl font-bold">PAYMENT CONFIRMED.</h1>
          <p className="mt-4 text-sm">Thanks! We received €{order.total}.00. Your supplements are on the way.</p>
        </>
      )}

      {order && order.status !== 'paid' && (
        <>
          <h1 className="text-4xl font-bold">STILL PROCESSING...</h1>
          <p className="mt-4 text-sm">Your payment is being confirmed. Refresh this page in a moment.</p>
        </>
      )}

      <a href="/" className="mt-8 inline-block bg-ink px-6 py-3 text-xs font-extrabold text-white hover:bg-orange">BACK TO SHOP</a>
    </section>
  )
}

export default Success