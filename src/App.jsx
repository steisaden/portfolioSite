import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Tech, Works, StarsCanvas, Navbar, Feedbacks } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black-300'>
          <Navbar />
          <Hero />        
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          {/* <Feedbacks /> */}
          <Contact /> 
          <StarsCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App