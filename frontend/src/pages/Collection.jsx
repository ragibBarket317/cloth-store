import { useContext, useEffect, useState } from 'react'
import { BsFunnel } from 'react-icons/bs'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [collection, setCollection] = useState([])

  useEffect(() => {
    const productCopy = products.slice()
    setCollection(productCopy)
  }, [])
  return (
    <div>
      <div className="flex gap-[2%]">
        <div className="w-[18%]">
          <div className="flex justify-between items-center mt-10">
            <h2>Filter</h2>
            <BsFunnel className="w-5 h-5" />
          </div>
          <div className="mt-10 border p-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input type="checkbox" value={'Men'} />
                Men
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Women'} />
                Women
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Kids'} />
                Kids
              </div>
            </div>
          </div>
          <div className="mt-5 border p-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input type="checkbox" value={'Topwear'} />
                Topwear
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Bottomwaer'} />
                Bottomwear
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Kids'} />
                Kids
              </div>
            </div>
          </div>
          <div className="mt-5 border p-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input type="checkbox" value={'Full Sleeve T Shirt'} />
                Full Sleeve T Shirt
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Half Sleeve T Shirt'} />
                Half Sleeve T Shirt
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Hoodie'} />
                Hoodie
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Jaket'} />
                Jaket
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Jeans'} />
                Jeans
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Panjabi'} />
                Panjabi
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Polo T Shirt'} />
                Polo T Shirt
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value={'Trouser'} />
                Trouser
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mt-10 flex justify-between">
            <h2 className="prata-regular font-bold text-lg">All Collection</h2>
            <select name="" id="" className="py-2 px-4 border-2 outline-none">
              <option value="">Price Low to High</option>
              <option value="">Price High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center mt-10">
            {collection.map((product) => (
              <ProductItem
                key={product._id}
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.regularPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
