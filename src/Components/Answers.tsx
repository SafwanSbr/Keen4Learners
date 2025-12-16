import Checkbox from "./Checkbox"

type Props = {
  options:{ title:string, checked:boolean }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (event: any, index:any)=>void;
}
const Answers = ({options, handleChange}:Props) => {
  // Defensive check: ensure options is defined and is an array
  console.log(options);
  if (!options || !Array.isArray(options) || options.length === 0) {
    return (
      <div className="p-4 text-center text-text-secondary">
        <p>No options available for this question.</p>
      </div>
    );
  }

  return (
    <div className="answers space-y-3">
      {options.map((option, index)=>(
        <div key={index} className="p-4 bg-background-muted hover:bg-background-muted/80 rounded-lg border border-border transition-all duration-200">
          <Checkbox
            className="answer w-full"
            text={option.title}
            value={index}
            checked={option.checked}
            onChange={(event) => handleChange(event, index)}
          />
        </div>
      ))}
    </div>
  )
}

export default Answers