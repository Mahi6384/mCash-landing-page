import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import Navbar from "./components/DrrawaHeader";
import Reward from "./components/Reward";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import taskImg from "./assets/task.svg";
import Sidebar from "./components/SideBar";
import Box from "@mui/material/Box";
// import buzzImg from "./assets/thunder.svg";

function App() {
  return (
    <div className="container">
      {/* <Sidebar /> */}
      <Navbar />
      <Reward />
      <Offer
        title="Task Offer"
        complete="Complete task to get coins"
        img={taskImg}
        color="#76c7f9"
      />
      <Offer
        title="Buzz Offer"
        complete="Complete buzz offer to get coins"
        img={taskImg}
        color="#81f976"
      />
      <Offer
        title="Limited Offer"
        complete="Complete task to get coins"
        img={taskImg}
        color="#fa8080"
      />
      <div className="flex">
        <Offer className="col" title="Adccend Offer" color="#fceeac" />
        <Offer className="col" title="Adgate Offer" color="#76c7f9" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
