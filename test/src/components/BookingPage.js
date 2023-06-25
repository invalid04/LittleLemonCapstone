import BookingForm from './BookingForm.js'
import Nav from './Nav.js'
import Footer from './Footer.js'
import { useReducer } from 'react'
import {fetchAPI } from './Api.js'

export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date())
  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Nav />
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
      <Footer />
    </>
  )
  
}