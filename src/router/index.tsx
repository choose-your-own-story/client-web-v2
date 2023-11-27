import Book from '../components/book/book.tsx'
import Reader from "../components/reader/reader";
import App from "../App";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "book/:bookId",
        element: <Book/>
    },
    {
        path: "reader/:bookId/page/:pageId",
        element: <Reader/>
    },
]);


export default router;
