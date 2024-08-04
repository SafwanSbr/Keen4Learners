import Answers from "./Answers"

const Question = () => {
  return (
    <div className="question">
        <div className="qtitle">
            <span className="material-icon-outlined"> help_outline</span>
            Here goes the question from Keen4Learners
        </div>
        <Answers/>
    </div>
  )
}

export default Question