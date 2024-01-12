import { useEffect, useState } from 'react';
import StudentsApiService from '../../types/service/StudentsApiService';

const useLinesItem = (id) => {
    const emptyItem = {
        id: '',
        typeId: '',
        stepId: '',
        name: '',
    };
    const [item, setItem] = useState({ ...emptyItem });

    const getItem = async (itemId = undefined) => {
        if (itemId && itemId > 0) {
            const data = await StudentsApiService.get(itemId);
            setItem(data);
        } else {
            setItem({ ...emptyItem });
        }
    };

    useEffect(() => {
        getItem(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        item,
        setItem,
    };
};

export default useLinesItem;
