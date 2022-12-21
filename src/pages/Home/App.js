import React from "react";
import Header from "../../components/Header/Header";
import Meme from "../../components/Meme/Meme";
import "./App.css";

// Home page
export default function App() {
    return (
      <div>
        <Header />
        <Meme />
        <div className="footer">
          <h6>Meme Generator made by Robbie</h6>
        </div>
      </div>
    );
}