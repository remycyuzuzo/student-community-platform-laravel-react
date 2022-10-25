import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const isBrowserDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function useDarkMode() {
    const [enabled, setEnabled] = useLocalStorage('dark-theme')
    const isEnabled = isBrowserDarkMode() && enabled !== false
    if (enabled === null) {
        setEnabled(isBrowserDarkMode())
    }

    useEffect(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;

        isEnabled ? bodyClass.add(className) : bodyClass.remove(className)
    }, [enabled, setEnabled])

    return [enabled, setEnabled];
}

export default useDarkMode;