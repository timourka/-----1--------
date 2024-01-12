import { useNavigate } from 'react-router-dom';
import './account.css';
import { useUser } from '../components/types/hooks/UsersHook';

const Account = () => {
  const user = useUser(JSON.parse(localStorage.getItem('yohoho')));
  const navigate = useNavigate();

  const handlerLogOut = () => {
    localStorage.setItem('yohoho', null);
    navigate('/Autorization');
  };

  return (
    <>
      <div className = "container-fluid m-0">
        <div className = "row">
          <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3" style={{ backgroundColor: '#5C00A4', fontSize: 'x-large' }}>
            <div style={{ color: 'white' }}>
                {
                  user.user.login
                }
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-lg" onClick={handlerLogOut}>
                Выйти
              </button>
            </div>
          </div>
            <div className="col col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <h1 className = "text-center title h1" style={{ color: 'white' }}>
                Мои заказы
              </h1>
              <table className="table-primary table-bordered t1">
                  <thead className="table hat">
                    <tr>
                      <th scope="col">Изображение</th>
                      <th scope="col">Название</th>
                      <th scope="col">Цена</th>
                    </tr>
                  </thead>
              </table>
            </div>
          </div>
      </div>
    </>
  );
};

export default Account;
