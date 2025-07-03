import React,{useState} from 'react';
function weather App(){
const [city, setCity] = useState('');
const [weather, setWeather] = useState(null);
const getweather=()=>{
    set weather({
        city: city,
        temperature: '25°C',
        condition: 'Sunny'
    });
};
return 
 <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Weather App</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather} style={{ marginLeft: '10px' }}>
        Get Weather
      </button>

      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h3>{weather.city}</h3>
          <p>🌡️ Temperature: {weather.temperature}</p>
          <p>🌤️ Condition: {weather.condition}</p>
        </div>
      )}
    </div>
   );
}

export default WeatherApp;