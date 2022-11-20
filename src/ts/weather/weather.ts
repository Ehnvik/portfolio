import axios from "axios";
import { IWeather } from "../models/IWeather";
import { IWeatherData } from "../models/IWeatherData";
import { Weather } from "../models/Weather";
import { WeatherDetails } from "../models/WeatherDetails";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}

function success(position: GeolocationPosition) {
  let lat: number = position.coords.latitude;
  let lon: number = position.coords.longitude;
  getWeatherApi(lat, lon);
}

function error(e: GeolocationPositionError) {
  console.log("No Position");
  let lat: number = 59.329296;
  let lon: number = 18.069643;
  getWeatherApi(lat, lon);
}

let apiKey = "020edece24a6c3fb1efcc31fd47010d6";

function getWeatherApi(lat: number, lon: number) {
  axios
    .get<IWeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sv&appid=${apiKey}&units=metric`
    )
    .then((response) => {
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
      printWeatherData(weather);
    });
}

function printWeatherData(newWeather: Weather) {
  let weatherLocation: HTMLLinkElement = document.getElementById(
    "weather-location"
  ) as HTMLLinkElement;

  let weatherTemperature: HTMLLinkElement = document.getElementById(
    "weather-temperature"
  ) as HTMLLinkElement;

  let weatherDescription: string = "";

  newWeather.weather.forEach((weather: WeatherDetails) => {
    weatherDescription = weather.description;
  });

  let wholeNumberTemperature: number = Math.round(newWeather.temperature);
  let temperatureText: string = wholeNumberTemperature.toString();

  weatherLocation.innerHTML = newWeather.locationName;
  weatherTemperature.innerHTML = `${temperatureText} &deg;C ${weatherDescription}`;
}
