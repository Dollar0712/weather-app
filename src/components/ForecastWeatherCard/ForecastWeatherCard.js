import React from 'react';
import './ForecastWeatherCard.css';
import convertEpochToDateTime from '../Utility/convertEpoch';
import CloudyDay from '../Utility/assets/weather_icon/Cloudy_day.png';
import Cloudy from '../Utility/assets/weather_icon/Cloudy.png';
import Hail from '../Utility/assets/weather_icon/Hail.png';
import Rain from '../Utility/assets/weather_icon/Rain.png';
import Snow from '../Utility/assets/weather_icon/Snow.png';
import Sunny from '../Utility/assets/weather_icon/Sunny.png';

const ForecastWeatherCard = ({ forecastData }) => {
    if (!forecastData || forecastData.length === 0) {
        return <div>Loading...</div>;
    }

    const getIconByIconCode = (iconCode) => {
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
                return null;
        }
    };

    return (
        <div className="forecast-weather-card">
            {forecastData.map((data, index) => {
                const { tz_id, epoch, iconCode, icon, minTemp, maxTemp } = data;
                const { month, day, weekday } = convertEpochToDateTime(tz_id, epoch);

                return (
                    <div key={index} className="forecast-day">
                        <div className="date-weekday">{weekday}</div>
                        <div className='date-day-month'>{`${day} ${month}`}</div>
                        <img src={getIconByIconCode(iconCode) || icon} alt="weather icon" className="weather-icon" />
                        <div className="temp-range">{`${minTemp} ~ ${maxTemp}°`}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ForecastWeatherCard;