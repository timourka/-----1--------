import { useParams } from 'react-router-dom';
import useLines from '../components/lines/hooks/LinesHook';
import CardDress from '../components/cards/CardDress.jsx';

const Category = () => {
    const { id } = useParams();
    const { lines } = useLines(id);

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-0">
            {
             lines.map((line) => <CardDress key={line.id} line={line} />)
            }
            </div>
        </>
    );
};

export default Category;
