import { useEffect, useState } from "react";
import "./book.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Button, Container, Row, Col } from "react-bootstrap";

const emptyBook = {
  id: -1,
  title: "",
  description: "",
  cover: "",
};

function cleanUpBookLoad() {}

function Book() {
  const [book, setBook] = useState(emptyBook);
  const { bookId } = useParams();

  const [serverUrl] = useState(import.meta.env.VITE_APP_API_HOST); // This is a reactive value too

  useEffect(() => {
    fetch(`${serverUrl}/api/book/${bookId}`).then(function (data) {
      data.json().then(function (parsedData) {
        setBook(parsedData);
      });
    });

    return cleanUpBookLoad;
  }, [serverUrl, bookId]);

  return (
    <Container>
      <Row>
        <Col>
          <Link to={`/reader/${book.id}/page/1`}>{book.title}</Link>
        </Col>
      </Row>

      <Row>
        <Col>{book.description}</Col>
      </Row>

      <Row>
        <Col>
          <Image src={book.cover} rounded width="400" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button href={`/reader/${book.id}/page/1`}>Leer</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Book;
