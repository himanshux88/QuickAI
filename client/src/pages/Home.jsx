import React from 'react'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonials from '../components/Testimonials'
import Plans from '../components/Plans'
import Footer from '../components/Footer'
import NavBar from "../components/Navbar"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AiTools />
      <Testimonials />
      <Plans />
      <Footer />
    </div>
  );
}

export default Home
