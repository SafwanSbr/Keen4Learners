import Question from "./Question";
import { QuizAnsDTO } from "../Model";

type AnalysisProps = {
  answers: QuizAnsDTO[];
};

const Analysis = ({ answers }: AnalysisProps) => {
  return (
    <div className="analysis">
      <h1 className="text-2xl font-bold text-text-primary mb-4">Question Analysis</h1>
      <h4 className="text-lg text-text-secondary mb-6">
        You answered {answers.length} {answers.length === 1 ? "question" : "questions"}
      </h4>
      <Question answers={answers} />
    </div>
  );
};

export default Analysis;