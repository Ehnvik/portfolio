import { IWeather } from "../models/IWeather";
import { IWeatherData } from "../models/IWeatherData";
import { Weather } from "../models/Weather";
import { WeatherDetails } from "../models/WeatherDetails";
import { getWeatherData } from "../services/weatherService";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}

async function success(position: GeolocationPosition) {
  let lat: number = position.coords.latitude;
  let lon: number = position.coords.longitude;
  let response = await getWeatherData(lat, lon);
  handleWeatherData(response);
}

function error(e: GeolocationPositionError) {
  console.log("No Position");
  let lat: number = 59.329296;
  let lon: number = 18.069643;
  getWeatherData(lat, lon);
}

function handleWeatherData(weather: IWeatherData) {
  let myWeather: WeatherDetails[] = weather.weather.map(
    (weatherData: IWeather) => {
      return new WeatherDetails(
        weatherData.id,
        weatherData.main,
        weatherData.description,
        weatherData.icon
      );
    }
  );
  let newWeather: Weather = new Weather(
    weather.main.temp,
    weather.name,
    myWeather
  );
  printWeatherData(newWeather);
}

function printWeatherData(newWeather: Weather) {
  let weatherContainer: HTMLUListElement = document.getElementById(
    "weather-container"
  ) as HTMLUListElement;
  weatherContainer.classList.add("footer__list");

  let weatherTodayText = document.createElement("li");
  weatherTodayText.innerHTML = "<strong>Vädret idag</strong>";

  let weatherLocation = document.createElement("li");
  weatherLocation.classList.add("footer__list__link");
  weatherLocation.style.padding = "10px 0px 0px 0px";

  let weatherTemperature = document.createElement("li");
  weatherTemperature.classList.add("footer__list__link");
  weatherTemperature.style.paddingLeft = "0px";

  let IconUrlLink: HTMLImageElement = document.createElement("img");

  let weatherDescription: string = "";
  let weatherIcon: string = "";

  newWeather.weather.forEach((weather: WeatherDetails) => {
    weatherDescription = weather.description;
    weatherIcon = weather.icon;
  });

  let wholeNumberTemperature: number = Math.round(newWeather.temperature);
  let temperatureText: string = wholeNumberTemperature.toString();

  IconUrlLink.classList.add("weather-icon");

  IconUrlLink.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  weatherLocation.innerHTML = newWeather.locationName;
  weatherTemperature.innerHTML = `${temperatureText} &deg;C ${weatherDescription}`;

  weatherContainer.appendChild(weatherTodayText);
  weatherContainer.appendChild(weatherLocation);
  weatherContainer.appendChild(weatherTemperature);
  weatherTemperature.appendChild(IconUrlLink);
}
