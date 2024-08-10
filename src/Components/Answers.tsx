import Checkbox from "./Checkbox"

type Props = {
  options:{ title:string, checked:boolean }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (event: any, index:any)=>void;
}
const Answers = ({options, handleChange}:Props) => {
  return (
    <div className="answers">
      {options.map((option, index)=>(
        <Checkbox
          key={index}
          className="answer"
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(event) => handleChange(event, index)}
        />
      ))}
    </div>
  )
}

export default Answers