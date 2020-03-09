import React, {useState} from "react";
import Foundations from "./Pagination/Foundations.js";
import Locals from "./Pagination/Locals.js";
import Organizations from "./Pagination/Organizations.js";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import "../../scss/HomeSummary.scss";
import Posts from "./Pagination/Posts.js";

const HomeSummary = () => {
    const [type, setType] = useState("foundation");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    const handleType = (name) => {
        setType(name);
    }

    let content;

    if (type === "organizations") {
        content = (
            <>
            <h1>Organizacja xxx</h1>
            <p>opis organizacji xxx</p>
            <ul>
                {Organizations.map(el => <li>{el.title}, {el.description}, {el.info}</li>)}
            </ul>
            </>
        )
    } else if (type === "locals") {
        content = (
            <>
            <h1>Lokalna zbiórka xxx</h1>
            <p>opis lokalnej zbiórki xxx</p>
            <ul>
                {Locals.map(el => <li>{el.title}, {el.description}, {el.info}</li>)}
            </ul>
            </>
        )
    } else {
        content = (
            <>
            <h1>Fundacja xxx</h1>
            <p>opis fundacji xxx</p>
            <ul>
                {Foundations.map(el => <li>{el.title}, {el.description}, {el.info}</li>)}
            </ul>
            </>
        )
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Foundations.slice(indexOfFirstPost, indexOfLastPost);

    return (
    <section className="summary">
        <h2>Komu pomagamy?</h2>
        <Decoration className="summary-decoration"/>
        <div className="summary-btn">
            <button onClick={() => handleType("foundations")}>Fundacjom</button>
            <button onClick={() => handleType("organizations")}>Organizacjom pozarządowym</button>
            <button onClick={() => handleType("locals")}>Lokalnym zbiórkom</button>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        {content}
    </section>
    )
}

export default HomeSummary;