import React from "react";
import "./sidebar.css";
import { SidebarData } from "./SidebarData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="container">
    <div className="sidebar">
      <ul className="sidebarlist">
        {SidebarData.map((val, key) => {
          return (
            
            <li
              // id={window.location.pathname == val.link ? "active" : ""}
              key={key}
              // onClick={() => {
              //   window.location.pathname = val.link;
              // }}
            >
            <Link style={{ textDecoration: 'none' }} className="row" to={val.link}>
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}
