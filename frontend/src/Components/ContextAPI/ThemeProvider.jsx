import { createContext } from "react";
import UseLocalStorage from "../UseLocalStorage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [storedValue, setStoredValue] = UseLocalStorage("theme", "")

    return (
        <ThemeContext.Provider value={{ storedValue, setStoredValue }}>
            {children}
        </ThemeContext.Provider>
    )
};