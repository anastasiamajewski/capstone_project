export function saveRating(name, data) {
  localStorage.setItem(name, data)
}

export function loadRating(name, data) {
  try {
    return JSON.parse(name, data)
  } catch (error) {
    console.log(error.message)
  }
}
