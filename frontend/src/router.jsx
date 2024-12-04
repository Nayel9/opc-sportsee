import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/index.jsx';
import Navbar from "./components/Navbar/index.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter basename="/SportSee" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Navbar />
          <Routes>
              <Route path="Pages/Profile/user/:id" element={<Profile />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
