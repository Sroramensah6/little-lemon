import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import BookingPage from '.'

test("render the booking page components", () => {
    render(
        <Router>
            <BookingPage />
        </Router>
    )
    const reserveATable = screen.getByTestId("reserve-a-table")
    expect(reserveATable).toBeInTheDocument()
})