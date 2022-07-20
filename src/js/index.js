//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondCounter from "./component/SecondCounter.jsx";

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;


setInterval(function(){
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  if (hours === 24) {
    days++;
    hours = 0;
  }
  //render your react application
  ReactDOM.render(
    <SecondCounter
      seconds={seconds}
      minutes={minutes}
      hours={hours}
      days={days}
    />,
    document.querySelector("#app")
  );
}, 1000);
