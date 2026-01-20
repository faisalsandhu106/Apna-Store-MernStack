import React, { useEffect, useState } from 'react'

const UseLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error)
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue))
        } catch (error) {
            console.log(error)
        }
    }, [key, storedValue]);


    return [storedValue, setStoredValue];
}

export default UseLocalStorage