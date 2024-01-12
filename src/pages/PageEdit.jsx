import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageEdit = () => {
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
            <div className="text-center">
                <img id="image-preview" src="https://via.placeholder.com/200" className="rounded rounded-circle"
                    alt="placeholder" />
            </div>
            <Form id="items-form" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="item">
                    <Form.Label htmlFor="item" className="form-label">Товары</Form.Label>
                    <Form.Select name='selected' required>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" controlId="price">
                    <Form.Label>Цена</Form.Label>
                    <Form.Control type="number" name="price"
                        value="0.00" min="1000.00" step="0.50" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="count">
                    <Form.Label>Количество</Form.Label>
                    <Form.Control type="number" name="count"
                        value="0" min="1" step="1" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="file">
                    <Form.Label>Изображение</Form.Label>
                    <Form.Control type="file" name="image" accept="image/*" />
                </Form.Group>
                <Form.Group className="d-flex flex-md-row flex-column justify-content-center">
                    <Button className="btn-mw me-md-3 mb-md-0 mb-2" as={Link} to="/Category" variant="secondary">Назад</Button>
                    <Button className="btn-mw me-md-3" type="submit" variant="primary">Сохранить</Button>
                </Form.Group>
            </Form>
        </>
    );
};

export default PageEdit;
