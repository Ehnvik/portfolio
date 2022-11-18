import { WeatherDetails } from "./WeatherDetails";

export class Weather {
  constructor(
    public temperature: number,
    public locationName: string,
    public weather: WeatherDetails[]
  ) {}
}
