import React from "react";
import { ReactDOM } from "react";
export default function Offer(props) {
  return (
    <div
      className="Offer-container"
      style={{
        backgroundImage: `linear-gradient(82deg, #fcfcfc 51%, ${props.color} 100%)`,
      }}
    >
      <div className="col1">
        <h2 className="title">{props.title}</h2>
        <p className="complete">{props.complete}</p>
      </div>
      <div className="col2">
        {props.img ? <img className="offer-img" src={props.img} /> : null}
      </div>
    </div>
  );
}
