import React from 'react';
import { Switch, Route } from "react-router-dom";
import EditProfile from './EditProfile';
import MiddleSection from './MiddleSection';
import BookingHistory from './BookingHistory';
import Chehre from '../components/MiddleHome/Chehre';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <MiddleSection />
                </Route>
                <Route exact path="/editprofile">
                    <EditProfile />
                </Route>
                <Route exact path="/booking-history">
                    <BookingHistory />
                </Route>
                <Route exact path="/Chehre">
                    <Chehre/>
                </Route>
            </Switch>
            {/* <Route path='/editprofile' component={EditProfile}></Route> */}
        </div>
    )
}
