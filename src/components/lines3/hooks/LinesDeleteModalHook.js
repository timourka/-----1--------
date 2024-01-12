import { useState } from 'react';
import toast from 'react-hot-toast';
import useModal from '../../modal/ModalHook';
import StepsApiService from '../../types/service/StepsApiService';

const useLinesDeleteModal = (linesChangeHandle) => {
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
        await StepsApiService.delete(currentId);
        linesChangeHandle();
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
