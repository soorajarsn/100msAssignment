import React, { useState, useEffect } from "react";
import "./Index.scss";
import Navbar from "../Navbar/Navbar";
import { getCharacters } from "../../redux";
import { connect } from "react-redux";
import qs from "qs";
function FilterByCategory(props) {
  const [category, setCategory] = useState(qs.parse(props.location.search,{ignoreQueryPrefix:true}).category || "Category");
  const handleCatgoryChange = event => {
    setCategory(event.target.value);
    props.history.push('/?category='+event.target.value+'&page=1');
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
  const pageNumber = parseInt(props.page);
  const queryStringParams = props.location.search.split("&");
  const gotoPrevPage = () => {
    let queryString = "";
    for (var i = 0; i < queryStringParams.length; i++) {
      if (queryStringParams[i].includes("page")) {
        if (i == 0) queryString += "?page=" + (pageNumber - 1);
        else queryString += "&page=" + (pageNumber - 1);
      } else {
        queryString += queryStringParams[i];
      }
    }
    props.history.push('/'+queryString);
  };
  const gotoNextPage = () => {
    let queryString = "";
    for (var i = 0; i < queryStringParams.length; i++) {
      if (queryStringParams[i].includes("page")) {
        if (i == 0) queryString += "?page=" + (pageNumber + 1);
        else queryString += "&page=" + (pageNumber + 1);
      } else {
        queryString += queryStringParams[i];
      }
    }
    props.history.push("/"+queryString);
  };
  return (
    <div className="character-parent-container medium-padding-left medium-padding-right center">
      <div className="container flex full-width justify-space-between">
        <div className="filter-container">
          <FilterByCategory {...props} />
        </div>
        <div className="page-content full-width flex flex-column align-center">
          <div className="characters-container full-width">
            {props.characters.map(character => (
              <Character key={character.char_id} {...character} />
            ))}
          </div>
          <div className="pagination flex align-center">
            <button className="prev-page small-margin-right color-white center" onClick={gotoPrevPage} disabled={pageNumber == 1}>
              <i className="fas fa-angle-left" />
            </button>
            <div className="current-page">{props.page}</div>
            <button className="next-page small-margin-left color-white center" onClick={gotoNextPage} disabled={props.characters.length < 10}>
              <i className="fas fa-angle-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const constructQueryString = queryObject => {
  let offset = 0;
  let queryString = "?limit=10";
  for (let key in queryObject) {
    if (key == "page") {
      offset = (parseInt(queryObject.page) - 1) * 10;
      queryString += `&offset=${offset}`;
    } else {
      queryString += `&${key}=${queryObject[key]}`;
    }
  }
  return queryString;
};
function Index(props) {
  const queryObject = qs.parse(props.location.search, { ignoreQueryPrefix: true });
  const page = queryObject.page;
  const name = queryObject.name;
  const category = queryObject.category;
  //scroll to top, get the characters;
  useEffect(() => {
    window.scrollTo(0, 0); //to scroll at the top
    const queryString = constructQueryString(queryObject);
    console.log('getting from endpoint '+queryString);
    props.getCharacters("characters" + queryString);
  }, [page, name, category]); //run this effect whenever any of page, name or category changes

  return (
    <React.Fragment>
      <Navbar {...props} />
      <CategoryFilter_and_Characters {...props} page={page || 1} />
    </React.Fragment>
  );
}
const mapStateToProps = state => ({ ...state.characters });
const mapDispatchToProps = dispatch => ({
  getCharacters: endpoint => dispatch(getCharacters(endpoint)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
