import axios from "axios";

export async function getWeatherData(endpoint, place_id, measurementSystem) {
  const API_KEY = import.meta.env.VITE_API_KEY


  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      timezone: "auto",
      language: "en",
      units: measurementSystem,
    },
    headers: {
      "x-rapidapi-key": 'ff4a6a6ff3mshe84e1ca14cf044fp11406ejsn7bd6e4f7ade2',
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
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
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text,
      language: "en",
    },
    headers: {
      "x-rapidapi-key": 'ff4a6a6ff3mshe84e1ca14cf044fp11406ejsn7bd6e4f7ade2',
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
