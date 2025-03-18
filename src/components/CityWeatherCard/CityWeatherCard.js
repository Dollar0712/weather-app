import React from 'react';
import './CityWeatherCard.css';
import newYorkBackground from '../Utility/assets/City/Newyork.png';
import londonBackground from '../Utility/assets/City/London.png';
import shanghaiBackground from '../Utility/assets/City/Shanghai.png';
import sydneyBackground from '../Utility/assets/City/Sydney.png';

import CloudyDay from '../Utility/assets/weather_icon/Cloudy_day.png';
import Cloudy from '../Utility/assets/weather_icon/Cloudy.png';
import Hail from '../Utility/assets/weather_icon/Hail.png';
import Rain from '../Utility/assets/weather_icon/Rain.png';
import Snow from '../Utility/assets/weather_icon/Snow.png';
import Sunny from '../Utility/assets/weather_icon/Sunny.png';

const getBackgroundImage = (location) => {
    switch (location) {
        case 'New York':
            return newYorkBackground;
        case 'London':
            return londonBackground;
        case 'Shanghai':
            return shanghaiBackground;
        case 'Sydney':
            return sydneyBackground;
        default:
            return newYorkBackground;
    }
};

const getIconByIconCode = (iconCode, icon) => {
    switch (iconCode) {
        case 1000:
            return Sunny;
        case 1003:
            return CloudyDay;
        case 1006:
            return Cloudy;
        case 1009:
            return CloudyDay;
        case 1030:
            return CloudyDay;
        case 1063:
            return Hail;
        case 1066:
            return Snow;
        case 1069:
            return Rain;
        default:
            return icon;
    }
}

const CityWeatherCard = ({ cityWeatherData }) => {
    if (!cityWeatherData || cityWeatherData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="city-weather-card">
            {cityWeatherData.map((data, index) => {
                const { icon, iconCode, location, minTemp, maxTemp} = data;

                return (
                    <div key={index} className="city-item">
                        <div className='city-background' style={{backgroundImage: `url(${getBackgroundImage(location)})`}}></div>
                        <img src={getIconByIconCode(iconCode, icon)} alt="weather icon" className="weather-icon" />
                        <h2 className='location'>{location}</h2>
                        <p className='temp-range'>{minTemp} ~ {maxTemp}°</p>
                    </div>
                );
            })}
        </div>
    );
};


export default CityWeatherCard;