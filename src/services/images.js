const ENDPOINT_IMAGE = 'https://cataas.com/cat/says/'

export const getImage = async (word) => {
  try {
    const res = await fetch(`${ENDPOINT_IMAGE}${word}`)
    const d = res.url

    return d
  } catch (error) {
    console.log(error)
  }
}
