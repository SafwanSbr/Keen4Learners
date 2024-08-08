import Illustration from "./Illustration"
import SignupForm from "./SignupForm"

const Signup = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Create an Account</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 d-none d-md-block">
          <Illustration />
        </div>
        <div className="col-md-6" style={{ height: '500px' }}>
          <SignupForm/>
        </div>
      </div>
    </div>
  )
}

export default Signup