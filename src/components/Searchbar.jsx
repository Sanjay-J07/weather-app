function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchWeather();
          }
        }}
      />

      <button onClick={fetchWeather}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;