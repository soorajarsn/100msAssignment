import React, { useState, useEffect } from "react";
import "./Index.scss";
import Navbar from "../Navbar/Navbar";
import { getCharacters } from "../../redux";
import { connect } from "react-redux";
function FilterByCategory(props) {
  const [category, setCategory] = useState("Category");
  const handleCatgoryChange = event => {
    //handle change;
    setCategory(event.target.value);
  };
  return (
    <div className="filterby-section center">
      <div className="container flex align-center justify-space-between full-width">
        <h2 className="light-bold-font small-size-font small-margin-left">Filter By</h2>
        <select value={category} onChange={handleCatgoryChange} className="small-margin-right">
          <option value="Category"> Category</option>
          <option value="Breaking+Bad">Breaking Bad</option>
          <option value="Better+Call+Saul">Better Call Saul</option>
        </select>
      </div>
    </div>
  );
}
function Character(props) {
    console.log(props);
  return (
    <div className="character-card full-width">
      <ul className="character-info">
        <li>
          <h2 className="character-name light-bold-font small-size-font">{props.name}</h2>
        </li>
        <li className="occupation-status">
          <table className="full-width small-size-font">
            <tbody>
              <tr>
                <td className="semi-bold-font">Occupation</td>
                <td className="light-font">{props.occupation.join(", ")}</td>
              </tr>
              <tr>
                <td className="semi-bold-font">Status</td>
                <td className="light-font">{props.status}</td>
              </tr>
              <tr>
                <td className="semi-bold-font">Birthday</td>
                <td className="light-font">{props.birthday}</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          <button className="color-white bold-font small-size-font">View</button>
        </li>
      </ul>
      <div className="character-img">
        <img className="full-width" src={props.img} alt="" />
      </div>
    </div>
  );
}
function CategoryFilter_and_Characters(props) {
  return (
    <div className="character-parent-container medium-padding-left medium-padding-right center">
      <div className="container flex full-width justify-space-between">
        <div className="filter-container">
          <FilterByCategory />
        </div>
        <div className="page-content full-width">
          <div className="characters-container full-width">
              {props.characters.map(character => <Character key={character.char_id} {...character} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
function Index(props) {
  useEffect(() => {
    props.getCharacters("characters?limit=10&offset=10");
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <CategoryFilter_and_Characters characters={props.characters} />
    </React.Fragment>
  );
}
const mapStateToProps = state => ({ ...state.characters });
const mapDispatchToProps = dispatch => ({
  getCharacters: endpoint => dispatch(getCharacters(endpoint)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
