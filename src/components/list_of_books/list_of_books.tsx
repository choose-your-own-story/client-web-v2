import {useEffect, useState} from 'react'
import './list_of_books.css'
import {Link} from "react-router-dom";

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
