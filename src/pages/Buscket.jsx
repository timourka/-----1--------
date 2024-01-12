import { Link } from 'react-router-dom';
import './buscket.css';
import BuscketCard from '../components/buscket/BuscketCard.jsx';
import useCart from '../components/cart/CartHook';

const Buscket = () => {
    const {
        cart,
        removeFromCart,
    } = useCart();
    return (
        <>
         <form className="col-md-8 mx-auto mt-8" action="./Buscket" method="get">
            <div className="busket text-center" style = {{ color: 'white' }}>
                Корзина
            </div>
            {
             cart.map((cartItem) => <BuscketCard key={cartItem.id} line={cartItem}
             removeFromCart={removeFromCart} />)
            }
            <div className="text-center">
                <button type="button" className="btn btn-primary btn-lg">
                    <Link className="nav-link active" to="/OrderPage">Переидти к оформлению</Link>
                </button>
            </div>
        </form>
        </>
    );
};

export default Buscket;
