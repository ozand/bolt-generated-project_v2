import React, { useContext } from 'react';
    import ThemeContext from '../ThemeContext';

    const Header = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);

      return (
        <header className={`header ${theme}`}>
          <h1>Dev Blog</h1>
          <button onClick={toggleTheme}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </header>
      );
    };

    export default Header;
