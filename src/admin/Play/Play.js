import { React, useState, useEffect } from "react";
import "../combine.css";
import Axios from 'axios';

export default function Play() {
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
  const [plays, setPlays] = useState([]);
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
    setImage("");
    setPoster("");
    setArtist("");
    setArtistImage("");
    setPrice("");
  };

  useEffect(() => {
    Axios.post("http://localhost:3004/play/display_plays").then((response) => {
      if (response.data) {
        setPlays(response.data);
        console.log(response.data);
      }
    })
  }, [])

  const addPlay = () => {
    Axios.post("http://localhost:3004/play/plays", {
      ptitle: title,
      pabout: about,
      planguage: language,
      prating: rating,
      pcat: category,
      pdate: date,
      pimage: image,
      pposter: poster,
      partist: artist,
      partistimg: artistimage,
      pprice: price,
    }).then((response) => {
      console.log("success");
      console.log(response);
    });
  }

  const onDelete = (play) => {
    // console.log(movie,'indelete in');
    console.log(play.playId);
    setPlays(
      plays.filter((e) => {
        return e !== play;
      })
    );
    Axios.post("http://localhost:3004/play/delete_plays", {
      playId: play.playId,
    }).then((response) => {
      setPlays(response.data);
    });
  };

  const onEdit = (play) => {
    seteditBUttonSHow(true);
    setShow(true);
    // console.log(play);
    const playid = play.playId;
    console.log(playid);
    // console.log("movie-ID",movieId);

    const index = plays.findIndex((x) => x.playId === playid);
    console.log("in edit", plays[index]);
    setId(plays[index].playId)
    setTitle(plays[index].playTitle);
    setAbout(plays[index].about);
    setLanguage(plays[index].language);
    setRating(plays[index].rating);
    setCategory(plays[index].playCategory);
    setDate(plays[index].date);
    // setImage(plays[index].playImage);
    setArtist(plays[index].Artist);
    // setArtistImage(plays[index].ArtistImage);
    setPrice(plays[index].price);

  }
  const EditPlay = () => {
    console.log("id of movie", id);
    Axios.post("http://localhost:3004/play/edit_plays", {
      id: id,
      ptitle: title,
      pabout: about,
      planguage: language,
      prating: rating,
      pcat: category,
      pdate: date,
      pimage: image,
      pposter: poster,
      partist: artist,
      partistimg: artistimage,
      pprice: price,

    }).then((response) => {
      console.log("success");
      console.log(response);
    });
  };


  return (
    <div className="movie-container">
      <div className="toggle-form">
        {show ? <button onClick={displayform}>close</button> : <button onClick={displayform}>Add-Movie</button>}
      </div>

      {show ? (
        <div className="newUser">
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Play title</label>
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
              <label>Play-category</label>
              <select
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                className="newUserSelect"
                name="active"
                id="active"
              >
                <option value="Hindi">Hindi</option>
                <option value="Gujarati">Gujarati</option>
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
              <label>Play category</label>
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="newUserSelect"
                name="active"
                id="active"
              >
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
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
              <label>Poster</label>
              <input type="file"
                value={poster}
                onChange={(e) => {
                  setPoster(e.target.value);
                }} />
            </div>
            <div className="newUserItem">
              <label>Play Image</label>
              <input type="file"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
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
            {editBUttonSHow ? "" : <button onClick={addPlay} className="newUserButton">
              Create
            </button>}
            {editBUttonSHow ? <button onClick={EditPlay} className="newUserButton">
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
            {plays.map((play) => {
              const photo = "http://localhost/BookMyShow/bookmyshow/public/images/" + play.image;
              console.log(play.image);
              return (
                <tr>
                  <td>{play.playId}</td>
                  <td>{play.playTitle}</td>
                  <td><img src={photo} alt="" className="tableImage" /></td>
                  <td>{play.about}</td>
                  <td>{play.date}</td>
                  <td> {emoji.repeat(play.rating)} </td>
                  <td><button onClick={() => { onDelete(play) }}>❌ &nbsp;</button></td>
                  <td><button className="primary" onClick={() => { onEdit(play) }}>Edit &nbsp;</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}