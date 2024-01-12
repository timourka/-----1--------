import { useState } from 'react';
import { Container, Form, Col } from 'react-bootstrap';
import useLines from '../components/lines4/hooks/LinesHook';
import Line from '../components/lineOnMain/line.jsx';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const { lines, handleLinesChange } = useLines(searchText);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        handleLinesChange(searchText);
    };

    return (
        <>
            <Col>
                <Form onSubmit={handleSearchSubmit}>
                    <Form.Group className='mb-4 textlog'>
                        <Form.Label htmlFor="search"> Поиск объявлений </Form.Label>
                        <Form.Control
                            type="search"
                            id="search"
                            placeholder="Search"
                            aria-label="Search"
                            required
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                    </Form.Group>
                </Form>
            </Col>
            <Container fluid className="container-fluid p-2 , m-0" style={{ display: 'flex', flexDirection: 'column' }}>
                {lines.map((line) => (
                    <Line key={line.id} line={line} />
                ))}
            </Container>
        </>
    );
};

export default Search;
