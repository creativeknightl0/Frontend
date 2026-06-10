import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({text: '', author: ''});

    useEffect(() => {
        async function initialFetchQuote() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const randomQuote = jsonResponse.quote;
            setQuote(randomQuote);
        };
        initialFetchQuote();
    }, []);

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        console.log(response);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }

    return(
        <div className="p-5">
            <button className="p-2 border rounded cursor-pointer" onClick={fetchQuote}>Joke Fetch</button>
            <h1>{quote.text}</h1>
            {quote.author && <h3>-{quote.author}</h3>}
        </div>
    )
}