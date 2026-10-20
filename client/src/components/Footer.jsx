const footerLinks = [
  { label: 'TRAINING', href: '#train' },
  { label: 'SUPPLEMENTS', href: '#supplements' },
  { label: 'THE CREW', href: '#crew' },
]

const Footer = () => {
  return (
    <footer id="contact" className="mt-10 bg-ink pt-20 pb-[30px] text-white">
        <div className="mx-auto grid w-[calc(100%-32px)] gap-8 md:w-[min(1380px,calc(100%-64px))] md:grid-cols-2 md:gap-10 lg:grid-cols-[1.6fr_1fr_1.3fr_1.5fr]">
            <div>
                <a href="#train" className="font-display text-[32px] font-bold leading-none tracking-[-1px]">
                    RAW
                    <span className="text-orange">:</span>
                    IRON
                </a>
                <p className="mt-6 font-display text-lg font-bold text-[#aaa]">BUILT FOR THOSE WHO REFUSE TO SETTLE.</p>
            </div>

            <div>
                <h4 className="mb-7 text-[11px] font-extrabold tracking-[0.16em] text-orange">NAVIGATE</h4>
                {footerLinks.map((link) => (
                    <a
                    key={link.href}
                    href={link.href}
                    className="mb-3.5 block text-[13px] font-extrabold hover:text-orange"
                    >{link.label}</a>
                ))}
            </div>

            <div>
                <h4 className="mb-7 text-[11px] font-extrabold tracking-[0.16em] text-orange">FIND US</h4>
                <p className="text-[13px] leading-[1.8] text-[#ccc]">
                    123 INDUSTRIAL WAY
                    <br/>
                    BROOKLYN, NY 10001
                </p>
            </div>
            
            <div>
                <h4 className="mb-7 text-[11px] font-extrabold tracking-[0.16em] text-orange">NOISE WORTH HEARING</h4>
                <p className="text-[13px] leading-[1.8] text-[#ccc]">Weekly training drops. Zero spam.</p>
                <div className="mt-6 flex border border-[#555]">
                    <input type="email" placeholder="YOUR EMAIL" className="min-w-0 flex-1 bg-transparent p-[18px] text-xs text-white"/>
                    <button type="button" className="w-[60px] bg-white text-lg text-ink">→</button>
                </div>
            </div>
        </div>

        <div className="mx-auto mt-20 flex w-[calc(100%-32px)] flex-col items-center gap-3 border-t border-[#333] pt-[30px] text-center text-[10px] font-bold text-[#aaa] md:w-[min(1380px,calc(100%-64px))] md:flex-row md:justify-between md:text-left">
            <small>© 2026 RAW IRON. NO EXCUSES.</small>
            <p>
                <a href="#" className="hover:text-orange">INSTAGRAM</a> / <a href="#" className="hover:text-orange">YOUTUBE</a> / <a href="#" className="hover:text-orange">TIKTOK</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer
