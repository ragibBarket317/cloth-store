import { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero'
import NewArrival from '../components/NewArrival'
import Poster from '../components/Poster'
import { ShopContext } from '../context/ShopContext'
import CategorySection from '../components/CategorySection'
import ProductItem from '../components/ProductItem'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  const { products } = useContext(ShopContext)
  const [tShirtCategory, setTShirtCategory] = useState([])
  const [jaketCategory, setJaketCategory] = useState([])
  const fullTShirts = products.filter(
    (product) => product.subSubCategory === 'Full Sleeve T Shirt'
  )
  const jakets = products.filter(
    (product) => product.subSubCategory === 'Jaket'
  )

  useEffect(() => {
    setTShirtCategory(fullTShirts.slice(0, 8))
    setJaketCategory(jakets.slice(0, 8))
  }, [])

  const images = {
    image1: '/poster3.png',
    image2: '/poster2.png',
    image3: 'jaket-poster.png',
  }
  return (
    <div className="mt-10">
      <Hero />
      <NewArrival />
      <Poster images={images} />
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-[2%] mt-16 mb-10">
        <div className="sm:w-[36%]">
          <img
            src="/category-image.jpg"
            alt=""
            className="w-full object-cover h-[420px]"
          />
        </div>
        <div className="sm:w-[62%]">
          <div className="grid grid-cols-2 mb-4 sm:grid-cols-3 lg:grid-cols-4 items-center gap-3">
            {tShirtCategory.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.regularPrice}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 mb-10 flex flex-col gap-5 sm:flex-row sm:gap-[5%]">
        <div className="sm:w-[70%] flex flex-col justify-center">
          <div>
            <h2 className="prata-regular text-xl font-bold">Cloth Store</h2>
            <p className="text-lg font-medium text-gray-700">
              Because comfort and confidence go hand in hand.
            </p>
            <p className="text-gray-600">
              We focus on carefully selecting the best clothing that is
              comfortable, looks great, and makes you confident. Apart from the
              fabric, design and fit, we go through strict quality control
              parameters to give you what you truly deserve. The power of a good
              outfit is how it can influence your perception of yourself.
            </p>
          </div>
        </div>
        <div className="sm:w-[25%]">
          <div>
            <img src="/cloth.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-[2%] mt-16 mb-10">
        <div className="sm:w-[36%]">
          <img
            src="/category-image1.jpg"
            alt=""
            className="w-full object-cover h-[420px]"
          />
        </div>
        <div className="sm:w-[62%]">
          <div className="grid grid-cols-2 mb-4 sm:grid-cols-3 lg:grid-cols-4 items-center gap-3">
            {jaketCategory.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.regularPrice}
              />
            ))}
          </div>
        </div>
      </div>
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
