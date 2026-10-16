
import plans from '../data/plans'
import SectionTitle from './SectionTitle'

const Plans = () => {
  return (
    <section id='plans' className='mx-auto mb-[110px] w-[calc(100%-32px)] pt-[110px] md:w-[min(1380px,calc(100%-64px))]'>
        <SectionTitle label="MEMBERSHIP" title="CHOOSE YOUR WEAPON"/>

        <div className='grid gap-5 lg:grid-cols-3'>
            {plans.map((plan) => (
                <article
                key={plan.id}
                className={`relative flex min-h-[380px] flex-col border-2 p-6 shadow-[5px_5px_0_#575757] md:p-8 ${plan.popular ? 'border-orange bg-orange text-white lg:-translate-y-2.5' : 'border-ink bg-white'}`}
                >
                    {plan.popular && (
                        <span className='absolute top-0 right-0 bg-ink px-2.5 py-[7px] text-[8px] font-extrabold text-white'>MOST POPULAR</span>
                    )}
                    <h3 className='text-[25px]'>{plan.name}</h3>
                    <p className='mt-1 mb-5 font-display text-[42px] font-bold'>
                        ${plan.price}
                        <small className='text-[12px]'>/MO</small>
                    </p>

                    <ul className='mb-[30px]'>
                        {plan.features.map((feature) => (
                            <li
                            key={feature}
                            className='my-[11px] text-[10px] font-bold'
                            >
                                <span className={`mr-[7px] ${plan.popular ? 'text-white': 'text-orange'}`}>✓</span>
                                {feature}
                            </li>
                        ))}

                    </ul>

                    <a href='#plans' className='mt-auto flex min-h-12 items-center justify-center border-2 border-ink bg-ink text-[10px] font-extrabold tracking-[0.04em] text-white transition-colors duration-300 hover:bg-white hover:text-ink'>SELECT PLAN</a>

                </article>
            ))}
        </div>

    </section>
  )
}

export default Plans
