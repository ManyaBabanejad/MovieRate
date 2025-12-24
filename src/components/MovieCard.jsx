export default function MovieCard({ movie, onSelect }) {
  return (
    <div className="movie-item" onClick={() => onSelect(movie.id)}>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.title}</p>
    </div>
  )
}
