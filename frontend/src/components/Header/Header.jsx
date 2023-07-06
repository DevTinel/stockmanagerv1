import React from "react";
import logo from "../../assets/logo.svg";
import Login from "../../pages/Login/Login";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <p>
                Já possui conta?
                <Link to="/login">Faça o login</Link>
                {/* <Link to="/user">Faça o login</Link> */}
            </p>
        </header>
    );
};

export default Header;
