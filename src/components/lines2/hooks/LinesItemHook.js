import { useEffect, useState } from 'react';
import TypesApiService from '../../types/service/TypesApiService';

const useLinesItem = (id) => {
    const emptyItem = {
        id: '',
        text: '',
    };
    const [item, setItem] = useState({ ...emptyItem });

    const getItem = async (itemId = undefined) => {
        if (itemId && itemId > 0) {
            const data = await TypesApiService.get(itemId);
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
