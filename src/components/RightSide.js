/* eslint-disable react/jsx-no-duplicate-props */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faMapMarkerAlt, faArrowUp, faArrowDown, faBolt } from "@fortawesome/free-solid-svg-icons";
import './RightSide.css';
import './SortIcon.css';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const RightSide = (props) => {
    return (
        <div className={(props.isToggle ? 'right_side dark_mode_right' : 'right_side')}>
        <div className="container">
                {/* NavBar */}
                <div className="navbar">
                    <div className="today_week">
                        <h3 className={props.isToggle ? 'week_highlight_title white_text' : 'week_highlight_title black_text'}>Week's Highlights</h3>
                    </div>

                    <div className="mode_celsius">
                        <div className="white_mode" onClick={props.toggle} className={(props.isToggle ? 'dark_mode' : 'white_mode')}><FontAwesomeIcon icon={faMoon}/></div>
                        <div className="celsius active"><b>°C</b></div>
                    </div>
                </div>
                {/* NavBar */}

                {/* Daily Forecast */}
                <div className="daily_forecast">
                    {props.dailyForecast.map((day) => 
                        <div className={props.isToggle ? 'day_weather dark_mode_right_card' : 'day_weather'}>
                            <h5 className="day">{weekdays[new Date(day.dt * 1000).getDay()]}</h5>
                            <div className="day_icon"><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="icon"/></div>
                            <h5 className="day_temp">{`${Math.round(day.temp.day)}°C`}</h5>
                        </div>
                    )}
                </div>
                {/* Daily Forecast */}

                {/* Today's Highlights */}
                <h3 className={props.isToggle ? 'highlights_title white_text' : 'highlights_title black_text'}>Today's Highlights</h3>
                <div className="todays_highlights">
                    <div className={props.isToggle ? 'highlight dark_mode_right_card' : 'highlight'}>
                        <h3 className="highlight_name">UV Index</h3>
                        <div className="uv_index">
                            <div className="uv_index_before" style={{width: `${props.uvi * 20}%`}}></div>
                        </div>
                        <h1 className="uv_index_deg">{props.uvi}</h1>
                    </div>

                    <div className={props.isToggle ? 'highlight dark_mode_right_card' : 'highlight'}>
                        <h3 className="highlight_name">Wind Speed</h3>
                        <h1 className="wind_speed">{props.windSpeed} <small>km/h</small></h1>
                        <div className="wind_speed_icon"><FontAwesomeIcon icon={faBolt}/></div>
                    </div>

                    <div className={props.isToggle ? 'highlight dark_mode_right_card' : 'highlight'}>
                        <h3 className="highlight_name">Sunrise &amp; Sunset</h3>
                        <div className="sunrise">
                            <div className="sunrise_icon"><FontAwesomeIcon icon={faArrowUp}/></div>
                            <div className="sunrise_time"><h4>{props.sunrise}</h4></div>
                        </div>

                        <div className="sunset">
                            <div className="sunset_icon"><FontAwesomeIcon icon={faArrowDown}/></div>
                            <div className="sunset_time"><h4>{props.sunset}</h4></div>
                        </div>
                    </div>

                    <div className={props.isToggle ? 'highlight dark_mode_right_card' : 'highlight'}>
                        <h3 className="highlight_name">Humidity</h3>
                        <h1 className="humidity">{`${props.humidity}%`}</h1>
                        <h5 className="humidity_desc">
                            {props.humidity >= 31 && props.humidity <= 69 ? "Optimum 👍" : ""}
                            {props.humidity >= 70 ? "Too Moist 🙁" : ""}
                            {props.humidity <= 30 ? "Too Dry 👎" : ""}
                        </h5>
                        <div className="range">
                            <div className="range_before" style={props.humidity >= 75 ? {bottom: 75} : {bottom: props.humidity}}></div>
                        </div>
                    </div>

                    <div className={props.isToggle ? 'highlight dark_mode_right_card' : 'highlight'}>
                        <h3 className="highlight_name">Visibility</h3>
                        <h1 className="visibility">{props.visibility} <small>km</small></h1>
                        <h5 className="visibility_desc">
                            {props.visibility >= 6000 ? "Good Visibility 👍" : "Low Visibility 🙁"}
                        </h5>
                    </div>

                    <div className={props.isToggle ? 'highlight dark_mode_right_card' : 'highlight'}>
                        <h3 className="highlight_name">Wind Direction</h3>
                        <h1 className="wind_deg">{props.windDeg}</h1>
                        <div className="wind_deg_icon"><FontAwesomeIcon icon={faMapMarkerAlt}/></div>
                        <h4 className="wind_direction">
                            {/* Point Compass Rose */}
                            {props.windDeg === 0 ? "North" : ""}
                            {props.windDeg === 10 ? "NbE" : ""}
                            {props.windDeg === 20 ? "NNE" : ""}
                            {props.windDeg === 30 ? "NEbN" : ""}
                            {props.windDeg === 40 ? "NE" : ""}
                            {props.windDeg === 50 ? "NE" : ""}
                            {props.windDeg === 60 ? "NEbE" : ""}
                            {props.windDeg === 70 ? "ENE" : ""}
                            {props.windDeg === 80 ? "Ebn" : ""}
                            {props.windDeg === 90 ? "East" : ""}
                            {props.windDeg === 100 ? "Ebs" : ""}
                            {props.windDeg === 110 ? "ESE" : ""}
                            {props.windDeg === 120 ? "SEbE" : ""}
                            {props.windDeg === 130 ? "SE" : ""}
                            {props.windDeg === 140 ? "SE" : ""}
                            {props.windDeg === 150 ? "SEbS" : ""}
                            {props.windDeg === 160 ? "SSE" : ""}
                            {props.windDeg === 170 ? "SbE" : ""}
                            {props.windDeg === 180 ? "South" : ""}
                            {props.windDeg === 190 ? "SbW" : ""}
                            {props.windDeg === 200 ? "SSW" : ""}
                            {props.windDeg === 210 ? "SWbS" : ""}
                            {props.windDeg === 220 ? "SW" : ""}
                            {props.windDeg === 230 ? "SW" : ""}
                            {props.windDeg === 240 ? "SWbW" : ""}
                            {props.windDeg === 250 ? "WSW" : ""}
                            {props.windDeg === 260 ? "WbS" : ""}
                            {props.windDeg === 270 ? "West" : ""}
                            {props.windDeg === 280 ? "WbN" : ""}
                            {props.windDeg === 290 ? "WNW" : ""}
                            {props.windDeg === 300 ? "NWbW" : ""}
                            {props.windDeg === 310 ? "NW" : ""}
                            {props.windDeg === 320 ? "NW" : ""}
                            {props.windDeg === 330 ? "NWbN" : ""}
                            {props.windDeg === 340 ? "NNW" : ""}
                            {props.windDeg === 350 ? "NbW" : ""}
                            {props.windDeg === 360 ? "NbW" : ""}
                            {/* Point Compass Rose */}
                        </h4>
                        <div className="range">
                            <div className="range_before" style={{bottom: `${props.windDeg / 5}%`}}></div>
                        </div>
                    </div>
                </div>
                {/* Today's Highlights */}
            </div>
        </div>
    )
}


export default RightSide;