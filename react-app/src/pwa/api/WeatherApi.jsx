// import axios from "axios";

export const WeatherApi = async(query) => {
    try {
        const headers = {
            params: {
                q: query,
                key: '24839cbc573a4d0c99a191422221002'
            }
        }

        console.log(headers);

        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${headers.params.key}&q=${headers.params.q}`);

        return response.json();
    }
    catch(e) {
        console.log(e);
    }
}