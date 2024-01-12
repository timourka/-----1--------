import { useState } from 'react';
import toast from 'react-hot-toast';
import getBase64FromFile from '../../utils/Base64';
import StepsApiService from '../../types/service/StepsApiService';
import useLinesItem from './LinesItemHook';

const useLinesItemForm = (id, linesChangeHandle) => {
    const { item, setItem } = useLinesItem(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getLineObject = (formData) => {
        const sum = parseInt(formData.sum, 10);
        const { text } = formData;
        return {
            sum: sum.toString(),
            text: text.toString(),
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
                await StepsApiService.create(body);
            } else {
                await StepsApiService.update(id, body);
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
