import { useMemo } from "react";
import useFetch from "../Hooks/useFetch";
import successImage from "../Assets/logo.png";

type SummaryProps = {
  score: number;
  noq: number;
};

type PexelsImageResponse = {
  photos: Array<{
    src: {
      medium: string;
    };
  }>;
};

const Summary = ({ score, noq }: SummaryProps) => {
  const getKeyword = useMemo(() => {
    const percentage = (score / (noq * 5)) * 100;
    if (percentage < 50) {
      return "failed";
    } else if (percentage < 75) {
      return "good";
    } else if (percentage < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const apiKey = import.meta.env.VITE_pexelsApiKey || "";
  const { loading, error, result } = useFetch<PexelsImageResponse>(
    apiKey
      ? `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`
      : "",
    "GET",
    apiKey ? { Authorization: apiKey } : {}
  );

  const image = result?.photos?.[0]?.src?.medium || successImage;

  return (
    <div className="w-[80%] mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-6">
      {/* Left Side - Score */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <p className="text-center text-xl font-semibold text-text-primary">
          Your score is <br />
          <span className="text-2xl font-bold text-primary">
            {score} out of {noq * 5}
          </span>
        </p>
      </div>

      {/* Right Side - Badge */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        {loading && (
          <div className="h-[300px] w-full flex items-center justify-center text-text-secondary">
            Loading your badge...
          </div>
        )}

        {error && (
          <div className="h-[300px] w-full flex items-center justify-center text-error">
            An error occurred!
          </div>
        )}

        {!loading && !error && (
          <div className="h-[300px] w-full p-4 flex justify-center items-center">
            <img
              src={image}
              alt="Success badge"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
