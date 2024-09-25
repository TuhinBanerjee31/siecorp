import './App.css'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import OurWork from './components/OurWork/OurWork'
import Extra from './components/Extra/Extra'
import NewsSlider from './components/NewsSlider/NewsSlider'

function App() {

  return (
    <div className=''>
    <Hero />
    <About />
    <OurWork />
    <Extra />
    <NewsSlider title="latest at siecorp" />
    <Footer />
    </div>
  )
}

export default App
