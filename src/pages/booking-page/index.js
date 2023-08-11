import React, { useReducer, useState } from 'react'

import { fetchAPI } from '../../util'
import { BookingForm } from '../../component'

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "2023-08-02":
//             return {
//                 option: [
//                     "17:00",
//                     "18:00",
//                     "19:00",
//                     "20:00",
//                 ],
//             }
//         case "2023-08-03":
//             return {
//                 option: [
//                     "20:00",
//                     "21:00",
//                     "22:00",
//                 ],
//             }
//       default:
//         return state;
//     }
// };


// const initializeTimes = {
//     option: [
//         "17:00",
//         "18:00",
//         "19:00",
//         "20:00",
//         "21:00",
//         "22:00",
//     ],
// }
function BookingPage () {
    const initializeTimes = (initialAvailableTimes) => [
        ...initialAvailableTimes,
        ...fetchAPI(new Date()),
    ];
    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return response.length !== 0 ? response : availableTimes;
    };

    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes)

    const handleSubmit = (e, booking,) => {
        e.preventDefault()
        console.log(booking)
    }

    return (
        <section data-testid="reserve-a-table" className="reservation">
            <main className="reservation-card">
                <BookingForm
                    onSubmit={handleSubmit}
                    updateTimes={updateTimes}
                    availableTimes={availableTimes}
                    dispatchOnDateChange={dispatchOnDateChange}
                />
            </main>
        </section>
    )
}

export default BookingPage
