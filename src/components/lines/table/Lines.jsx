import { Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Select from '../../input/Select.jsx';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import ModalForm from '../../modal/ModalForm.jsx';
import LinesItemForm from '../form/LinesItemForm.jsx';
import useLinesDeleteModal from '../hooks/LinesDeleteModalHook';
import useLinesFormModal from '../hooks/LinesFormModalHook';
import useLines from '../hooks/LinesHook';
import LinesTable from './LinesTable.jsx';
import LinesTableRow from './LinesTableRow.jsx';

const Lines = ({ types, currentFilter, handleFilterChange }) => {
    const { lines, handleLinesChange } = useLines(currentFilter);

    const {
        isDeleteModalShow,
        showDeleteModal,
        handleDeleteConfirm,
        handleDeleteCancel,
    } = useLinesDeleteModal(handleLinesChange);

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentItem,
        handleItemChange,
        handleFormSubmit,
        handleFormClose,
    } = useLinesFormModal(handleLinesChange);

    return (
        <div className='row m-2'>
            <ButtonGroup>
                <Button variant='info' onClick={() => showFormModal()}>
                    Добавить студента (диалог)
                </Button>
            </ButtonGroup>
            <Select className='mt-2' values={types} label='Фильтр по товарам'
                value={currentFilter} onChange={handleFilterChange} />
            <LinesTable>
                {
                    lines.map((line, index) =>
                        <LinesTableRow key={line.id}
                            index={index} line={line}
                            onDelete={() => showDeleteModal(line.id)}
                            onEdit={() => showFormModal(line.id)}
                        />)
                }
            </LinesTable>
            <ModalConfirm show={isDeleteModalShow}
                onConfirm={handleDeleteConfirm} onClose={handleDeleteCancel}
                title='Удаление' message='Удалить элемент?' />
            <ModalForm show={isFormModalShow} validated={isFormValidated}
                onSubmit={handleFormSubmit} onClose={handleFormClose}
                title='Редактирование'>
                <LinesItemForm item={currentItem} handleChange={handleItemChange} />
            </ModalForm>
        </div>
    );
};
Lines.propTypes = {
    types: PropTypes.object,
    currentFilter: PropTypes.object,
    handleFilterChange: PropTypes.func,
};

export default Lines;
