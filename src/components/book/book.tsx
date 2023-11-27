import {useEffect, useState} from 'react'
import './book.css'
import {useParams} from "react-router";
import {Link} from "react-router-dom";


const emptyBook = {
    id: -1,
    title: '',
    description: ''
};

function cleanUpBookLoad() {

}

function Book() {
    const [book, setBook] = useState(emptyBook);
    let { bookId } = useParams();


    const [serverUrl] = useState(import.meta.env.VITE_APP_API_HOST); // This is a reactive value too

    useEffect(  () => {
        fetch(
            `${serverUrl}/api/book/${bookId}`
        ).then(function(data) {

            data.json().then(function(parsedData) {

                setBook(parsedData);
            });

        });

        return cleanUpBookLoad;
    }, [
        serverUrl, bookId
    ]);

  return (
    <>

        <div key={book.id}>
            <Link to={`/reader/${book.id}/page/1`}>{book.title}</Link>
        </div>

        <div>
            {book.description}
        </div>
    </>
  )
}

export default Book
