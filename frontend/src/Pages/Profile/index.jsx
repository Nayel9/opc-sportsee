import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './profile.scss';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import Dashboard from "../../components/Dashboard/index.jsx";
import apiService from '../../services/apiService';

function Profile() {
    const { id } = useParams();
    const userId = parseInt(id, 10);
    const navigate = useNavigate();
    const [dataAvailable, setDataAvailable] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await apiService.getUserInfosData(userId);
                setDataAvailable(true);
            } catch (error) {
                setDataAvailable(false);
                navigate('/404');
            }
        };

        fetchData();
    }, [userId, navigate]);

    if (!dataAvailable) {
        return null;
    }

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