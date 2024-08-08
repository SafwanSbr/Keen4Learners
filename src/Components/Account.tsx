import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const Account = () => {
  const {currentUser, logout} = useAuth();
  return (
    <div className="account">
      {currentUser ? (
        <div>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span onClick={logout} className="material-icons-outlined" title="Logout"> {" "} logout{" "} </span>
        </div>
      ):(
        <div>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}
export default Account;