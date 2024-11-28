import React from 'react';
import { ThemeProvider, useTheme } from './hooks/useTheme';
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
        <main style={{ backgroundColor: currentTheme.token.colorBgBase, color: currentTheme.token.colorTextBase, minHeight: '100vh' }}>
          <AdminLayout />
        </main>
      </ConfigProvider>
    );
  };

  return (
    <ScreenSizeProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ScreenSizeProvider>
  );
};

export default App;
