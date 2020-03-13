import React from "react";
import {NavLink} from 'react-router-dom';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import '../../scss/HomeHeader.scss';
import Navigation from "./HomeNavigation";

const HomeHeader = () => {
    return (
        <header>
            <div className="menu">
                <div className="menu-log">
                    <NavLink to="/logowanie">Zaloguj</NavLink>
                    <NavLink to="/rejestracja">Załóż konto</NavLink>
                </div>
                <Navigation />
            </div>
            <div className="header-content">
                <h2>Zacznij pomagać!</h2>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <Decoration className="header-decoration"/>
                <div className="header-btn">
                    <button><NavLink to="/logowanie">Oddaj rzeczy</NavLink></button>
                    <button><NavLink to="/logowanie">Zorganizuj zbiórkę</NavLink></button>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;