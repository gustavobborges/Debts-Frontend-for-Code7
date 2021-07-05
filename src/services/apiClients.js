import axios from "axios";

const api_clients = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

export default api_clients;