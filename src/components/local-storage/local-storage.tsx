import { useState } from 'react';
import styles from './local-storage.module.css';

export default function LocalStorage(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedValue = window.localStorage.getItem('is-dark-mode');
    return storedValue === null ? false : JSON.parse(storedValue);
  });

  const toggleDarkMode = () => {
    window.localStorage.setItem('is-dark-mode', JSON.stringify(isDarkMode));
    setIsDarkMode(isDarkMode_ => !isDarkMode_);
  };

  return (
    <div className={isDarkMode ? styles.DarkTheme : styles.LightTheme}>
      <div>{isDarkMode ? 'Dark' : 'Light'}</div>
      <button type="button" onClick={toggleDarkMode}>
        Change Theme
      </button>
    </div>
  );
}
