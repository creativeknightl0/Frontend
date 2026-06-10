import vite from '../assets/vite.svg';

function MoviesNavbar() {
    return (
        <nav className="px-4 py-2 bg-gray-900 flex items-center justify-between">
            {/* left side */}
            <div className="flex items-center gap-2">
                <img className='w-10 h-10' src={vite} alt="logo" />
                <div className='font-bold'>
                    Shockerz
                    <sub className='ml-2 font-semibold'>A movie booking website</sub>
                </div>
            </div>
            
            {/* right side */}
            <div className='flex gap-4'>
                <a className='cursor-pointer hover:text-purple-200 hover:underline'>
                    Now Showing
                </a>
                <a className='cursor-pointer hover:text-purple-200 hover:underline'>
                    Seats Experience
                </a>
                <a className='cursor-pointer hover:text-purple-200 hover:underline'>
                    Theatre experience
                </a>
            </div>
        </nav>
    )
}

export default MoviesNavbar;