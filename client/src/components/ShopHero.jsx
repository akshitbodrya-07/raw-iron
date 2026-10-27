const ShopHero = () => {
  return (
    <section className="mx-auto mt-[72px] grid w-[calc(100%-32px)] border-2 border-ink bg-ink text-white md:mt-[104px] md:w-[min(1380px,calc(100%-64px))] md:grid-cols-[1fr_0.95fr]">
      {/* Left side: text */}
      <div className="flex flex-col items-start justify-center px-6 py-[42px] md:py-16 md:pl-[54px] md:pr-8">
        <span className="mb-5 text-[11px] font-extrabold tracking-[0.18em] text-orange">
          RAW IRON / PERFORMANCE NUTRITION
        </span>
        <h2 className="text-[clamp(55px,18.5vw,78px)] font-bold leading-[0.84] tracking-[-0.055em] md:text-[clamp(66px,7vw,116px)]">
          FUEL FOR
          <br />
          <em className="not-italic text-orange">THE FIGHT.</em>
        </h2>
        <p className="my-7 max-w-[480px] text-xs font-semibold leading-relaxed md:text-sm">
          No proprietary blends. No hidden doses. Just clinically-backed ingredients that earn their place in the tub.
        </p>
      </div>

      {/* Right side: orange box with the photo */}
      <div className="relative min-h-[410px] overflow-hidden border-t-2 border-orange bg-orange md:min-h-[646px] md:border-l-2 md:border-t-0">
        {/* Big faded word behind the photo */}
        <div className="absolute left-1/2 top-[-5%] z-0 -translate-x-1/2 font-display text-[34vw] font-bold leading-none text-white/20 md:text-[18vw]">
          FUEL
        </div>

        <img
          src="/assets/shop-hero.jpeg"
          alt="Creatine supplement with a scoop"
          className="absolute left-[5%] top-[8%] z-10 h-[84%] w-[90%] border-2 border-ink object-cover mix-blend-multiply"
        />

        {/* White outline frame, moved 10px right and down */}
        <div className="absolute inset-x-[5%] inset-y-[8%] z-20 translate-x-2.5 translate-y-2.5 border-2 border-white/55"></div>

        {/* Sideways white label on the right edge */}
        <span className="absolute bottom-[124px] right-[-55px] z-30 -rotate-90 bg-white px-6 py-2.5 font-display text-[11px] font-bold tracking-[0.12em] text-ink">
          FORMULATED FOR THE RELENTLESS
        </span>
      </div>
    </section>
  )
}

export default ShopHero