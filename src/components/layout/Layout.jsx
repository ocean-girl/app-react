import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const Layout = () => {
  return (
    <div>

        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout