import { useState, useEffect } from 'react'
import { getJoke } from '../services/jokes'

export const useJoke = () => {
  const [joke, setJoke] = useState()
  const [word, setWord] = useState()

  const getJokeInfo = async () => {
    const { value, w } = await getJoke()
    setJoke(value)
    setWord(w)
  }

  useEffect(() => {
    getJokeInfo()
  }, [])

  return { joke, word, getJokeInfo }
}
