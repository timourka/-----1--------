import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import './Modal.css';

const ModalForm = ({
    show, title, validated, onSubmit, onClose, children,
}) => {
    return createPortal(
        <Modal show={show} backdrop='static' onHide={() => onClose()}>
            <Modal.Header className='pt-2 pb-2 ps-3 pe-3' closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Form className='m-0' noValidate validated={validated} onSubmit={onSubmit}>
                <Modal.Body>
                    {children}
                </Modal.Body>

                <Modal.Footer className='m-0 pt-2 pb-2 ps-3 pe-3 row justify-content-center'>
                    <Button variant='secondary' className='col-5 m-0 me-2'
                        onClick={() => onClose()}>
                        Отмена
                    </Button>
                    <Button variant='primary' className='col-5 m-0 ms-2' type='submit'>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>,
        document.body,
    );
};

ModalForm.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    validated: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node,
};

export default ModalForm;
