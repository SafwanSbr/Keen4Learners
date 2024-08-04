import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="d-flex align-items-center justify-content-end gap-2 me-3 fs-6">
      <span className="material-icons-outlined" title="Account" style={{ cursor: "pointer" }}>
        account_circle
      </span>
      <Link to="/signup" className="text-decoration-none">Signup</Link>
      <Link to="/login" >Login</Link>
      {/* <span className="material-icons-outlined" title="Logout" style={{ cursor: "pointer" }}> logout </span> */}
    </div>
  );
}
export default Account;