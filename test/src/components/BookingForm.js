import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import './BookingForm.css'

export default function BookingForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState('');
  const [occasion, setOccasion] = useState('');
  const [preferences, setPreferences] = useState('');
  const [comments, setComments] = useState('');
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate(); // Moved useNavigate to the top level of the component

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);
    var stringify = e.target.value;
    const selectedDate = new Date(stringify);
    props.updateTimes(selectedDate);
    setFinalTime(props.availableTimes.map((times) => <option key={times}>{times}</option>));
    validateForm(); 
  }

  function validateForm() {
    const inputs = [firstName, lastName, email, phone, date];
    const isFormValid = inputs.every(input => input.trim() !== '');
    setFormValid(isFormValid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formValid) {
      console.log('Form submitted!');
      navigate('/confirmation'); // Now using navigate here
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
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
          className="firstNameInput"
          onChange={(e) => {setFirstName(e.target.value); validateForm()}}
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
          onChange={(e) => {setLastName(e.target.value); validateForm()}}
          className="lastNameInput"
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
          className="emailInput"
          onChange={(e) => {setEmail(e.target.value); validateForm()}}
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
          className="phoneInput"
          onChange={(e) => {setPhone(e.target.value); validateForm()}}
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
          className="numberInput"
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
          className="dateInput"
          onChange={handleDateChange}
          >
        </input>
      </div>
      <div className="inputField">
        <label htmlFor="time">Select Time</label>
        <select id="time" required className="timeInput">
          {finalTime}
        </select>
      </div>
      <div className="inputField">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          className="occasionInput"
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
          className="preferencesInput"
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
          className="commentsInput"
          onChange={(e) => setComments(e.target.value)}
          ></textarea>
      </div>
      <Link to="/confirmation" className="formButton" disabled={!formValid}>
        Book Table
      </Link>
    </form>
  )
} 