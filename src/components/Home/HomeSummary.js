import React, {useState} from "react";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import Posts from "./Pagination/Posts.js";
import "../../scss/HomeSummary.scss";


const HomeSummary = () => {


    return (
    <section className="summary">
        <h2>Komu pomagamy?</h2>
        <Decoration className="summary-decoration"/>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Posts />
    </section>
    )
}

export default HomeSummary;