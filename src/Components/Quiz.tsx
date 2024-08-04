import Answers from "./Answers"
import MiniPlayer from "./MiniPlayer"
import ProgressBar from "./ProgressBar"

const Quiz = () => {
  return (
    <div>
        <h1>Do you think Eren was right all the time?</h1>
        <h4>Question can have Multiple answers</h4>
        <Answers/>
        <ProgressBar/>
        <MiniPlayer/>
    </div>
  )
}

export default Quiz