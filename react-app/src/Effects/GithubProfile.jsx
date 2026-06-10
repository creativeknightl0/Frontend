import { useState, useEffect } from "react";
import ProfileSearch from "./ProfileSearch";
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

function GithubProfile() {
    const [username, setUsername] = useState('alicia');
    const [profile, setProfile] = useState({data: null, isLoading: true});
    console.log(profile);

    useEffect(() => {
        async function initialProfileSearch() {
            const response = await axios.get(`${GITHUB_API_URL}/${username}`);
            setProfile({data: response.data, isLoading: false});
        }
        initialProfileSearch();
    }, [username]);

    const handleSearch = (term) => {
        setProfile({data: null, isLoading: true});
        setUsername(term);
    }

    return (
        <div className="p-5">
            <ProfileSearch handleSearch={handleSearch} />
            {profile.isLoading && <p>Loading...</p>}
            {profile.data && <p>{profile.data.name}</p>}
            {profile.data && <img src={profile.data.avatar_url} alt="Profile pic" />}
        </div>
    )
}

export default GithubProfile;