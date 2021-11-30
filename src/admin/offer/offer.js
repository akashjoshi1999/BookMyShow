import { React, useState } from "react";
import "../combine.css";

export default function Offer() {
  const [show, setShow] = useState(true);

  const displayform = () => {
    setShow(!show);
  };

  return (
    <div className="movie-container">
      <div className="toggle-form">
        <button onClick={displayform}>Add-Offer</button>
      </div>

      {show ? (
        <div className="newUser">
          {/* <h1 className="newUserTitle">New User</h1> */}
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Title</label>
              <input type="text"  />
            </div>
            <div className="newUserItem">
              <label>Description</label>
              <input type="text"  />
            </div>
            <div className="newUserItem">
              <label>PromoCode</label>
              <input type="email"  />
            </div>
            <div className="newUserItem">
              <label>Valid-on</label>
              <input type="password"  />
            </div>
            <div className="newUserItem">
              <label>Image</label>
              <input type="text"  />
            </div>
            <div className="newUserItem">
              <label>Active</label>
              <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className="newUserButton">Create</button>
          </form>
        </div>
      ) : (
        ""
      )}

      
    </div>
  );
}
