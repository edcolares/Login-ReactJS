import { useState } from 'react';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectLayout } from './components/Protectedlayout';
import LoginScreen from './components/Login';

function Profile() {
  return (
    <h2>Olá, este é o componente Profile!</h2>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/profile'
            element={
              <ProtectLayout>
                <Profile />
              </ProtectLayout>
            }
          />
          <Route
            path='/login'
            element={
              <LoginScreen />
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;