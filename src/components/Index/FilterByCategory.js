import React, {useState} from "react";
import qs from "qs";
function FilterByCategory(props) {
    const currCategory = qs.parse(props.location.search, { ignoreQueryPrefix: true }).category;
  const [category, setCategory] = useState((currCategory && currCategory.split(' ').join("+")) || "");
  const handleCatgoryChange = event => {
    setCategory(event.target.value);
    if(event.target.value)
        props.history.push("/?category=" + event.target.value + "&page=1");
    else 
        props.history.push("/?page=1");
  };
  return (
    <div className="filterby-section center">
      <div className="container flex align-center justify-space-between full-width">
        <h2 className="semi-bold-font small-size-font small-margin-left">Filter By</h2>
        <select value={category} onChange={handleCatgoryChange} className="small-margin-right">
          <option value=""> Category</option>
          <option value="Breaking+Bad">Breaking Bad</option>
          <option value="Better+Call+Saul">Better Call Saul</option>
        </select>
      </div>
    </div>
  );
}
export default FilterByCategory;
