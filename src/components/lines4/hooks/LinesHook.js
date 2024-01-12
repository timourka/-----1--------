import { useEffect, useState } from 'react';
import StudentsApiService from '../../types/service/StudentsApiService';

const useLines = (typeFilter) => {
    let typeFilterLocal = typeFilter;
    const [linesRefresh, setLinesRefresh] = useState(false);
    const [lines, setLines] = useState([]);
    const handleLinesChange = (typeFilterlol) => {
        typeFilterLocal = typeFilterlol;
        setLinesRefresh(!linesRefresh);
    };

    const getLines = async (typeFilterlol = undefined) => {
        let expand = '?_expand=type&_expand=step';
        if (typeFilter) {
            expand = `${expand}&name_like=${typeFilterlol}`;
        }
        const data = await StudentsApiService.getAll(expand);
        setLines(data ?? []);
    };

    useEffect(() => {
        getLines(typeFilterLocal);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [linesRefresh, typeFilter]);

    return {
        lines,
        handleLinesChange,
    };
};

export default useLines;
