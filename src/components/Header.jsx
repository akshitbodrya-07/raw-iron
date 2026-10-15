const navLinks = [
    {label: 'TRAIN', href: '#train'},
    { label: 'SUPPLEMENTS', href: '#supplements' },
    { label: 'ABOUT', href: '#crew' },
    { label: 'CONTACT', href: '#contact' },
]

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto mt-5 flex w-[calc(100%-32px)] flex-wrap items-center justify-between border-[3px] border-line bg-paper px-4 py-3 md:h-[75px] md:w-[min(1380px,calc(100%-64px))] md:flex-nowrap md:py-0 md:pl-[22px]">

        <a href="#train" className="font-display text-[23px] font-bold leading-none tracking-[-1px]"> RAW<span className="text-orange">:</span>IRON
        </a>

        <nav className="order-3 mt-2 flex w-full justify-between md:order-none md:mt-0 md:w-auto md:gap-9">
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="border-b-[3px] border-transparent py-2 text-[10px] font-extrabold tracking-[0.08em] hover:border-orange md:text-xs"
                >
                    {link.label}
                </a>
            ))}

        </nav>

        <a href="#plans" className="flex h-10 items-center bg-ink px-5 text-[11px] font-extrabold tracking-[0.08em] text-white transition-colors duration-300 hover:bg-orange">
            JOIN US
        </a>

    </header>
  )
}

export default Header
