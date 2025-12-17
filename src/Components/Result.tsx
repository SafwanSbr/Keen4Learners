import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import Analysis from "./Analysis";
import Summary from "./Summary";
import { useAnswers } from "../Hooks/useAnswers";
import { QuestionDTO } from "../Model";

export default function Result() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { qna } = (location.state as { qna: QuestionDTO[] }) || { qna: null };

  const { loading, error, answers } = useAnswers(id || "");

  function calculate() {
    if (!answers || !qna || answers.length === 0) return 0;

    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes: number[] = [];
      let checkedIndexes: number[] = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1]?.options[index2]?.checked) {
          checkedIndexes.push(index2);
        }
      });

      if (_.isEqual(correctIndexes.sort(), checkedIndexes.sort())) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}

      {answers && answers.length > 0 && qna && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
