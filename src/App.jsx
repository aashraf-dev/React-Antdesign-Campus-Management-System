import React from 'react';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScreenSizeProvider } from './hooks/useScreenSize';
import { ConfigProvider } from 'antd';
import { lightTheme, darkTheme } from './constants/themeConstants';


import AdminLayout from './layouts/admin/AdminLayout';
const App = () => {
  const AppContent = () => {
    const { theme } = useTheme(); // Access the current theme
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
      <ConfigProvider theme={currentTheme}>
        <AdminLayout pageTitle={'Dashboard'}>
          <p>Hola Amigo</p>
        </AdminLayout >
      </ConfigProvider>
    );
  };

  return (
    <Router>
      <ScreenSizeProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </ScreenSizeProvider>
    </Router>
  );
};

export default App;
