import React, { useState } from 'react';
    import { ThemeProvider } from './ThemeContext';
    import Header from './components/Header';
    import BlogList from './components/BlogList';
    import './App.css';

    const App = () => {
      const [theme, setTheme] = useState('light');

      const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };

      return (
        <ThemeProvider value={{ theme, toggleTheme }}>
          <div className={`app ${theme}`}>
            <Header />
            <BlogList />
          </div>
        </ThemeProvider>
      );
    };

    export default App;
