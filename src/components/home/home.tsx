import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './home.css'

function homeBooks() {
    return [
        {
            id: `1`,
            author: 'autor',
            title: 'title',
            description: 'description',
            likes: 'likes',
            reads: 'reads',
            author_thumb: 'author_thumb'
        }
    ]
}

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <input defaultValue="busca contenido"/>
            <button>Buscar</button>
        </div>
        <div>
            <ul>
                {homeBooks().map(function(book) {
                        return (
                            <li key={book.id} >
                                <a href="www.google.com">"pato"</a>
                            </li>
                        )
                })}
            </ul>
        </div>
    </>
  )
}

export default Home
