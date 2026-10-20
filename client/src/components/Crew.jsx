import crew from "../data/crew"
import SectionTitle from "./SectionTitle"


const Crew = () => {
  return (
    <section id="crew" className="mx-auto w-[calc(100%-32px)] pt-[110px] pb-[104px] md:w-[min(1380px,calc(100%-64px))]">
        <SectionTitle label="MEET YOUR" title="THE CREW" />

        <div className="grid gap-[25px] md:grid-cols-2 lg:grid-cols-3">
            {crew.map((coach, index) => (
                <article
                key={coach.id} 
                className="group border-2 border-ink bg-white shadow-[5px_5px_0_#575757] transition duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-ink hover:text-white hover:shadow-[5px_5px_0_var(--color-orange)]"
                >
                    <img src={coach.image} alt={coach.name} className="h-[320px] w-full object-cover grayscale contrast-115 transition duration-300 group-hover:grayscale-0 md:h-[360px]"/>

                    <div className="relative min-h-[184px] border-t-2 border-ink p-6">
                        <span className="absolute top-[18px] right-5 font-display text-3xl font-bold text-[#aaa]">0{index + 1}</span>

                        <h3 className="max-w-[80%] text-[28px] leading-none">{coach.name}</h3>
                        <strong className="mt-2 mb-[17px] block font-display text-[10px] font-bold tracking-[0.06em] text-orange">{coach.role}</strong>
                        <p className="max-w-[340px] text-xs leading-[1.55]">{coach.bio}</p>

                    </div>

                </article>
            ))}
        </div>

    </section>
  )
}

export default Crew
