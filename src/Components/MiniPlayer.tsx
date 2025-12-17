import { useRef, useState } from "react";
import ReactPlayer from "react-player";

type MiniPlayerProps = {
  title?: string;
  id?: string;
};

export default function MiniPlayer({ title, id }: MiniPlayerProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState(false);
  const videoUrl = id ? `https://www.youtube.com/watch?v=${id}` : "";

  function toggleMiniPlayer() {
    if (!buttonRef.current) return;

    if (!status) {
      buttonRef.current.classList.remove("floatingBtn");
      setStatus(true);
    } else {
      buttonRef.current.classList.add("floatingBtn");
      setStatus(false);
    }
  }

  return (
    <div
      className={`miniPlayer floatingBtn fixed bottom-4 right-4 bg-background-surface rounded-lg shadow-lg border border-border overflow-hidden transition-all duration-300 ${
        status ? "w-[300px]" : "w-16 h-16"
      }`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span
        className={`material-icons-outlined open absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-primary cursor-pointer ${
          status ? "hidden" : "block"
        }`}
      >
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined close absolute top-2 right-2 text-text-secondary cursor-pointer z-10 ${
          status ? "block" : "hidden"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          toggleMiniPlayer();
        }}
      >
        close
      </span>
      {status && id && (
        <ReactPlayer
          className="player"
          src={videoUrl}
          width="300px"
          height="168px"
          playing={status}
          controls
        />
      )}
      {status && title && (
        <p className="p-2 text-sm font-medium text-text-primary line-clamp-2">
          {title}
        </p>
      )}
    </div>
  );
}
