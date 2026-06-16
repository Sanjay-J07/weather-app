function WeatherCard({ weather }) {
  return (
    <div>
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <h1>{weather.main.temp}°C</h1>

      <p>
        <strong>Feels Like:</strong> {weather.main.feels_like}°C
      </p>

      <p>
        <strong>Condition:</strong> {weather.weather[0].description}
      </p>

      <p>
        <strong>Humidity:</strong> {weather.main.humidity}%
      </p>

      <p>
        <strong>Pressure:</strong> {weather.main.pressure} hPa
      </p>

      <p>
        <strong>Wind Speed:</strong> {weather.wind.speed} m/s
      </p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      />
    </div>
  );
}

export default WeatherCard;
 