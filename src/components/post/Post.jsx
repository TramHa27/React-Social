import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../data";
import { useState } from "react";

export default function Post(props) {
  const { post } = props;
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(true);
  const likeHandler = () => {
    setLike(isLiked ? like + 1 : like - 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="postProfileImg"
              className="postProfileImg"
            />
            {/* Example how to get user name
  const user = Users.filter((u) => u.id === 1);
  console.log(user[0].username);
            */}
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} className="postImg" alt="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="./assets/like.png"
              alt=""
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src="./assets/heart.png"
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
