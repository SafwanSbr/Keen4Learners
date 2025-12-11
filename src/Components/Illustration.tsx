import sideImage from '../Assets/Keen4Learners_Login_SideImage.png'

const Illustration = () => {
  return (
    <div className="px-2 hidden md:block">
        {/* Bootstrap: img-fluid w-75 -> Tailwind: max-w-full w-3/4 */}
        <img src={sideImage} alt="Signup" className="max-w-full w-3/4" />
    </div>
  )
}

export default Illustration