import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from '.'
// import BookingForm from './BookingForm';

test('renders BookingForm component', () => {
  const onSubmit = jest.fn();
  const updateTimes = jest.fn();
  const availableTimes = {option:["12:00", "13:00", "14:00"]};

  render(
    <BookingForm
      onSubmit={onSubmit}
      updateTimes={updateTimes}
      availableTimes={availableTimes}
    />
  );

  const dateLabel = screen.getByText(/Date/i);
  const buttonElement = screen.getByRole('button');
  expect(dateLabel).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
})