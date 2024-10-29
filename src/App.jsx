import { useImage } from './hooks/useImage'
import { useJoke } from './hooks/useJoke'

function App() {
  const { joke, word, getJokeInfo } = useJoke()
  const { image } = useImage({ joke, word })

  const handleClick = () => {
    getJokeInfo()
  }

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
