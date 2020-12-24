import React, { useEffect, useState } from "react";
import { getCharacters } from "../../redux";
import { connect } from "react-redux";
import axios from "axios";
function SkeletonLoader() {
  return <div className="skeleton-loader"></div>;
}
function Quotes(props) {
  const name = props.name.split(" ").join("+");
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.breakingbadapi.com/api/quote?author=" + name)
      .then(response => {
        setLoading(false);
        setQuotes(response.data);
      })
      .catch(err => {
        setLoading(false);
      });
  }, [name]);
  return (
    <React.Fragment>
      {/* if loading show loader, otherwise comments */}
      {loading ? (
        <SkeletonLoader />
      ) : (
        <React.Fragment>
          {/* If there are quotes for this writer, show them, otherwise prompt user that this user don't have any quotes */}
          {quotes.length > 0 ? (
            <ul className="quotes xsmall-size-font">
              {quotes.map(q => (
                <li key={q.quote_id}>{q.quote}</li>
              ))}
            </ul>
          ) : (
            <h3 className="small-size-font">No Quotes found!!!</h3>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
const mapStateToProps = state => ({ ...state.characters });
const mapDispatchToProps = dispatch => ({
  getCharacters: endpoint => dispatch(getCharacters(endpoint)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
