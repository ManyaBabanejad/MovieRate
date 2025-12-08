import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch("https://moviesapi.ir/api/v1/movies?page=1")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.data)
      })
  }, [])

  const handleClick = (movie) => {
    setSelected(movie)
  }

  return (
    <div className="container">
      <div className="list">
        <h1>Movie List</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} onClick={() => handleClick(movie)} style={{cursor: 'pointer'}}>
              <h3>{movie.title} ({movie.year})</h3>
              <img src={movie.poster} alt={movie.title} width='100' />
            </li>
          ))}
        </ul>
      </div>

      <div className="detail">
        {selected && (
         
          <div><h2>Detail</h2>
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <img src={selected.poster} alt={selected.title} width="200" /></div>
      
        ) }
      </div>
    </div>
  )
}

export default App
