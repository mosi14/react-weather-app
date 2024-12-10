import React from "react";
import { useWeather } from "../context/weather.context";

export default function DailyForecastWidget({ data }) {
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    predictability,
  } = data;

  const { units } = useWeather();

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };

  let weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };
  weather_date.day =
    weather_date.day === now_date.day ? "Today" : weather_date.day;

  return (
    <div className="flex flex-col align-center relative p-2 text-sm border-2 rounded-2xl text-center justify-center min-w-24">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        {weather_date.day}
      </div>
      <div className="flex flex-col items-center ">
        <div>
          <img
            src={`/dist/weather_icons/set03/small/${icon}.png`}
            alt={summary}
            draggable={false}
          />
        </div>
        <div>
          <div>
            {Math.round(temperature_max)} {units.temperature}
          </div>
          <div>
            {Math.round(temperature_min)} {units.temperature}
          </div>
        </div>
      </div>
      <div className="mt-2 text-xs">
        {Math.round(predictability)} {units.precipitation}
      </div>
    </div>
  );
}
