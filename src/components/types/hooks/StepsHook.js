import { useEffect, useState } from 'react';
import StepsApiService from '../service/StepsApiService';

const useTypes = () => {
    const [steps, setSteps] = useState([]);

    const getTypes = async () => {
        const data = await StepsApiService.getAll();
        setSteps(data ?? []);
    };

    useEffect(() => {
        getTypes();
    }, []);

    return {
        steps,
    };
};

export default useTypes;
