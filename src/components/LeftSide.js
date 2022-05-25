 /* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import "./LeftSide.css";
import SortIcon from './SortIcon';

const LeftSide = (props) => {
    // Get location by reloading the window 
    const getLocation = () => window.location.reload();

    // Get locale time
    const [tickTock, setTickTock] = useState('');
    useEffect(() => {
        setInterval(() => {
            setTickTock(moment().format('h:mm:ss A'));
        }, 1000);
    })

    return (
        <div className={(props.isToggle ? 'left_side dark_mode_left' : 'left_side')}>
            <div className="container">
                {/* Get Current Position */}
                <div className="get_position">
                    <div className="search_icon"><FontAwesomeIcon icon={faSearch}/></div>
                    <div className='get_position_output'>{props.timeZone}</div>
                    <button className="crosshairs_icon" onClick={getLocation}><FontAwesomeIcon icon={faCrosshairs}/></button>
                </div>
                {/* Get Current Position */}

                {/* API Icon */}
                <div className="API_icon">
                    <img src={`http://openweathermap.org/img/wn/${props.currentIcon}@4x.png`} alt="icon"/>
                </div>
                {/* API Icon */}

                {/* Current Weather */}
                <div className="current_weather">
                    <h1 className="temp">{`${Math.round(props.currentTemp)}°C`}</h1>
                    <h5 className="day_time">{moment().format('dddd')}, <span>{tickTock}</span></h5>
                    <hr></hr>
                </div>

                <div className="current_weather2">
                    <div className="cloud"> <img src={`http://openweathermap.org/img/wn/${props.currentIcon}.png`} alt="icon"/> <span>{props.desc}</span></div>
                    <div className="rain">
                        <SortIcon />        
                        <span>{`Rain - ${props.rain === undefined ? '0.00' : props.rain}`}</span>
                    </div>
                    <div className="city">
                        <img src={`images/${props.timeZone.toString().toLowerCase().slice(7)}.jpg`} alt={props.timeZone}/>
                    </div>
                </div>
                {/* Current Weather */}
            </div>
        </div>
    )
}

export default LeftSide;