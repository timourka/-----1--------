import './mainPage.css';
import { Container } from 'react-bootstrap';
import useLines from '../components/lines/hooks/LinesHook';
import Line from '../components/lineOnMain/line.jsx';

const MainPage = () => {
    const { lines } = useLines();
    return (
        <>
        <Container fluid className = "container-fluid p-2 , m-0" style={{ display: 'flex', flexDirection: 'column' }}>
            {lines.map((line) =>
                <Line key={line.id}
                    line={line}
                />)}
        </Container>
        </>
    );
};

export default MainPage;
