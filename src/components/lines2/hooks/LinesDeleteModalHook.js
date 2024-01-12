import { useState } from 'react';
import toast from 'react-hot-toast';
import useModal from '../../modal/ModalHook';
import TypesApiService from '../../types/service/TypesApiService';

const useLinesDeleteModal = (linesChangeHandle, handleTypesChange) => {
    const { isModalShow, showModal, hideModal } = useModal();
    const [currentId, setCurrentId] = useState(0);

    const showModalDialog = (id) => {
        showModal();
        setCurrentId(id);
    };

    const onClose = () => {
        hideModal();
    };

    const onDelete = async () => {
        await TypesApiService.delete(currentId);
        linesChangeHandle();
        handleTypesChange();
        toast.success('Элемент успешно удален', { id: 'LinesTable' });
        onClose();
    };

    return {
        isDeleteModalShow: isModalShow,
        showDeleteModal: showModalDialog,
        handleDeleteConfirm: onDelete,
        handleDeleteCancel: onClose,
    };
};

export default useLinesDeleteModal;
