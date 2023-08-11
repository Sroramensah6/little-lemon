import { useState } from "react"

function BookingForm({ onSubmit, dispatchOnDateChange, availableTimes }) {
    const [booking, setBooking] = useState({
        date: '',
        time: '',
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
                <form style={{ display: "grid", gap: "20px" }} onSubmit={(e) => onSubmit(e, booking)}>
                    <section>
                        <label htmlFor="res-date">Date</label>
                        <input aria-required required type="date" name="date" value={booking.date} id="res-date" onChange={handleInputChange} />
                    </section>
                    <section className='select'>
                        <label aria-label="Choose time" htmlFor="choose-time">Choose time</label>
                        <select aria-label="choose-time" aria-required required id="choose-time" value={booking.time} name='time' onChange={handleInputChange}>
                            {availableTimes.map((time) => (
                                <option value={time} key={time}>{time}</option>
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
                        />
                    </section>
                    <section className='select'>
                        <label htmlFor="occasion">Occasion</label>
                        <select aria-required required id="occasion" name="occasion" value={booking.occasion} onChange={handleInputChange}>
                            <option value={'Birthday'}>Birthday</option>
                            <option value={'Anniversary'}>Anniversary</option>
                        </select>
                    </section>
                    <input className='btn' type="submit" value="Make Your reservation" />
                </form>
            </section>
        </section>
    )
}

export default BookingForm
