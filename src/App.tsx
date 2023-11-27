import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from "./components/book/book";
import Reader from "./components/reader/reader";

import {

    Link
} from "react-router-dom";
import ListOfBooks from "./components/list_of_books/list_of_books";



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <ListOfBooks></ListOfBooks>
      </div>
  );
}

export default App
