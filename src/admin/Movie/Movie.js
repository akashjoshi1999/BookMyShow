import { React, useState, useEffect } from "react";
import Axios from "axios";

export default function Movie() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [title, settitle] = useState("");
  const [about, setabout] = useState("");
  const [lang, setlang] = useState("");
  const [rating, setrating] = useState("");
  const [movietype, setmovietype] = useState(false);
  const [category, setcategory] = useState("");
  const [releasedate, setreleasdata] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");
  const [backimage, setBackimage] = useState("");

  const [movies, setmovies] = useState([]);

  // for edit button
  const [editBUttonSHow, seteditBUttonSHow] = useState(false);
  const emoji = "⭐️";

  useEffect(() => {
    Axios.post("http://localhost:3004/movie/display_movie").then((response) => {
      if (response.data) {
        setmovies(response.data);
        console.log(response.data);
      }

    })
  }, [])

  const displayform = () => {
    setShow(!show);
    seteditBUttonSHow(false);
    settitle("");
    setabout("");
    setlang("");
    setrating("");
    setmovietype("");
    setcategory("");
    setreleasdata("");
    setprice("");

  };

  const AddMovie = () => {
    Axios.post("http://localhost:3004/movie/movies", {
      title: title,
      about: about,
      lang: lang,
      rating: rating,
      movietype: movietype,
      category: category,
      releasedate: releasedate,
      price: price,
      image: image,
      bimage: backimage,
    }).then((response) => {
      console.log("success");
      console.log(response);
    });
  };

  const EditMovie = () => {
    console.log("id of movie", id);
    Axios.post("http://localhost:3004/movie/movies_edit", {
      id: id,
      title: title,
      about: about,
      lang: lang,
      rating: rating,
      movietype: movietype,
      category: category,
      releasedate: releasedate,
      price: price,
      image: image,
      bimage:backimage,
    }).then((response) => {
      console.log("success");
      console.log(response);
    });
  };



  const onDelete = (movie) => {
    console.log(movie.movie_id);
    setmovies(
      movies.filter((e) => {
        return e !== movie;
      })
    );
    Axios.post("http://localhost:3004/movie/delete_movies", {
      movieId: movie.movie_id,
    }).then((response) => {
      setmovies(response.data);
    });
  };

  const onEdit = (movie) => {

    seteditBUttonSHow(true);
    setShow(true);
    const movieId = movie.movie_id;


    const index = movies.findIndex((x) => x.movie_id === movieId);

    setId(movies[index].movie_id);
    settitle(movies[index].title);
    setabout(movies[index].about);
    setlang(movies[index].lang);
    setrating(movies[index].rating);
    setmovietype(movies[index].movie_type);
    setcategory(movies[index].category);
    setreleasdata(movies[index].release_date);
    setprice(movies[index].price);
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
              <label>Movie-Title</label>
              <input
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="newUserItem">
              <label>About</label>
              <input
                value={about}
                onChange={(e) => {
                  setabout(e.target.value);
                }}
                type="text"

              />
            </div>
            <div className="newUserItem">
              <label>Language</label>
              <select value={lang}
                onChange={(e) => {
                  setlang(e.target.value);
                }}
                className="newUserSelect"
                name="active"
                id="active"
              >
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Gujarati">Gujarati</option>
              </select>
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
              <label>Movie-type</label>
              <select value={movietype}
                onChange={(e) => {
                  setmovietype(e.target.value);
                }}
                className="newUserSelect"
                name="active"
                id="active"
              >
                <option value="2D">2D</option>
                <option value="3D">3D</option>
              </select>
            </div>
            <div className="newUserItem">
              <label>Movie-category</label>
              <select value={category}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
                className="newUserSelect"
                name="active"
                id="active"
              >
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
              </select>
            </div>
            <div className="newUserItem">
              <label>Release-date</label>
              <input
                value={releasedate}
                onChange={(e) => {
                  setreleasdata(e.target.value);
                }}
                type="date"
              />
            </div>
            <div className="newUserItem">
              <label>Price</label>
              <input
                value={price}
                onChange={(e) => {
                  setprice(e.target.value);
                }}
                type="text"
              />
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
            <div className="newUserItem">
              <label>Background Image</label>
              <input
                value={backimage}
                onChange={(e) => {
                  setBackimage(e.target.value);
                }}
                type="file"
              />
            </div>

            {editBUttonSHow ? "" : <button onClick={AddMovie} className="newUserButton">
              Create
            </button>}
            {editBUttonSHow ? <button onClick={EditMovie} className="newUserButton">
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

            {movies.map((movie) => {
              const photo = "http://localhost/BookMyShow/bookmyshow/public/images/" + movie.image;
              return (
                <tr>
                  <td>{movie.movie_id}</td>
                  <td>{movie.title}</td>
                  <td><img src={photo} alt="" className="tableImage" /></td>
                  <td>{movie.about}</td>
                  <td>{movie.release_date}</td>
                  <td> {emoji.repeat(movie.rating)} </td>
                  <td><button onClick={() => { onDelete(movie) }}>❌ &nbsp;</button></td>
                  <td><button className="primary" onClick={() => { onEdit(movie) }}>Edit &nbsp;</button></td>
                </tr>

              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
