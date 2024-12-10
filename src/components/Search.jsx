import { useState } from "react";
import { searchPlaces } from "../api";
import { useWeather } from "../context/weather.context";

export default function Search() {
  const { setPlace } = useWeather();
  const [text, setText] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  async function onSearch(e) {
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setSearchResult(data);
    setOpenSearchResults(data.length);
  }

  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setOpenSearchResults(false);
  };

  return (
    <>
      <div className="flex items-center justify-center relative">
        <div className="relative">
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 "></i>
          <input
            className="pl-10 p-2 rounded-full border-2 border-gray-400 focus:border-gray-700 focus:outline-none dark:text-black"
            type="text"
            name="search-city"
            placeholder="Search city..."
            value={text}
            onChange={onSearch}
          />
        </div>
        {openSearchResults && (
          <div className="absolute top-14 left-8 min-w-full min-h-10 max-h-[50vh] bg-slate-900 rounded-md z-50 overflow-y-auto">
            <div className=" text-left ">
              {searchResult.map((place) => (
                <div
                  className=" p-3 cursor-pointer hover:text-gray-300 hover:bg-slate-800"
                  key={place.place_id}
                  onClick={() => changePlace(place)}
                >
                  {" "}
                  {place.name}, {place.adm_area1}, {place.country}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
