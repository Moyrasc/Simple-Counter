import React from "react";
import PropTypes from "prop-types";

//create your first component
const SecondCounter = ({ days, hours, minutes, seconds}) => {
  return (
    <>
      <div className="Container-fluid">
        <div className="row justify-content-center text-white">
          <div className="col-2 digit shadow p-2 me-1 rounded-3">
            <i className="far fa-clock #offset"></i>
          </div>
          <div className="col-2 digit shadow p-2 me-1 rounded-3">
            {days}
          </div>
          <div className="col-2 digit shadow p-2 me-1 rounded-3">
            {hours}
          </div>
          <div className="col-2 digit shadow p-2 me-1 rounded-3">
            {minutes}
          </div>
          <div className="col-2 digit shadow p-2 rounded-3">
            {seconds}
          </div>
        </div>
      </div>
      
      
    </>
  );
};

SecondCounter.propTypes = {
  seconds: PropTypes.number,
  minutes: PropTypes.number,
  hours: PropTypes.number,
  days: PropTypes.number,
};
export default SecondCounter;
