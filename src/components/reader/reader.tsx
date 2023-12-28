import { Suspense, useEffect, useState } from "react";

import "./reader.css";
import { Link, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EndOfBookMessage from "./end_message";

interface IPageItem {
  id: number;
  value: string;
  type: number;
}

interface IPageChoice {
  id: number;
  value: string;
  targetBook: number;
  targetPage: number;
}

interface IPage {
  items: IPageItem[];
  choices: IPageChoice[];
}

const emptyPage: IPage = {
  items: [],
  choices: [],
};

function cleanUpPageLoad() {}

function Loading() {
  return <h2>🌀Loading...</h2>;
}

function Reader() {
  const [page, setPage] = useState(emptyPage);
  const { bookId, pageId } = useParams();

  const [serverUrl] = useState(import.meta.env.VITE_APP_API_HOST); // This is a reactive value too

  useEffect(() => {
    fetch(`${serverUrl}/api/book/${bookId}/page/${pageId}`).then(
      function (data) {
        data.json().then(function (parsedData) {
          setPage(parsedData);
        });
      },
    );

    return cleanUpPageLoad;
  }, [serverUrl, bookId, pageId]);

  return (
    <Suspense fallback={<Loading />}>
      <Container className="align-self-start">
        {page.items.map(function (item) {
          if (item.type === 1) {
            return (
              <Row>
                <Col>
                  <p key={item.id} className="book_paragraph">
                    {item.value}
                  </p>
                </Col>
              </Row>
            );
          }
          if (item.type === 2) {
            return (
              <Row>
                <Col>
                  <img key={item.id} src={item.value} alt={item.value}></img>
                </Col>
              </Row>
            );
          }
        })}
      </Container>

      <hr />

      <Container className="align-self-start">
        {page.choices.map(function (item) {
          return (
            <Row>
              <Col>
                <div key={item.id}>
                  <Link
                    to={`/reader/${item.targetBook}/page/${item.targetPage}`}
                  >
                    {item.value}
                  </Link>
                </div>
              </Col>
            </Row>
          );
        })}
        <EndOfBookMessage numberOfChoices={page.choices.length}></EndOfBookMessage>
      </Container>

    </Suspense>
  );
}

export default Reader;
