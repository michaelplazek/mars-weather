import { weather } from "./store";

const API_VERSION = '1.0';

export const transformWeatherData = (data) => {
  const { sol_keys: sols } = data;
  return sols.map((sol, index) => ({
    ...data[sol],
    sol,
    index
  }))
}

export const fetchWeatherData = async () => {
  try {
    const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${NASA_TOKEN}&feedtype=json&ver=${API_VERSION}`);
    const data = await response.json();
    weather.set(transformWeatherData(data));
  } catch (e) {
    console.error(e);
  }
}

export const formatTemperature = (temp = 0) => `${temp.toFixed(1)}&deg; F`
export const formatPressure = (pressure = 0) => `${pressure.toFixed(4)} Pa`
export const formatWind = (wind = 0) => `${wind.toFixed(2)} m/s`
