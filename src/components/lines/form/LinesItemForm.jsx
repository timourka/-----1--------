import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';
import useTypes from '../../types/hooks/TypesHook';
import useSteps from '../../types/hooks/StepsHook';
import './LinesItemForm.css';

const LinesItemForm = ({ item, handleChange }) => {
    const { types } = useTypes();
    const { steps } = useSteps();

    return (
        <>
            <Select values={types} name='typeId' label='группа' value={item.typeId} onChange={handleChange}
                required />
            <Select values={steps} name='stepId' label='Степендия' value={item.stepId} onChange={handleChange}
                required />
            <Input name='name' label='Имя' value={item.name} onChange={handleChange}
                type='text' required />
        </>
    );
};

LinesItemForm.propTypes = {
    item: PropTypes.object,
    handleChange: PropTypes.func,
};

export default LinesItemForm;
