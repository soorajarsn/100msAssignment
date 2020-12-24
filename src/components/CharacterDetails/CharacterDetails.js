import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./CharacterDetails.scss";
import { getCharacters } from "../../redux";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
function Accordian(props) {
  const handleClick = event => {
    var panel = event.currentTarget.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0";
      event.currentTarget.querySelector(".drop-down i").classList.remove("fa-angle-up");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      event.currentTarget.querySelector(".drop-down i").classList.add("fa-angle-up");
      panel.style.padding = "1rem";
    }
  };
  return (
    <React.Fragment>
      <button className="accordian" onClick={handleClick}>
        <div className="btn-content">
          <h2 className="medium-size-font">{props.header}</h2>
          <div className="drop-down">
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
      </button>
      <div className="panel">
        <p>{props.value}</p>
      </div>
    </React.Fragment>
  );
}
function Quotes(props) {
  return (
    <ul className="quotes xsmall-size-font">
      <li>Funyuns are awesome.</li>
      <li>Ooooooh, wire.</li>
      <li>A robot?!</li>
      <li>What good is being an outlaw when you have responsibilities.</li>
      <li>You forgot your ice trays! YOU'RE GONNA NEED THE ICE TRAYS!</li>
      <li>Yeah, and thanks, Daddy Warbucks, but that was before my housing situation went completely testicular on me, okay?</li>
      <li>How am I supposed to live here now, huh? My whole house smells like toe cheese and dry cleaning.</li>
      <li>We make poison for people who don’t care. We probably have the most unpicky customers in the world.</li>
      <li>You don’t need a criminal lawyer. You need a criminal lawyer</li>
      <li>Yeah, b****! Magnets!</li>
    </ul>
  );
}
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
function CharacterDetails(props) {
  const { id } = props.match.params;
  useEffect(() => {
    props.getCharacters("characters/" + id);
  }, [id]);
  return (
    <React.Fragment>
      <Navbar {...props} />
      {props.loading ? <Loader /> : <DetailsCard id={id} character={props.characters} />}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({ ...state.characters });
const mapDispatchToProps = dispatch => ({
  getCharacters: endpoint => dispatch(getCharacters(endpoint)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);