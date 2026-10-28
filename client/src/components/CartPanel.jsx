const CartPanel = ({ cart, total, onClose, onChange, onRemove, onCheckout }) => {
  return (
    <>
      <div onClick={onClose} className="fixed inset-0 z-[60] bg-ink/50"></div>

      <aside className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-[420px] flex-col border-l-2 border-ink bg-paper">
        
        <div className="flex items-center justify-between border-b-2 border-ink p-6">
          <h2 className="text-3xl font-bold">YOUR CART</h2>
          <button onClick={onClose} className="text-xl font-bold hover:text-orange">✕</button>
        </div>

        
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 && <p className="text-sm text-[#777]">Your cart is empty.</p>}

          {cart.map((item) => (
            <div key={item.id} className="mb-4 flex gap-4 border-2 border-ink bg-white p-3">
              
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 shrink-0 border-2 border-ink object-cover"
              />

              
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold leading-tight">{item.name}</h3>
                  <button onClick={() => onRemove(item.id)} className="text-[9px] font-extrabold hover:text-orange">REMOVE</button>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center border-2 border-ink">
                    <button onClick={() => onChange(item.id, -1)} className="px-2.5 py-0.5 font-bold hover:bg-orange hover:text-white">-</button>
                    <span className="px-2.5 text-sm font-bold">{item.quantity}</span>
                    <button onClick={() => onChange(item.id, 1)} className="px-2.5 py-0.5 font-bold hover:bg-orange hover:text-white">+</button>
                  </div>
                  <strong className="font-display text-lg">€{item.price * item.quantity}.00</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="border-t-2 border-ink p-6">
          <div className="mb-4 flex justify-between font-display text-2xl font-bold">
            <span>TOTAL</span>
            <span>€{total}.00</span>
          </div>
          <button
            onClick={onCheckout}
            disabled={cart.length === 0}
            className="w-full border-2 border-ink bg-orange py-4 text-xs font-extrabold text-white shadow-[4px_4px_0_#171717] disabled:opacity-40"
          >
            CHECKOUT →
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartPanel