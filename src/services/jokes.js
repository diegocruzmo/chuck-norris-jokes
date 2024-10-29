const ENDPOINT_JOKE = 'https://api.chucknorris.io/jokes/random'

export const getJoke = async () => {
  try {
    const response = await fetch(ENDPOINT_JOKE)
    const data = await response.json()

    const { value } = data

    const w = value.split(' ')[0]

    return { value, w }
  } catch (error) {
    console.log(error)
  }
}
