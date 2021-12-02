import React from "react";
import logo from "../assets/img/logo.svg";
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <a className="logo" href="/">
                <img alt="Return to the game's homepage" src={logo} />
            </a>
            <div className="author">Created by David Dobondi.</div>
        </div>
    );
};

export default Header;
