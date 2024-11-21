import Sidebar from '../../Components/Sidebar';
import './profile.scss';

function Profile() {
    return (
        <div className="MainWrapper">
            <Sidebar />
            <div className="DashboardWrapper">Profile</div>
        </div>
    );
}

export default Profile;