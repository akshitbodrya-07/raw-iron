import { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'
import SaveToggle from './SaveToggle'

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI']

const filters = ['ALL', 'STRENGTH', 'CARDIO', 'COMBAT', 'MOBILITY']


const Schedule = () => {

    const [currentFilter, setCurrentFilter] = useState('ALL')

    const [savedIds, setSavedIds] = useState([])

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/classes`)
        .then((response) => response.json())
        .then((data) => setClasses(data))
    }, [])

    const toggleSaved = (id) => {
        if (savedIds.includes(id)) {
            setSavedIds(savedIds.filter((savedId) => savedId !== id))
        } else {
            setSavedIds([...savedIds, id])
        }   
    }

  return (
    <section className='mx-auto w-[calc(100%-32px)] pt-[110px] md:w-[min(1380px,calc(100%-64px))]'>
        <SectionTitle label="THIS WEEK" title="WEEKLY SCHEDULE" />

        <div className='mb-6 flex flex-wrap gap-2'>
            {filters.map((filter) => (
                <button
                key={filter}
                onClick={() => setCurrentFilter(filter)}
                className={`border-2 border-ink px-4 py-2 text-[10px] font-extrabold tracking-[0.08em] transition-colors duration-300 ${currentFilter == filter ? 'bg-ink text-white' : 'bg-white hover:bg-orange hover:text-white'}`}
                >
                    {filter}
                </button>
            ))}
        </div>

        <div className='grid border-2 border-ink bg-white md:grid-cols-3 lg:grid-cols-5'>
            {days.map((day) => (
                <article key={day} className='border-ink md:border-r'>
                    <h3 className="bg-ink p-3.5 text-center text-[15px] text-white">{day}</h3>

                    {classes
                    .filter((item) => item.day === day && (currentFilter === 'ALL' || item.type === currentFilter))
                    .map((item) => (
                        <div 
                        key={item.id}
                        className='group relative min-h-[100px] border-t border-ink p-[15px] transition duration-300 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:bg-orange hover:text-white hover:shadow-[4px_4px_0_var(--color-ink)]'
                        >
                            <time className='mb-1.5 block text-[9px] tracking-[0.07em]'>{item.time}</time>
                            <strong className='block font-display text-sm font-bold tracking-[-0.02em]'>{item.name}</strong>
                            <SaveToggle saved={savedIds.includes(item.id)} onToggle={() => toggleSaved(item.id)} />
                            
                        </div>    
                    ))}

                </article>
            ))}

        </div>

    </section>
  )
}

export default Schedule
