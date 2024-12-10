import { useWeather } from "../context/weather.context";

export default function CurrentWeather({ data }) {
  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    precipitation,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
  } = data;

  const {units} = useWeather();

  const otherInfoWidgets = [
    {
      id: 0,
      icon: "droplet",
      name: "Precipitation",
      value: Math.round(precipitation.total),
      unit: units.precipitation,
    },
    {
      id: 1,
      icon: "wind",
      name: "Wind",
      value: Math.round(wind.speed),
      unit: units.wind_speed,
    },
    {
      id: 2,
      icon: "tint",
      name: "Humidity",
      value: Math.round(humidity),
      unit: units.humidity,
    },
    {
      id: 3,
      icon: "glasses",
      name: "UV index",
      value: Math.round(uv_index),
      unit: units.uv_index,
    },
    {
      id: 4,
      icon: "cloud",
      name: "Clouds cover",
      value: Math.round(cloud_cover),
      unit: units.cloud_cover,
    },
    {
      id: 5,
      icon: "eye",
      name: "Visibility",
      value: Math.round(visibility),
      unit: units.visibility,
    },
  ];

  return (
    <>
      <div className="m-5 flex items-strech justify-start gap-3">
        <div className="border rounded-xl shadow-sm p-3 w-1/3">
          <div className="mb-4">
            <img
              src={`/dist/weather_icons/set03/big/${icon_num}.png`}
              alt={summary}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-3xl ">{Math.round(temperature)} {units.temperature}</div>
            <div className="text-xs mb-2">
              feels like {Math.round(feels_like)} {units.temperature}
            </div>
            <div className="text-md ">{summary}</div>
          </div>
        </div>
        <div className="border rounded-xl shadow-sm p-3 w-2/3">
          <div className="grid grid-cols-2 gap-4">
            {otherInfoWidgets.map(({ id, icon, name, value, unit }, index) => (
              <div key={id} className="p-2">
                <div className="flex gap-2">
                  <div>
                    <i className={`fa-solid fa-${icon}`}></i>
                  </div>
                  <div>
                    {value} {unit}
                  </div>
                </div>
                <div className="text-sm">{name} </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
