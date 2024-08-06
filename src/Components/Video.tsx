import thumbnail from '../Assets/erenYeager.png'

const Video = () => {
  return (
    <div className="card border-light mb-3" style={{ maxWidth: "400px", cursor: "pointer" }}>
      <img src={thumbnail} className="card-img-top" alt="Video Title" style={{ objectFit: "cover" }} />
      <div className="card-body p-3">
        <p className="card-text fs-5 fw-medium mb-2 text-truncate" style={{ WebkitLineClamp: 3, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>#This is a Video</p>
        <div className="d-flex justify-content-between pr-2">
          <p className="mb-0 fs-6 fw-normal">10 Questions</p>
          <p className="mb-0 fs-6 fw-normal">Score: Not Taken Yet</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
