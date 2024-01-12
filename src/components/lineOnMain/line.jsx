import PropTypes from 'prop-types';

const Line = ({ line }) => {
    return (
        <div className='row' style={{ backgroundColor: 'coral', borderRadius: '20px' }}>
            <div className='col'>студент: {line.name}</div>
            <div className='col'>группа: {line.type.text}</div>
            <div className='col'>стипендия: {parseFloat(line.step.sum).toFixed(2)}</div>
        </div>
    );
};

Line.propTypes = {
    line: PropTypes.object,
};

export default Line;
