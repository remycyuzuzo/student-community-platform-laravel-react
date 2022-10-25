import { useEffect, useState } from "react";

function getSavedValue(key) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    return savedValue
}

function useLocalStorage(key) {
    const [value, setValue] = useState(getSavedValue(key));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value]);

    return [value, setValue];
}


export default useLocalStorage;