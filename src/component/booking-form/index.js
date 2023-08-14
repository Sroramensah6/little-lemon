import { useState } from "react"
import Button from "../button"

function BookingForm({ onSubmit, isFormSubmitted, dispatchOnDateChange, availableTimes }) {
    const defaultTime = availableTimes[0];
    const [booking, setBooking] = useState({
        date: '',
        time: defaultTime,
        occasion: '',
        number_of_guest: '',
    })

    const handleInputChange = (e) => {
        const { value, name } = e.target
        if (name === 'date') {
            dispatchOnDateChange(value)
        }
        setBooking({
            ...booking,
            [name]: value,
        })
    }

    return (
        <section className='form-container'>
            <section className='form-content'>
                <h1 className="reservation-title">Table reservation</h1>
                <form style={{ display: "grid", gap: "20px" }} onSubmit={(e) => onSubmit(e, booking)}>
                    <section>
                        <label htmlFor="res-date">Date</label>
                        <input
                            required
                            type="date"
                            name="date"
                            id="res-date"
                            aria-required
                            value={booking.date}
                            onChange={handleInputChange}
                            className={isFormSubmitted && !booking.date ? "error" : ""}
                        />
                    </section>
                    <section className='select'>
                        <label aria-label="Choose time" htmlFor="choose-time">Choose time</label>
                        <select
                            required
                            name='time'
                            aria-required
                            id="choose-time"
                            value={booking.time}
                            aria-label="choose-time"
                            onChange={handleInputChange}
                            className={isFormSubmitted && !booking.time ? "error" : ""}
                        >
                            <option value="">Select a Time</option>
                            {availableTimes.map((time) => (
                                <option key={time}>{time}</option>
                            ))}
                        </select>
                    </section>
                    <section>
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            min="1"
                            max="10"
                            required
                            id="guests"
                            type="number"
                            aria-required
                            placeholder="0"
                            name="number_of_guest"
                            onChange={handleInputChange}
                            value={booking.number_of_guest}
                            className={isFormSubmitted && !booking.number_of_guest ? "error" : ""}
                        />
                    </section>
                    <section className='select'>
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            required
                            id="occasion"
                            aria-required
                            name="occasion"
                            value={booking.occasion}
                            onChange={handleInputChange}
                            className={isFormSubmitted && !booking.occasion ? "error" : ""}
                        >
                            <option value="">Select an Option</option>
                            <option value={'Birthday'}>Birthday</option>
                            <option value={'Anniversary'}>Anniversary</option>
                        </select>
                    </section>
                    <Button type="submit" title="Make Your reservation" />
                </form>
            </section>
        </section>
    )
}

export default BookingForm
