import React, {useState} from 'react';
import FormCSS from './BookingForm.module.css';

function BookingForm(){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const availableTimes = ["11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM","09:00 PM"];

    const handleTimeBooking = (index) => {
        availableTimes.filter((_,i) => i !== index)
    };

    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation Complete!");
        clearForm();
    };

    return(
        <div>
        <form className={FormCSS.booking} onSubmit={handleSubmit}>
            <label htmlFor="res_date">Choose a Date</label>
            <input type="date" id="res_date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <label htmlFor="res_time">Choose a Time</label>
            <select id="res_time" value={time} onChange={(e) => setTime(e.target.value)}>
                {
                    availableTimes.map((t, index) => <option key={index} value={t} onClick={() => handleTimeBooking(index)}>{t}</option>)
                }
            </select>
            <label htmlFor="party">Number of Guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="party" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <label htmlFor="occasions">Occasion</label>
            <select id="occasions" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Nothing Special</option>
            </select>
            <input type="submit" value="Make Your Reservation"/>
        </form>
        </div>
    )
}

export default BookingForm;