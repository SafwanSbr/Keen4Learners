import { useEffect, useState } from "react"
import { QuestionDTO } from "../Model";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export const useQuestions = (videoID:string)=>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState<QuestionDTO[]>([]);

    useEffect(()=>{
        const fetchQuestions = async ()=>{
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + videoID + "/questions");
            const quizQuery = query(quizRef, orderByKey());

            try{
                setError(false);
                setLoading(true);
                const snapshot = await get(quizQuery);
                setLoading(false);

                if(snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [...prevQuestions, ...Object.values(snapshot.val()) as []];
                    });
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }
        fetchQuestions();
    }, [videoID]);

    return {
        loading, error, questions
    };
}