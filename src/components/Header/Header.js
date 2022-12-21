import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div>
            <header className="header">
                <img className="logo" src="https://i.redd.it/jvtg0876fxk21.jpg" alt="logo" />
                <h2 className="header-title">Meme Generator</h2>
                <h4 className="header-desc">Make Your Custom Meme Here.</h4>
            </header>
        </div>
    );
}