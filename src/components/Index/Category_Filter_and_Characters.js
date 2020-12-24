import React from "react";
import FilterByCategory from './FilterByCategory';
import Character from './CharacterCard';
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
    props.history.push("/" + queryString);
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
    props.history.push("/" + queryString);
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
export default CategoryFilter_and_Characters;
