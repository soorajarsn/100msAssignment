import React from "react";
import Quotes from "./Quotes";
import Accordian from './Accordian';
function DetailsCard(props) {
  return (
    <div className="details-container center medium-padding-left medium-padding-right">
      <div className="container full-width">
        {/* if there is a character : show, otherwise prompt user that doesn't find a character with this id */}
        {props.character.length > 0 ? (
          <React.Fragment>
            <div className="quotes-and-img-container">
              <div className="character-info xsmall-padding-left xsmall-padding-right">
                <h1 className="character-name semi-bold-font medium-size-font">{props.character[0].name}</h1>
                <div className="quotes-container">
                  <h2 className="small-size-font color-blue">Quotes</h2>
                  <Quotes name={props.character[0].name} />
                </div>
              </div>
              <div className="character-img">
                <img className="full-width" src={props.character[0].img} alt="" />
              </div>
            </div>
            <div className="other-info accordian-container">
              <Accordian header="Birthday" value={props.character[0].birthday} />
              <Accordian header="Occupation" value={props.character[0].occupation.join(", ")} />
              <Accordian header="Status" value={props.character[0].status} />
              {props.character[0].nickname && <Accordian header="Nickname" value={props.character[0].nickname} />}
              <Accordian header="Portrayed" value={props.character[0].portrayed} />
              <Accordian header="Seasons" value={props.character[0].appearance.join(", ")} />
            </div>
          </React.Fragment>
        ) : (
          <h1>Doesnt' find anything related to this character!!!</h1>
        )}
      </div>
    </div>
  );
}
export default DetailsCard;
