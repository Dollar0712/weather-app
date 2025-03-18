import axios from "axios";
const dotenv = require('dotenv');
dotenv.config();



const port = 8080;
const baseUrl = `http://localhost:${port}/api/v1`;


export const getWeatherData = async (city) => {
  return await axios.get(`${baseUrl}/weather/${city}`);
};

export const getForecastData = async (city, days) => {
  return await axios.get(`${baseUrl}/forecast/${city}/${days}`);
}

export const getCityWeatherData = async (cities) => {
  return await axios.get(`${baseUrl}/cityweather?cities=${cities}`);
}