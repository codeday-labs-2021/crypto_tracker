import "./App.css";
import Api from "./components/Api";
import SearchBar from "./components/SearchBar";
import React from "react";
import ReactDOM from "react-dom";
import CoinGraph from "./components/CoinGraph";




ReactDOM.render(
  <div>
    <CoinGraph/>
    <Api />
  </div>
  , document.getElementById("root")
);
