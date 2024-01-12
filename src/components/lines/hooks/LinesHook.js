import { useEffect, useState } from 'react';
import StudentsApiService from '../../types/service/StudentsApiService';

const useLines = (typeFilter) => {
    const [linesRefresh, setLinesRefresh] = useState(false);
    const [lines, setLines] = useState([]);
    const handleLinesChange = () => setLinesRefresh(!linesRefresh);

    const getLines = async () => {
        let expand = '?_expand=type&_expand=step';
        if (typeFilter) {
            expand = `${expand}&typeId=${typeFilter}`;
        }
        const data = await StudentsApiService.getAll(expand);
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
