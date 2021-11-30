import "./featuredInfo.css";
import { React, useState, useEffect } from "react";
import Axios from "axios";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {

  const [movies, setMovies] = useState([]);
  const [offers, setOffers] = useState([]);
  const [events, setEvents] = useState([]);
  const [play,setPlays] = useState([]);
  const [sports,setSports] = useState([]);
  const [contact,setContact] = useState([]);
  const [latestMovie, setLatestMovie] = useState();
  const [latestOffer, setLatestOffer] = useState();
  const [latestEvent, setLatestEvent] = useState();
  const [latestPlay, setLatestPlay] = useState();
  const [latestSport, setLatestSport] = useState();


  useEffect(() => {
    Axios.post("http://localhost:3004/movie/display_movie").then((response) => {
      if (response.data) {
        setMovies(response.data);
        const ln = response.data.length;
        const latestData = response.data[ln - 1];
        setLatestMovie(latestData.title);
      }
    })

    Axios.post("http://localhost:3004/offer/offers").then((response) => {
      if (response.data) {
        setOffers(response.data);
        const ln = response.data.length;
        const latestData = response.data[ln - 1];
        setLatestOffer(latestData.offercode);
      }
    })

    Axios.post("http://localhost:3004/event/display_event").then((response) => {
      if (response.data) {
        setEvents(response.data);
        const ln = response.data.length;
        const latestData = response.data[ln - 1];
        setLatestEvent(latestData.offercode);
      }
    })

    Axios.post("http://localhost:3004/play/display_plays").then((response) => {
      if (response.data) {
        console.log("in plapy",response.data);
        setPlays(response.data);
        const ln = response.data.length;
        const latestData = response.data[ln - 1];
        setLatestPlay(latestData.offercode);
      } else {
        console.log("on eeror")
      }
    })

    Axios.post("http://localhost:3004/sport/display_sport").then((response) => {
      if (response.data) {
        setSports(response.data);
        const ln = response.data.length;
        const latestData = response.data[ln - 1];
        setLatestSport(latestData.offercode);
      }
    })

    Axios.post("http://localhost:3004/contact/contact_us").then((response) => {
      if (response.data) {
        setContact(response.data);
        const ln = response.data.length;
        const latestData = response.data[ln - 1];
        setLatestSport(latestData.offercode);
      }
    })


  }, [])


  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Total_Movies</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{movies.length}</span>
            {/* <span className="featuredMoney"></span> */}
            {/* <span className="featuredMoney">{movies[0].movie_id}</span> */}
            <span className="featuredMoneyRate">
              {latestMovie} <ArrowUpward className="featuredIcon negative" />
            </span>
          </div>

          {/* <span className="featuredSub">Compared to last month</span> */}
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Total Events</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{events.length}</span>
            <span className="featuredMoneyRate">
              {latestEvent} <ArrowUpward className="featuredIcon negative" />
            </span>
          </div>

          {/* <span className="featuredSub">Compared to last month</span> */}
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Total_Sports</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{sports.length}</span>
            <span className="featuredMoneyRate">
              {latestSport} <ArrowUpward className="featuredIcon negative" />
            </span>
          </div>
          {/* <span className="featuredSub">Compared to last month</span> */}
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Total_Play</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{play.length}</span>
            <span className="featuredMoneyRate">
              {latestPlay} <ArrowUpward className="featuredIcon negative" />
            </span>
          </div>
          {/* <span className="featuredSub">Compared to last month</span> */}
        </div>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Total_Users</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">20</span>
            {/* <span className="featuredMoneyRate">
          -11.4 <ArrowDownward  className="featuredIcon negative"/>
        </span> */}
          </div>
          {/* <span className="featuredSub">Compared to last month</span> */}
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Total_offers</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{offers.length}</span>
            <span className="featuredMoneyRate">
              {latestOffer} <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          {/* <span className="featuredSub">Compared to last month</span> */}
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Total_theatre</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">20</span>
            {/* <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span> */}
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Contact_us</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{contact.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
