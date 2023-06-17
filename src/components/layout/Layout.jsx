
import { Outlet } from 'react-router-dom' // y los children
import NavbarContainer from './navbar/NavbarContainer'
import FooterContainer from './footer/FooterContainer'

const Layout = () => {
  return (
    <div>

      <div>
        <NavbarContainer />
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <FooterContainer />
      </div>

    </div>
  )
}

export default Layout