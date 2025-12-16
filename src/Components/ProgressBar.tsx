import Button from "./Button"

type Props = {
    next:()=>void;
    prev:()=>void;
    submit:()=>void;
    progress:number;
}
const ProgressBar = ({next, prev, submit, progress}:Props) => {
  const isComplete = progress >= 100;
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 bg-background-surface rounded-xl shadow-lg border border-border-light">
      {/* Progress Bar Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-text-primary">Progress</span>
          <span className="text-sm font-bold text-primary">{Math.round(clampedProgress)}%</span>
        </div>
        <div className="relative w-full h-4 bg-background-muted rounded-full overflow-hidden shadow-inner">
          {/* Animated progress fill with gradient */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-primary-light to-secondary transition-all duration-500 ease-out rounded-full shadow-sm"
            style={{width: `${clampedProgress}%`}}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
          {/* Progress indicator dot */}
          {clampedProgress > 0 && (
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-primary rounded-full shadow-md transition-all duration-500 ease-out flex items-center justify-center"
              style={{left: `calc(${clampedProgress}% - 12px)`}}
            >
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          )}
        </div>
        {/* Completion message */}
        {isComplete && (
          <p className="mt-2 text-sm text-center text-secondary font-medium animate-pulse">
            🎉 All questions completed!
          </p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        {/* Back Button */}
        <button
          onClick={prev}
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-background-muted hover:bg-background-muted/80 text-text-primary border border-border hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous question"
        >
          <span className="material-icons-outlined text-xl">arrow_back</span>
        </button>

        {/* Next/Submit Button */}
        <Button 
          className="flex-1" 
          onClick={isComplete ? submit : next}
        >
          <span>{isComplete ? "Submit Quiz" : "Next Question"}</span>
          <span className="material-icons-outlined">{isComplete ? "check_circle" : "arrow_forward"}</span>
        </Button>
      </div>
    </div>
  )
}

export default ProgressBar