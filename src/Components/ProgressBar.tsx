import Button from "./Button"

type Props = {
    next:()=>void;
    prev:()=>void;
    submit:()=>void;
    progress:number;
}
const ProgressBar = ({next, prev, submit, progress}:Props) => {
  return (
    <div className="progressBar">
        <div className="backButton" onClick={prev}>
            <span className="material-icons-outlined"> arrow_back</span>
        </div>
        <div className="rangeArea">
            <div className="tooltip">{progress}% Completed</div>
            <div className="rangeBody">
                <div className="progress" style={{width: `${progress}%`}}></div>
            </div>
        </div>
        <Button className="next" onClick={progress===100 ? submit : next}>
            <span>Next Question</span>
            <span className="material-icon-outlined">arrow_forward</span>
        </Button>
    </div>
  )
}

export default ProgressBar