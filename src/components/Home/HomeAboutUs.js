import React from "react";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";
import "../../scss/HomeAboutUs.scss";

const HomeAboutUs = () => {
    return (
        <section className="about">
            <div className="about-text">
                <h2>O nas</h2>
                <Decoration  className="about-decoration"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <img src={Signature} alt="signature" />
            </div>
            <div className="about-img"></div>
        </section>
    )
}

export default HomeAboutUs;