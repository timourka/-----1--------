import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUserL } from '../components/types/hooks/UsersHook';

const Autorization = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });
    const { users, handlerLoginChanged } = useUserL(formData.login);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() !== false) {
            console.log(formData);
        }
        if (formData.login === 'admin' && formData.password === '25072004') {
            navigate('/AdminPage');
        }
        if (users.password === formData.password) {
            localStorage.setItem('yohoho', JSON.stringify(users.id));
            navigate('/');
        }
        setValidated(false);
    };
    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData({
            ...formData,
            [inputName]: inputValue,
        });
        if (inputName === 'login') {
            handlerLoginChanged(inputValue);
        }
    };

    return (
        <>
            <Container fluid className="container-fluid p-2" style = {{ color: 'white' }}>
    <div className="row justify-content-center">
        <Form className="col-md-6 m-0" noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="text-center">
                Введите данные пользователя
            </div>
            <Form.Group className="mb-2" controlId="login" >
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="text" name="login" required
                    value={formData.login} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="password" >
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" name="password" required
                    value={formData.password} onChange={handleChange}/>
            </Form.Group>
            <div className="text-center">
                <Button className="w-50" variant="primary" type="submit">Войти</Button>
            </div>
            <div className="text-center">
                <Link className="nav-link active" to="/Registration">Зарегистрироваться</Link>
            </div>
        </Form>
    </div>
</Container>
        </>
    );
};

export default Autorization;
