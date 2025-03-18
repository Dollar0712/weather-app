import React from 'react';
import './TodayWeatherCard.css';
import convertEpochToDateTime from '../Utility';
import humidityIcon from '../Utility/assets/meta_icon/humidity.svg';
import windIcon from '../Utility/assets/meta_icon/wind_speed.svg';
import pm2_5Icon from '../Utility/assets/meta_icon/PM2.5.svg';
import feelsLikeIcon from '../Utility/assets/meta_icon/Somatosensory_temperature.svg';

import CloudyDay from '../Utility/assets/weather_icon/Cloudy_day.png';
import Cloudy from '../Utility/assets/weather_icon/Cloudy.png';
import Hail from '../Utility/assets/weather_icon/Hail.png';
import Rain from '../Utility/assets/weather_icon/Rain.png';
import Snow from '../Utility/assets/weather_icon/Snow.png';
import Sunny from '../Utility/assets/weather_icon/Sunny.png';

import cloudyDayBackground from '../Utility/assets/background/Cloudy_day_background.png';
import hailBackground from '../Utility/assets/background/Hail_background.png';
import rainBackground from '../Utility/assets/background/Rain_background.png';
import snowBackground from '../Utility/assets/background/Snow_background.png';
import sunnyBackground from '../Utility/assets/background/Sunny_day_background.png';


const TodayWeatherCard = ({ weatherData }) => {
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { timeStamp, location, temp, minTemp, maxTemp, iconCode, icon, humidity, windSpeed, pm2_5, feelsLike, tz_id} = weatherData;
    const {month, day, hour, minute, weekday} = convertEpochToDateTime(tz_id, timeStamp);

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
                return icon;
        }
    }

    const getBackgroundByIconCode = (iconCode) => {
        switch (iconCode) {
            case 1000:
                return sunnyBackground;
            case 1003:
                return cloudyDayBackground;
            case 1006:
                return cloudyDayBackground;
            case 1009:
                return cloudyDayBackground;
            case 1030:
                return cloudyDayBackground;
            case 1063:
                return hailBackground;
            case 1066:
                return snowBackground;
            case 1069:
                return rainBackground;
            default:
                return sunnyBackground;
        }
    }

    const airConditionData = [
        {
            type: 'humidity',
            icon: humidityIcon,
            value: Math.round(humidity) + '%'
        },
        {
            type: 'wind',
            icon: windIcon,
            value: Math.round(windSpeed) + ' km/h'
        },
        {
            type: 'pm2_5',
            icon: pm2_5Icon,
            value: Math.round(pm2_5) + ' μg'
        },
        {
            type: 'feelsLike',
            icon: feelsLikeIcon,
            value: Math.round(feelsLike) + '°'
        }
        
    ]
        
        return (
        <div className="today-weather-card">
            <img className='background-image' src={getBackgroundByIconCode(iconCode)} alt="weather background" />
            <div className='time'>{`${day} ${month}, ${weekday} ${hour}:${minute}`}</div>

            <div className='main-weather'>
                <div className='location'>{location}</div>
                <div className='temp'>{Math.round(temp)}°</div>
                <div className='min-max-temp'>{`${Math.round(minTemp)} ~ ${Math.round(maxTemp)}°`}</div>
                <img src={getIconByIconCode(iconCode)} alt="weather icon" className="weather-icon" />
            </div>

            <div className="air-condition">
                {airConditionData.map((data, index) => (
                    <div key={index} className="air-condition-item">
                        <img className='icon' src={data.icon} alt="icon" />
                        <div className='value'>{data.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodayWeatherCard;