import axios from "axios";

export const api = axios.create({
  baseURL: "https://anotai-api.fly.dev",
});
