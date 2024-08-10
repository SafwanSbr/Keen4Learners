import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from "react"
import { getVideos } from "../Model";

export const useVideoList = (page:number)=>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState<getVideos[]>([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(()=>{
        const fetchVideos = async ()=>{
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(
                videosRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
            );

            try{
                setError(false);
                setLoading(true);
                // request firebase database
                const snapshot = await get(videoQuery);
                setLoading(false);
                if( snapshot.exists()){
                    setVideos((prevVideos) =>{
                        return [...prevVideos, ...Object.values(snapshot.val()) as getVideos[]];
                    });
                } else {
                    setHasMore(false);
                }
            } catch(error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }
        fetchVideos();
    }, [page]);

    return {
        loading,
        error,
        videos,
        hasMore,
    };
}