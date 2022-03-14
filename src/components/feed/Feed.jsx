import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../data";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </div>
    </div>
  );
}
