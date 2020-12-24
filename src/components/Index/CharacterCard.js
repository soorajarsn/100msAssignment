import React from "react";
function Character(props) {
  return (
    <div className="character-card full-width">
      <ul className="character-info">
        <li>
          <h2 className="character-name semi-bold-font small-size-font">{props.name}</h2>
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
export default Character;
