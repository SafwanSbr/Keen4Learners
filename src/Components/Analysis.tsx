import Question from "./Question";
import { QuizAnsDTO } from "../Model";

type AnalysisProps = {
  answers: QuizAnsDTO[];
};

const Analysis = ({ answers }: AnalysisProps) => {
  return (
    <div className="analysis bg-background-surface rounded-xl shadow-lg border border-border-light p-6 md:p-8 mt-6">
      <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
        Question Analysis
      </h1>
      <Question answers={answers} />
    </div>
  );
};

export default Analysis;