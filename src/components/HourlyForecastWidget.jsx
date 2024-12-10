import React from "react";

export default function HourlyForecastWidget({ data }) {
  const { summary, icon, wind, precipitation, temperature, date } = data;

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).format(new Date().setMinutes(0)),
  };

  let weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).format(new Date(date).setMinutes(0)),
  };

  weather_date.day =
    weather_date.day === now_date.day && 
    weather_date.time === now_date.time
      ? "Today"
      : weather_date.time==='00:00'
      ?weather_date.day
      : "";

  return (
    <div className="flex flex-col align-center relative p-2 text-sm border-2 rounded-2xl text-center justify-center min-w-28">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">{weather_date.day}</div>
      <div>{weather_date.time}</div>
      <div className="flex flex-col items-center ">
        <div>
          <img
            src={`/dist/weather_icons/set03/small/${icon}.png`}
            alt={summary}
          />
        </div>
        <div>{Math.round(temperature)} °C</div>
        <div>{Math.round(precipitation.total)} mm/h</div>
        <div className="flex gap-1">
          <div>{Math.round(wind.speed)} mph</div>
          <div className={`-rotate-[${45 + wind.angle}deg]`}>
            <i className="fa fa-location-arrow"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
