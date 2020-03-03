import React from "react";
import {NavLink} from "react-router-dom";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import TshirtIcon from "../../assets/Icon-1.svg";
import BagIcon from "../../assets/Icon-2.svg";
import SearchIcon from "../../assets/Icon-3.svg";
import LoadingIcon from "../../assets/Icon-4.svg";
import "../../scss/HomeInstructions.scss";

const HomeInstructions = () => {
    return (
        <section className="instructions">  
            <h2>Wystarczą 4 proste kroki</h2>
            <Decoration className="instructions-decoration"/>
            <div className="instructions-container">
                <div className="instruction-container__item">
                    <img src={TshirtIcon} alt="tshirt-icon" className="instruction-icon" />
                    <h3>Wybierz rzeczy</h3>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="instruction-container__item">
                    <img src={BagIcon} alt="bag-icon" className="instruction-icon" />
                    <h3>Spakuj je</h3>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="instruction-container__item">
                    <img src={SearchIcon} alt="search-icon" className="instruction-icon" />
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <p>Wybierz zaufane miejsce</p>
                </div>
                <div className="instruction-container__item">
                    <img src={LoadingIcon} alt="loading-icon" className="instruction-icon" />
                    <h3>Zamów kuriera</h3>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <button><NavLink to="/logowanie">Oddaj rzeczy</NavLink></button>
        </section>
    )
}

export default HomeInstructions;