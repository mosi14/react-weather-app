import {useState} from 'react';

export default function Settings() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (<>
        <div className="flex items-center justify-center gap-3">
            <div>
                <div>
                    <div onClick={toggleTheme} className="cursor-pointer">
                        {isDarkMode ? (
                            <i className="fas fa-moon min-w-5"></i>
                        ) : (
                            <i className="fas fa-sun min-w-5"></i>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <i className="fas fa-gear"></i>
                </div>
            </div>
        </div>
    </>)
}