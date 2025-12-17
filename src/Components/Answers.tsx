import { Fragment } from "react";
import Checkbox from "./Checkbox";

type AnswersProps = {
  options?: Array<{
    title: string;
    checked?: boolean;
    correct?: boolean;
  }>;
  handleChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  input?: boolean;
};

export default function Answers({
  options = [],
  handleChange,
  input = true,
}: AnswersProps) {
  if (!options || !Array.isArray(options) || options.length === 0) {
    return (
      <div className="p-4 text-center text-text-secondary">
        <p>No options available for this question.</p>
      </div>
    );
  }

  return (
    <div className="answers space-y-3">
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <div className="p-4 bg-background-muted hover:bg-background-muted/80 rounded-lg border border-border transition-all duration-200">
              <Checkbox
                className="answer w-full"
                text={option.title}
                value={index}
                checked={option.checked}
                onChange={(e) => handleChange && handleChange(e, index)}
              />
            </div>
          ) : (
            <div
              className={`p-4 rounded-lg border transition-all duration-200 ${
                option.correct
                  ? "bg-green-50 border-green-300"
                  : option.checked
                  ? "bg-red-50 border-red-300"
                  : "bg-background-muted border-border"
              }`}
            >
              <Checkbox
                className="answer w-full"
                text={option.title}
                defaultChecked={option.checked}
                disabled
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
