import Video from "./Video";

const VideoList = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <Video />
        </div>
        <div className="col">
          <Video />
        </div>
        <div className="col">
          <Video />
        </div>
        <div className="col">
          <Video />
        </div>
        <div className="col">
          <Video />
        </div>
      </div>
    </div>
  );
};

export default VideoList;
