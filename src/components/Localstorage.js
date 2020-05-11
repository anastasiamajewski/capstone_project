export function saveRating(id, rating) {
  localStorage.setItem(id, JSON.stringify(rating))
}

export function readRating(rating) {
  return JSON.parse(localStorage.getItem(rating))
}
