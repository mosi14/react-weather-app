import axios from "axios";
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

export async function getWeatherData(endpoint, place_id, measurementSystem) {

  const options = {
    method: "GET",
    url: `https://www.meteosource.com/api/v1/free/point`,
    params: {
      place_id,
      sections: endpoint,
      language: "en",
     // timezone: "auto",
      units: measurementSystem,
      key: API_KEY,
    },
    // headers: {
    //   "x-rapidapi-key": API_KEY,
    //   "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    // },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchPlaces(text) {

  const options = {
    method: "GET",
    url: "https://www.meteosource.com/api/v1/free/find_places",//"https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text,
      language: "en",
      key: API_KEY,
    },
    // headers: {
    //   "x-rapidapi-key": API_KEY,
    //   "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    // },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
