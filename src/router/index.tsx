import Book from '../components/book/book.tsx'
import Reader from "../components/reader/reader";
import App from "../App";
import {createBrowserRouter} from "react-router-dom";
import Home from "../components/home/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "book/:bookId",
                element: <Book/>
            },
            {
                path: "reader/:bookId/page/:pageId",
                element: <Reader/>
            },

        ]
    },
]);


export default router;
