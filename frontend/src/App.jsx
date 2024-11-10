import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Collection from './pages/Collection'
import Footer from './components/Footer'
import Search from './components/Search'

const App = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <div className="px-[5%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
