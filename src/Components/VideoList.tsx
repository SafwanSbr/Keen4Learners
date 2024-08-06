import { Link } from "react-router-dom";
import Video from "./Video";

const VideoList = () => {
  return (
    <div className="container my-5 mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
        <Link to="/quiz" className="col">
          <Video/>
        </Link>
        <Link to="/quiz" className="col">
          <Video/>
        </Link>
        <Link to="/quiz" className="col">
          <Video/>
        </Link>
        <Link to="/quiz" className="col">
          <Video/>
        </Link>
        <Link to="/quiz" className="col">
          <Video/>
        </Link>
      </div>
    </div>
  );
};

export default VideoList;
