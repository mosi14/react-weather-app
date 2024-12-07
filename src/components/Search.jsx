export default function Search() {
    return (<>
        <div className="flex items-center justify-center">
            <div className="relative">
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                    className="pl-10 p-2 rounded-full border-2 border-gray-400 focus:border-gray-700 focus:outline-none"
                    type="text"
                    name="search-city"
                    placeholder="Search city..."
                />
            </div>
        </div>
    </>)
}