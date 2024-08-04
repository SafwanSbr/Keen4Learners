// import Home from "./Home"
import Layout from "./Layout"
import "../Styles/App.css"
 import Login from "./Login"
import Signup from "./Signup"

function App() {

  return (
    <>
      <Layout>
        {/* <Home/> */}
        {<Login/>}
        {<Signup/>}
      </Layout>
    </>
  )
}

export default App
