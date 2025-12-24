import { useState } from "react"
import MovieList from "./components/MovieList"
import MovieDetail from "./components/MovieDetail"

import './App.css'

function App() {
  const [movieId, setMovieId] = useState(null)

  return (
    <div>
      <MovieList onSelect={setMovieId} />
      <MovieDetail movieId={movieId} />
    </div>
  )
}

export default App
