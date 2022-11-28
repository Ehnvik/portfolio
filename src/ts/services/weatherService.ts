import axios from "axios";
import { IWeatherData } from "../models/IWeatherData";
import * as dotenv from "dotenv";

dotenv.config();

let apiKey = process.env.WEATHER_API_KEY;

export async function getWeatherData(
  lat: number,
  lon: number
): Promise<IWeatherData> {
  let response = await axios.get<IWeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sv&appid=${apiKey}&units=metric`
  );
  console.log(response.data);
  return response.data;
}
