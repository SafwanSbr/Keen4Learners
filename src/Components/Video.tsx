type Props = {
  title:string;
  id:string;
  noOfQuestions:number;
}

const Video = ({title, id, noOfQuestions}:Props) => {
  return (
    <div className="card border-light mb-3" style={{ maxWidth: "400px", cursor: "pointer" }}>
      <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} className="card-img-top" alt={title} style={{ objectFit: "cover" }} />
      <div className="card-body p-3">
        <p className="card-text fs-5 fw-medium mb-2 text-truncate" style={{ WebkitLineClamp: 3, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{title}</p>
        <div className="d-flex justify-content-between pr-2">
          <p className="mb-0 fs-6 fw-normal">{noOfQuestions} Questions</p>
          <p className="mb-0 fs-6 fw-normal">Total Points: {noOfQuestions * 5}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
