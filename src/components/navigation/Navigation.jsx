import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';
import { useUser } from '../types/hooks/UsersHook';

const Navigation = () => {
    const user = useUser(JSON.parse(localStorage.getItem('yohoho'))).user.id;
    const navigate = useNavigate();
    const handlerLK = () => {
        if (user === 1) {
            navigate('/AdminPage');
        } else {
            navigate('/Autorization');
        }
    };
    return (
        <header>
    <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <div>
                Учебный процесс
                </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-end" id="navbarNav">
                <div className="navbar-nav">
                    <Link className="nav-link active" to="/Search">Поиск</Link>
                    <Link className="nav-link active" to="/">Главная</Link>
                    <div className="nav-link active" onClick={handlerLK}>Личный кабинет</div>
                </div>
            </div>
        </div>
    </nav>
</header>
    );
};

Navigation.propTypes = {
    routes: PropTypes.array,
};

export default Navigation;
