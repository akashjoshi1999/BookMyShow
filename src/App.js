import { React, useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Admin side components import list
import Admin from "./admin/Admin";

// User side components import list
import Offers from "./Frontend/Offer/Offer";
import Region_wise_cinema from "./Frontend/Region-wise-cinema/Region-wise-cinema";
import Movies from "./Frontend/Movies/Movies";
import Plays from "./Frontend/Plays/Plays";
import Sports from "./Frontend/Sports/Sports";
import Events from "./Frontend/Events/Events";
import SingleMovie from "./Frontend/Movieupdated/Movie";

// Vishal header and footer import list
import Navbar from "./Static/Navbar";
import MiddleSection from "./Static/MiddleSection";
import Footer from "./Static/Footer";
export const AppContext = createContext(null);
function App() {
  const [UserLogin, setUserLogin] = useState("");
  return (
    <>
      <AppContext.Provider value={{ UserLogin, setUserLogin }}>
        <Router>
          <Switch />
          <Route exact path="/">
            <Navbar />
            <MiddleSection />
            <Footer />
          </Route>
          <Route exact path="/movies">
            <Navbar />
            <Movies />
            <Footer />
          </Route>
          <Route exact path="/plays">
            <Navbar />
            <Plays />
            <Footer />
          </Route>
          <Route exact path="/sports">
            <Navbar />
            <Sports />
            <Footer />
          </Route>
          <Route exact path="/events">
            <Navbar />
            <Events />
            <Footer />
          </Route>

          <Route exact path="/cinemaList">
            <Navbar />
            {/* <CinemaList/> */}
            <Footer />
          </Route>
          <Route exact path="/singlemovie">
            <Navbar />
            <SingleMovie />
            <Footer />
          </Route>
          <Route exact path="/seatselect">
            <Navbar />
            {/* <SeatSelect/> */}
            <Footer />
          </Route>

          <Route exact path="/offers">
            <Navbar />
            <Offers />
            <Footer />
          </Route>
          <Route exact path="/cinema_list">
            <Navbar />
            <Region_wise_cinema />
            <Footer />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
