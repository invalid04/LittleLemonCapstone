import './Testimonials.css'

function Testimonials() {
  return (
    <section className="testimonialSection">
      <h1>Testimonials</h1>
      <section className="testimonialRows">
        <article className="testimonialCard">
          <img src={require("./star.png")} className="testimonialImg"/>
          <h3 className="testimonialName">John</h3>
          <p className="testimonialDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </article>
        <article className="testimonialCard">
          <img src={require("./star.png")} className="testimonialImg"/>
          <h3 className="testimonialName">Bob</h3>
          <p className="testimonialDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </article>
        <article className="testimonialCard">
          <img src={require("./star.png")} className="testimonialImg"/>
          <h3 className="testimonialName">Bill</h3>
          <p className="testimonialDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </article>
        <article className="testimonialCard">
          <img src={require("./star.png")} className="testimonialImg"/>
          <h3 className="testimonialName">Stan</h3>
          <p className="testimonialDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </article>
        <article className="testimonialCard">
          <img src={require("./star.png")} className="testimonialImg"/>
          <h3 className="testimonialName">Cartman</h3>
          <p className="testimonialDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </article>
        <article className="testimonialCard">
          <img src={require("./star.png")} className="testimonialImg"/>
          <h3 className="testimonialName">Timmy</h3>
          <p className="testimonialDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </article>
      </section>
    </section>
  )
}

export default Testimonials