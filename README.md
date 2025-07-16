# Weather App - 4

A React-based app that shows  weather for a given city using a weather (TEMP SET AT 25c)


##  Features
- Search weather by city
- Displays temperature, humidity, condition
- Clean UI with conditional rendering

##  Tech Stack
- React.js
- JavaScript (Fetch API)
- OpenWeatherMap API
- CSS

##  How to Run
1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Replace `YOUR_API_KEY` in the code with your OpenWeatherMap API key



## OUTPUT   

<img width="542" height="673" alt="Screenshot (98)" src="https://github.com/user-attachments/assets/1c31643d-7a37-41ce-8f51-e6a2bab19f94" />


## WHAT I LEARN FROM THIS CODE

how to set city and its weather 

some css lines


## EXPLAINATION OF EACH LINE


a)   function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);


MEANING:
  -  Defines a React functional component named WeatherApp.
    
  -  Creates a state variable called city initialized with an empty string ("").
     city stores the current input value (the name of the city).
     setCity is a function to update the city value.
     
 -   Creates a state variable called weather initialized with null.
     weather holds the weather data object.
     setWeather is a function to update the weather data.

     ##
     b)   const getWeather = () => {
    setWeather({
      city: city,
      temperature: "25°C",
      condition: "Sunny",
    });
  };


MEANING

-  Defines a function named getWeather using an arrow function.

-  Updates the weather state with a new object containing weather details.

-  city: city, — Sets the city property to the current value of the city state.
   temperature: "25°C", — Sets the temperature to "25°C".
  condition: "Sunny" — Sets the weather condition to "Sunny".

##

 c)  
      
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>



-   <div> : A container that holds all the elements together

-   <h1>Weather App</h1> : Displays the title "Weather App".

-   <input ... /> : A text box where the user types a city name.

-   placeholder = "Enter city" : shows a prompt inside the box.

-   value={city} : links the input to the current city state, so it shows what the user has typed.

-   onChange={(e) => setCity(e.target.value)} : updates the city state whenever the user types.

-   <button onClick={getWeather}>Get Weather</button>  :  A button labeled "Get Weather".When clicked, it calls the getWeather function to retrieve weather info for the entered city.





## d)


  
      {weather && (
        <div>
          <h2>Weather in {weather.city}</h2>
          <p>🌤️ Temperature: {weather.temperature}</p>
          <p>🌤️ Condition: {weather.condition}</p>
        </div>
      )}
    </div>
  );
}


-     {weather && ( ... )}  :  Checks if the weather data exists. If it does, it displays the content inside.

-     <div>  :  A container for the weather details.

-     <h2>Weather in {weather.city}</h2>  :  Shows a heading like "Weather in [city name]" based on the weather data.

-     <p>🌤️ Temperature: {weather.temperature}</p>  :  Displays the temperature, e.g., "25°C".

-     <p>🌤️ Condition: {weather.condition}</p>  :  Shows the weather condition, e.g., "Sunny".  


## Author
Made by Ishan-246
