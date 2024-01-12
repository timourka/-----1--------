import { useState } from 'react';
import toast from 'react-hot-toast';
import getBase64FromFile from '../../utils/Base64';
import StudentsApiService from '../../types/service/StudentsApiService';
import useLinesItem from './LinesItemHook';

const useLinesItemForm = (id, linesChangeHandle) => {
    const { item, setItem } = useLinesItem(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getLineObject = (formData) => {
        const typeId = parseInt(formData.typeId, 10);
        const stepId = parseInt(formData.stepId, 10);
        const { name } = formData;
        return {
            typeId: typeId.toString(),
            stepId: stepId.toString(),
            name: name.toString(),
        };
    };

    const handleImageChange = async (event) => {
        const { files } = event.target;
        const file = await getBase64FromFile(files.item(0));
        setItem({
            ...item,
            image: file,
        });
    };

    const handleChange = (event) => {
        if (event.target.type === 'file') {
            handleImageChange(event);
            return;
        }
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setItem({
            ...item,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const body = getLineObject(item);
        if (form.checkValidity()) {
            if (id === undefined) {
                await StudentsApiService.create(body);
            } else {
                await StudentsApiService.update(id, body);
            }
            if (linesChangeHandle) linesChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'LinesTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        item,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    };
};

export default useLinesItemForm;
