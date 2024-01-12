import { useEffect, useState } from 'react';
import StepsApiService from '../../types/service/StepsApiService';

const useLines = (typeFilter) => {
    const [linesRefresh, setLinesRefresh] = useState(false);
    const [lines, setLines] = useState([]);
    const handleLinesChange = () => setLinesRefresh(!linesRefresh);

    const getLines = async () => {
        let expand = '?';
        if (typeFilter) {
            expand = `${expand}&typeId=${typeFilter}`;
        }
        const data = await StepsApiService.getAll(expand);
        setLines(data ?? []);
    };

    useEffect(() => {
        getLines();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [linesRefresh, typeFilter]);

    return {
        lines,
        handleLinesChange,
    };
};

export default useLines;
