const api = async (url) => {

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  catch (error) {
    <h1>404</h1>
  }
}

export default api