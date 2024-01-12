import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

const OrderPage = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <Container fluid className="container-fluid p-2" style = {{ color: 'white' }}>
            <div className="row justify-content-center">
                <Form className="col-md-6 m-0" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="firstname" >
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text" name="firstname" required />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="email">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control type="email" name="email" required />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="password" >
                            <Form.Label>Номер карты</Form.Label>
                            <Form.Control type="password" name="password" required />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="password" >
                            <Form.Label>CVC</Form.Label>
                            <Form.Control type="password" name="passwordAgain" required />
                    </Form.Group>
                    <div className="text-center">
                        <Button className="w-50" variant="primary" type="submit">Купить</Button>
                    </div>
                </Form>
            </div>
        </Container>
        </>
    );
};

export default OrderPage;
