import './profile.scss';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import Dashboard from "../../components/Dashboard/index.jsx";
import { useParams } from 'react-router-dom';

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