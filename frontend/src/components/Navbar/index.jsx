/**
 * Composant de la barre de navigation.
 *
 * Ce composant affiche la barre de navigation avec des liens vers différentes pages de l'application.
 *
 * @module Navbar
 */

import logo from '../../assets/logo.png';
import './navbar.scss';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const StyledLink = Styled(Link)`
    &:hover {color: #FF0000!important;}
`;

/**
 * Composant fonctionnel pour la barre de navigation.
 *
 * @function
 * @name Navbar
 * @returns {JSX.Element} Le composant de la barre de navigation.
 */
function Navbar() {
    return (
        <div className="NavbarWrapper">
            <img
                className="Logo"
                src={logo}
                alt="logo"
                loading="lazy"
                rel="preload"
            />
            <StyledLink to="/Pages/Home">Accueil</StyledLink>
            <StyledLink to="/Pages/Profile">Profil</StyledLink>
            <StyledLink to="/Pages/Setup">Réglage</StyledLink>
            <StyledLink to="/Pages/Community">Communauté</StyledLink>
        </div>
    );
}

export default Navbar;