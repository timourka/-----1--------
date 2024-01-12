import { useEffect, useState } from 'react';
import TypesApiService from '../service/TypesApiService';

const useTypes = () => {
    const [typesRefresh, setTypesRefresh] = useState(false);
    const [types, setTypes] = useState([]);
    const handleTypesChange = () => setTypesRefresh(!typesRefresh);

    const getTypes = async () => {
        const data = await TypesApiService.getAll();
        setTypes(data ?? []);
    };

    useEffect(() => {
        getTypes();
    }, [typesRefresh]);

    return {
        types,
        handleTypesChange,
    };
};

export default useTypes;
