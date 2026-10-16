
function Promo() {
  return (
    <section id="supplements" className="mx-auto grid w-[calc(100%-32px)] bg-ink text-white md:w-[min(1380px,calc(100%-64px))] lg:min-h-[400px] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start justify-center gap-2.5 px-6 py-10 md:p-[60px]">
            <span className="mb-4 text-[10px] font-extrabold tracking-[0.18em] text-orange">FUEL THE WORK</span>
            <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.04em] md:text-[clamp(52px,6vw,82px)]">CLEAN FUEL.
                <br/>
                <em className="text-orange">ZERO FILLER.</em>
            </h2>
            <p className="mt-5 mb-[30px] max-w-[450px] text-[13px] leading-normal text-[#c7c7c7]">Performance supplements engineered for hard sessions and harder recovery.</p>
            <a href="#plans" className="inline-flex min-h-[52px] items-center justify-center border-[3px] border-ink bg-white px-[25px] py-2.5 text-[10px] font-extrabold tracking-[0.04em] text-ink shadow-[4px_4px_0_var(--color-orange)] transition duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-orange)]">SHOP SUPPLEMENTS →</a>
        </div>

        <div className="h-[400px] overflow-hidden border-t-[3px] border-orange lg:h-auto lg:border-t-0 lg:border-l-[3px]">
            <img src="/assets/promoimage.avif" alt="supplement scoop" className="h-full w-full object-cover"/>
        </div>

    </section>
  )
}

export default Promo
