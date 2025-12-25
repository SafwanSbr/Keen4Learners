import { useState, useRef } from "react";

type ProgressBarProps = {
  next: () => void;
  prev: () => void;
  submit: () => void;
  progress: number;
};

const ProgressBar = ({ next, prev, submit, progress }: ProgressBarProps) => {
  const isComplete = progress >= 100;
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const progressRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setTooltipPosition(Math.min(100, Math.max(0, percentage)));
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Progress Bar with Tooltip */}
      <div className="relative group">
        <div
          ref={progressRef}
          className="relative w-full h-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Progress Fill */}
          <div
            className="absolute top-0 left-0 h-full bg-slate-800 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${clampedProgress}%` }}
          />
        </div>

        {/* Tooltip */}
        {showTooltip && (
          <div
            className="absolute bottom-full mb-2 transform -translate-x-1/2 pointer-events-none z-10"
            style={{ left: `${tooltipPosition}%` }}
          >
            <div className="bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap">
              {Math.round(tooltipPosition)}%
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3">
        {/* Back Button */}
        <button
          onClick={prev}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous question"
          disabled={clampedProgress === 0}
        >
          <span className="material-icons-outlined text-xl">arrow_back</span>
        </button>

        {/* Next/Submit Button */}
        <button
          onClick={isComplete ? submit : next}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{isComplete ? "Submit Quiz" : "Next Question"}</span>
          <span className="material-icons-outlined text-lg">
            {isComplete ? "check_circle" : "arrow_forward"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;