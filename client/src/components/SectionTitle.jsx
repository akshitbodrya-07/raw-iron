

const SectionTitle = ({ label, title }) => {
  return (
    <div className="mb-[34px] flex flex-wrap items-center gap-4">
        <span className="rotate-180 pb-2 text-[10px] font-extrabold tracking-[0.14em] text-orange [writing-mode:vertical-rl]">
            {label}
        </span>

        <h2 className="text-[40px] font-bold italic leading-none tracking-[-0.04em] md:text-[clamp(40px,5vw,68px)]">
            {title}
        </h2>

        <div className="mb-[7px] w-full border-b-2 border-ink"></div>
      
    </div>
  )
}

export default SectionTitle
