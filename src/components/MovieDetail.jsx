import { useQuery } from "@tanstack/react-query"
import { fetchMovie } from "../apiMovie"
import Rating from "./Rating"
import { useState } from "react"

export default function MovieDetail({ movieId }) {
  const [userRates, setUserRates] = useState({}) // ⭐ rating per movie

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => fetchMovie(movieId),
    enabled: !!movieId,
  })

  if (!movieId) return <div className="detail">Select a movie</div>
  if (isLoading) return <div className="detail">Loading...</div>

  const userRate = userRates[movieId] || null

  // ⭐⭐⭐ محاسبه ۱۰۰٪ درست
  const imdb = userRate
    ? ((Number(movie.imdb_rating) + (Number(userRate)*2)) / 2).toFixed(1)
    : Number(movie.imdb_rating).toFixed(1)

  function handleRate(num) {
    setUserRates(prev => ({
      ...prev,
      [movieId]: num,
    }))
  }

  return (
    <div className="detail">
      <img src={movie.poster} alt={movie.title} className="poster" />

      <h2>{movie.title}</h2>

      <p><strong>Genres:</strong> {movie.genres.join(", ")}</p>
      <p><strong>Writer:</strong> {movie.writer}</p>
      <p><strong>IMDb:</strong> {imdb}</p>

      <p><strong>Plot:</strong> {movie.plot}</p>

      <Rating value={userRate} onRate={handleRate} />
    </div>
  )
}
