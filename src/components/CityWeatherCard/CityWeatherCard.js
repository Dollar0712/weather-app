import React from 'react';
import './CityWeatherCard.css';

const CityWeatherCard = ({ cityWeatherData }) => {
    if (!cityWeatherData || cityWeatherData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="city-weather-card">
            {cityWeatherData.map((data, index) => {
                const { icon, location, minTemp, maxTemp, backgroundImg } = data;

                return (
                    <div key={index} className="city-item" style={{ backgroundImage: `url(${backgroundImg})` }}>
                        <img src={icon} alt="weather icon" className="weather-icon" />
                        <h2 className='location'>{location}</h2>
                        <p className='temp-range'>{minTemp} ~ {maxTemp}°</p>
                    </div>
                );
            })}
        </div>
    );
};


export default CityWeatherCard;