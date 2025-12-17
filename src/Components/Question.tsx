import Answers from "./Answers";
import { QuizAnsDTO } from "../Model";

type QuestionProps = {
  answers?: QuizAnsDTO[];
};

export default function Question({ answers = [] }: QuestionProps) {
  return (
    <>
      {answers.map((answer, index) => (
        <div className="question mb-6" key={index}>
          <div className="qtitle flex items-start gap-2 mb-4">
            <span className="material-icons-outlined text-primary">
              help_outline
            </span>
            <span className="text-lg font-semibold text-text-primary">
              {answer.title}
            </span>
          </div>
          <Answers input={false} options={answer.options} />
        </div>
      ))}
    </>
  );
}
