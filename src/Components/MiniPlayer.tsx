import erenImage from '../Assets/erenYeager.png'

const MiniPlayer = () => {
  return (
    <div className="miniPlayer floatingBtn">
        <span className="material-icons-outlined open">
            {" "}
            play_cirxle_filled{" "}
        </span>
        <span className="material-icons-outlined close">
            {" "}
            close{" "}
        </span>
        <img src={erenImage} alt="Alt Tag" />
        <p>#23 React Hools Bangla - React useReduce hook Bangla</p>
    </div>
  )
}

export default MiniPlayer