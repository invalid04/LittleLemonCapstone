import Nav from "./Nav"
import Header from "./Header"
import Hero from "./Hero"
import Specials from "./Specials"
import Testimonials from './Testimonials'
import Main from "./Main"
import Footer from "./Footer"

function HomePage() {
  return (
    <div>
      <Nav />
      <Hero /> 
      <Specials />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage