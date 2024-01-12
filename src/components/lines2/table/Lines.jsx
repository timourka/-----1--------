import { Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import ModalForm from '../../modal/ModalForm.jsx';
import LinesItemForm from '../form/LinesItemForm.jsx';
import useLinesDeleteModal from '../hooks/LinesDeleteModalHook';
import useLinesFormModal from '../hooks/LinesFormModalHook';
import useLines from '../hooks/LinesHook';
import LinesTable from './LinesTable.jsx';
import LinesTableRow from './LinesTableRow.jsx';

const Lines2 = ({ handleTypesChange }) => {
    const { lines, handleLinesChange } = useLines();

    const {
        isDeleteModalShow,
        showDeleteModal,
        handleDeleteConfirm,
        handleDeleteCancel,
    } = useLinesDeleteModal(handleLinesChange, handleTypesChange);

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentItem,
        handleItemChange,
        handleFormSubmit,
        handleFormClose,
    } = useLinesFormModal(handleLinesChange, handleTypesChange);

    return (
        <div className='row m-2'>
            <ButtonGroup>
                <Button variant='info' onClick={() => showFormModal()}>
                    Добавить группу (диалог)
                </Button>
            </ButtonGroup>
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
Lines2.propTypes = {
    handleTypesChange: PropTypes.func,
};

export default Lines2;
