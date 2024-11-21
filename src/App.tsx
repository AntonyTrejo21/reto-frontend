import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'; // Usamos useNavigate para redirigir
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import BusesList from './components/BusList/BusList';
import BusDetail from './components/BusDetail/BusDetail';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const navigate = useNavigate(); 
  useEffect(() => {
    if (!token) {
      navigate('/login'); 
    }
  }, [token, navigate]); 
  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
            <Route
        path="/bus"
        element={<ProtectedRoute element={<BusesList />} />}
      />
      <Route
        path="/bus/:id"
        element={<ProtectedRoute element={<BusDetail />} />}
      />
    </Routes>
  );
};

export default App;
