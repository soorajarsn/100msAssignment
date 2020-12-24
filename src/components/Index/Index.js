import React, { useEffect } from "react";
import "./Index.scss";
import Navbar from "../Navbar/Navbar";
import { getCharacters } from "../../redux";
import { connect } from "react-redux";
import qs from "qs";
import CategoryFilter_and_Characters from './Category_Filter_and_Characters';
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
