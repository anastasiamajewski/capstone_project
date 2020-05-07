export function saveRating(id, rating) {
  localStorage.setItem(id, rating)
}

export function readRating(rating) {
  localStorage.getItem(rating)
}
