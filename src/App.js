import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Assessment, Jobs, Profile, Legal } from './pages/index';
import { Sidebar } from './components/index';
export default function App() {
  return (
    <div className="page-wrapper chiller-theme toggled">
      {/* toggled */}
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/assessments" element={<Assessment />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/legal" element={<Legal />}></Route>
        <Route path="./" exact element={<Home />}></Route>
      </Routes>
    </div>
  );
}
