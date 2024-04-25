// const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY
// VITE_WEATHER_API_KEY=dae5f4bdc5e8ca68c1090b0be2429cfb


async function getWeatherByLocation({ lat, lng }) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${WEATHER_KEY}`
  )

  const weatherData = await response.json()
  const weather = {
    temp: kelvinToCelsius(weatherData.main.temp),
    name: weatherData.name,
    humidity: weatherData.main.humidity + '%',
    desc: weatherData.weather[0].description,
    windSpeed: weatherData.wind.speed + ' Knots'
  }
  return weather
}

function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(0) + '°C'
}

export const weatherService = {
  getWeatherByLocation
}
