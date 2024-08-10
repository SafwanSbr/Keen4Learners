import { useNavigate, useParams } from "react-router-dom";
import { QuestionDTO } from "../Model";
import Answers from "./Answers"
import MiniPlayer from "./MiniPlayer"
import ProgressBar from "./ProgressBar"
import _ from "lodash";
import { useQuestions } from "../Hooks/useQuestions";
import { useEffect, useReducer, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { getDatabase, ref, set } from "firebase/database";

type Action =
  | { type: "questions"; value: QuestionDTO[] }
  | { type: "answer"; questionID: number; optionIndex: number; value: boolean };

const initialState: QuestionDTO[] | null = null;

const reducer = (state:QuestionDTO[]|null, action:Action)=>{
  switch(action.type){
    case "questions": action.value.forEach((question) => {
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
}

const Quiz = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, questions } = useQuestions(id? id:"");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswer = (event:React.ChangeEvent<HTMLInputElement>, index:number)=>{
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: event.target.checked,
    });
  }

  const nextQuestion = () =>{
    if( currentQuestion+1 < questions.length){
      setCurrentQuestion((prevCurrent)=> prevCurrent+1);
    }
  }

  const prevQuestion = ()=>{
    if (currentQuestion >= 1 && currentQuestion <= questions.length){
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  const submitHandle = async ()=>{
    if (currentUser && qna) {
      const { uid } = currentUser;
      const db = getDatabase();
      const resultRef = ref(db, `result/${uid}`);

      await set(resultRef, {
        [`${id}`]: qna, // Using template literal to ensure id is treated as a string
      });

      navigate(`/result/${id}`, { state: { qna } });
    }
  }

  // Calculate percentage of progress
  const percentage = qna && qna.length > 0 ? ((currentQuestion + 1) / qna.length) * 100 : 0;

  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options.map(option =>({
              title:option.text, checked:option.checked
            }))}
            handleChange={handleAnswer}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            submit={submitHandle}
            progress={percentage}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}

export default Quiz