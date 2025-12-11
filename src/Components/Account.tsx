import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const Account = () => {
  const {currentUser, logout} = useAuth();
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {currentUser ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-background-muted rounded-lg">
            <span className="material-icons-outlined text-text-secondary text-lg sm:text-xl" title="Account">
              account_circle
            </span>
            <span className="text-sm sm:text-base font-medium text-text-primary hidden sm:inline">
              {currentUser.displayName}
            </span>
          </div>
          <button 
            onClick={logout} 
            className="p-2 hover:bg-background-muted rounded-lg transition-colors group"
            title="Logout"
          >
            <span className="material-icons-outlined text-text-secondary group-hover:text-error text-lg sm:text-xl">
              logout
            </span>
          </button>
        </div>
      ):(
        <div className="flex items-center gap-2 sm:gap-3">
          <Link 
            to="/signup" 
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-medium text-text-primary hover:text-primary transition-colors"
          >
            Sign up
          </Link>
          <Link 
            to="/login" 
            className="px-4 py-1.5 sm:px-6 sm:py-2 bg-primary text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-soft"
          >
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;