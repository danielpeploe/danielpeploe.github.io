import { useState, useEffect } from 'react';

function useThemeToggle(initialTheme: 'light' | 'dark' = 'light') {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);

  useEffect(() => {
    // Set the initial theme when the hook is first used
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}

export default useThemeToggle;