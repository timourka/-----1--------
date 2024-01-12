import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CardDress = ({ line }) => {
    const navigate = useNavigate();
    return (
        <>
                <div className="col m-0">
                    <div className="card" style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}}>
                        <img src= {line.image} className="cards card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                        <a href="#" onClick={ () => { navigate(`/ProductPage/${line.id}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}}> {line.nameItem}</a>
                        <p className="card-text">цена: {parseFloat(line.price).toFixed(2)} р.</p>
                    </div>
                </div>
            </div>
        </>
    );
};
CardDress.propTypes = {
    line: PropTypes.object,
};

export default CardDress;
