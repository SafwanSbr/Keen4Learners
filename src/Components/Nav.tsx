import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import Account from './Account';


const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background-surface border-b border-border shadow-soft z-50 backdrop-blur-sm bg-opacity-95">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="logo" width="50" className="w-10 h-10 sm:w-12 sm:h-12" />
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary hidden sm:block">
                Keen for Learners
              </h3>
            </Link>
          </div>
          <div className="flex justify-end">
            <Account />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
