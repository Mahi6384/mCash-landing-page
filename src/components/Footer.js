import React from "react";
import { ReactDOM } from "react";
import quiz from "../assets/quiz.svg";
import game from "../assets/gamepad.svg";
import users from "../assets/users.svg";
import wallet from "../assets/wallet.svg";
export default function Footer() {
  return (
    <div className="footer-item">
      <img className="footer-img" src={wallet} />
      <img className="footer-img" src={quiz} />
      <img className="footer-img" src={game} />
      <img className="footer-img" src={quiz} />
      <img className="footer-img" src={wallet} />
    </div>
  );
}
