const stats = [
  { value: '100%', label: 'LABEL TRANSPARENCY' },
  { value: '0G', label: 'ADDED SUGAR' },
  { value: '3X', label: 'QUALITY CHECKED' },
]

const Stats = () => {
  return (
    <section className='relative mx-auto grid w-[calc(100%-32px)] items-end gap-10 overflow-hidden bg-ink px-6 pt-[60px] pb-10 text-white md:w-[min(1380px,calc(100%-64px))] md:px-10 md:pt-20 md:pb-[60px] lg:grid-cols-2 lg:px-20 lg:pt-[110px] lg:pb-[100px]'>
        <span className="absolute top-5 right-10 font-display text-[90px] font-bold leading-none text-[#3a3a3a] md:text-[150px]">03</span>

        <div className="relative">
            <span className="mb-5 block text-[11px] font-extrabold tracking-[0.18em] text-orange">THE RAW STANDARD</span>
            <h2 className="text-5xl font-bold leading-[0.95] md:text-[clamp(48px,5vw,92px)]">
                NOTHING TO HIDE
                <br/>
                <span className="text-orange">EVER.</span>
            </h2>
            <p className="mt-7 max-w-[560px] text-sm leading-[1.7] text-[#c7c7c7]">Every batch is third-party tested for identity, purity, and banned substances. What you see on the label is exactly what you get, and nothing you don't.</p>
        </div>

        <div className="relative grid md:grid-cols-3">
            {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col justify-end border-t border-[#444] pt-6 pb-6 md:min-h-[195px] md:border-t-0 md:border-l md:pt-0 md:pb-[30px] md:pl-7">
                    <strong className="font-display text-[50px] font-bold leading-none text-orange">{stat.value}</strong>
                    <span className="mt-3 text-[10px] font-extrabold">{stat.label}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Stats
