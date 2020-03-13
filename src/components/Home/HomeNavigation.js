import React from "react";
import {Link as Scroll} from 'react-scroll';

const Navigation = () => {
    return (
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
    )
}

export default Navigation;