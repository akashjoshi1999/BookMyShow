import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// Admin side components import list
import Sidebar from './Sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import UserList from './userList/UserList';
import User from './user/User';
import FeaturedInfo from './Home/FeaturedInfo';
import Movie from './Movie/Movie';
import Event from './Event/Event';
import Sport from './Sport/Sport';
import Play from './Play/Play';
import Offer from './offer/offer';
import Theater from './Theater/Theater';
import Contact from './Contact/Contact';
export default function Admin() {
  return (
    <>
      <Topbar />
      <div className="myContainerAll">
        <Sidebar />
        <Switch>
          <Route exact path="/admin">
            <FeaturedInfo />
          </Route>
          <Route exact path="/admin/users">
            <UserList />
          </Route>
          <Route path="/admin/user/:userId">
            <User />
          </Route>
          <Route exact path="/admin/movies">
            <Movie />
          </Route>
          <Route exact path="/admin/event">
            <Event />
          </Route>
          <Route exact path="/admin/play">
            <Play />
          </Route>
          <Route exact path="/admin/sport">
            <Sport />
          </Route>
          <Route exact path="/admin/offer">
            <Offer />
          </Route>
          <Route exact path="/admin/theatre">
            <Theater />
          </Route>
          <Route exact path="/admin/contacts">
            <Contact />
          </Route>
        </Switch>
      </div>
    </>
  )
}
