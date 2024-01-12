import PropTypes from 'prop-types';
import './ln.css';

const LinesTable = ({ children }) => {
    return (
        <table className="mt-2 table-primary table-bordered w-100 t1">
            <thead className = "table hat">
                <tr>
                    <th scope='col'>№</th>
                    <th scope='col' className='w-25'>название</th>
                    <th scope='col'></th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody >
        </table >
    );
};

LinesTable.propTypes = {
    children: PropTypes.node,
};

export default LinesTable;
