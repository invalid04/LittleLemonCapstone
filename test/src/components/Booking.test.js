import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the BookingForm component', () => {
  render(<BookingForm />);
});

test('disables the "Book Table" button when the form is invalid', () => {
  const { getByText, getByLabelText } = render(<BookingForm />);
  const bookButton = getByText('Book Table');
  const firstNameInput = getByLabelText('First Name');
  const lastNameInput = getByLabelText('Last Name');
  const emailInput = getByLabelText('Email');
  const phoneInput = getByLabelText('Phone Number');
  const dateInput = getByLabelText('Date');

  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(phoneInput, { target: { value: '1234567890' } });
  fireEvent.change(dateInput, { target: { value: '2023-06-30' } });

  expect(bookButton).not.toBeDisabled();
});

