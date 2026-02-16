import axios from "axios";

const API = axios.create({
  baseURL: "https://real-time-poll-tn0x.onrender.com", //backend URL
});

export default API;
