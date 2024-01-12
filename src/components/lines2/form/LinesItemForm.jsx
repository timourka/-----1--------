import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import './LinesItemForm.css';

const LinesItemForm = ({ item, handleChange }) => {
    return (
        <>
            <Input name='text' label='название' value={item.text} onChange={handleChange}
                type='text' required />
        </>
    );
};

LinesItemForm.propTypes = {
    item: PropTypes.object,
    handleChange: PropTypes.func,
};

export default LinesItemForm;
