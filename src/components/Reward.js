import React from "react";
import { ReactDOM } from "react";
import gift from "../assets/gift.svg";
export default function Reward() {
  return (
    <div className="rew-container-1">
    <div className="reward-container">
      <div className="col1">
        <h2 style={{color:"white"}}>Daily Reward</h2>
        <p  style={{color:"white",fontSize:"12px", opacity: 0.8}}>Log in daily to claim free coins!</p>
        <button className="reward-btn">Claim Prize</button>
      </div>
      <div className="col2">
        <img className="gift" src={gift} />
      </div>
    </div>
    </div>
  );
}
