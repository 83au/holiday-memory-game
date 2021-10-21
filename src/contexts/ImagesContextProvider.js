import { createContext, useContext, useState, useCallback } from 'react'
import bat from '../images/bat.svg'
import ghost from '../images/ghost.svg'
import skull from '../images/skull.svg'
import tombstone from '../images/tombstone.svg'
import tree from '../images/tree.svg'
import witchHat from '../images/witch-hat.svg'


const initialImages = [
  bat,
  bat,
  ghost,
  ghost,
  skull,
  skull,
  tombstone,
  tombstone,
  tree,
  tree,
  witchHat,
  witchHat
]


const randomize = arr => [...arr].sort(() => Math.random() - .5)


const ImagesContext = createContext()


function ImagesContextProvider({ children }) {
  const [images, setImages] = useState(() => randomize(initialImages))

  const randomizeImages = useCallback(() => setImages(randomize), [])

  const context = {
    images,
    randomizeImages
  }

  return (
    <ImagesContext.Provider value={context}>
      { children }
    </ImagesContext.Provider>
  )
}

export default ImagesContextProvider


export function useImages() {
  const context = useContext(ImagesContext)
  return context
}