import "./closefriend.css";

export default function CloseFriend(props) {
  const { user } = props;
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
