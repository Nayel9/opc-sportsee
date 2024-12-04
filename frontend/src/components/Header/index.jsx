/**
 * Composant de l'en-tête.
 *
 * Ce composant affiche un message de bienvenue personnalisé pour l'utilisateur, incluant son prénom et un message de félicitations.
 *
 * @module Header
 */

import { useState, useEffect } from 'react';
import apiService from '../../services/apiService';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledUserName = styled.span`
    font-weight: 500;
    color: #FF0000;
`;

const StyledHeader = styled.h3`
    margin: 0;
    font-size: 52px;
    font-weight: 700;
`;

const StyledP = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #000000;
`;

/**
 * Composant fonctionnel pour l'en-tête.
 *
 * @function
 * @name Header
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'ID de l'utilisateur.
 * @returns {JSX.Element} Le composant de l'en-tête.
 */
function Header({ userId }) {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        apiService.getUserInfosData(userId)
            .then(data => {
                setUserName(data.firstName);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données:", error);
            });
    }, [userId]);

    Header.propTypes = {
        userId: PropTypes.number.isRequired,
    }

    return (
        <div className="Header">
            <StyledHeader>
                Bonjour
                <StyledUserName> {userName}</StyledUserName>
            </StyledHeader>
            <StyledP>Félicitation ! Vous avez explosé vos objectifs hier 👏</StyledP>
        </div>
    );
}

export default Header;