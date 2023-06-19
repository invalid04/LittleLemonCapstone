import { Link } from 'react-router-dom'
import './Specials.css'

function Specials() {
  return (
    <section className="specialBox">
      <div className="topRows">
        <h1>This Weeks Specials</h1>
        <Link to="/" className="menuBtn">Online Menu</Link>
      </div>
      <section className="cardRow">
        <article className="specialCard">
          <img src={require("./greekSalad.jpeg")} className="cardImg"/>
          <h1 className="cardTitle">Greek Salad</h1>
          <h4 className="cardPrice">$11.99</h4>
          <p className="cardDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link to="/" className="orderBtn">Order for Delivery</Link>
        </article>
        <article className="specialCard">
          <img src={require("./bruschetta.jpeg")} className="cardImg"/>
          <h1 className="cardTitle">Bruschetta</h1>
          <h4 className="cardPrice">$11.99</h4>
          <p className="cardDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link to="/" className="orderBtn">Order for Delivery</Link>
        </article>
        <article className="specialCard">
          <img src={require("./lemonDessert.jpeg")} className="cardImg"/>
          <h1 className="cardTitle">Lemon Dessert</h1>
          <h4 className="cardPrice">$11.99</h4>
          <p className="cardDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link to="/" className="orderBtn">Order for Delivery</Link>
        </article>
      </section>
    </section>
  )
}

export default Specials