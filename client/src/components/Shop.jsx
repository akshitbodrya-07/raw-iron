import { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'

const categories = ['ALL', 'PROTEIN', 'PRE-WORKOUT', 'RECOVERY']

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([])
  const [currentCategory, setCurrentCategory] = useState('ALL')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const visibleProducts = products.filter(
    (product) => currentCategory === 'ALL' || product.category === currentCategory
  )

  return (
    <section id="supplements" className="mx-auto w-[calc(100%-32px)] pt-[72px] md:w-[min(1380px,calc(100%-64px))] md:pt-[104px] pb-[72px] md:pb-[110px]">
      <SectionTitle label="THE ARSENAL" title="SHOP THE LINEUP" />

      {/* Filter bar: one line under all buttons, the active one is filled black */}
      <div className="mb-[26px] flex gap-2 overflow-x-auto border-b-2 border-ink">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`whitespace-nowrap px-3.5 py-3 text-[10px] font-extrabold tracking-[0.05em] md:px-5 ${currentCategory === category ? 'bg-ink text-white' : 'bg-transparent hover:text-orange'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-[22px] lg:grid-cols-3">
        {visibleProducts.map((product, index) => (
          <article
            key={product.id}
            className="group self-start border-2 border-ink bg-white"
          >
            {/* Image box with the number badge in the top left corner */}
            <div className="relative h-[340px] overflow-hidden border-b-2 border-ink bg-[#ddd] lg:h-[390px]">
              <span className="absolute left-3.5 top-3.5 z-10 bg-white px-[9px] py-[7px] text-[8px] font-extrabold">
                0{index + 1}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.035]"
              />
            </div>

            <div className="p-[22px]">
              <span className="text-[9px] font-extrabold tracking-[0.13em] text-orange">{product.category}</span>
              <h3 className="mt-1 text-[31px] font-bold">{product.name}</h3>
              <p className="mb-[22px] mt-1 text-[10px] text-[#777]">{product.description}</p>

              {/* Price row with a thin grey line on top */}
              <div className="flex items-center justify-between border-t border-[#aaa] pt-[17px]">
                <strong className="font-display text-[22px] font-bold">€{product.price}.00</strong>
                <button 
                className="text-[9px] font-extrabold transition-colors duration-300 hover:text-orange"
                onClick={() => addToCart(product)}
                >
                  ADD TO CART →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Shop