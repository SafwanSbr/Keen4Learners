import logo from '../Assets/logo.png'
import Account from './Account';


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white border-bottom">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a href="index.html" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="logo" width="50" className="me-2" />
            <h3 className="h3 mb-0 d-none d-md-block">Keen for Learners</h3>
          </a>
        </div>
        <div className="d-flex justify-content-end">
          <Account />
        </div>
      </div>
    </nav>
  )
}

export default Nav
