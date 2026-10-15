const heroStats = [
    { number: '500+', label: 'MEMBERS' },
    { number: '24/7', label: 'ACCESS' },
    { number: '3', label: 'EXPERT COACHES' },
]

const Hero = () => {
  return (
    <section id="#train" className="mx-auto mt-[30px] grid w-[calc(100%-32px)] gap-[30px] md:w-[min(1380px,calc(100%-64px))] lg:min-h-[640px] lg:grid-cols-[1.1fr_0.9fr]">

        {/* left part of hero section */}

        <div className="relative flex flex-col items-start justify-center border-[3px] border-ink bg-white px-[22px] py-9 shadow-[10px_10px_0_var(--color-ink)] md:py-12 lg:pr-24 md:pl-[42px]">

            <div className="absolute top-1/2 right-8 hidden -translate-y-1/2 rotate-180 items-center gap-8 whitespace-nowrap [writing-mode:vertical-rl] lg:flex">

            {heroStats.map((stat) => (
                <p key={stat.label} className="font-display text-xl font-bold leading-none tracking-[0.05em]">
                    <span className="text-orange">{stat.number}</span>
                    {' '}
                    <span className="text-ink/30">{stat.label}</span>
                </p>
            ))}

            </div>

            <h1 className="text-[56px] font-bold leading-[0.84] tracking-[-0.06em] md:text-[clamp(82px,8.2vw,132px)]">
                RAW
                <br/>
                <span className="text-orange">STRENGTH</span>
                <br/>
                DEFINED.
            </h1>

            <p className="mt-[26px] mb-8 max-w-[525px] text-sm font-bold leading-normal">
                No fancy lights. No luxury towels. Just sweat, iron, and results.
                Welcome to the underground of elite performance.
            </p>

            <a 
            href="#plans" 
            className="inline-flex min-h-[52px] items-center justify-center border-[3px] border-ink bg-orange px-[25px] py-2.5 text-[10px] font-extrabold tracking-[0.04em] text-white shadow-[6px_6px_0_var(--color-ink)] transition duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-ink)]">
                START TRAINING →
            </a>

        </div>

        {/* right part of hero section */}

        <div className="relative min-h-[420px] overflow-hidden border-[3px] border-ink bg-[#222] shadow-[10px_10px_0_var(--color-orange)]">

            <img 
            src="/assets/hero2.png" 
            alt="Intense Deadlift in industrial gym" 
            className="absolute inset-0 h-full w-full object-cover"
            />

        </div>
    </section>
  )
}

export default Hero
