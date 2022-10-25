import useDarkMode from '@/hooks/useDarkMode';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const DarkModeToggler = () => {
    const [isDarkMode, setDarkMode] = useDarkMode()

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    return (
        <DarkModeSwitch
            style={{ marginRight: 16 }}
            checked={isDarkMode}

            onChange={toggleDarkMode}
            size={30}
        />
    );
};

export default DarkModeToggler