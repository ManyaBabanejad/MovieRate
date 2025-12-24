import { useQuery } from "@tanstack/react-query"
import { fetchMovies } from "../apiMovie"
import MovieCard from "./MovieCard"

export default function MovieList({ onSelect }) {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  })

  if (isLoading) return <div>در حال بارگذاری...</div>

  if (isError)
    return (
      <div>
        <p>{error.message}</p>
        <button onClick={refetch}>تلاش مجدد</button>
      </div>
    )

  return (
    <div className="sidebar">
      <div className="movie-list">
        {data.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}
