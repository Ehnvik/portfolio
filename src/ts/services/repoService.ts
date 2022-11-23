import axios from "axios";
import { IRepo } from "../models/IRepo";

export async function getRepos(): Promise<IRepo[]> {
  let response = await axios.get<IRepo[]>(
    "https://api.github.com/users/ehnvik/repos"
  );
  return response.data;
}
