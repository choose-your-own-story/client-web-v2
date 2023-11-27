import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/home.tsx'
import Book from './components/book/book.tsx'
import './index.css'
import Reader from "./components/reader/reader";
import App from "./App";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

import router from './router/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
