import React, { useState } from 'react'
import Navbar from './Componentes/Navbar'
import Hero from './Componentes/Hero'
import TrustedBy from './Componentes/TrustedBy'
import Services from './Componentes/Services'
import OurWork from './Componentes/OurWork'
import Teams from './Componentes/Teams'
import ContactUs from './Componentes/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './Componentes/Footer'




const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      { /*yaha sa mana props pass kaya ha*/}
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App