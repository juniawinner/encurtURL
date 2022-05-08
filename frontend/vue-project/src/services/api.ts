import axios from "axios";

const api = axios.create({
  baseURL: "https://encurturl.azurewebsites.net",
});

export default api;
