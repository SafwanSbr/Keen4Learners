const Summary = ({ score, noq }: { score: number; noq: number }) => {
  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className="badge">
        <img src="" alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
