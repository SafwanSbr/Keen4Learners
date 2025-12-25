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
    <div className="answers space-y-2">
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
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                option.correct
                  ? "bg-green-200 border-green-400"
                  : option.checked
                  ? "bg-red-200 border-red-400"
                  : "bg-background-muted border-border"
              }`}
            >
              <div
                className={
                  option.correct
                    ? "text-green-900"
                    : option.checked
                    ? "text-red-900"
                    : "text-text-primary"
                }
              >
                <Checkbox
                  className="answer w-full"
                  text={option.title}
                  defaultChecked={option.checked}
                  disabled
                />
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
