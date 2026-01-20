import { Navigate, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Header from "./Components/Common/Header"
import RefreshHandle from "./Components/RefreshHandle"
import ForgetPassword from "./Pages/ForgetPassword"
import Service from "./Pages/Service"
import Shop from "./Pages/Shop"
import Footer from "./Components/Common/Footer"
import ContactUs from "./Pages/ContactUs"
import SingleProduct from "./Pages/SingleProduct"
import CartList from "./Pages/CartList"
import AdminPanel from "./Pages/AdminPanel"
import AdminUserProfile from "./Pages/AdminUserProfile"
import AdminContactForm from "./Pages/AdminContactForm"
import NoFoundPage from "./Pages/NoFoundPage"
import AdminAllProduct from "./Pages/AdminAllProduct"
import AdminCreateProduct from "./Pages/AdminCreateProduct"
import AdminUpdateProduct from "./Pages/AdminUpdateProduct"
import AdminUpdateUser from "./Pages/AdminUpdateUser"
import AdminDashboard from "./Pages/AdminDashboard"
import AdminUpdateForm from "./Pages/AdminUpdateForm"
import SigupUpdated from "./Pages/SigupUpdated"
import UserProfile from "./Pages/UserProfile"
import UserProfileUpdate from "./Pages/UserProfileUpdate"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : < Navigate to="/login" />
  }

  return (
    <>
      <RefreshHandle setIsAuthenticated={setIsAuthenticated} />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/profile/edit/:id" element={<UserProfileUpdate />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<PrivateRoute element={<Shop />} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/shop/:id' element={<SingleProduct />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/register/:id/edit" element={<SigupUpdated />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path='/cartlist' element={<CartList />} />
        <Route path='*' element={<NoFoundPage />} />
        <Route path='/admin' element={<AdminPanel />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/alluser" element={<AdminUserProfile />} />
          <Route path="/admin/alluser/:id/edit" element={<AdminUpdateUser />} />
          <Route path="/admin/contactForm" element={<AdminContactForm />} />
          <Route path="/admin/alluser/contactForm/:id/edit" element={<AdminUpdateForm />} />
          <Route path="/admin/allproducts" element={<AdminAllProduct />} />
          <Route path="/admin/allproducts/:id/edit" element={<AdminUpdateProduct />} />
          <Route path="/admin/createproduct" element={<AdminCreateProduct />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
