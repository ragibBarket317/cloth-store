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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Registration from './pages/Registration'
import ProtectedRoute from './ProtectedRoute'
import Fail from './components/Fail'
import Cancel from './components/Cancel'
import Success from './components/Success'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Search />
      <div className="px-[5%]">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/collection" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route
            path="/place-order"
            element={
              <ProtectedRoute>
                <PlaceOrder />
              </ProtectedRoute>
            }
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/payment/success" element={<Success />} />
          <Route path="/payment/fail" element={<Fail />} />
          <Route path="/payment/cancel" element={<Cancel />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
