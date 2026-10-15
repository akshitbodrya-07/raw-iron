
import classes from '../data/classes'
import SectionTitle from './SectionTitle'

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI']

const Schedule = () => {
  return (
    <section className='mx-auto w-[calc(100%-32px)] pt-[110px] md:w-[min(1380px,calc(100%-64px))]'>
        <SectionTitle label="THIS WEEK" title="WEEKLY SCHEDULE" />

        <div className='grid border-2 border-ink bg-white md:grid-cols-3 lg:grid-cols-5'>
            {days.map((day) => (
                <article key={day} className='border-ink md:border-r'>
                    <h3 className="bg-ink p-3.5 text-center text-[15px] text-white">{day}</h3>

                    {classes
                    .filter((item) => item.day === day)
                    .map((item) => (
                        <div 
                        key={item.id}
                        className='min-h-[100px] border-t border-ink p-[15px] transition duration-300 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:bg-orange hover:text-white hover:shadow-[4px_4px_0_var(--color-ink)]'
                        >
                            <time className='mb-1.5 block text-[9px] tracking-[0.07em]'>{item.time}</time>
                            <strong className='block font-display text-sm font-bold tracking-[-0.02em]'>{item.name}</strong>
                            
                        </div>    
                    ))}

                </article>
            ))}

        </div>

    </section>
  )
}

export default Schedule
