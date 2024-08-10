import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Video from "./Video";
import { useVideoList } from "../Hooks/useVideoList";
import { getVideos } from "../Model";

export default function Videos() {
  const [page, setPage] = useState<number>(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={hasMore}
        next={() => setPage(page + 1)} // Increment by 1 for next page
        loader={<div>Loading more videos...</div>} // Added loader prop
      >
          {videos.map((video: getVideos, index: number) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={index}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noOfQuestions={video.noq}
                />
              </Link>
            ) : (
              <Video
                key={index} // Add a key when rendering this without a Link
                title={video.title}
                id={video.youtubeID}
                noOfQuestions={0}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
