import "./rightbar.css";
import { Users } from "../../data";
import Online from "../online/Online";
import { Fragment } from "react";

export default function Rightbar(props) {
  const { profile } = props;
  const HomeRightBar = () => {
    return (
      <Fragment>
        <div className="birthdayContainer">
          <img
            src="./assets/gift.png"
            alt="birthdayImg"
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Pola Poster </b>
            and <b>3 other friends </b>
            have a birthday today.
          </span>
        </div>
        <img src="./assets/ad.png" alt="rightbarAd" className="rightbarAd" />
        <h3 className="rightbarTitle">Online Friend</h3>
        <ul className="rightbarFriendList">
          {Users.map((user, index) => {
            return <Online key={index} user={user} />;
          })}
        </ul>
      </Fragment>
    );
  };

  const ProfileRightBar = () => {
    return (
      <Fragment>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
