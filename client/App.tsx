import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
  )
}

export default App;
