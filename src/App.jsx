import React from 'react'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Industry from './Pages/Industry/Industry'
import Stories from './Pages/Stories/Stories'
import Clients from './Pages/Clients/Clients'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Industry />
      <Stories />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App