// Note: the yellow things on classes like h-[75px] are only suggestions from
// the Tailwind CSS IntelliSense extension. It suggests h-18.75 instead of h-[75px]
// (Tailwind counts in 4px steps: 18.75 x 4 = 75px). Both give the same result.
// I kept the [px] values on purpose so they match my Assignment 1 CSS exactly.


import Header from './components/Header'
import Hero from './components/Hero'
import Schedule from './components/Schedule'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Schedule />
      </main>
    </>
  )
}

export default App

