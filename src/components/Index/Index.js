import React, { useState } from "react";
import "./Index.scss";
import Navbar from "../Navbar/Navbar";
function FilterByCategory(props){
    const [category,setCategory] = useState('Category');
    const handleCatgoryChange = () => {
        //handle change;
    }
    return (
        <div className="filterby-section center">
            <div className="container flex align-center justify-space-between full-width">
                <h2 className="light-bold-font small-size-font small-margin-left">Filter By</h2>
                <select value={category} onChange={setCategory} className="small-margin-right">
                    <option value="Category"> Category</option>
                    <option value="Breaking+Bad">Breaking Bad</option>
                    <option value="Better+Call+Saul">Better Call Saul</option>
                </select>
            </div>
        </div>
    )
}
function Characters(props){
    return (
        <div className="character-parent-container medium-padding-left medium-padding-right center">
            <div className='container flex full-width justify-space-between'>
                <div className="filter-container">
                    <FilterByCategory />
                </div>
                <div className="page-content full-width">
                    <div className="characters-container full-width">
                        <div className="character-card full-width">
                            <ul className="character-info">
                                <li><h2 className="character-name light-bold-font small-size-font">Saul Goodman</h2></li>
                                <li className="occupation-status">
                                   <table className="full-width small-size-font">
                                     <tr>
                                         <td className="semi-bold-font">Occupation</td>
                                         <td className="light-font">Lawyer</td>
                                     </tr>
                                     <tr>
                                         <td className="semi-bold-font">Status</td>
                                         <td className="light-font">Alive</td>
                                     </tr>
                                     <tr>
                                         <td className="semi-bold-font">Birthday</td>
                                         <td className="light-font">Unknown</td>
                                     </tr>
                                   </table>
                                </li>
                                <li>
                                    <button className="color-white bold-font small-size-font">View</button>
                                </li>
                            </ul>
                            <div className="character-img">
                                <img className="full-width" src="https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846" alt="" />
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
function Index(props) {
  return (
    <React.Fragment>
      <Navbar />
      {/* <FilterByCategory /> */}
      <Characters />
    </React.Fragment>
  );
}

export default Index;
