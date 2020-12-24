import React from "react";
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
export default Accordian;
