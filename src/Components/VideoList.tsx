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
    <div className="w-full">
      {videos.length > 0 && (
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={hasMore}
        next={() => setPage(page + 1)} // Increment by 1 for next page
        loader={
          <div className="flex justify-center items-center py-8">
            <div className="text-text-secondary">Loading more videos...</div>
          </div>
        } // Added loader prop
      >
        {/* Responsive grid: 1 column on mobile, 2 on tablet, 3+ on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {videos.map((video: getVideos, index: number) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={index} className="block">
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
        </div>
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <div className="text-text-secondary text-lg sm:text-xl">No videos found</div>
        </div>
      )}
      {error && (
        <div className="text-center py-12 sm:py-16">
          <div className="text-error text-lg sm:text-xl">There was an error loading videos</div>
        </div>
      )}
      {loading && videos.length === 0 && (
        <div className="flex justify-center items-center py-12 sm:py-16">
          <div className="text-text-secondary text-lg sm:text-xl">Loading...</div>
        </div>
      )}
    </div>
  );
}
