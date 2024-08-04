import { Link } from "react-router-dom"
import Button from "./Button"
import Form from "./Form"
import Illustration from "./Illustration"
import TextInput from "./TextInput"

const Login = () => {
  return (
    <div className="container my-5">
        <h1 className="text-center mb-4">Login to your Account</h1>
        <div className="row justify-content-center">
            <div className="col-md-6 d-none d-md-block">
                <Illustration/>
            </div>
            <div className="col-md-6" style={{ height: '330px' }}>
                <Form className="">
                    <TextInput 
                        type="text" 
                        placeholder="Enter Email" 
                        icon="email"
                    />

                    <TextInput 
                        type="password"
                        placeholder="Enter Currect Password" icon="lock"
                    />

                    <Button className="btn btn-success w-100 mt-3">
                        <span className="text-white">Submit Now</span>
                    </Button>

                    <div className="mt-3 text-center">
                        Don't have an account? <Link to="/signup">Signup</Link> instead.
                    </div>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Login