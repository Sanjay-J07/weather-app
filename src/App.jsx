import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  console.log("API Key:", API_KEY);

  async function fetchWeather() {
    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();
      console.log(data);

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <div>
      <h1>🌤️ Weather App</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />
      
      
      <br />
      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;