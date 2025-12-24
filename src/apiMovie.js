const BASE = "https://moviesapi.ir/api/v1"

export async function fetchMovies() {
  const res = await fetch(`${BASE}/movies?page=1`)
  if (!res.ok) throw new Error("خطا در دریافت فیلم‌ها")
  const data = await res.json()
  return data.data
}

export async function fetchMovie(id) {
  const res = await fetch(`${BASE}/movies/${id}`)
  if (!res.ok) throw new Error("خطا در دریافت جزئیات فیلم")
  return res.json()
}
