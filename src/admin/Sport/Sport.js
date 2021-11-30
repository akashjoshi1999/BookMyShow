import { React, useState, useEffect } from "react";
import "../combine.css";
import Axios from 'axios';

export default function Sport() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [poster, setPoster] = useState("");

  const [editBUttonSHow, seteditBUttonSHow] = useState(false);
  const [sports, setSports] = useState([]);
  const emoji = "⭐️";

  const displayform = () => {
    setShow(!show);
    seteditBUttonSHow(false);
    setTitle("");
    setAbout("");
    setLanguage("");
    setRating("");
    setCategory("");
    setDate("");
    setPoster("");
    setImage("");
    setPrice("");
  };

  useEffect(() => {
    Axios.post("http://localhost:3004/sport/display_sport").then((response) => {
      if (response.data) {
        setSports(response.data);
        console.log(response.data);
      }
    })
  }, [])
  const addSport = () => {
    Axios.post("http://localhost:3004/sport/sport", {
      stitle: title,
      sabout: about,
      slanguage: language,
      srating: rating,
      scat: category,
      sdate: date,
      simage: image,
      sposter: poster,
      sprice: price,
    }).then((response) => {
      console.log("success");
      console.log(response);
    });
  }

  const onDelete = (sport) => {
    console.log(sport.sportId);
    setSports(
      sports.filter((e) => {
        return e !== sport;
      })
    );
    Axios.post("http://localhost:3004/sport/delete_sport", {
      sportId: sport.sportId,
    }).then((response) => {
      setSports(response.data);
    });
  };

  const onEdit = (sport) => {
    seteditBUttonSHow(true);
    setShow(true);
    const sportid = sport.sportId;
    console.log(sportid);

    const index = sports.findIndex((x) => x.sportId === sportid);
    console.log("in edit", sports[index]);
    setId(sports[index].sportId);
    setTitle(sports[index].sportTitle);
    setAbout(sports[index].about);
    setLanguage(sports[index].language);
    setRating(sports[index].rating);
    setCategory(sports[index].sportCategory);
    setDate(sports[index].date);
    setPrice(sports[index].price);

  }
  const EditSport = () => {
    console.log("in sport image:", image);
    console.log("id of movie", id);
    Axios.post("http://localhost:3004/sport/sport_edit", {
      id: id,
      stitle: title,
      sabout: about,
      slanguage: language,
      srating: rating,
      scat: category,
      sdate: date,
      simage: image,
      sposter: poster,
      sprice: price,
    }).then((response) => {
      console.log("success");
      console.log(response);
    });
  }
  return (
    <div className="movie-container">
      <div className="toggle-form">
        {show ? <button onClick={displayform}>close</button> : <button onClick={displayform}>Add-Movie</button>}
      </div>

      {show ? (
        <div className="newUser">
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Sport title</label>
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
              <label>Sport-category</label>
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
              <label>Sport category</label>
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="newUserSelect"
                name="active"
                id="active"
              >
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Hockey">Hockey</option>
                <option value="Mixed Martial Arts">Mixed Martial Arts</option>
                <option value="Online Game">Online Game</option>
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
              <label>Sport Image</label>
              <input type="file"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }} />
            </div>
            <div className="newUserItem">
              <label>Sport Poster</label>
              <input type="file"
                value={poster}
                onChange={(e) => {
                  setPoster(e.target.value);
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
            {editBUttonSHow ? "" : <button onClick={addSport} className="newUserButton">
              Create
            </button>}
            {editBUttonSHow ? <button onClick={EditSport} className="newUserButton">
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
            {sports.map((sport) => {
              const photo = "http://localhost/BookMyShow/bookmyshow/public/images/" + sport.image;
              return (
                <tr>
                  <td>{sport.sportId}</td>
                  <td>{sport.sportTitle}</td>
                  <td><img src={photo} alt="" className="tableImage" /></td>
                  <td>{sport.about}</td>
                  <td>{sport.date}</td>
                  <td> {emoji.repeat(sport.rating)} </td>
                  <td><button onClick={() => { onDelete(sport) }}>❌ &nbsp;</button></td>
                  <td><button className="primary" onClick={() => { onEdit(sport) }}>Edit &nbsp;</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}