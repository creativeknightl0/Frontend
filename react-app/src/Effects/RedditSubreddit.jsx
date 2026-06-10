import { useEffect, useState } from "react"
import ProfileSearch from "./ProfileSearch"
import axios from "axios";

const REDDIT_API_URL = 'https://www.reddit.com/r'

function RedditSubreddit() {
    const [subreddit, setSubreddit] = useState('cats');
    const [data, setData] = useState({data: null, isLoading: true});

    useEffect(() => {
        async function initialSubredditSearch() {
            const response = await axios.get(`${REDDIT_API_URL}/${subreddit}`);
            console.log(response);
        };
        initialSubredditSearch();
    }, [subreddit]);

    const handleSearch = (term) => {
        setData({data: null, isLoading: true});
        setSubreddit(term);
    }

    return (
        <div>
            <ProfileSearch handleSearch={handleSearch} />
            {data.isLoading && <p>Loading...</p>}
        </div>
    )
}

export default RedditSubreddit;