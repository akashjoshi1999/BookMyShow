import { React, useState, useEffect } from "react";
// import "../combine.css";
import Axios from 'axios';

export default function Event() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [artist, setArtist] = useState("");
  const [artistimage, setArtistImage] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");

  const [editBUttonSHow, seteditBUttonSHow] = useState(false);
  const [events, setEvents] = useState([]);
  const emoji = "⭐️";

  useEffect(() => {
    Axios.post("http://localhost:3004/event/display_event").then((response) => {
      if (response.data) {
        setEvents(response.data);
        console.log(response.data);
      }
    })
  }, [])

  const displayform = () => {
    setShow(!show);
    seteditBUttonSHow(false);
    setTitle("");
    setAbout("");
    setLanguage("");
    setRating("");
    setCategory("");
    setDate("");
    setImage("");
    setPoster("");
    setArtist("");
    setArtistImage("");
    setPrice("");
  };

  const addEvents = () => {
    Axios.post("http://localhost:3004/event/event", {
      etitle: title,
      eabout: about,
      elanguage: language,
      erating: rating,
      ecat: category,
      edate: date,
      eimage: image,
      eposter: poster,
      eartist: artist,
      eartistimg: artistimage,
      eprice: price,
    }).then((response) => {
      console.log("success");
      console.log(response);
    });
  }

  const onDelete = (event) => {
    // console.log(movie,'indelete in');
    console.log(event.eventId);
    setEvents(
      events.filter((e) => {
        return e !== event;
      })
    );
    Axios.post("http://localhost:3004/event/delete_events", {
      eventId: event.eventId,
    }).then((response) => {
      setEvents(response.data);
    });
  };

  const onEdit = (event) => {
    seteditBUttonSHow(true);
    setShow(true);
    // console.log(event);
    const eventid = event.eventId;
    console.log(eventid);
    // console.log("movie-ID",movieId);

    const index = events.findIndex((x) => x.eventId === eventid);
    console.log("in edit", events[index]);
    setId(events[index].eventId)
    setTitle(events[index].eventTitle);
    setAbout(events[index].about);
    setLanguage(events[index].language);
    setRating(events[index].rating);
    setCategory(events[index].eventCategory);
    setDate(events[index].date);
    // setImage(events[index].EventImage);
    setArtist(events[index].Artist);
    // setArtistImage(events[index].ArtistImage);
    setPrice(events[index].price);

  }
  const EditEvents = () => {
    console.log("id of movie", id);
    Axios.post("http://localhost:3004/event/events_edit", {
      id: id,
      etitle: title,
      eabout: about,
      elanguage: language,
      erating: rating,
      ecat: category,
      edate: date,
      eimage: image,
      eposter: poster,
      eartist: artist,
      eartistimg: artistimage,
      eprice: price,

    }).then((response) => {
      console.log("success");
      console.log(response);
    });
  }
  return (
    <div className="movie-container">
      <div className="toggle-form">
        {show ? <button onClick={displayform}>close</button> : <button onClick={displayform}>Add-Event</button>}
      </div>

      {show ? (
        <div className="newUser">
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Event title</label>
              <input type="text" value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }} />
            </div>
            <div className="newUserItem">
              <label>About</label>
              <input type="text"
                value={about}
                onChange={(e) => {
                  setAbout(e.target.value);
                }} />
            </div>
            <div className="newUserItem">
              <label>Event-category</label>
              <select
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                className="newUserSelect"
                name="active"
                id="active"
              >
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
              </select>
            </div>
            <div className="newUserItem">
              <label>Rating</label>
              <input type="text"
                value={rating}
                onChange={(e) => {
                  setRating(e.target.value);
                }} />
            </div>
            <div className="newUserItem">
              <label>Event category</label>
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="newUserSelect"
                name="active"
                id="active"
              >
                <option value="Comedy show">Comedy Show</option>
                <option value="Writing">Writing</option>
                <option value="Fitness">Fitness</option>
              </select>
            </div>
            <div className="newUserItem">
              <label>Date</label>
              <input type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }} />
            </div>
            <div className="newUserItem">
              <label>Event Image</label>
              <input type="file"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }} />
            </div>
            <div className="newUserItem">
              <label>Poster Image</label>
              <input type="file"
                value={poster}
                onChange={(e) => {
                  setPoster(e.target.value);
                }} />
            </div>
            <div className="newUserItem">
              <label>Artist Name</label>
              <input type="cast"
                value={artist}
                onChange={(e) => {
                  setArtist(e.target.value);
                }} />
            </div>
            <div className="newUserItem">
              <label>Artist Image</label>
              <input type="file"
                value={artistimage}
                onChange={(e) => {
                  setArtistImage(e.target.value);
                }} />
            </div>
            <div className="newUserItem">
              <label>Price</label>
              <input type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }} />
            </div>
            {editBUttonSHow ? "" : <button onClick={addEvents} className="newUserButton">
              Create
            </button>}
            {editBUttonSHow ? <button onClick={EditEvents} className="newUserButton">
              Edit
            </button> : ""}
          </form>
        </div>
      ) : (
        ""
      )}
      {" "}
      <div>
        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>POSTER</th>
              <th>ABOUT</th>
              <th>RELEASE-DATE</th>
              <th>RATING</th>
              <th>DELETE</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => {
              const photo = "http://localhost/BookMyShow/bookmyshow/public/images/" + event.image;
              return (
                <tr>
                  <td>{event.eventId}</td>
                  <td>{event.eventTitle}</td>
                  <td><img src={photo} alt="" className="tableImage" /></td>
                  <td>{event.about}</td>
                  <td>{event.date}</td>
                  <td> {emoji.repeat(event.rating)} </td>
                  <td><button onClick={() => { onDelete(event) }}>❌ &nbsp;</button></td>
                  <td><button className="primary" onClick={() => { onEdit(event) }}>Edit &nbsp;</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}