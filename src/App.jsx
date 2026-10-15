import Crew from './components/Crew'
import Header from './components/Header'
import Hero from './components/Hero'
import Promo from './components/Promo'
import Schedule from './components/Schedule'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Crew />
        <Promo />
      </main>
    </>
  )
}

export default App

