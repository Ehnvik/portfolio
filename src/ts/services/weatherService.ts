import axios from "axios";
import { IWeatherData } from "../models/IWeatherData";

let apiKey = "020edece24a6c3fb1efcc31fd47010d6";

export async function getWeatherData(
  lat: number,
  lon: number
): Promise<IWeatherData> {
  let response = await axios.get<IWeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sv&appid=${apiKey}&units=metric`
  );
  return response.data;
}
