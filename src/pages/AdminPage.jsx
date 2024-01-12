import { useNavigate } from 'react-router-dom';
import Lines from '../components/lines/table/Lines.jsx';
import Lines2 from '../components/lines2/table/Lines.jsx';
import Lines3 from '../components/lines3/table/Lines.jsx';
import useTypeFilter from '../components/lines/hooks/LinesFilterHook';

import './admin.css';

const AdminPage = () => {
    const {
        types, currentFilter, handleFilterChange, handleTypesChange,
    } = useTypeFilter();
    const navigate = useNavigate();
    const handlerLogOut = () => {
      localStorage.setItem('yohoho', null);
      navigate('/Autorization');
    };
    return (
        <>
            <button type="button" className="btn btn-primary btn-lg" onClick={handlerLogOut}>
                Выйти
            </button>
            <Lines
            types={types} currentFilter={currentFilter} handleFilterChange={handleFilterChange} />
            <Lines2
            handleTypesChange={handleTypesChange} />
            <Lines3 />
        </>
    );
};

export default AdminPage;
