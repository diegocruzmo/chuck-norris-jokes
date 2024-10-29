import { useState, useEffect } from 'react'
import { getImage } from '../services/images'

export function useImage({ joke, word }) {
  const [image, setImage] = useState()

  const getImageInfo = async () => {
    const value = await getImage(word)
    setImage(value)
  }

  useEffect(() => {
    if (!joke) return

    getImageInfo()
  }, [joke])

  return { image }
}
