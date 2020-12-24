import React, {useState} from "react";
import qs from "qs";
function FilterByCategory(props) {
  const [category, setCategory] = useState(qs.parse(props.location.search, { ignoreQueryPrefix: true }).category || "Category");
  const handleCatgoryChange = event => {
    setCategory(event.target.value);
    props.history.push("/?category=" + event.target.value + "&page=1");
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
export default FilterByCategory;
