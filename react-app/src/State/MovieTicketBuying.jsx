import { useState } from "react";

function MovieTicketBuying() {
    const [ticket, setTicket] = useState({moviename: '', seats: 0, price_per_ticket: 0});

    const handleForm = (e) => {
        e.preventDefault();
        console.log('Form submit clicked!')
    }

    return (
        <form onSubmit={handleForm}>
            <label htmlFor="moviename">Movie Name: </label>
            <input type="text" id="moviename" name="moviename" value={ticket.moviename} />

            <label htmlFor="seats">Seats Selected: </label>
            <input type="number" id="seats" name="seats" value={ticket.seats} />

            <p>Calculated price: ${ticket.price_per_ticket * ticket.seats}</p>

            <button className="border p-1 rounded-lg bg-white text-black cursor-pointer">Book Tickets</button>
        </form>
    )
}

export default MovieTicketBuying;