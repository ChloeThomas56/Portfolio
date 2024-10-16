'use client';

import styles from './themeToggleButton.module.scss';
import { useTheme } from 'next-themes';
import { VscColorMode } from 'react-icons/vsc';
import { Button } from '../button/Button';

export default function ThemeToggleButton() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Button onClick={toggleTheme} className={styles['theme-toggle-button']} aria-label="Changer le thème">
            <VscColorMode />
        </Button>
    );
}