/**
 * Point d'entrée principal de l'application React.
 *
 * Ce fichier configure le routeur de l'application et rend les composants principaux.
 *
 * @module Router
 */

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './style/global.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile/index.jsx';
import Navbar from "./components/Navbar/index.jsx";
import NotFound from "./components/NotFound/index.jsx";

/**
 * Crée et rend l'application React.
 *
 * @function
 * @name renderApp
 */
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="/SportSee" future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
            <Navbar/>
            <Routes>
                <Route path="Pages/Profile/user/:id" element={<Profile/>}/>
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element={<NotFound/>}/> {/* Route par défaut pour les pages non trouvées */}
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);