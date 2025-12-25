import _ from "lodash";
import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import Analysis from "./Analysis";
import Summary from "./Summary";
import { useAnswers } from "../Hooks/useAnswers";
import { QuestionDTO, QuizAnsDTO } from "../Model";

export default function Result() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { qna } = (location.state as { qna: QuestionDTO[] }) || { qna: null };

  const { loading, error, answers } = useAnswers(id || "");

  // Merge answers with user selections and calculate score
  const { mergedAnswers, score } = useMemo(() => {
    if (!answers || !qna || answers.length === 0) {
      return { mergedAnswers: [], score: 0 };
    }

    let calculatedScore = 0;
    const merged: QuizAnsDTO[] = answers.map((question, index1) => {
      const correctIndexes: number[] = [];
      const checkedIndexes: number[] = [];

      // Create merged options with checked property from user selections
      const mergedOptions = question.options.map((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }

        // Update checked property based on user selections
        const userChecked = qna[index1]?.options[index2]?.checked || false;
        if (userChecked) {
          checkedIndexes.push(index2);
        }

        return {
          ...option,
          checked: userChecked,
        };
      });

      // Calculate score: +5 if all correct answers match user selections
      if (_.isEqual(correctIndexes.sort(), checkedIndexes.sort())) {
        calculatedScore += 5;
      }

      return {
        ...question,
        options: mergedOptions,
      };
    });

    return { mergedAnswers: merged, score: calculatedScore };
  }, [answers, qna]);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-text-secondary font-medium">
              Loading results...
            </p>
          </div>
        )}

        {error && (
          <div className="bg-error-light border border-error rounded-lg p-6 text-center">
            <div className="text-error text-2xl mb-2">⚠️</div>
            <h2 className="text-error font-semibold text-lg mb-2">
              Error Loading Results
            </h2>
            <p className="text-text-secondary">
              There was an error loading your results. Please try again later.
            </p>
          </div>
        )}

        {!loading && !error && mergedAnswers.length > 0 && (
          <>
            <Summary score={score} noq={mergedAnswers.length} />
            <Analysis answers={mergedAnswers} />
          </>
        )}

        {!loading && !error && (!qna || qna.length === 0) && (
          <div className="bg-background-surface rounded-xl shadow-lg border border-border-light p-8 text-center">
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              No Quiz Data Available
            </h2>
            <p className="text-text-secondary">
              Please complete a quiz to see your results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
