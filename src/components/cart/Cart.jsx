import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { DashLg, PlusLg, XLg } from 'react-bootstrap-icons';
import imgPlaceholder from '../../assets/200.png';
import './Cart.css';
import useCart from './CartHook';

const Cart = () => {
    const {
        cart,
        getCartSum,
        addToCart,
        removeFromCart,
        clearCart,
    } = useCart();

    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='mb-2 col-12 col-md-8 col-lg-6 d-flex align-items-center'>
                <strong className='flex-fill'>Корзина</strong>
                <Button variant='danger' onClick={() => clearCart()}>
                    <XLg /> Очистить
                </Button>
            </div>
            {
                cart.map((cartItem) =>
                    <Card key={cartItem.id} className='mb-2 col-12 col-md-8 col-lg-6'>
                        <Card.Body className='p-2 d-flex flex-column flex-sm-row align-items-center'>
                            <div className='cart-item flex-fill'>
                                <img className='cart-image' src={cartItem.image || imgPlaceholder} alt="Cart Image" />
                                {cartItem.type.name}
                            </div>
                            <div className='cart-item mt-2 mt-sm-0 d-flex flex-column align-items-center align-items-sm-end'>
                                <div>
                                    {cartItem.price}
                                    {' * '}
                                    {cartItem.count}
                                    {' = '}
                                    {parseFloat(cartItem.price * cartItem.count).toFixed(2)}
                                </div>
                                <ButtonGroup className='mt-2 mt-sm-1' aria-label="Cart counter">
                                    <Button variant="primary" onClick={() => addToCart(cartItem)}>
                                        <PlusLg />
                                    </Button>
                                    <Button variant="danger" onClick={() => removeFromCart(cartItem)}>
                                        <DashLg />
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </Card.Body>
                    </Card>)
            }
            <div className='mb-2 col-12 col-md-8 col-lg-6 d-flex justify-content-end'>
                <strong>Итого: {getCartSum()} &#8381;</strong>
            </div>
        </div>
    );
};

export default Cart;
