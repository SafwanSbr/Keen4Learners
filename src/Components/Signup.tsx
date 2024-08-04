import { Link } from "react-router-dom"
import Button from "./Button"
import Checkbox from "./Checkbox"
import Form from "./Form"
import Illustration from "./Illustration"
import TextInput from "./TextInput"

const Signup = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Create an Account</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 d-none d-md-block">
          <Illustration />
        </div>
        <div className="col-md-6" style={{ height: '500px' }}>
          <Form className="d-flex flex-column justify-content-between h-100">
            <TextInput type="text" placeholder="Enter Your Name" icon="person" />
            <TextInput type="text" placeholder="Enter your Email" icon="email" />
            <TextInput type="password" placeholder="Enter your Password" icon="lock" />
            <Checkbox className="" text="I agree to the Terms & Conditions" />
            <Button className="btn btn-success w-100 mt-3">
              <span className="text-white">Signup Now</span>
            </Button>
            <div className="mt-3 text-center">
              Already have an account? <Link to="/login">Login</Link> instead.
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Signup