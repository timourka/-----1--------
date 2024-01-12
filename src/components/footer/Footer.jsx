import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='my-footer mt-auto d-flex flex-shrink-0 justify-content-center align-items-center'>
            Тимур, {year}
        </footer>
    );
};

export default Footer;
