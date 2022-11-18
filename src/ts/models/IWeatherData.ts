import { ITemperature } from "./ITemperature";
import { IWeather } from "./IWeather";

export interface IWeatherData {
  main: ITemperature;
  name: string;
  weather: IWeather[];
}
