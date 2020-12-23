import React, { useState } from "react";
import "./Navbar.scss";
function Navbar() {
  const [searchFor, setSearchFor] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <nav className="medium-padding-left medium-padding-right center">
      <div className="container flex justify-space-between align-center full-width">
        <div className="logo-and-text flex align-center">
          <div className="logo-container">
            <img
              src="https://cdn.vox-cdn.com/thumbor/k34mm_1kkLwFNVAdzYyCdxORHQc=/0x0:3000x2000/1200x800/filters:focal(1281x491:1761x971)/cdn.vox-cdn.com/uploads/chorus_image/image/65361653/shaker_camino_10.0.jpg"
              alt=""
            />
          </div>
          <div className="text xsmall-margin-left bold-font">
            <span className="small-size-font color-white">Breaking_bad_Chars</span>
          </div>
        </div>
        <div className="search-input full-width">
          <form onSubmit={handleSubmit}>
            <input className="xsmall-size-font" type="text" placeholder="Search for a character" value={searchFor} onChange={event => setSearchFor(event.target.value)} />
            <button className="xsmall-margin-left xsmall-size-font bold-font color-white">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
