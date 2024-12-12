import { Link } from 'react-router-dom';
import './notfound.scss';

function NotFound() {
    return (
        <div className="NotFound">
            <span>404</span>
            <h1>Page non trouvée</h1>
            <p>La page que vous recherchez n'existe pas.</p>
            <Link to="Pages/Home">Retour à l'accueil</Link>
        </div>
    );
}

export default NotFound;