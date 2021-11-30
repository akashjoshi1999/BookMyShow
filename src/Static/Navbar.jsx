import React, { useState, useEffect, useContext } from "react";

import { AppContext } from "../App";

import { Link, useHistory } from "react-router-dom";
// import styles from "/var/www/html/BookMyShow/bookmyshow/src/Styling/Navbar.module.css";
import styles from "../Styling/Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { cityRequest, storeAuth } from "../Redux/app/actions";
import Login from "./LoginPage";
import logo from "../Images/navbarBms.png";
import { GoogleLogout } from "react-google-login";
import Axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});

const location = [
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
    name: "Ahemdabad",
  },

  {
    link: "https://img1.pnghut.com/20/7/20/AjfqYZX8cK/logo-hawa-mahal-golden-triangle-orange-jal.jpg",
    name: "Jaipur",
  },
];
const Navbar = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);
  const [cityName, setCityName] = useState("Select City");
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, setState] = useState(false);
  const [auth, setAuth] = useState(false);
  const [action, setAction] = useState(false);
  const isAuth = useSelector((state) => state.app.isAuth);
  const [movieList, setMovieList] = useState([]);

  // const [UserLogin, setUserLogin] = useState("");

  const { UserLogin, setUserLogin } = useContext(AppContext);

  // const [msearch, setMsearch] = useState("");
  // const [show, setShow] = useState(false);

  let history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLocation = (name) => {
    setOpen(false);
    setCityName(name);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cityRequest(cityName));
  }, [cityName]);

  const toggleDrawer = (open) => (event) => {
    setState(!state);
  };
  const handleSignIn = () => {
    setAction(true);
    // console.log("i am handle signin",UserLogin);
    setState(false);
    // localStorage.setItem("ownUser","User");
    // setUserLogin("user");

    // setTimeout(()=>{
    //   const Usser = localStorage.getItem("ownUser");
    //   alert(Usser);
    //   setUserLogin(Usser);
    //   }, 3000);
  };

  const handleCloseLogin = (res) => {
    if (res !== null) {
      setAuth(true);
      console.log(res);
      console.log("Success LogIn");
      // alert("Loged In Successfully");
    } else {
      console.log(res);
      alert("You are not registered");
    }
    setAction(false);
    setState(false);
  };

  // useEffect(()=>{
  //     const ownUser = localStorage.getItem("ownUser");
  //     console.log("navbar useEffect",ownUser);
  //     setUserLogin(ownUser);
  // },[UserLogin])

  // useEffect(() => {
  //     const v = localStorage.getItem(auth);
  //     setAuth(v);
  // }, [auth]);

  // useEffect(() => {
  //     dispatch(storeAuth(auth));
  // }, [auth]);

  useEffect(() => {
    const ownUser = localStorage.getItem("ownUser");
    setUserLogin(ownUser);

    // Axios.get("http://localhost:9999/movies").then((response) => {
    //   if (response) {
    //     setMovieList(response.data);
    //   } else {
    //     console.log("NOt responed");
    //   }
    // });
  }, [UserLogin]);

  const signOutBtn = () => {
    localStorage.setItem("ownUser", "");
    setUserLogin("");
  };
  // console.log(isAuth);

  const onSignoutSuccess = () => {
    alert("Are you sure you want to log out?");
    console.log("LogOut Success");
    // localStorage.setItem("ownUser", "");
    localStorage.clear();
    history.push("/");
    setUserLogin(null);
    setAuth(false);
  };

  // const movies = [];
  // for (let i = 0; i < movieList.length; i++) {
  //     movies.push(movieList[i].title);
  // }
  // console.log(movies);

  // const searchItem = (e) => {
  //     setMsearch(e.target.value);
  //     console.log(e.target.value)
  // }
  // function focusTarget() {
  //     setShow(true)
  // }

  // function blurr() {
  //     setShow(false)
  // }

  return (
    <div>
      <div className={styles.navbar}>
        <div style={{ display: "flex", alignItems: "center", width: "65%" }}>
          <Link className={styles.link} to="/">
            {/* <svg height="40" width="150">
                            <image
                                href="//in.bmscdn.com/webin/common/icons/bms.svg"
                                width="150"
                                height="40"
                            ></image>
                        </svg> */}
            {/* <h1>BMS</h1> */}
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
          <div className={styles.searchBar}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              onChange={(e) => setQuery(e.target.value)}
              // onFocus={focusTarget} onBlur={blurr} value={msearch}
              // (e) => setQuery(e.target.value)
            />
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", fontSize: "17px" }}
        >
          <div className={styles.location} onClick={handleClickOpen}>
            <div>{cityName}</div>
            <ArrowDropDownIcon />
          </div>
          {/* {!isAuth && (
            <button onClick={handleSignIn} className={styles.signBtn}>
              <p>Sign In</p>
            </button>
          )} */}
          <Login action={action} handleCloseLogin={handleCloseLogin} />

          {/* {UserLogin === "" ? 
                    
                    <button onClick={handleSignIn} className={styles.signBtn}>
                    <p>Sign In</p>

                </button>

                    : ""} */}

          {UserLogin ? (
            <div
              onClick={toggleDrawer(true)}
              onClose={toggleDrawer(false)}
              className={styles.profile}
            >
              {/* user-display info show here */}

              {/* {isAuth && <AccountCircleIcon style={{ fontSize: "40px" }} />}
                    {isAuth && <div>Hi, User..</div>} */}

              <AccountCircleIcon style={{ fontSize: "40px" }} />
              <div>Hi, {UserLogin} </div>
              <Drawer anchor="right" open={state}>
                <div className={styles.drawer}>
                  <div>
                    <div>Hi User</div>
                    <Link
                      style={{ marginLeft: 0, fontSize: "17px" }}
                      className={styles.link}
                      to="/editprofile"
                    >
                      Edit Profile
                    </Link>
                  </div>
                  <AccountCircleIcon style={{ fontSize: "40px" }} />
                </div>
                <div className={styles.sideber_content}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        // fill-rule="evenodd"
                        d="M9.5 2A3.5 3.5 0 0 1 13 5.5V6h3l.375 6H22v3a2 2 0 1 0 0 4v3H2L3 6h3v-.5A3.5 3.5 0 0 1 9.5 2zM21 13H7v1.17a3.001 3.001 0 0 1 0 5.66V21h14v-1.17a3.001 3.001 0 0 1 0-5.66V13zM6 7H3.94l-.876 14H6v-2a2 2 0 1 0 0-4v-3h9.372l-.311-5H13v2h-1V7H7v2H6V7zm8 7.5l.735 1.489 1.643.238-1.19 1.16.281 1.636L14 18.25l-1.47.773.281-1.637-1.189-1.159 1.643-.238L14 14.5zM9.5 3A2.5 2.5 0 0 0 7 5.5V6h5v-.5A2.5 2.5 0 0 0 9.5 3z"
                      ></path>
                    </svg>
                    <Link to="/booking-history" style={{ color: "black" }}>
                      Booking History
                    </Link>
                  </div>
                  <div className={styles.signout_button}>
                    {/* <button onClick={signOutBtn}>Sign out</button> */}
                    <GoogleLogout
                      clientId="827553232673-jjc3g2oro66b2shq93dq1okkrkt6e8cj.apps.googleusercontent.com"
                      buttonText="Log Out"
                      onLogoutSuccess={onSignoutSuccess}
                      onClick={signOutBtn}
                    ></GoogleLogout>
                  </div>
                </div>
              </Drawer>
            </div>
          ) : (
            <button onClick={handleSignIn} className={styles.signBtn}>
              <p>Sign In</p>
            </button>
          )}

          {/* end here user-info */}
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        TransitionComponent={Transition}
      >
        <DialogContent className={styles.Dialog}>
          <DialogContentText className={styles.location_content}>
            <SearchIcon />
            <input
              style={{
                border: "none",
                width: "550px",
                height: "40px",
                outline: "none",
              }}
              type="text"
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search for your city"
            />
          </DialogContentText>
          <div>Popular cities</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              textAlign: "center",
            }}
          >
            {location.map((loc) => (
              <div style={{ margin: "2px" }}>
                <img
                  onClick={() => handleLocation(loc.name)}
                  src={loc.link}
                  alt={loc.name}
                />
                <div>{loc.name}</div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* {show ? <div>
                {movieList.filter((value) => {
                    if (msearch == "") {
                        return value
                    }
                    else if (value.title.toLowerCase().includes(msearch.toLowerCase())) {
                        return value
                    }
                }).map((value) => {

                    return (<>
                        <Link to={`/${msearch}`}>
                            <div style={{ color: "white", backgroundColor: "black" }} onClick={() => { setMsearch(value.title) }}>
                                {value.title}
                                {console.log(`/${value.title}`)}
                            </div>
                        </Link>
                    </>)
                })}
            </div> : null} */}

      <div className={styles.secondNav}>
        <div>
          <Link className={styles.link} to="/movies">
            Movies
          </Link>
          <Link className={styles.link} to="/events">
            Events
          </Link>
          <Link className={styles.link} to="/plays">
            Plays
          </Link>
          <Link className={styles.link} to="/sports">
            Sports
          </Link>
          <Link className={styles.link} to="/buzz">
            Buzz
          </Link>
        </div>
        <div>
          <Link className={styles.link} to="/offers">
            Offers
          </Link>
          <Link className={styles.link} to="/admin">
            Adminpanel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
