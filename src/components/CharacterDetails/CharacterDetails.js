import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./CharacterDetails.scss";
import { getCharacters } from "../../redux";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
import DetailsCard from './DetailsCard';
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