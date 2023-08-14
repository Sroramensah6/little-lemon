import { useNavigate } from 'react-router-dom'
import React, { useReducer, useState } from 'react'

import './booking-page.css'
import { fetchAPI, submitAPI } from '../../util'
import { BookingForm, Modal } from '../../component'

function BookingPage () {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const initializeTimes = (initialAvailableTimes) => [
        ...initialAvailableTimes,
        ...fetchAPI(new Date()),
    ];
    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return response.length !== 0 ? response : availableTimes;
    };

    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes)

    const handleSubmit = (e, booking) => {
        e.preventDefault()
        setIsFormSubmitted(true);
        submitAPI(booking)
        const areAllFieldsFilled = Object.values(booking).every(
            (value) => value
        )

        if (areAllFieldsFilled) setIsModalVisible(true)
    }

    return (
        <section data-testid="reserve-a-table" className="reservation">
            <main className="reservation-card">
                <BookingForm
                    onSubmit={handleSubmit}
                    updateTimes={updateTimes}
                    availableTimes={availableTimes}
                    isFormSubmitted={isFormSubmitted}
                    dispatchOnDateChange={dispatchOnDateChange}
                />
            </main>
            <Modal
                onClose={() => {
                    setIsModalVisible(false);
                    navigate('/');
                }}
                visible={isModalVisible}
                title="Reservation Completed!"
                description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
            />
        </section>
    )
}

export default BookingPage
