import { useState } from "react";
import ReactPlayer from "react-player";

type MiniPlayerProps = {
  title?: string;
  id?: string;
};

export default function MiniPlayer({ title, id }: MiniPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoUrl = id ? `https://www.youtube.com/watch?v=${id}` : "";

  const togglePlayer = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  if (!id) return null;

  return (
    <div
      className={`fixed right-10 bottom-10 z-50 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? "w-[320px] h-auto" : "w-auto h-auto cursor-pointer"
      }`}
      onClick={!isExpanded ? togglePlayer : undefined}
    >
      {!isExpanded ? (
        // Collapsed State: Play icon + "View Video" text
        <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors">
          <span className="material-icons-outlined text-3xl text-primary">
            play_circle_filled
          </span>
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
            View Video
          </span>
        </div>
      ) : (
        // Expanded State: ReactPlayer + Close icon
        <div className="relative">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            aria-label="Close video player"
          >
            <span className="material-icons-outlined text-lg">close</span>
          </button>
          <ReactPlayer
            src={videoUrl}
            width="320px"
            height="180px"
            playing={isExpanded}
            controls
            className="react-player"
          />
          {title && (
            <div className="px-3 py-2 bg-white border-t border-gray-200">
              <p className="text-sm font-medium text-gray-800 line-clamp-2">
                {title}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
