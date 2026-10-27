const words = ['NO FILLERS', 'FULLY DOSED', 'THIRD-PARTY TESTED', 'BUILT FOR WORK', 'NO FILLERS', 'FULLY DOSED']

const Ticker = () => {
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-orange" aria-hidden="true">
      <div className="flex w-max items-center gap-7 py-[15px] font-display text-[17px] font-bold tracking-[0.06em] text-white">
        {words.map((word, index) => (
          <div key={index} className="flex items-center gap-7">
            {index > 0 && <b className="text-ink">✦</b>}
            <span>{word}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ticker