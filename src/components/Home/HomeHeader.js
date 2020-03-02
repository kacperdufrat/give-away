import React from "react";
import {NavLink} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import '../../scss/HomeHeader.scss';

const HomeHeader = () => {
    return (
        <header>
            <div className="menu">
                <div className="menu-log">
                    <NavLink to="/logowanie">Zaloguj</NavLink>
                    <NavLink to="/rejestracja">Załóż konto</NavLink>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Scroll to="/">Start</Scroll>
                        </li>
                        <li>
                            <Scroll to="HomeInstructions" spy={true} smooth={true} duration={500}>O co chodzi?</Scroll>
                        </li>
                        <li>
                            <Scroll to="HomeAboutUs" spy={true} smooth={true} duration={500}>O nas</Scroll>
                        </li>
                        <li>
                            <Scroll to="HomeSummary" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Scroll>
                        </li>
                        <li>
                            <Scroll to="HomeContact" spy={true} smooth={true} duration={500}>Kontakt</Scroll>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-content">
                <h2>Zacznij pomagać!</h2>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <Decoration className="header-decoration"/>
                <div className="header-btn">
                    <button>Oddaj rzeczy</button>
                    <button>Zorganizuj zbiórkę</button>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;