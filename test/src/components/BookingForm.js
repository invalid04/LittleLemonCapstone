import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function BookingForm(props) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState('');
  const [occasion, setOccasion] = useState('');
  const [preferences, setPreferences] = useState('');
  const [comments, setComments] = useState('')

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);
    var stringify = e.target.value;
    const date = new Date(stringify);
    props.updateTimes(date);
    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>))
  }
  
  return (
    <form className="formContainer">
      <div className="inputField">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={15}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          >
        </input>
      </div>
      <div className="inputField">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Last Name"
          required
          minLength={2}
          maxLength={15}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          >
        </input>
      </div>
      <div className="inputField">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          minLength={2}
          maxLength={30}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          >
        </input>
      </div>
      <div className="inputField">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          placeholder="xxx-xxx-xxxx"
          required
          minLength={10}
          maxLength={20}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          >
        </input>
      </div>
      <div className="inputField">
        <label htmlFor="people">Number of People</label>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          required
          min={1}
          max={15}
          onChange={(e) => setPeople(e.target.value)}
          >
        </input>
      </div>
      <div className="inputField">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
          >
        </input>
      </div>
      <div className="inputField">
        <label htmlFor="time">Select Time</label>
        <select id="time" required>
          {finalTime}
        </select>
      </div>
      <div className="inputField">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>
      <div className="inputField">
        <label htmlFor="preferences">Seating Preferences</label>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          >
          <option>None</option>
          <option>Indoor</option>
          <option>Outdoors</option>
        </select>
      </div>
      <div className="inputField">
        <label htmlFor="comments">Additional Comments</label>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="comments"
          onChange={(e) => setComments(e.target.value)}
          ></textarea>
      </div>
      <Link className="formButton" to="/confirmation">Book Table</Link>
    </form>
  )
} 


