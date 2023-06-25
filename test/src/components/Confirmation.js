import Nav from './Nav.js'
import Footer from './Footer.js'
import './Confirmation.css'

export default function Confirmation() {
  return (
    <>
      <Nav />
      <div className="confirmContainer">
        <h1 className="confirmation">Booking Confirmed!</h1>
      </div>
      <Footer />
    </>
    )
}