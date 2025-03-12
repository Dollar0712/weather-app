import React from 'react';
import './WeatherMainContainer.css';
import TodayWeatherCard from '../TodayWeatherCard';
import ForecastWeatherCard from '../ForecastWeatherCard';
import CityWeatherCard from '../CityWeatherCard';
import SearchBar from '../SearchBar';

const WeatherMainContainer = () => {
    const weatherExample = {
        location: {
            name: "Melbourne",
            region: "Victoria",
            country: "Australia",
            lat: -37.8167,
            lon: 144.9667,
            tz_id: "Australia/Melbourne",
            localtime_epoch: 1741742157,
            localtime: "2025-03-12 12:15"
        },
        current: {
            last_updated_epoch: 1741742100,
            last_updated: "2025-03-12 12:15",
            temp_c: 30.9,
            temp_f: 87.6,
            is_day: 1,
            condition: {
                text: "Patchy rain nearby",
                icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
                code: 1063
            },
            wind_mph: 10.3,
            wind_kph: 16.6,
            wind_degree: 345,
            wind_dir: "NNW",
            pressure_mb: 1017.0,
            pressure_in: 30.03,
            precip_mm: 0.49,
            precip_in: 0.02,
            humidity: 35,
            cloud: 72,
            feelslike_c: 30.6,
            feelslike_f: 87.0,
            windchill_c: 30.9,
            windchill_f: 87.5,
            heatindex_c: 30.6,
            heatindex_f: 87.0,
            dewpoint_c: 13.8,
            dewpoint_f: 56.8,
            vis_km: 10.0,
            vis_miles: 6.0,
            uv: 7.6,
            gust_mph: 13.4,
            gust_kph: 21.6,
            air_quality: {
                co: 259.0,
                no2: 32.56,
                o3: 26.0,
                so2: 11.84,
                pm2_5: 18.315,
                pm10: 19.24,
                us_epa_index: 2,
                gb_defra_index: 2
            }
        }
    };

    const weatherData = {
        timeStamp: weatherExample.current.last_updated_epoch,
        location: `${weatherExample.location.name}`,
        temp: weatherExample.current.temp_c,
        minTemp: 0,
        maxTemp: 0,
        iconCode: weatherExample.current.condition.code,
        icon: weatherExample.current.condition.icon,
        humidity: weatherExample.current.humidity,
        windSpeed: weatherExample.current.wind_kph,
        pm2_5: weatherExample.current.air_quality.pm2_5,
        feelsLike: weatherExample.current.feelslike_c,
        tz_id: weatherExample.location.tz_id
    };
    

    const forecastData = [
        {
            tz_id: weatherExample.location.tz_id,
            epoch: 1741742157, 
            iconCode: 1000, 
            icon: weatherExample.current.condition.icon, 
            minTemp: 0, 
            maxTemp: 0
        },
        {
            tz_id: weatherExample.location.tz_id,
            epoch: 1741742157, 
            iconCode: 1003, 
            icon: weatherExample.current.condition.icon, 
            minTemp: 0, 
            maxTemp: 0
        },
        {
            tz_id: weatherExample.location.tz_id,
            epoch: 1741742157, 
            iconCode: 1006, 
            icon: weatherExample.current.condition.icon, 
            minTemp: 0, 
            maxTemp: 0
        },
        {
            tz_id: weatherExample.location.tz_id,
            epoch: 1741742157, 
            iconCode: 1009, 
            icon: weatherExample.current.condition.icon, 
            minTemp: 0, 
            maxTemp: 0
        },
        {
            tz_id: weatherExample.location.tz_id,
            epoch: 1741742157, 
            iconCode: 1030, 
            icon: weatherExample.current.condition.icon, 
            minTemp: 0, 
            maxTemp: 0
        }
    ];

    const cityWeatherData = [
        {
            icon: weatherExample.current.condition.icon,
            location: weatherExample.location.name,
            minTemp: 0,
            maxTemp: 0,
            backgroundImg: 'https://images.unsplash.com/photo-1573497019700-5f5e7a3f3b3e'
        },
        {
            icon: weatherExample.current.condition.icon,
            location: weatherExample.location.name,
            minTemp: 0,
            maxTemp: 0,
            backgroundImg: 'https://images.unsplash.com/photo-1573497019700-5f5e7a3f3b3e'
        },
        {
            icon: weatherExample.current.condition.icon,
            location: weatherExample.location.name,
            minTemp: 0,
            maxTemp: 0,
            backgroundImg: 'https://images.unsplash.com/photo-1573497019700-5f5e7a3f3b3e'
        },
        {
            icon: weatherExample.current.condition.icon,
            location: weatherExample.location.name,
            minTemp: 0,
            maxTemp: 0,
            backgroundImg: 'https://images.unsplash.com/photo-1573497019700-5f5e7a3f3b3e'
        }
    ];


    return (
        <div className="weather-main-container">

            <TodayWeatherCard weatherData={weatherData} />
            <div className='side-weather-info'>
                <ForecastWeatherCard forecastData={forecastData}/>
                <SearchBar />
                <CityWeatherCard cityWeatherData={cityWeatherData}/>
            </div>
        </div>
    );
};

export default WeatherMainContainer;