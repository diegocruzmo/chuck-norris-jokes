import { useState, useEffect } from 'react'

const ENDPOINT_JOKE = 'https://api.chucknorris.io/jokes/random'
const ENDPOINT_IMAGE = 'https://cataas.com/cat/says/'

function App() {
  const [joke, setJoke] = useState()
  const [image, setImage] = useState()
  const [word, setWord] = useState()

  const getJoke = async () => {
    try {
      const response = await fetch(ENDPOINT_JOKE)
      const data = await response.json()

      const { value } = data
      setJoke(value)

      const w = value.split(' ')[0]
      setWord(w)
    } catch (error) {
      console.log(error)
    }
  }

  const getImage = async () => {
    try {
      const res = await fetch(`${ENDPOINT_IMAGE}${word}`)
      const d = res.url

      setImage(d)
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = () => {
    getJoke()
  }

  useEffect(() => {
    getJoke()
  }, [])

  useEffect(() => {
    getImage()
  }, [joke])

  return (
    <main className='container d-flex justify-content-center'>
      <div className='card mt-2' style={{ width: '20rem' }}>
        <div className='card-body'>
          <h5 className='card-title text-center'>Chuck Norris Jokes</h5>
          {joke && <p className='card-text'>{joke}</p>}
          {image && (
            <img src={image} alt={word} className='card-img-top mb-2' />
          )}
          <button onClick={handleClick} className='btn btn-primary'>
            Next Joke
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
