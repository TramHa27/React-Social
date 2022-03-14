import "./profile.css";
import { Fragment } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function profile() {
  return (
    <Fragment>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileTop">
            <div className="profileCover">
              <img
                src="./assets/post/3.jpeg"
                alt="profileCoverImg"
                className="profileCoverImg"
              />
              <img
                src="./assets/person/7.jpeg"
                alt="profileUserImg"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friend</span>
            </div>
          </div>
          <div className="profileBottom">
            <Feed />
            <Rightbar profile={profile} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
