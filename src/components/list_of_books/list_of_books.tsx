import {useEffect, useState} from 'react'
import './list_of_books.css'
import {Link, useParams} from "react-router-dom";
import * as React from "react";

function cleanUpBooksList() {

}

function ListOfBooks() {
    const [books, setBooks] = useState([]);

    const [serverUrl, setServerUrl] = useState('http://localhost:3000'); // This is a reactive value too

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
            <ul>
                {books.map(function(book) {
                        return (
                            <div>
                                <div key={book.id}>
                                    <Link to={`/book/${book.id}`}>{book.title}</Link>
                                </div>
                                <div>
                                    {book.description}
                                </div>
                                <div>
                                    <img key={book.id} src={book.cover}>

                                    </img>
                                </div>
                                <hr/>
                            </div>
                        )
                })}
            </ul>
        </div>
    </>
  )
}

export default ListOfBooks
