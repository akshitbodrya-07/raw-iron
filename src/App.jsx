import Crew from './components/Crew'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
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
        <Plans />
      </main>
      <Footer />
    </>
  )
}

export default App

