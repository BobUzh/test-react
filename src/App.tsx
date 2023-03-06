import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { darkTheme } from './theme';

import HomePage from './pages/HomePage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';

import RequireAuth from './hoc/RequireAuth';
import { useAppDispach } from './redux/hook';
import { setUser } from './redux/userSlice';

function App() {
  const dispatch = useAppDispach();
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      dispatch(setUser({id:userId, isAuthorized: true}));
    }
  }, []);
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" height={1}>
        <Header />
          <Box sx={{flex: 1}}>
            {/* ROUTES */}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/wishlist' element={<WishlistPage />} />
              <Route path='/profile' element={
                <RequireAuth>
                  <ProfilePage />
                </RequireAuth>
              } />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
            {/* ROUTES */}
          </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
