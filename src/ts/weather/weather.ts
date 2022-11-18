import axios from "axios";
import { IWeather } from "../models/IWeather";
import { IWeatherData } from "../models/IWeatherData";
import { Weather } from "../models/Weather";
import { WeatherDetails } from "../models/WeatherDetails";

let lat: number = 59.358268;
let lon: number = 17.905318;

let apiKey = "020edece24a6c3fb1efcc31fd47010d6";

axios
  .get<IWeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  )
  .then((response) => {
    // console.log(response.data);
    let myWeather: WeatherDetails[] = response.data.weather.map(
      (weatherData: IWeather) => {
        return new WeatherDetails(weatherData.main, weatherData.description);
      }
    );

    let weather = new Weather(
      response.data.main.temp,
      response.data.name,
      myWeather
    );

    console.log(weather);
    printWeatherData(weather);
  });

function printWeatherData(newWeather: Weather) {
  newWeather.weather.forEach((weather: WeatherDetails) => {
    console.log(weather.main);
  });
}
