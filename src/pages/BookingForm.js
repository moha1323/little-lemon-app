import React, { useEffect, useState } from 'react';
import FormCSS from './BookingForm.module.css';
// import hours from './businessHours';

function BookingForm(props){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    useEffect(() => {
        if(date !== ""){
            const storedState = JSON.parse(localStorage.getItem(date));
            if(storedState != null){
                if(storedState.date === date){
                    props.dispatch({type: "updateAvailableTimes", payload: storedState.availableTimes});
                }
            }
        }
    }, [date]);

    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch({type: "updateDate", payload: date});
        props.dispatch({type: "updateTime", payload: time});
        props.dispatch({type: "updateSize", payload: guests});
        props.dispatch({type: "updateOccasion", payload: occasion});
        props.dispatch({type: "updateConfirmed", payload: "Yes"})
        alert("Reservation Complete!");
        clearForm();
    };

    return(
        <div>
        <form className={FormCSS.booking} onSubmit={handleSubmit}>
            <label htmlFor="res_date">Choose a Date</label>
            <input type="date" id="res_date" value={date} onChange={(e) => setDate(e.target.value)} required/>
            <label htmlFor="res_time">Choose a Time</label>
            <select id="res_time" value={time} onChange={(e) => setTime(e.target.value)} required>
                <option>Please Select</option>
                {/* {hours.map((hour, index) => <option key={index} value={hour}>{hour}</option>)} */}
                {
                    props.state.availableTimes.map((time, index) => {
                        return <option key={index} value={time}>{time}</option>
                    })
                }
            </select>
            <label htmlFor="party">Number of Guests</label>
            <input type="number" placeholder="0" min="1" max="10" id="party" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
            <label htmlFor="occasions">Occasion</label>
            <select id="occasions" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Please Select</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your Reservation"/>
        </form>
        </div>
    )
}

export default BookingForm;