import WeatherApp from './components/WeatherApp.jsx';
import axios from 'axios';
import {useState} from "react";

function App() {
    const [data,setData]= useState(null);
    let getApi = async(name)=>{
        let api_key = "41eac9545d9e882db884d2b8812ba876";
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=metric`);
        const weatherData = response.data;
        console.log(weatherData);
        setData(weatherData);
    }

    return (
        <div className="flex text-white justify-center items-center">
            <WeatherApp api={getApi} data={data} />
        </div>
    )
}

export default App;
