import './Footer.css'

function Footer() {
  return (
    <section className="footerBox">
      <article className="leftSideFooter">
        <h3 className="footerTitle">OPENING TIMES</h3>
        <h4 className="footerInfo">Mon-Thurs: 11:00 AM - 9:00 PM</h4>
        <h4 className="footerInfo">Fri-Sat: 11:00 AM - 12:00 AM</h4>
        <h4 className="footerInfo">Sun: 9:00 AM - 7:00 PM</h4>
      </article>
      <article className="middleFooter">
        <h3 className="footerTitle">CONTACT US</h3>
        <h4 className="footerInfo">Phone: 123 456 7890</h4>
        <h4 className="footerInfo">Email: littlelemon@gmail.com</h4>
      </article>
      <article className="rightSideFooter">
        <h3 className="footerTitle">LOCATIONS</h3>
        <h4 className="footerInfo">1100 George Rd, Boston, MA</h4>
      </article>
    </section>
  )
}

export default Footer