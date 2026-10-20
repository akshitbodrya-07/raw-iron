const steps = ['01 PRIME', '02 PERFORM', '03 RECOVER']

const StackBanner = () => {
  return (
    <section className="mx-auto mt-6 flex w-[calc(100%-32px)] flex-col items-start gap-10 border-2 border-ink bg-white px-6 py-9 md:w-[min(1380px,calc(100%-64px))] md:px-14 md:py-[50px] lg:flex-row lg:items-center lg:justify-between">
        <div className="shrink-0">
            <span className="mb-3.5 block text-[11px] font-extrabold tracking-[0.18em] text-orange">THE DAILY PROTOCOL</span>
            <h2 className="text-4xl font-bold leading-none md:text-5xl">BUILD YOUR STACK.</h2>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-xs font-bold tracking-[0.15em] text-orange md:gap-[18px] md:text-sm">
            {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-[18px]">
                    {index > 0 && <div className="hidden h-0.5 w-20 bg-ink md:block"></div>}
                    <span className="whitespace-nowrap">{step}</span>
                </div>
            ))}
        </div>

        <a href="#plans" className="flex min-h-[60px] items-center whitespace-nowrap border-[3px] border-ink bg-orange px-[30px] text-xs font-extrabold text-white shadow-[6px_6px_0_#cfcfcf] transition duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#cfcfcf]">ADD FULL STACK — $117 →</a>
    </section>
  )
}

export default StackBanner
