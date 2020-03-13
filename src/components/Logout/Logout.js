import React from "react";
import "../../scss/Logout.scss";
import {NavLink} from 'react-router-dom';
import Navigation from "../Home/HomeNavigation";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";

const Logout = () => {

    return (
        <section className="login">
            <div className="menu">
                <div className="menu-log">
                    <NavLink to="/logowanie">Zaloguj</NavLink>
                    <NavLink to="/rejestracja">Załóż konto</NavLink>
                </div>
                <Navigation />
            </div>
            <div className="login-panel">
                <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                <Decoration className="login-decoration"/>
                <div className="login-buttons">
                    <button><NavLink to="/">Strona główna</NavLink></button>
                </div>
            </div>
        </section>
    )
}

export default Logout;