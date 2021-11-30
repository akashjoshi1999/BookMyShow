import { React, useState, useEffect } from "react";
import Axios from "axios";

export default function Theater() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [tname, setTheaterName] = useState("");
  const [cname, setCityname] = useState("");
  const [area, setArea] = useState("");
  const [rating, setrating] = useState("");
  const [theatertype, setTheatertype] = useState(false);
  const [image, setimage] = useState("");

  const [theaters, setTheaters] = useState([]);

  // for edit button
  const [editBUttonSHow, seteditBUttonSHow] = useState(false);
  const emoji = "⭐️";

  useEffect(() => {
    Axios.post("http://localhost:3004/display_theater").then((response) => {
      if (response.data) {
        setTheaters(response.data);
        console.log(response.data);
      }

    })
  }, [])

  const displayform = () => {
    setShow(!show);
    seteditBUttonSHow(false);
    // setTheaterName("")
    // setCityname("")
    // setArea("")
    // setrating("")
    // setTheatertype("")
  };

  const AddTheater = () => {
    Axios.post("http://localhost:3004/theaters", {
      tname: tname,
      cname: cname,
      area: area,
      rating: rating,
      theatertype: theatertype,
      image: image,
    }).then((response) => {
      console.log("success");
      console.log(response);
    });
  };

  const EditTheater = () => {
    Axios.post("http://localhost:3004/theaters_edit", {
      id: id,
      tname: tname,
      cname: cname,
      area: area,
      rating: rating,
      theatertype: theatertype,
      image: image,

    }).then((response) => {
      console.log("success");
      console.log(response);
    });
  };



  const onDelete = (theater) => {
    console.log(theater.t_id);
    setTheaters(
      theaters.filter((e) => {
        return e !== theater;
      })
    );
    Axios.post("http://localhost:3004/delete_theaters", {
      theaterId: theater.t_id,
    }).then((response) => {
      setTheaters(response.data);
    });
  };

  const onEdit = (theater) => {

    seteditBUttonSHow(true);
    setShow(true);
    const theaterId = theater.t_id;
    const index = theaters.findIndex((x) => x.t_id === theaterId);
    setId(theaters[index].t_id);
    setTheaterName(theaters[index].t_name);
    setCityname(theaters[index].city_name);
    setArea(theaters[index].area);
    setrating(theaters[index].rating);
    setTheatertype(theaters[index].t_type);
    // setimage(theaters[index].image);
  }

  return (
    <div className="movie-container">
      <div className="toggle-form">
        {show ? <button onClick={displayform}>close</button> : <button onClick={displayform}>Add-Theater</button>}
      </div>

      {show ? (
        <div className="newUser">
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Theater-Name</label>
              <input
                value={tname}
                onChange={(e) => {
                  setTheaterName(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="newUserItem">
              <label>City-Name</label>
              <input
                value={cname}
                onChange={(e) => {
                  setCityname(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="newUserItem">
              <label>Area</label>
              <input
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="newUserItem">
              <label>Rating</label>
              <input
                value={rating}
                onChange={(e) => {
                  setrating(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="newUserItem">
              <label>Theater-type</label>
              <select value={theatertype}
                onChange={(e) => {
                  setTheatertype(e.target.value);
                }}
                className="newUserSelect"
                name="active"
                id="active"
              >
                <option value="movie">Movie</option>
                <option value="play">Play</option>
              </select>
            </div>
            <div className="newUserItem">
              <label>Image</label>
              <input
                value={image}
                onChange={(e) => {
                  setimage(e.target.value);
                }}
                type="file"

              />
            </div>


            {editBUttonSHow ? "" : <button onClick={AddTheater} className="newUserButton">
              Create
            </button>}
            {editBUttonSHow ? <button onClick={EditTheater} className="newUserButton">
              Edit
            </button> : ""}

          </form>
        </div>
      ) : (
        ""
      )}

      {/* Dsipaly movie start here */}

      {/* <div className="container"> */}
      {" "}
      <div>
        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>THEATER NAME</th>
              <th>POSTER</th>
              <th>CITY</th>
              <th>AREA</th>
              <th>RATING</th>
              <th>DELETE</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>

            {theaters.map((theater) => {
              const photo = "http://localhost/BookMyShow/bookmyshow/public/images/" + theater.image;
              return (

                <tr>
                  <td>{theater.t_id}</td>
                  <td>{theater.t_name}</td>
                  <td><img src={photo} alt="" className="tableImage" /></td>
                  <td>{theater.city_name}</td>
                  <td>{theater.area}</td>
                  <td> {emoji.repeat(theater.rating)} </td>
                  <td><button onClick={() => { onDelete(theater) }}>❌ &nbsp;</button></td>
                  <td><button className="primary" onClick={() => { onEdit(theater) }}>Edit &nbsp;</button></td>
                </tr>

              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
