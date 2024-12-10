import { useWeather } from "../context/weather.context";

export default function Place() {
  const {place}= useWeather()
  return (
    <div className="flex gap-2 items-center">
      <i className="fa-solid fa-location-dot "></i>
      <b>{place.name},</b> {place.country}
    </div>
  );
}
