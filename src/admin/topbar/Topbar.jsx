import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span> <Link to="/" style={{ textDecoration: 'none' }} className="logo">BookMyShow</Link> </span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://lh3.googleusercontent.com/ogw/ADea4I6A8aL0eb1_PwdmXm7ExkIchh1VbiwzNUSkTlQT=s83-c-mo" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
