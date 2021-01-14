import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-shadow-d1cf4.cloudfunctions.net/api",
  //"http://localhost:5001/shadow-d1cf4/us-central1/api", // The API (cloud function) URL
});

export default instance;
