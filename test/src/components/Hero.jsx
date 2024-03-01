import './Hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="box">
      <div className="leftCont">
        <h1 className="title">Little Lemon</h1>
        <h2 className="city">Chicago</h2>
        <p className="description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
        <button className="reserve"><Link to='/booking'>Reserve a table</Link></button>
      </div>
      <img src={require("./HeroImage.jpeg")} className="heroImg"/>
    </div>
  )
}

export default Hero