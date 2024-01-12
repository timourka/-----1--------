import { useEffect, useState } from 'react';
import StepsApiService from '../../types/service/StepsApiService';

const useLinesItem = (id) => {
    const emptyItem = {
        id: '',
        sum: '',
        text: '',
    };
    const [item, setItem] = useState({ ...emptyItem });

    const getItem = async (itemId = undefined) => {
        if (itemId && itemId > 0) {
            const data = await StepsApiService.get(itemId);
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
