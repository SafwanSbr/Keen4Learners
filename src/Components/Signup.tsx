import Illustration from "./Illustration"
import SignupForm from "./SignupForm"

const Signup = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Responsive heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-text-primary">
          Create an Account
        </h1>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Illustration - hidden on mobile, visible on large screens */}
          <div className="hidden lg:flex lg:justify-center lg:items-center">
            <Illustration />
          </div>
          
          {/* Form container with responsive padding */}
          <div className="w-full">
            <div className="bg-background-surface rounded-xl shadow-medium p-6 sm:p-8 lg:p-10">
              <SignupForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup