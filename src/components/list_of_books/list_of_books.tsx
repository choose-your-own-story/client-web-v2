import {useEffect, useState} from 'react'
import './list_of_books.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function cleanUpBooksList() {

}

interface IBook {
    id: number,
    title: string,
    description: string,
    cover: string
}

function ListOfBooks() {
    const emptyListOfBook: IBook[] = [];
    const [books, setBooks] = useState(emptyListOfBook);

    const [serverUrl] = useState(import.meta.env.VITE_APP_API_HOST); // This is a reactive value too

    useEffect(  () => {
        fetch(
            `${serverUrl}/api/home`
        ).then(function(data) {

            data.json().then(function(parsedData) {

                setBooks(parsedData);
            });

        });

        return cleanUpBooksList;
    }, [
        serverUrl
    ]);
  return (
    <>
        <div>
            <Container className="align-self-start">
                {books.map(function(book) {
                        return (
                            <Row className="book_row">
                                <Col>
                                    <Card className="book_col">
                                        <Card.Img variant="top" src={book.cover} />
                                        <Card.Body>
                                            <Card.Title>{book.title}</Card.Title>
                                            <Card.Text>
                                                {book.description}
                                            </Card.Text>
                                            <Button variant="primary" href={`/book/${book.id}`}>Detalles</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )
                })}
            </Container>
        </div>
    </>
  )
}

export default ListOfBooks
