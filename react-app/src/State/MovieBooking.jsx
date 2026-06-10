import MoviesNavbar from './MoviesNavbar';
import MovieTicketBuying from './MovieTicketBuying';

function MovieBooking() {
    return (
        <div className="text-white">
            <MoviesNavbar />

            <div className='p-4'>
                <MovieTicketBuying />
            </div>
        </div>
    )
}

export default MovieBooking;