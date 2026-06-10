import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = 'https://official-joke-api.appspot.com/jokes/random/';

function QuoteFetchLoader() {
    const [joke, setJoke] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function initialFetchJoke() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            setJoke(jsonResponse);
            setIsLoading(false);
        }
        initialFetchJoke();
    }, []);

    const handleFetchJoke = async() => {
        setIsLoading(true);
        setJoke({});
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        setJoke(jsonResponse);
        setIsLoading(false);
    }

    return (
        <div className="p-5">
            {isLoading && <p className="1s transition">Loading...</p>}
            <p>{joke.type}</p>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button className="p-2 border cursor-pointer" onClick={handleFetchJoke}>Fetch Joke</button>
        </div>
    )
}

export default QuoteFetchLoader;