/**
 * Composant de la page de profil.
 *
 * Ce composant affiche la page de profil de l'utilisateur, incluant la barre latérale, l'en-tête et le tableau de bord.
 *
 * @module Profile
 */

import './profile.scss';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import Dashboard from "../../components/Dashboard/index.jsx";
import { useParams } from 'react-router-dom';

/**
 * Composant fonctionnel pour la page de profil.
 *
 * @function
 * @name Profile
 * @returns {JSX.Element} Le composant de la page de profil.
 */
function Profile() {
    const { id } = useParams();
    const userId = parseInt(id, 10);

    return (
        <div className="MainWrapper">
            <Sidebar />
            <div className="DashboardWrapper">
                <Header userId={userId} />
                <Dashboard userId={userId} />
            </div>
        </div>
    );
}

export default Profile;