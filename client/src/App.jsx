import Crew from './components/Crew'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Promo from './components/Promo'
import Schedule from './components/Schedule'
import Shop from './components/Shop'
import ShopHero from './components/ShopHero'
import StackBanner from './components/StackBanner'
import Stats from './components/Stats'
import Ticker from './components/Ticker'
import { useState, useEffect } from 'react'
import CartPanel from './components/CartPanel'

const App = () => {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  const [toast, setToast] = useState('')
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id)

    if(existing) {
      setCart(cart.map((item) => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ))
    } else {
      setCart([...cart, {...product, quantity: 1 }])
    }

    setToast(`${product.name} ADDED TO CART`)
    setTimeout(() => setToast(''), 2200)
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  const changeQuantity = (id, amount) => {
    setCart(
      cart
      .map((item) => item.id === id ? {...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const handleCheckout = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/checkout`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
      }),
    })

    const data = await response.json()

    if (response.status === 401) {
      setToast('PLEASE SIGN IN TO CHECK OUT')
      setTimeout(() => setToast(''), 2200)
      return
    }

    if (data.url) {
      window.location.href = data.url
    }
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0) 

  return (
    <>
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Schedule />
        <Crew />
        <Promo />
        <Plans />
        <ShopHero />
        <Ticker />
        <Shop addToCart={addToCart} />
        <Stats />
        <StackBanner />
      </main>
      <Footer />
      {cartOpen && (
        <CartPanel
          cart={cart}
          total={cartTotal}
          onClose={() => setCartOpen(false)}
          onChange={changeQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}
      <div className={`fixed bottom-[18px] left-[18px] right-[18px] z-[100] border-2 border-ink bg-orange px-5 py-4 text-center font-display text-xs font-bold tracking-[0.07em] text-white shadow-[5px_5px_0_#171717] transition duration-200 md:left-auto md:right-7 md:bottom-7 ${toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'}`}>
        {toast}
      </div>
    </>
  )
}

export default App

