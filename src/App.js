import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const apiKey = 'ed73783b98875a143ac7df6ac4557d49';

function App() {

  // Toggle Classes
  const [isToggle, setIsToggle] = useState(false)
  const toggle = (e) => {
    setIsToggle(!isToggle);
  }

  /* All Needed States */
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [currentTemp, setCurrentTemp] = useState([]);
  const [desc, setDesc] = useState([]);
  const [currentIcon, setCurrentIcon] = useState([]);
  const [timeZone, setTimeZone] = useState([]);
  const [uvi, setUvi] = useState([]);
  const [windSpeed, setWindSpeed] = useState([]);
  const [sunrise, setSunrise] = useState([]);
  const [sunset, setSunset] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [visibility, setVisibility] = useState([]);
  const [windDeg, setWindDeg] = useState([]);
  const [rain, setRain] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  /* All Needed States */

  useEffect(() => {
    // Get current position with Latitude & Longitude
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    })
    
    // Request & get data from the API
    axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutley&units=metric&appid=${apiKey}`)
    .then((res) => {
      const getData = res.data;
        
      /* All Needed API Data */
      setDailyForecast(getData.daily);
      setUvi(getData.current.uvi);
      setWindSpeed(getData.current.wind_speed);
      setSunrise(new Date(getData.current.sunrise * 1000).toLocaleTimeString());
      setSunset(new Date(getData.current.sunset * 1000).toLocaleTimeString());
      setHumidity(getData.current.humidity);
      setVisibility(getData.current.visibility);
      setWindDeg(getData.current.wind_deg);
      setCurrentTemp(getData.current.temp);
      setDesc(getData.current.weather[0].description);
      setCurrentIcon(getData.current.weather[0].icon);
      setTimeZone(getData.timezone);
      setRain(getData.daily[0].rain);
      /* All Needed API Data */
    });
  }, [lat, lon])

  return (
    <section className="weather_app">
      <LeftSide 
        currentTemp={currentTemp}
        desc={desc}
        currentIcon={currentIcon}
        toggle={toggle}
        isToggle={isToggle}
        timeZone={timeZone}
        rain={rain}
      />
      
      <RightSide 
        dailyForecast={dailyForecast}
        uvi={uvi}
        windSpeed={windSpeed}
        sunrise={sunrise}
        sunset={sunset}
        humidity={humidity}
        visibility={visibility}
        windDeg={windDeg}
        toggle={toggle}
        isToggle={isToggle}
      />
    </section>
  )
}

export default App;