import React from "react";
import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyForecastWidget from "./DailyForecastWidget";
import HorizontallyScrollable from "./HorizontallyScrollable";

export default function Forecast({ data, type, title }) {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <HorizontallyScrollable className="flex flex-nowrap gap-2 p-2 m-1 overflow-x-hidden cursor-grab">
          {data.map((singleData,index) => (
            <div className="mt-4" key={singleData.date || singleData.day}>
              {type === "hourly" ? (
                <HourlyForecastWidget data={singleData} key={`hourly_${index}`}/>
              ) : (
                <DailyForecastWidget data={singleData} key={`daily_${index}`}/>
              )}
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  );
}
