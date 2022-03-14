import "./online.css";

export default function Online(props) {
  const { user } = props;
  //   console.log(user);
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={user.profilePicture}
          alt="rightbarProfileImg"
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <div className="rightbarUsername">{user.username}</div>
    </li>
  );
}
