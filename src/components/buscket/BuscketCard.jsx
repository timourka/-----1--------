import PropTypes from 'prop-types';

const BuscketCard = ({ line, removeFromCart }) => {
    return (
        <div className="card mydress mb-3" style={{ maxWidth: '100%' }}>
        <div className="row g-0">
        <div className="col-md-4 pict">
            <img src={line.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">Название: {line.nameItem}</h5>
            <h5 className="card-title">Размер: {line.size}</h5>
            <p className="card-text">Цена: {line.price} руб.</p>
            <button className="btn btn-primary w-50" type="button" onClick={() => removeFromCart(line)}>
                Удалить
            </button>
            </div>
        </div>
        </div>
    </div>
    );
};
BuscketCard.propTypes = {
    line: PropTypes.object,
    removeFromCart: PropTypes.func,
};

export default BuscketCard;
