import { useContext, useEffect, useState } from 'react'
import { BsFunnel } from 'react-icons/bs'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [visiableFilter, setVisibleFilter] = useState(false)
  const [collection, setCollection] = useState([])
  const [filteredProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])
  const [subSubcategory, setSubSubCategory] = useState([])
  const [sorted, setSorted] = useState('')

  const getCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setCategory((prev) => [...prev, e.target.value])
    }
  }

  const getSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setSubCategory((prev) => [...prev, e.target.value])
    }
  }
  const getSubSubCategory = (e) => {
    if (subSubcategory.includes(e.target.value)) {
      setSubSubCategory((prev) =>
        prev.filter((item) => item !== e.target.value)
      )
    } else {
      setSubSubCategory((prev) => [...prev, e.target.value])
    }
  }
  const applyFilter = () => {
    let productCopy = products.slice()
    console.log('hello')
    if (category.length > 0) {
      productCopy = productCopy.filter((product) =>
        category.includes(product.category)
      )
    }
    if (subcategory.length > 0) {
      productCopy = productCopy.filter((product) =>
        subcategory.includes(product.subCategory)
      )
    }
    if (subSubcategory.length > 0) {
      productCopy = productCopy.filter((product) =>
        subSubcategory.includes(product.subSubCategory)
      )
    }
    setFilterProducts(productCopy)
  }

  const applySorting = () => {
    let productCopy = products.slice()
    switch (sorted) {
      case 'low-high':
        setFilterProducts(
          productCopy.sort((a, b) => a.regularPrice - b.regularPrice)
        )

        break
      case 'high-low':
        setFilterProducts(
          productCopy.sort((a, b) => b.regularPrice - a.regularPrice)
        )

        break

      default:
        break
    }
  }

  useEffect(() => {
    applySorting()
  }, [sorted])

  useEffect(() => {
    // const productCopy = products.slice()
    // setCollection(productCopy)
    applyFilter()
  }, [category, subcategory, subSubcategory])
  return (
    <div>
      <div className="mt-5 sm:hidden">
        <button
          onClick={() => setVisibleFilter(!visiableFilter)}
          className="px-4 py-2 bg-black text-white flex gap-2 rounded-sm"
        >
          Filter
          <BsFunnel className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-[2%]">
        <div
          className={`w-full sm:w-[18%] ${
            visiableFilter ? '' : 'hidden sm:block'
          }`}
        >
          <div className="hidden sm:flex justify-between items-center mt-10">
            <h2>Filter</h2>
            <BsFunnel className="w-5 h-5" />
          </div>
          <div className="mt-10 border p-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  onClick={(e) => getCategory(e)}
                  type="checkbox"
                  value={'Men'}
                />
                Men
              </div>
              <div className="flex gap-2">
                <input
                  onClick={(e) => getCategory(e)}
                  type="checkbox"
                  value={'Women'}
                />
                Women
              </div>
              <div className="flex gap-2">
                <input
                  onClick={(e) => getCategory(e)}
                  type="checkbox"
                  value={'Kids'}
                />
                Kids
              </div>
            </div>
          </div>
          <div className="mt-5 border p-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  onClick={(e) => getSubCategory(e)}
                  type="checkbox"
                  value={'Topwear'}
                />
                Topwear
              </div>
              <div className="flex gap-2">
                <input
                  onClick={(e) => getSubCategory(e)}
                  type="checkbox"
                  value={'Bottomwear'}
                />
                Bottomwear
              </div>
            </div>
          </div>
          <div className="mt-5 border p-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  onClick={(e) => getSubSubCategory(e)}
                  type="checkbox"
                  value={'Full Sleeve T Shirt'}
                />
                Full Sleeve T Shirt
              </div>
              <div className="flex gap-2">
                <input
                  onClick={(e) => getSubSubCategory(e)}
                  type="checkbox"
                  value={'Half Sleeve T Shirt'}
                />
                Half Sleeve T Shirt
              </div>
              <div className="flex gap-2">
                <input
                  onClick={(e) => getSubSubCategory(e)}
                  type="checkbox"
                  value={'Hoodie'}
                />
                Hoodie
              </div>
              <div className="flex gap-2">
                <input
                  onClick={(e) => getSubSubCategory(e)}
                  type="checkbox"
                  value={'Jaket'}
                />
                Jaket
              </div>
              <div className="flex gap-2">
                <input
                  onClick={(e) => getSubSubCategory(e)}
                  type="checkbox"
                  value={'Jeans'}
                />
                Jeans
              </div>
              <div className="flex gap-2">
                <input
                  onClick={(e) => getSubSubCategory(e)}
                  type="checkbox"
                  value={'Panjabi'}
                />
                Panjabi
              </div>
              <div className="flex gap-2">
                <input
                  onClick={(e) => getSubSubCategory(e)}
                  type="checkbox"
                  value={'Polo T Shirt'}
                />
                Polo T Shirt
              </div>
              <div className="flex gap-2">
                <input
                  onClick={(e) => getSubSubCategory(e)}
                  type="checkbox"
                  value={'Trouser'}
                />
                Trouser
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mt-10 flex justify-between">
            <h2 className="prata-regular font-bold text-lg">All Collection</h2>
            <select
              onClick={(e) => setSorted(e.target.value)}
              name=""
              id=""
              className="py-2 px-4 border-2 outline-none"
            >
              <option value="low-high">Price Low to High</option>
              <option value="high-low">Price High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center mt-10">
            {filteredProducts?.map((product) => (
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
