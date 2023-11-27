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
