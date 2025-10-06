import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ideas from './components/ideas'
import Features from './components/Features'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import ContactForm from './components/Contactform'
import Location from './components/Location'
const page = () => {
  return (
    <div>
      <Navbar/>
<Hero/>
<Ideas/>
<Features/>
<Location/>
<Experience/>
<Testimonials/>
<Faq/>
<ContactForm/>

    </div>
  )
}
export default page