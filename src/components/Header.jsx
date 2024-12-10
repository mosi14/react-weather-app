import Place from "./Place.jsx";
import Search from "./Search.jsx";
import Settings from "./Settings.jsx";

export default function Header() {
  return (
    <>
      <header className=" bg-stone-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full h-1/5 text-center p-5 shadow">
        <div className="flex justify-between items-center sm:container mx-auto">
          <Place />
          <Search />
          <Settings />
        </div>
      </header>
    </>
  );
}
