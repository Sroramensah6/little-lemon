import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from '.'
// import BookingForm from './BookingForm';

test('renders BookingForm component', () => {
  const onSubmit = jest.fn();
  const dispatchOnDateChange = jest.fn();
  const availableTimes = ["12:00", "13:00", "14:00"]

  render(
    <BookingForm
      onSubmit={onSubmit}
      isFormSubmitted={false}
      availableTimes={availableTimes}
      dispatchOnDateChange={dispatchOnDateChange}
    />
  );

  const dateLabel = screen.getByText(/Date/i);
  const buttonElement = screen.getByRole('button');
  expect(dateLabel).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
})