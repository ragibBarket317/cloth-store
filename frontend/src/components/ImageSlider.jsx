import { useState, useEffect } from 'react'

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval) // Cleanup on unmount
  }, [currentIndex, images.length])

  return (
    <img
      src={images[currentIndex]}
      alt={`Slide ${currentIndex}`}
      className="w-full sm:w-1/2 border object-cover transition-all"
    />
  )
}

export default ImageSlider
