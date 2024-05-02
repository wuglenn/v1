import axios from "axios";

// const url = "http://localhost:3000";
const url = "https://api-personal.glennwu.com";

const api = axios.create({
  baseURL: url,
  // baseURL: "http://localhost:3000",
});

export { api, url };
