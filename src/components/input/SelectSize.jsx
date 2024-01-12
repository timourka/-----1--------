import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const SelectSize = ({
    values, name, label, value, onChange, className, ...rest
}) => {
    return (
        <Form.Group className={`mb-2 ${className || ''}`} controlId={name}>
            <Form.Label className='form-label'>{label}</Form.Label>
            <Form.Select name={name || ''} value={value || ''} onChange={onChange} {...rest}>
                <option value=''>Выберите размер</option>
                {
                    values.map((size) => <option key={size.id} value={size.id}>{size.name}</option>)
                }
            </Form.Select>
        </Form.Group>
    );
};

SelectSize.propTypes = {
    values: PropTypes.array,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default SelectSize;
