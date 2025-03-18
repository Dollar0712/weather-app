import React, { useEffect, useState } from 'react';
import './WeatherMainContainer.css';
import TodayWeatherCard from '../TodayWeatherCard';
import ForecastWeatherCard from '../ForecastWeatherCard';
import CityWeatherCard from '../CityWeatherCard';
import SearchBar from '../SearchBar';
import { getWeatherData, getForecastData, getCityWeatherData } from '../../api';

const WeatherMainContainer = () => {
    
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState([]);
    const [cityWeatherData, setCityWeatherData] = useState([]);

    useEffect(() => {
        const fetchTodayWeather = async () => {
          const result = await getWeatherData("Melbourne");
          setWeatherData(result.data);
        };

        
        const fetchForecastWeather = async () => {
            const result = await getForecastData("Melbourne", 3);
            setForecastData(result.data);
        };

        const fetchCityWeatherData = async () => {
            const result = await getCityWeatherData("New York, London, Shanghai, Sydney");
            setCityWeatherData(result.data);
        }
        fetchTodayWeather();
        fetchForecastWeather();
        fetchCityWeatherData();

      }, []);


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