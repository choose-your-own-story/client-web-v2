import {useEffect, useState} from 'react'
import './list_of_books.css'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                            <Row>
                                <Col>
                                    <div key={book.id}>
                                        <Link to={`/book/${book.id}`}>{book.title}</Link>
                                    </div>
                                    <div>
                                        {book.description}
                                    </div>
                                    <div>
                                        <img key={book.id} src={book.cover} width="90%">

                                        </img>
                                    </div>
                                    <hr/>
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
