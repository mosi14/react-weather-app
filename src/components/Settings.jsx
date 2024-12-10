import { useState } from "react";
import { useTheme } from "../context/theme.context";
import { MEASUREMENT_SYSTEMS } from "../utils/index";
import { useWeather } from "../context/weather.context";

export default function Settings() {
  const { dark, setDark } = useTheme();
  const { measurementSystem, setMeasurementSystem } = useWeather();

  const [openSetting, setOpenSetting] = useState(false);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
  };

  const handleToggleSetting = () => {
    setOpenSetting((prevSet) => !prevSet);
  };

  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system);
    setTimeout(() => setOpenSetting(false), 300);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <div>
          <div>
            <div onClick={toggleTheme} className="cursor-pointer">
              {dark ? (
                <div className={dark ? "" : "active"}>
                  <i className="fas fa-moon min-w-5 "></i>
                </div>
              ) : (
                <div className={dark ? "active" : ""}>
                  <i className="fas fa-sun min-w-5"></i>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="relative">
          <div onClick={handleToggleSetting} className="cursor-pointer">
            <i className="fas fa-gear"></i>
          </div>
          {openSetting && (
            <div className="absolute top-12 right-0 dark:bg-slate-900 bg-white p-3 border rounded transition ease-in-out delay-300 ">
              <div className="flex flex-col text-left">
                <h4>Measurement Systems:</h4>
                <div className="flex flex-wrap mt-2 gap-2 min-w-56">
                  {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
                    <div
                      className={`flex justify-center items-center min-w-16 min-h-2 rounded border p-1 cursor-pointer ${
                        system === measurementSystem
                          ? "bg-slate-200 text-gray-950"
                          : ""
                      }`}
                      key={system}
                      onClick={() => changeMeasurementSystem(system)}
                    >
                      {system}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
