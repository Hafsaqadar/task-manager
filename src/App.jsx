import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Registration/Register';
import HomePage from './HomePage';
import Login from './components/Registration/Login';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Redirect root path to register or homepage */}
        <Route path="/" element={<Navigate to="/register" replace />} />
        
        {/* Public routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        <Route
          path="/homepage/*"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/settingPage" element={<SettingPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;