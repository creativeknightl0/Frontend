import { useState } from "react";
import { WeatherApi } from "./api/WeatherApi"

export default function WeatherApp() {
    const [query, setQuery] = useState('');
    const [locationData, setLocationData] = useState({});
    const [currentWeatherData, setCurrentWeatherData] = useState({});

    // const handleClick = () => {
    //     WeatherApi();
    // }

    const handleEnter = async(e) => {
        if(e.key === 'Enter') {
            const data = await WeatherApi(query);
            console.log(data);
            console.log(data.location);
            setLocationData(data.location);
            console.log(data.current.condition.text);
            setCurrentWeatherData(data.current.condition);
        }
    }

    return (
        <div className="mt-5">
            <input className="border" type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleEnter} />
            {/* <button onClick={handleClick}>Check Weather</button> */}
            <div>
                {locationData && (
                        <div>
                            Location Data: {locationData.name} {locationData.region}
                        </div>
                    )
                }
                {currentWeatherData && (
                        <div>
                            Current Weather Data: 
                            <img src={currentWeatherData.icon} alt="Weather image" />
                            {currentWeatherData.text} 
                        </div>
                    )
                }
            </div>
        </div>
    )
}