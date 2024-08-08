import Illustration from "./Illustration"
import LoginForm from "./LoginForm"

const Login = () => {
  return (
    <div className="container my-5">
        <h1 className="text-center mb-4">Login to your Account</h1>
        <div className="row justify-content-center">
            <div className="col-md-6 d-none d-md-block">
                <Illustration/>
            </div>
            <div className="col-md-6" style={{ height: '330px' }}>
                <LoginForm/>
            </div>
        </div>
    </div>
  )
}

export default Login