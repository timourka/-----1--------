import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import { CartProvider } from './components/cart/CartContext.jsx';

const App = ({ routes }) => {
  return (
    <>
    <CartProvider>
      <Navigation routes={routes}></Navigation>
      <Container className='p-2' as="main" fluid>
        <Outlet />
      </Container>
      <Footer />
    </CartProvider>
    </>
  );
};

App.propTypes = {
  routes: PropTypes.array,
};

export default App;
