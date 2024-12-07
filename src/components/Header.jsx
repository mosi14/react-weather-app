import Place from "./Place.jsx";
import Search from "./Search.jsx";
import Settings from "./Settings.jsx";

export default function Header() {
    return (<>
        <header className=' flex justify-between items-center bg-stone-100 w-full h-1/5 text-center p-5 shadow'>
            <Place/>
            <Search/>
            <Settings/>
        </header>
    </>)
}