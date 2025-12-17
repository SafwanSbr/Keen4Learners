import { useNavigate, useParams } from "react-router-dom";
import { QuestionDTO } from "../Model";
import Answers from "./Answers";
import MiniPlayer from "./MiniPlayer";
import ProgressBar from "./ProgressBar";
import _ from "lodash";
import { useQuestions } from "../Hooks/useQuestions";
import { useEffect, useReducer, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { getDatabase, ref, set } from "firebase/database";

type Action =
  | { type: "questions"; value: QuestionDTO[] }
  | { type: "answer"; questionID: number; optionIndex: number; value: boolean };

const initialState: QuestionDTO[] | null = null;

const reducer = (state: QuestionDTO[] | null, action: Action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      // eslint-disable-next-line no-case-declarations
      const questions = _.cloneDeep(state);
      if (questions) {
        questions[action.questionID].options[action.optionIndex].checked =
          action.value;
      }
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, questions } = useQuestions(id ? id : "");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswer = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: event.target.checked,
    });
  };

  const nextQuestion = () => {
    if (qna && currentQuestion + 1 < qna.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  };

  const prevQuestion = () => {
    if (qna && currentQuestion >= 1 && currentQuestion < qna.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  };

  const submitHandle = async () => {
    if (currentUser && qna) {
      const { uid } = currentUser;
      const db = getDatabase();
      const resultRef = ref(db, `result/${uid}`);

      await set(resultRef, {
        [`${id}`]: qna, // Using template literal to ensure id is treated as a string
      });

      navigate(`/result/${id}`, { state: { qna } });
    }
  };

  // Calculate percentage of progress
  const percentage =
    qna && qna.length > 0 ? ((currentQuestion + 1) / qna.length) * 100 : 0;

  // Defensive check: ensure current question exists and has options
  const currentQuestionData =
    qna && qna.length > 0 && currentQuestion < qna.length
      ? qna[currentQuestion]
      : null;
  const questionOptions = currentQuestionData?.options
    ? currentQuestionData.options.map((option) => ({
        title: option.title,
        checked: option.checked || false,
      }))
    : [];

  return (
    <div className="min-h-screen bg-background py-4 px-4">
      <div className="max-w-3xl mx-auto">
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-text-secondary">Loading questions...</p>
          </div>
        )}

        {error && (
          <div className="bg-error-light border border-error rounded-lg p-4 text-center mt-4">
            <div className="text-error text-xl mb-2">⚠️</div>
            <h2 className="text-error font-semibold mb-1">
              Error Loading Quiz
            </h2>
            <p className="text-text-secondary text-sm">
              Please try again later.
            </p>
          </div>
        )}

        {!loading && !error && currentQuestionData && (
          <div className="space-y-4">
            <div className="bg-background-surface rounded-lg shadow border border-border-light p-4 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  Question {currentQuestion + 1} of {qna?.length || 0}
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                {currentQuestionData.title}
              </h1>
              <p className="text-xs text-text-secondary flex items-center gap-1">
                <span className="material-icons-outlined text-sm">info</span>
                <span>You can select multiple answers</span>
              </p>
            </div>

            <div className="bg-background-surface rounded-lg shadow border border-border-light p-4 md:p-6">
              <h2 className="text-base font-semibold text-text-primary mb-3">
                Select your answer(s):
              </h2>
              <Answers options={questionOptions} handleChange={handleAnswer} />
            </div>

            <ProgressBar
              next={nextQuestion}
              prev={prevQuestion}
              submit={submitHandle}
              progress={percentage}
            />

            <div className="mt-4">
              <MiniPlayer />
            </div>
          </div>
        )}

        {!loading && !error && (!qna || qna.length === 0) && (
          <div className="bg-background-surface rounded-lg shadow border border-border-light p-6 text-center mt-4">
            <div className="text-3xl mb-3">📝</div>
            <h2 className="text-lg font-semibold text-text-primary mb-1">
              No Questions Available
            </h2>
            <p className="text-text-secondary text-sm">
              There are no questions for this quiz yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
