import CurrentWeather from "./CurrentWeather.jsx";
import Forecast from "./Forecast.jsx";

import { useWeather } from "../context/weather.context";
import Loader from "./Loader.jsx";

export default function Main() {
  const { loading, currentWeather, hourlyForecast, dailyForecast } =
    useWeather();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="sm:container mx-auto w-11/12 min-h-screen">
          <CurrentWeather data={currentWeather} />
          <Forecast
            type="hourly"
            title="HOURLY FORECAST"
            data={hourlyForecast}
          />
          <br />
          <Forecast
            type="daily"
            title="7 DAYS FORECAST"
            data={dailyForecast}
          />
        </main>
      )}
    </>
  );
}
