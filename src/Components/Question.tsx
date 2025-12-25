import Answers from "./Answers";
import { QuizAnsDTO } from "../Model";

type QuestionProps = {
  answers?: QuizAnsDTO[];
};

export default function Question({ answers = [] }: QuestionProps) {
  return (
    <div className="space-y-6">
      {answers.map((answer, index) => (
        <div
          className="question bg-background rounded-lg border border-border p-4 md:p-6"
          key={index}
        >
          <div className="qtitle flex items-start gap-3 mb-4">
            <span className="material-icons-outlined text-primary text-2xl flex-shrink-0">
              help_outline
            </span>
            <span className="text-lg md:text-xl font-semibold text-text-primary leading-tight">
              {answer.title}
            </span>
          </div>
          <Answers input={false} options={answer.options} />
        </div>
      ))}
    </div>
  );
}
