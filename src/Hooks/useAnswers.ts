import { useEffect, useState } from "react"
import { QuizAnsDTO } from "../Model";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export const useAnswers = (videoID:string)=>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState<QuizAnsDTO[]>([]);

    useEffect(()=>{
        const fetchAnswers = async ()=>{
            const db = getDatabase();
            const ansRef = ref(db, "answers/" + videoID + "/questions");
            const ansQuery = query(ansRef, orderByKey());

            try{
                setError(false);
                setLoading(true);
                const snapshot = await get(ansQuery);
                console.log("Fetched questions:", snapshot.val());
                setLoading(false);

                if(snapshot.exists()) {
                    const fetchedQuestions = Object.values(snapshot.val()) as QuizAnsDTO[];
                    setAnswers((prevAnswers) => {
                        return [...prevAnswers, ...fetchedQuestions];
                    });
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }
        fetchAnswers();
    }, [videoID]);

    return {
        loading, error, answers
    };
}